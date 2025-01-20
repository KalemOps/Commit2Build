FROM jenkins/jenkins:lts

EXPOSE 8080 50000
VOLUME /var/jenkins_home
VOLUME /usr/share/jenkins/ref/plugins

CMD ["java", "-jar", "/usr/share/jenkins/jenkins.war"]
