pipeline {
  agent any
  stages {
    stage('Checkout Project') {
      steps {
        git url: 'https://github.com/onkibot/onkibot-frontend.git'
      }
    }

    stage('Check Envoirment') {
      steps {
        sh 'node --version'
        sh 'npm --version'
      }
    }

    stage('Install yarn') {
      steps {
        sh 'npm install yarn'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'yarn install'
      }
    }

    stage('Build') {
      steps {
        sh 'NODE_ENV=production ./node_modules/.bin/webpack'
      }
    }
  }
}

