pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJS'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/KalemOps/Commit2Build.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Start App') {
            steps {
                script {
                    echo 'Starting the PokeApi app...'
                    sh 'nohup node server.js &'
                    sleep 10
                }
            }
        }

        stage('Test API Endpoint') {
            steps {
                script {
                    echo 'Testing /api/pokemon endpoint...'
                    def response = sh(script: 'curl -s -w "%{http_code}" -o response.json http://localhost:3000/api/pokemon', returnStdout: true).trim()

                  
                    def httpCode = response[-3..-1] 
                    if (httpCode == "200") {
                        echo 'Test passed: Received a 200 OK response.'
                    } else {
                        currentBuild.result = 'FAILURE'
                        error "Test failed: Received HTTP ${httpCode} response."
                    }
                }
            }
        }

        stage('Cleanup') {
            steps {
                echo 'Cleaning up...'
                sh 'pkill -f "node server.js" || true'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
        always {
            echo 'Cleaning up after run...'
        }
    }
}
