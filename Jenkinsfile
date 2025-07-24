pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                // For a static site, you might archive the files.
                // For other apps, this is where you'd run 'mvn install', 'npm install', etc.
            }
        }
        stage('Test') {
            steps {
                echo 'Testing the application...'
                // This is where you would run unit tests, linting, etc.
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // This stage would contain steps to deploy your code to a server.
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}