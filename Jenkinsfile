pipeline {
  agent any

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')  // Set in Jenkins Credentials
  }

  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/Sakshi2509patil/ecommerce-app.git'  // 🔁 Use your repo URL
      }
    }

    stage('Build Docker Images') {
      steps {
        sh 'docker build -t sakshi2/react-client -f Dockerfiles/Dockerfile.client .'
        sh 'docker build -t sakshi2/node-server -f Dockerfiles/Dockerfile.server .'
      }
    }

    stage('Push to DockerHub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
          sh 'echo $PASS | docker login -u $USER --password-stdin'
          sh 'docker push sakshi2/react-client'
          sh 'docker push sakshi2/node-server'
        }
      }
    }

    stage('Deploy via Helm') {
      steps {
        sh 'helm upgrade --install ecommerce-app ./helm-chart'
      }
    }
  }
}
