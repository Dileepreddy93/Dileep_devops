cat <<'EOF' > Jenkinsfile
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building artifact...'
                // Clean up any old zip file to prevent including it in the new one
                sh 'rm -f website.zip'
                // Zip the contents of the html directory
                sh 'zip -r website.zip html/'
                // Archive the zip file for later stages
                archiveArtifacts artifacts: 'website.zip'
            }
        }
        stage('Test') {
            steps {
                echo 'Running basic tests...'
                // A simple test: check if the main index.html file exists in the workspace
                sh 'ls -l html/index.html'
                echo 'Basic validation passed.'
            }
        }
        stage('Deploy to Web Server') {
            steps {
                echo 'Deploying artifact...'
                // Get the artifact from the 'Build' stage
                unstage name: 'website-artifact'
                // Unzip the artifact to a temporary directory, overwriting if it exists
                sh 'unzip -o website.zip -d /tmp/website_deploy'
                // Deploy the files to the web server's document root
                // IMPORTANT: Replace 'user@your_web_server_ip' with your actual credentials
                sh 'echo "Simulating deployment. In a real scenario, this would be:"'
                sh 'echo "scp -r /tmp/website_deploy/* user@your_web_server_ip:/var/www/html/"'
                echo 'Deployment complete.'
            }
        }
    }
}
EOF
