pipeline {
  agent any

  environment {
    DOCKER_IMAGE_CLIENT = "client"
    DOCKER_IMAGE_SERVER = "server"
  }

  stages {
    stage('Build & Push') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub-creds',
          usernameVariable: 'DOCKER_USER',
          passwordVariable: 'DOCKER_PASS'
        )]) {
          sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
          sh 'docker build -t $DOCKER_USER/$DOCKER_IMAGE_CLIENT -f Dockerfiles/Dockerfile.client .'
          sh 'docker push $DOCKER_USER/$DOCKER_IMAGE_CLIENT'
          sh 'docker build -t $DOCKER_USER/$DOCKER_IMAGE_SERVER -f Dockerfiles/Dockerfile.server .'
          sh 'docker push $DOCKER_USER/$DOCKER_IMAGE_SERVER'
        }
      }
    }
  }
}
