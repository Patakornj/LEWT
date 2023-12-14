# DevOps Self Project-1: CI/CD with Terraform and Kubernetes on GCP

## Objective
The objective of this project is to establish a Continuous Integration (CI) and Continuous Deployment (CD) pipeline using Terraform, Kubernetes, and GitHub Actions on Google Cloud Platform (GCP). The pipeline will automate the process of building, testing, and deploying a Node.js/Express application.

## Prerequisites
1. Node.js: Ensure Node.js is installed on your machine.
2. Docker: Install Docker for containerization.
3. Kubernetes: Set up Kubernetes locally or connect to a cluster.
4. Terraform: Install Terraform for infrastructure as code.
5. GCP: Create a GCP account and set up the necessary credentials.
6. GitHub Actions: Configure GitHub Actions for CI/CD workflows.

## Steps
### 1. Create a Simple Node.js/Express Application
Create a basic Node.js/Express application. You can use a simple "Hello World" example or a more complex application based on your requirements.
### 2. Write Dockerfile for the Application
Create a Dockerfile to containerize the Node.js application. This file should include all the necessary dependencies and configuration for running the application in a Docker container.
### 3. Write Terraform Scripts for GKE Cluster
- `providers.tf` In this project will use Google and Kubernetes
- `main.tf` for creating GKE Cluster
- `k8s.tf` Use for deployment on Kubernetes
### 4. Add Secrets to GitHub Repo and Write GH Actions Workflow
Add sensitive information, such as API keys or GCP credentials, as secrets in the GitHub repository. Write a GitHub Actions workflow that triggers on changes to the repository, builds the Docker image, and deploys the application to the GKE cluster.
