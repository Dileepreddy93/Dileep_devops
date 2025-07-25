pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build stage successful.'
                echo 'This confirms the pipeline has started correctly.'
            }
        }
        stage('Test') {
            steps {
                echo 'Test stage successful.'
                echo 'This confirms the pipeline can transition between stages.'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy stage successful.'
                echo 'This confirms the entire pipeline can complete its full cycle without error.'
            }
        }
    }
    post {
        always {
            echo 'Pipeline has finished.'
        }
        success {
            echo 'Final status: SUCCESS.'
        }
        failure {
            echo 'Final status: FAILURE.'
        }
    }
}