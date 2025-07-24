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
