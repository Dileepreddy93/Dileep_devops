# Simple DevOps Project: Static Website with Jenkins CI/CD

This repository contains a simple static website built with HTML and CSS. The primary goal of this project is to demonstrate a complete Continuous Integration (CI) pipeline using Jenkins.

## 📜 About The Project

This is a learning project designed to showcase the fundamentals of DevOps practices. It includes:
- A basic two-page static website (Home and About).
- A `Jenkinsfile` that defines the CI pipeline.
- Version control managed with Git and hosted on GitHub.

The pipeline is automatically triggered when new code is pushed to the main branch.

## 🛠️ Technology Stack

* **Frontend:**
    * HTML5
    * CSS3
* **CI/CD:**
    * Jenkins
* **Version Control:**
    * Git & GitHub

## 🚀 CI/CD Pipeline

The `Jenkinsfile` in this repository defines the pipeline stages. It is configured to run on a Jenkins server whenever changes are pushed to this repository.

### Pipeline Stages

1.  **Checkout**: Clones the source code from the GitHub repository.
2.  **Build**: (Placeholder) In a more complex project, this stage would involve compiling code, installing dependencies, or building a container image.
3.  **Test**: (Future Goal) This stage will be added later to run automated tests against the website.
4.  **Deploy**: (Future Goal) This stage will eventually deploy the website automatically to a web server like Nginx.

## 💻 How to View Locally

To view the website on your local machine, simply clone this repository and open the `index.html` file in your favorite web browser.

```bash
# Clone the repository
git clone <your-repository-url>

# Navigate into the directory
cd dileep_devops

# Open index.html in a browser