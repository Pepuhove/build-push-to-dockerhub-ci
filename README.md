# Build & Push to Docker Hub CI/CD
This project demonstrates a complete CI/CD pipeline using GitHub Actions to automate testing, code analysis, building, and deploying a Node.js app to Docker Hub.

# 🚀 Project Overview
This is a simple Hello World Node.js application powered by Express. It includes a GitHub Actions workflow that:

Installs dependencies

Runs automated tests

Runs SonarQube static code analysis

Builds a Docker image

Pushes the Docker image to Docker Hub

# 🔧 Technologies Used
Node.js

Express

Docker

GitHub Actions

SonarQube

# 🛠️ CI/CD Pipeline
The pipeline is triggered on every push to the main branch and follows these steps:

Checkout the code

Set up Node.js

Install dependencies

Run tests (if available)

Run SonarQube analysis

Build Docker image

Push Docker image to Docker Hub

🐳 Docker Image
DockerHub Repository: pepuhove/app

# To pull the image:

bash
Copy
Edit
docker pull pepuhove/app:latest
# To run the container:

bash
Copy
Edit
docker run -p 3000:3000 pepuhove/app:latest
🔁 GitHub Actions Workflow File
The workflow file is located at: .github/workflows/main.yml

# 📂 Project Structure
css
Copy
Edit
build-push-to-dockerhub-ci/
├── app.js
├── package.json
├── Dockerfile
└── .github/
    └── workflows/
        └── main.yml
# 👨‍💻 Author
Pepsh Hove

GitHub: @Pepuhove

Docker Hub: @pepuhove
