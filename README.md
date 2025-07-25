# Static Website with Jenkins CI/CD

![Build Status](YOUR_JENKINS_URL/job/YOUR_PROJECT_NAME/badge/icon)

## Overview

This project is a template for setting up a continuous integration and continuous deployment (CI/CD) pipeline using Jenkins. It automatically deploys a simple static HTML website to a remote server whenever changes are pushed to the repository's `main` branch.

## Prerequisites

Before you begin, ensure you have the following:

* A running **Jenkins** instance.
* **Git** installed on your local machine and on the Jenkins server.
* **SSH access** to a remote web server where the website will be deployed.
* SSH credentials (e.g., private key) configured in Jenkins.

## Getting Started

To use this project for your own website, follow these steps.

### 1. Fork & Clone the Repository

First, fork this repository to your own GitHub account and then clone it to your local machine:

```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git)
cd YOUR_REPOSITORY