# Static Website with Jenkins CI/CD

_Last Updated: July 2025_

![Build Status](http://YOUR_JENKINS_URL/job/YOUR_PROJECT_NAME/badge/icon)

A starter template for a simple static HTML website featuring a pre-configured, declarative Jenkins pipeline for automated continuous integration and deployment (CI/CD).

## Overview

This project serves as a practical example of how to automate the lifecycle of a simple web application using Jenkins. The `Jenkinsfile` included in the repository defines a multi-stage pipeline that builds, tests, and deploys the website.

## Project Structure
## Features

* **Simple Homepage**: A clean `index.html` to serve as the main entry point.
* **About Page**: An additional `about.html` page.
* **Automated CI/CD**: A `Jenkinsfile` that defines a robust pipeline.
    * Builds the website into a distributable `.zip` artifact.
    * Runs a basic validation test.
    * Deploys the site to a web server.
    * Cleans the workspace after each run.

## Prerequisites

Before you begin, ensure you have the following set up:

* A running **Jenkins instance**.
* **Jenkins Plugins**:
    * `Pipeline` (usually installed by default)
    * `Workspace Cleanup Plugin`
    * `SSH Agent Plugin` (if deploying to a remote server via SSH)
* **Tools on Jenkins Agent**:
    * `git`
    * `zip` / `unzip`

## Getting Started (Local Development)
To view the website on your local machine, no special tools are required.

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    ```
2.  **Navigate to the directory:**
    ```sh
    cd <repository-name>
    ```
3.  **Open the files:** Open `index.html` or `about.html` in any modern web browser.

## The CI/CD Pipeline (`Jenkinsfile`)

The pipeline automates the entire process from code commit to deployment.

### Pipeline Stages
1.  **`Build`**
    * **What it does**: Takes all the `.html` and `.md` files and packages them into a `website.zip` file.
    * **Why**: This creates a single, deployable artifact, which is a best practice. The artifact is then `stashed` to be used in later stages and `archived` to the Jenkins build record for traceability.

2.  **`Test`**
    * **What it does**: Performs a simple sanity check to verify that the `index.html` file exists in the workspace.
    * **Why**: This acts as a basic quality gate. For a real-world project, this stage could be expanded to include HTML validation, link checking, or accessibility audits.

3.  **`Deploy to Web Server`**
    * **What it does**: Retrieves the `website.zip` artifact, unzips it, and places the contents in a target directory on a web server.
    * **Why**: This automates the release process, eliminating manual deployment errors. The file provides two common options: a simple copy to a local directory or a more robust deployment to a remote server using SSH.

### Setting Up the Pipeline in Jenkins

1.  From your Jenkins dashboard, select **New Item**.
2.  Enter a name for your project (e.g., `my-static-website`) and choose **Pipeline**. Click **OK**.
3.  In the configuration page, scroll down to the **Pipeline** section.
4.  Select **"Pipeline script from SCM"** from the `Definition` dropdown.
5.  Choose **Git** as the `SCM`.
6.  Enter your repository URL in the `Repository URL` field.
7.  Verify that the `Script Path` is `Jenkinsfile`.
8.  Click **Save**.

Now, you can manually trigger a build by clicking **Build Now**, or configure a webhook in your Git provider to trigger builds automatically on every push.

## Customization

To adapt this project for your own use:

1.  **Update Badge URL**: In this `README.md` file, replace `YOUR_JENKINS_URL` and `YOUR_PROJECT_NAME` in the badge link at the top.
2.  **Edit Content**: Modify the content of `index.html` and `about.html`.
3.  **Configure Deployment**: In the `Jenkinsfile`, update the `Deploy` stage with your actual server path or SSH credentials.

## Contributing
