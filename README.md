# WARNING: This repository is no longer maintained :warning:

> This repository will not be updated. The repository will be kept available in read-only mode.

<p align="center">
    <a href="https://cloud.ibm.com">
        <img src="https://cloud.ibm.com/media/docs/developer-appservice/resources/ibm-cloud.svg" height="100" alt="IBM Cloud">
    </a>
</p>


<p align="center">
    <a href="https://cloud.ibm.com">
    <img src="https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg" alt="IBM Cloud">
    </a>
    <img src="https://img.shields.io/badge/platform-node-lightgrey.svg?style=flat" alt="platform">
    <img src="https://img.shields.io/badge/license-Apache2-blue.svg?style=flat" alt="Apache 2">
</p>


# Node.js Express starter application

This starter application is a simple microservice that incorporates the [Express web framework](https://expressjs.com/) to provide a landing page and two endpoints. Use this repository as a template for your own application.

A microservice is an individual component of an application that follows the **microservice architecture** - an architectural style that structures an application as a collection of loosely coupled services, each of which implements business capability. The microservice exposes a RESTful API matching a [Swagger](http://swagger.io) definition.

You can access the cloud native microservice capabilities at the following endpoints:
- The [Swagger UI](http://swagger.io/swagger-ui/) is running on: `/swagger/api-docs`
- Health endpoint: `/health`

The microservice is ready to run locally in a Docker container or with the Node.js runtime that is hosted on your local operating system. Use the [IBM Cloud CLI Developer Tools commands](https://cloud.ibm.com/docs/cli?topic=cli-idt-cli) (`ibmcloud dev`) for local development.

### Deploying to IBM Cloud

[IBM Cloud DevOps](https://www.ibm.com/cloud/devops) services provides toolchains as a set of tool integrations that support development, deployment, and operations tasks inside IBM Cloud.

> **Note:** This application does not connect to external services. If you want to connect the app to external services, try the [IBM Cloud Node.js + Cloudant starter application](https://github.com/IBM/nodejs-cloudant).

## License

Copyright 2020 IBM

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. 

You may obtain a copy of the license at http://www.apache.org/licenses/LICENSE-2.0. 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permission and limitations under the License. 

## What's included

- Node.js application that functions as a microservice (server.js)
- Rudimentary landing page and two endpoints (/health and /swagger/api-docs)
- Extensible Node server code structure with directories for config, routes, and controllers
- Simple functional and unit tests
- Experience test script to verify your UI when the app is running
- Dockerfiles for container deployment

If you use the IBM Cloud developer workflow, you also get:
- Continuous delivery toolchain on IBM Cloud that includes a build and deploy pipeline
- IBM Container Registry to hold your container images
- GitLab source code repo with webhook to your pipeline
- Deployment assets automatically injected into your repo as required by your target environment


## Before you begin

### Installing prereqs
- [Set up an IBM Cloud account](https://cloud.ibm.com/registration).

- Install [IBM Cloud Developer Tools](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started) on your machine.

- Prepare to run this application locally by [installing npm](https://www.npmjs.com/get-npm) and/or [installing Docker](https://docs.docker.com/get-docker/).

- If you plan to run this starter application in a container on the cloud, it's best to set up a Kubernetes cluster in advance. If you don't already have one, [set one up here](https://cloud.ibm.com/kubernetes/catalog/about).

### Choosing a deployment target

Before you begin, you should decide on the type of deployment environment you want to target for your app. The IBM Cloud platform offers many types of environments, but the most common for cloud native apps are the IBM Kubernetes Service (IKS) or Red Hat OpenShift clusters.

We recommend that you create an IKS cluster ahead of time and deploy your application there. Creating an IKS cluster can take 15-30 minutes, but it's worth the wait. IKS runs your app inside orchestrated containers, and this option represents best-practice architecture for cloud native applications. To create an IKS cluster, you need a billable account. (That is, you either you need a credit card that is associated with your account for identity verification, or you need an IBM Cloud subscription). However, IKS offers a free cluster for 30 days, so you have plenty of time to try your app first.

Red Hat OpenShift, like IKS, is based on Kubernetes and represents best-practice architecture. OpenShift is especially good for hybrid environments as it can be run on IBM Cloud, in your own data center, or on the edge. OpenShift also requires a billable account but currently does not offer a free tier.

## Configuring your starter application

This application comes ready to run and requires no explicit configuration.

## Setting up and initializing your cloud development environment

Set up and initialize your development environment either from the IBM Cloud console or by using the IBM Cloud CLI. Both tools facilitate cloud native development and continuous delivery by creating a repo for you on IBM-hosted GitLab, copying the starter application code there, and then linking the repo to an automation toolchain that is powered by the [IBM Cloud Continuous Delivery Service](https://cloud.ibm.com/catalog/services/continuous-delivery#about). 

>We recommend that you always set up and initialize a cloud development environment and deploy the starter application at least once before you make any changes to the application. By doing that, you can have a "known good" deployment to work from, and you don't need to migrate your code changes into the new environment. The remainder of these instructions assume that you do this.

### Setting up from the IBM Cloud CLI

```bash
ibmcloud dev create
```

Follow the prompts and select the starter kit of interest (`Node.js Express App`) when the time comes. This sets up the CI/CD toolchain, creates a remote source code repo, clones the repo to your local machine, and starts the initial deployment.

>  Your machine must be configured for SSH access to your IBM Cloud GitLab account (for example, https://us-south.git.cloud.ibm.com/profile/keys) to clone the application code. For more information, see the [GitLab docs](https://us-south.git.cloud.ibm.com/help/ssh/README).

## Verifying that your cloud app is working

Internally, this starter app communicates on port 3000, but the exposed URL for your running application is determined by the runtime platform (Kubernetes or OpenShift). You can find a link to your running application in these ways:
- Look for the link in the App details view for your app in the IBM Cloud console.
- Look in the deployment logs that are produced by the deployment stage of your automated pipeline. See [Debugging your cloud app](#Debugging-your-cloud-app) for details about how to find these logs.
- Look at the terminal output after you successfully run the `ibmcloud dev create` command.

Follow the app link or paste the URL into a browser to see the landing page for your new microservice. Check the endpoints that are provided by the microservice.

## Debugging your cloud app

### Pipeline logs

If your app is not working, check your pipeline status. Problems with build and deploy are displayed there, and from there you can view build and deploy logs. The pipeline is found in the DevOps toolchain for your app. You can find the toolchain in these ways:
- Look for the link in the App details view for your app in the IBM Cloud console.
- From the IBM Cloud main dashboard, select DevOps from the navigation menu, then select the region in which your toolchain resides. Find your toolchain in the list, and click it reveal the toolchain components. Click the pipeline component. You see links to logs in the tile for each stage in the pipeline.

### Container logs

Container logs hold the information that's coming from your running app, similar to what you would see in the terminal when you run your app locally. Use the kubectl CLI to fetch logs for the problematic pod. For more information, see the [docs for the `kubectl logs` command](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#logs).

## Developing locally

Compile and run your application in a local Docker container by using either the IBM Cloud CLI or the Docker CLI.

>Be sure that you `cd` into the app root directory before you run these commands.

### Using the IBM Cloud CLI

```bash
ibmcloud dev build
ibmcloud dev run
```
Press `ctl-c` on your keyboard to stop the container and return control to the command line.

### Using the Docker CLI

```bash
docker build .
docker run -p 3000:3000 <my_image_id>
```

You can find the image ID in the console output of the docker build command. The `-p` flag represents `publish` and is necessary to expose the local endpoint outside the container. The IBM Cloud CLI does this implicitly.

### Using the native runtime

```bash
npm install
npm start
```

### Verifying that your local app is running

Your application is running at `http://localhost:3000`. Check the endpoints that are provided by the microservice.

## Testing your app

The starter app repo contains unit tests, functional tests, and an experience test script to check the user-facing elements (UI and endpoints) that are presented by your application. The starter app also includes a linting mechanism.

### Running tests and code coverage

To run tests and code coverage, use the following command:

```bash
 npm run test
 ```
 
  A `coverage` folder is created with code coverage results that can be reviewed for gaps. The code coverage thresholds are also defined in `package.json` under `nyc` and can be adjusted if needed. Also, you can use the script `npm run fix` to automatically fix linting problems.

### Pre-commit hooks

By default, a [Husky](https://github.com/typicode/husky) pre-commit hook is defined in `package.json`, which runs linting, testing, and code coverage before the commit is made. If either the linting, testing, or code coverage fails, the pre-commit hook prevents the changes from being committed. Review the results and fix the problems, or modify the thresholds to allow the commit to succeed.

### Experience tests
You can verify the state of your locally running application by using the Selenium UI test script that is included in the `scripts` directory.

### Debugging your local app

You can build and debug your app locally by using the following command:

```bash
ibmcloud dev build --debug
ibmcloud dev debug
```

## Deploying changes to IBM Cloud

Simply push to the master branch of your remote repo to initiate a new build/deploy cycle. After a few minutes, your modified app is running in the cloud. You can check the progress of the deployment by visiting the pipeline details view.

## Getting support

If you have problems or questions when using the starter kit, you can go directly to the [IBM Cloud Support Center](https://cloud.ibm.com/unifiedsupport/supportcenter) to review featured FAQs, view status, or post questions on Stack Overflow. You can also open a support case.

## CRA Scanning

This repository includes a `.cracveomit` file that is used by Code Risk Analyzer (CRA) in IBM Cloud Continuous Delivery. This file helps address vulnerabilities that are found by CRA until a remediation is available, at which point the vulnerabilities will be addressed in the respective package versions. CRA keeps the code in this repository free of known vulnerabilities, and therefore helps make applications that are built on this code more secure. If you are not using CRA, you can safely ignore this file.

## Next steps

 - Augment this application to fit your own use case.
 - Try other starter kits for IBM Cloud. Applications are available for [Node.js Express](https://github.com/IBM/node-express-app), [Go Gin](https://github.com/IBM/go-gin-app), [Python Flask](https://github.com/IBM/python-flask-app), [Python Django](https://github.com/IBM/python-django-app), [Java Spring](https://github.com/IBM/java-spring-app), [Java Liberty](https://github.com/IBM/java-liberty-app), [Swift Kitura](https://github.com/IBM/swift-kitura-app), [Android](https://github.com/IBM/android-app), and [iOS](https://github.com/IBM/ios-app).

---

copyright:
  years: 2020, 2022

---

