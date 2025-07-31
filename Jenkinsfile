pipeline {
    agent any
    
    environment {
        // Define environment variables
        PROJECT_NAME = 'dileep-devops-website'
        BUILD_NUMBER = "${env.BUILD_NUMBER}"
        GIT_COMMIT_SHORT = "${env.GIT_COMMIT?.take(7)}"
    }
    
    parameters {
        choice(
            name: 'DEPLOY_ENVIRONMENT',
            choices: ['staging', 'production'],
            description: 'Select deployment environment'
        )
        booleanParam(
            name: 'SKIP_TESTS',
            defaultValue: false,
            description: 'Skip test execution'
        )
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
                script {
                    env.GIT_COMMIT_SHORT = sh(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()
                }
                echo "Checked out commit: ${env.GIT_COMMIT_SHORT}"
            }
        }
        
        stage('Validate') {
            steps {
                echo 'Validating project structure...'
                script {
                    // Check if required files exist
                    def requiredFiles = ['index.html', 'about.html', 'style.css']
                    requiredFiles.each { file ->
                        if (!fileExists(file)) {
                            error("Required file ${file} not found!")
                        }
                        echo "✓ Found ${file}"
                    }
                }
                echo 'Project structure validation completed successfully.'
            }
        }

        stage('Build') {
            steps {
                echo 'Starting build process...'
                
                // Create build directory
                sh 'mkdir -p build'
                
                // Copy static files to build directory
                sh '''
                    cp index.html build/
                    cp about.html build/
                    cp style.css build/
                '''
                
                // Generate build info
                sh '''
                    echo "Build Information:" > build/build-info.txt
                    echo "Build Number: ${BUILD_NUMBER}" >> build/build-info.txt
                    echo "Git Commit: ${GIT_COMMIT_SHORT}" >> build/build-info.txt
                    echo "Build Date: $(date)" >> build/build-info.txt
                    echo "Environment: ${DEPLOY_ENVIRONMENT}" >> build/build-info.txt
                '''
                
                // Create deployment package
                sh 'cd build && zip -r ../website-${BUILD_NUMBER}.zip .'
                
                echo 'Build stage completed successfully.'
            }
        }

        stage('Test') {
            when {
                not { params.SKIP_TESTS }
            }
            parallel {
                stage('HTML Validation') {
                    steps {
                        echo 'Running HTML validation tests...'
                        script {
                            // Basic HTML validation
                            def htmlFiles = ['build/index.html', 'build/about.html']
                            htmlFiles.each { file ->
                                if (fileExists(file)) {
                                    // Check for basic HTML structure
                                    def content = readFile(file)
                                    if (!content.contains('<!DOCTYPE html>')) {
                                        error("${file} missing DOCTYPE declaration")
                                    }
                                    if (!content.contains('<title>')) {
                                        error("${file} missing title tag")
                                    }
                                    echo "✓ ${file} passed basic validation"
                                } else {
                                    error("${file} not found in build directory")
                                }
                            }
                        }
                        echo 'HTML validation completed successfully.'
                    }
                }
                
                stage('CSS Validation') {
                    steps {
                        echo 'Running CSS validation tests...'
                        script {
                            if (fileExists('build/style.css')) {
                                def cssContent = readFile('build/style.css')
                                if (cssContent.trim().isEmpty()) {
                                    error("CSS file is empty")
                                }
                                echo "✓ CSS file exists and has content"
                            } else {
                                error("CSS file not found in build directory")
                            }
                        }
                        echo 'CSS validation completed successfully.'
                    }
                }
                
                stage('Link Validation') {
                    steps {
                        echo 'Running link validation tests...'
                        script {
                            // Check if navigation links are consistent
                            def indexContent = readFile('build/index.html')
                            def aboutContent = readFile('build/about.html')
                            
                            // Check if both files reference style.css
                            if (!indexContent.contains('style.css')) {
                                error("index.html missing CSS reference")
                            }
                            if (!aboutContent.contains('style.css')) {
                                error("about.html missing CSS reference")
                            }
                            
                            echo "✓ All files properly reference CSS"
                        }
                        echo 'Link validation completed successfully.'
                    }
                }
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Running basic security checks...'
                script {
                    // Basic security checks for static content
                    def htmlFiles = ['build/index.html', 'build/about.html']
                    htmlFiles.each { file ->
                        def content = readFile(file)
                        
                        // Check for potential XSS vulnerabilities
                        if (content.contains('<script>')) {
                            echo "⚠️  Warning: Script tags found in ${file}"
                        }
                        
                        // Check for external resource loading
                        if (content.contains('http://')) {
                            echo "⚠️  Warning: Non-HTTPS resources in ${file}"
                        }
                    }
                }
                echo 'Security scan completed.'
            }
        }

        stage('Package') {
            steps {
                echo 'Creating deployment package...'
                
                // Create final package with metadata
                sh '''
                    mkdir -p package
                    cp -r build/* package/
                    
                    # Create deployment manifest
                    cat > package/manifest.json << EOF
{
    "project": "${PROJECT_NAME}",
    "version": "${BUILD_NUMBER}",
    "commit": "${GIT_COMMIT_SHORT}",
    "environment": "${DEPLOY_ENVIRONMENT}",
    "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
    "files": [
        "index.html",
        "about.html",
        "style.css"
    ]
}
EOF
                '''
                
                // Archive artifacts
                archiveArtifacts artifacts: 'website-*.zip,package/**/*', 
                                fingerprint: true,
                                allowEmptyArchive: false
                
                echo 'Package stage completed successfully.'
            }
        }

        stage('Deploy to Staging') {
            when {
                anyOf {
                    branch 'main'
                    branch 'develop'
                }
            }
            steps {
                echo "Deploying to ${params.DEPLOY_ENVIRONMENT} environment..."
                
                script {
                    if (params.DEPLOY_ENVIRONMENT == 'staging') {
                        // Staging deployment simulation
                        sh '''
                            echo "Deploying to staging server..."
                            mkdir -p /tmp/staging-deploy
                            cp -r package/* /tmp/staging-deploy/
                            echo "Staging URL: http://staging.example.com"
                        '''
                    } else if (params.DEPLOY_ENVIRONMENT == 'production') {
                        // Production deployment simulation
                        echo 'Production deployment requires manual approval...'
                        input message: 'Deploy to production?', 
                              ok: 'Deploy',
                              parameters: [
                                  string(name: 'DEPLOYER', 
                                        defaultValue: env.BUILD_USER ?: 'jenkins', 
                                        description: 'Who is deploying?')
                              ]
                        
                        sh '''
                            echo "Deploying to production server..."
                            mkdir -p /tmp/production-deploy
                            cp -r package/* /tmp/production-deploy/
                            echo "Production URL: http://production.example.com"
                        '''
                    }
                }
                
                echo 'Deployment completed successfully.'
            }
        }

        stage('Health Check') {
            when {
                anyOf {
                    branch 'main'
                    branch 'develop'
                }
            }
            steps {
                echo 'Running post-deployment health checks...'
                
                script {
                    // Simulate health check
                    sh '''
                        echo "Checking deployment health..."
                        
                        # Check if files exist in deployment directory
                        DEPLOY_DIR="/tmp/${DEPLOY_ENVIRONMENT}-deploy"
                        
                        if [ -f "$DEPLOY_DIR/index.html" ]; then
                            echo "✓ index.html deployed successfully"
                        else
                            echo "✗ index.html not found"
                            exit 1
                        fi
                        
                        if [ -f "$DEPLOY_DIR/about.html" ]; then
                            echo "✓ about.html deployed successfully"
                        else
                            echo "✗ about.html not found"
                            exit 1
                        fi
                        
                        if [ -f "$DEPLOY_DIR/style.css" ]; then
                            echo "✓ style.css deployed successfully"
                        else
                            echo "✗ style.css not found"
                            exit 1
                        fi
                        
                        echo "All health checks passed!"
                    '''
                }
                
                echo 'Health check completed successfully.'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
            
            // Clean up build artifacts
            sh '''
                echo "Cleaning up temporary files..."
                rm -rf build/
                rm -f website-*.zip
            '''
            
            // Publish test results if any test files exist
            script {
                if (fileExists('test-results.xml')) {
                    publishTestResults testResultsPattern: 'test-results.xml'
                }
            }
        }
        
        success {
            echo '🎉 Pipeline completed successfully!'
            echo "✓ Build Number: ${env.BUILD_NUMBER}"
            echo "✓ Git Commit: ${env.GIT_COMMIT_SHORT}"
            echo "✓ Environment: ${params.DEPLOY_ENVIRONMENT}"
            
            // Send success notification (if configured)
            script {
                if (env.SLACK_WEBHOOK) {
                    slackSend(
                        color: 'good',
                        message: "✅ Deployment successful for ${env.JOB_NAME} #${env.BUILD_NUMBER}"
                    )
                }
            }
        }
        
        failure {
            echo '❌ Pipeline failed!'
            echo "Build Number: ${env.BUILD_NUMBER}"
            echo "Git Commit: ${env.GIT_COMMIT_SHORT}"
            
            // Send failure notification (if configured)
            script {
                if (env.SLACK_WEBHOOK) {
                    slackSend(
                        color: 'danger',
                        message: "❌ Deployment failed for ${env.JOB_NAME} #${env.BUILD_NUMBER}"
                    )
                }
            }
        }
        
        unstable {
            echo '⚠️ Pipeline completed with warnings.'
        }
        
        aborted {
            echo '🛑 Pipeline was aborted.'
        }
    }
}