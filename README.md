# 📦 Project Name
build-push-to-dockerhub-ci

# 🌐 Docker Hub
Image: pepuhove/app

# Pull command:

bash
Copy
Edit
docker pull pepuhove/app:latest
Run container:

bash
Copy
Edit
docker run -p 3000:3000 pepuhove/app:latest
# 🛠️ Technologies Used
Node.js

Docker & Docker Hub

GitHub Actions

SonarQube

Trivy (image vulnerability scanner)

Gitleaks (secret scanning)

QEMU & Buildx (for cross-platform builds)

# 🔄 CI/CD Workflow
Triggered on push to main, the pipeline includes:

Install & Test

Installs Node.js dependencies

Runs unit tests (npm test)

Static Code Analysis

SonarQube scans the code for bugs, vulnerabilities, and code smells

Security Scanning & Docker Build

Trivy scans the Docker image for OS/app vulnerabilities

Gitleaks scans for hardcoded secrets in codebase

Builds the Docker image

Pushes to Docker Hub

# 📁 Project Structure
pgsql
Copy
Edit
build-push-to-dockerhub-ci/
├── .github/
│   └── workflows/
│       └── main.yml
├── app.js
├── package.json
├── Dockerfile
├── trivy-image-report.json
└── gitleaks-report.json
🛡️ Security Scanning Outputs
Trivy Report → trivy-image-report.json

Gitleaks Report → gitleaks-report.json

These are stored as artifacts and can be downloaded from the GitHub Actions workflow summary.

# 👨‍💻 Author
Pepsh Hove
🔗 GitHub: @Pepuhove
🐳 Docker Hub: @pepuhove

