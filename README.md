# Commit2Build
This repository demonstrates Jenkins automated builds triggered by every commit. It showcases how continuous integration (CI) works by running builds and tests automatically with Jenkins, providing an example of integrating version control with CI/CD pipelines.

Run docker image
```
docker run --rm --name jenkins -p 8080:8080 -p 50000:50000 jenkins-custom:latest
```

I used ngrok because my project needs to receive webhooks and ngrok exposes my local jenkins service to the internet for testing.
```
ngrok http http://localhost:8080
```
//trigger build
