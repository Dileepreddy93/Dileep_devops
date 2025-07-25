pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building artifact...'
                // Clean up any old zip files
                sh 'rm -f website.zip'
                // Zip the HTML files into an artifact
                sh 'zip website.zip *.html *.md'
                // Stash the artifact to use it in later stages
                stash name: 'website-artifact', includes: 'website.zip'
                // Archive the artifact to save it with the build record in Jenkins
                archiveArtifacts artifacts: 'website.rar'
            }
        }
        stage('Test') {
            steps {
                echo 'Running basic tests...'
                // A simple test: check if the main index.html file is present in the workspace
                sh 'ls -l index.html'
                echo 'Basic validation passed.'
            }
        }
        stage('Deploy to Web Server') {
            steps {
                // Get the artifact from the 'Build' stage
                unstash 'website-artifact'
                
                // --- IMPORTANT: CHOOSE ONE DEPLOYMENT OPTION ---

                // Option 1: Deploy to a local directory on the Jenkins server
                // The Jenkins user will need write permissions to this directory.
                // Replace '/var/www/html/my-static-site' with your actual path.
                echo 'Deploying to local web server directory...'
                sh 'unzip -o website.zip -d /var/www