pipeline {
  agent any
  stages {
    stage('Develepment') {
      when{
         branch 'develop'
      }
      steps {
        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
          sh 'sh ./build_and_start.sh DEVELOP latest'
         }
      }
    }
    stage('Push Image to Dockerhub') {
      when{
         branch 'master'
      }
      steps {
        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
           sh 'sh ./build_and_start.sh PROD 1.0.0'
         }
      }
    }
    stage('Cleanup') {
      steps {
        cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true, cleanWhenUnstable: true, cleanupMatrixParent: true, deleteDirs: true)
      }
    }
  }
}
