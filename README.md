CI/CD Pipeline Project

This project demonstrates a fully functional Continuous Integration and Continuous Deployment (CI/CD) pipeline built using GitHub Actions, Docker, and Kubernetes (optional). It showcases the process of automating code linting, building and pushing Docker images, and deploying to a Kubernetes cluster.

Purpose

This project is designed to:

Demonstrate proficiency in building CI/CD pipelines using GitHub Actions.

Showcase familiarity with Docker for containerization and image management.

Provide a foundation for deploying applications to Kubernetes (with future cloud-hosted cluster integration).

Highlight best practices in automation, secrets management, and deployment workflows.

Pipeline Overview

The CI/CD pipeline is triggered on every push to the main branch. It consists of the following stages:

1. Linting

Ensures code quality and consistency using ESLint.

Automatically fails if linting errors are found.

2. Build and Push Docker Image

Builds a Docker image from the Dockerfile.

Tags the image as bwhaley7/node-app:latest.

Pushes the Docker image to the Docker Hub repository.

3. Deploy to Kubernetes (Optional)

Deploys the application to a Kubernetes cluster using kubectl and the deployment.yaml file.

Currently designed for a future cloud-hosted Kubernetes cluster.

Technologies Used

GitHub Actions: For automating the CI/CD pipeline.

Docker: For containerizing the application.

Node.js: A simple Node.js application serves as the base project.

Kubernetes (optional): For deploying containerized applications.

ESLint: For code linting and quality assurance.
