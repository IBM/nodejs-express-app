---

copyright:
  years: 2020

---
<p align="center">
    <a href="https://cloud.ibm.com">
        <img src="https://my1.digitalexperience.ibm.com/8304c341-f896-4e04-add0-0a9ae02473ba/dxdam/2d/2d559197-6763-4e47-a2cb-8f54c449ff26/ibm-cloud.svg" height="100" alt="IBM Cloud">
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
<!-- Start with a short description that clearly describes what the starter kit and the resulting app do, what's the value of using the starter kit, etc. See the following example. -->

This starter application is a simple microservice that incorporates the [Express web framework](https://expressjs.com/) to provide a landing page and two endpoints.  Use this repo as a template for you own application.

A microservice is an individual component of an application that follows the **microservice architecture** - an architectural style that structures an application as a collection of loosely coupled services, each of which implements business capability. The microservice exposes a RESTful API matching a [Swagger](http://swagger.io) definition.

You can access the cloud native microservice capabilities at the following endpoints:
- The [Swagger UI](http://swagger.io/swagger-ui/) is running on: `/swagger/api-docs`
- Health endpoint: `/health`

The microservice is ready to run locally in a Docker container or via the Node.js runtime hosted on your local operating system. Use the [IBM Cloud CLI Developer Tools commands](https://cloud.ibm.com/docs/cli?topic=cli-idt-cli) (`ibmcloud dev`) for local development.

When you are ready to deploy to cloud, use IBM Cloud developer tools described below to get up and running quickly. In particular, the [developer workflow built into the IBM Cloud platform](https://cloud.ibm.com/developer/appservice/starter-kits/nodejs-express-app) will set up a source code repo for you and link it to a deployment automation pipeline so that you are ready for cloud-native iterative development with continuous integration and delivery.  Use this setup, the IBM Cloud CLI, and your favorite IDE to quickly iterate the starter application into a proof-of-concept based on your own use case, to learn about connecting IBM Cloud managed services to your application, or to evaluate IBM Cloud developer tools and capabilities for production applications.

Note:  This application does not connect to external services, but if this is of interest try the [IBM Cloud Node.js + Cloudant starter application](https://github.com/IBM/nodejs-cloudant).

## License

<!-- Apache License Version 2.0 is required to onboard your starter kit. The following boilerplate text comes from Apache License Version 2.0. Do not modify any other details besides the copyright year and the name of the copyright owner. -->

Copyright 2020 IBM

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. 

You may obtain a copy of the license at http://www.apache.org/licenses/LICENSE-2.0. 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permission and limitations under the License. 

## What's included

<!-- List the required services, if any. See the following example. -->

- Node.js application that functions as a microservice (server.js)
- Rudimentary landing page and two endpoints (/health and /swagger)
- Extensible Node server code structure with directories for config, routes, and controllers
- Simple functional and unit tests
- Experience test script to verify your UI when the app is running
- Dockerfiles for container deployment

If you use the IBM Cloud developer workflow, you also get:
- Continuous delivery toolchain on IBM Cloud that includes build/deploy pipeline
- IBM Container Registry to hold your container images
- Gitlab source code repo with webhook to your pipeline
- Deployment assets automatically injected into your repo as required by your target environment


## Before you begin

<!-- List any prereqs for setting up your starter kit. Delete this section if it's not needed. See the following example. -->
### Installing prereqs
- Install [IBM Cloud Developer Tools](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started) on your machine.

- Prepare to run this application locally by [installing npm](https://www.npmjs.com/get-npm) and/or [installing Docker](https://docs.docker.com/get-docker/).

- Prepare to run this application on the cloud by [setting up an IBM Cloud account](https://cloud.ibm.com/registration).

- If you plan to run this starter application in a container on the cloud, it's best to set up a Kubernetes cluster in advance.  If you don't already have one, [set one up here](https://cloud.ibm.com/kubernetes/catalog/about).  More options are discussed below.

### Choosing a deployment target

Before you begin, you should decide on the type of deployment environment you'd like to target for your app.  The IBM Cloud platform offers many types of environments, but the most common for cloud-native apps are the IBM Kubernetes Service (IKS), Red Hat OpenShift clusters, or Cloud Foundry.

>We recommend you create an IKS cluster ahead of time and deploy your application there.  Creating an IKS cluster can take 15-30 minutes, but it's well worth the wait.  IKS runs your app inside orchestrated containers, and this represents best-practice architecture for cloud-native applications.  To create an IKS cluster you will need a billable account (i.e. either you will need a credit card associated with your account for identity verification or you will need an IBM Cloud subscription), but IKS offers a free cluster for 30 days so you'll have plenty of time to try your app.

>Red Hat OpenShift, like IKS, is based on Kubernetes and represents best-practice architecture.  OpenShift is especially good for hybrid environments as it can be run on IBM Cloud, in your own datacenter, or on the edge.  OpenShift also requires a billable account but currently does not offer a free tier.

>Cloud Foundry abstracts away the runtime infrastructure, which makes deployment quick and easy.  Although Cloud Foundry is easy to use, it is not as scalable as a Kubernetes-based solution, typically costs more, and gives you less control over the environment.  Cloud Foundry runtimes with small amounts of memory are available for IBM Cloud Lite accounts, but you will likely run out of memory quickly even for exploratory applications. Therefore, you'll probably want to upgrade to a billable account to do meaningful evaluations with Cloud Foundry.

## Configuring your starter application

<!-- If users need special instructions about setting up the starter kit, include those details here. Don't use this section to document any prereqs - include that information in the Before you begin section. Also include any necessary prereqs for executing the experience_test.sh script that is used for starter kit verification. -->

This application comes ready-to-run and requires no explicit configuration.

## Setting up and initializing your cloud development environment

Set up and initialize your development environment either from the IBM Cloud console or using the IBM Cloud CLI.  Both facilitate cloud-native development and continuous delivery by creating a repo for you on IBM-hosted GitLab, copying the starter application code there, and then linking the repo to an automation toolchain powered by [IBM Cloud Continuous Delivery Service](https://cloud.ibm.com/catalog/services/continuous-delivery#about). 

>We recommend you always set up and initialize a cloud development environment and deploy the starter application at least once before making any changes to the application. By doing that you can have a 'known good' deployment to work from, and you don't need to migrate your code changes into the new environment.  The remainder of these instructions assume you will do this.

### Setting up from the IBM Cloud console

Use the [developer workflow built into the IBM Cloud platform](https://cloud.ibm.com/developer/appservice/starter-kits/nodejs-express-app). Fill in the required information, click 'Create', then click 'Deploy to cloud'.

### Setting up from the IBM Cloud CLI

```bash
ibmcloud dev create
```

Follow the prompts and select the starter kit of interest ('Node.js Express App') when the time comes.  This will set up the CI/CD toolchain, create a remote source code repo, clone the repo to your local machine, and kick off the initial deployment.

>  Your machine must be configured for SSH access to your IBM Cloud GitLab account (e.g. https://us-south.git.cloud.ibm.com/profile/keys) in order to clone the application code.  See [Gitlab docs](https://us-south.git.cloud.ibm.com/help/ssh/README) for help.

### Verifying that your cloud app is working

<!-- Provide instructions on how users can run tests to ensure the app is up and running. List all endpoints including health check or status endpoints along with their port numbers. If applicable, provide instructions for changing endpoint port numbers or locations. -->
Internally this starter app communicates on port 3000, but the exposed URL for your running application is determined by the runtime platform (Kubernetes, OpenShift, or Cloud Foundry).  You can find a link to your running application in these ways:
- Look for the link in the App Details view for your app in the IBM Cloud Console.
- Look in the deployment logs produced by the deployment stage of your automated pipeline. See [Debugging your cloud app](#Debugging-your-cloud-app) for details on how to find these logs.
- Look at the terminal output after successfully running the `ibmcloud dev create` command.

Follow the app link or paste the URL into a browser to see the landing page for your new microservice.  Check the endpoints provided by the microservice.

### Debugging your cloud app

<!-- Provide instructions on how users can run tests to ensure the app is up and running. List all endpoints including health check or status endpoints along with their port numbers. If applicable, provide instructions for changing endpoint port numbers or locations. -->

#### Pipeline logs

If your app is not working, check your pipeline status.  Problems with build and deploy will show up there, and from there you can view build and deploy logs.  The pipeline is found in the DevOps toolchain for your app.  You can find the toolchain in these ways:
- Look for the link in the App Details view for your app in the IBM Cloud Console.
- From the IBM Cloud main dashboard, select DevOps from the left navigation menu, then select the region in which your toolchain resides.  Find your toolchain in the list and click it reveal the toolchain components.  Click the pipeline component.  You will see links to logs in the tile for each stage in the pipeline. 

#### Container logs

Container logs hold the information coming from your running app, similar to what you would see in the terminal when running your app locally.  Use the kubectl CLI to fetch logs for the problematic pod.  See [docs for the `kubectl logs` command](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#logs) for help.

## Developing locally

<!-- Include instructions for local development of the app. Ensure that when building by using either native app development tools or IBM CLI tools, the build runs the same unit tests, linting, and code coverage tools to ensure consistency across development approaches. -->

Compile and run your application in a local Docker container using either the IBM Cloud CLI or the Docker CLI.  

>Be sure you cd into the app root directory before running these commands.

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

You can find the image id in the console output of the docker build command.  The `-p` flag stands for 'publish' and is necessary to expose the local endpoint outside the container.  The IBM Cloud CLI does this implicitly.

### Using the native runtime

<!-- Include instructions about how to deploy your app from a developer's workstation using the app's language-specific tools. Also include instructions about how to run the experience_test.sh script for local verification. -->

```bash
npm install
npm start
```

### Verifying that your local app is running

<!-- Provide instructions on how users can run tests to ensure the app is up and running. List all endpoints including health check or status endpoints along with their port numbers. If applicable, provide instructions for changing endpoint port numbers or locations. -->
Your application will be running at `http://localhost:3000`.  Check the endpoints provided by the microservice.

## Testing your app

The starter app repo contains unit tests, functional tests, and an experience test script to check the user-facing elements (UI and endpoints) presented by your application. It also includes a linting mechanism.

### Running tests and code coverage

To run tests and code coverage:

```bash
 npm run test
 ```
 
  A `coverage` folder will be created with code coverage results that can be reviewed for gaps. The code coverage thresholds are also defined in `package.json` under `nyc` and can be adjusted if needed. Also, you can use the script `npm run fix` to automatically fix linting problems.

### Pre-commit hooks

By default, a [Husky](https://github.com/typicode/husky) pre-commit hook is defined in `package.json`, which runs linting, testing, and code coverage before the commit is made. If either the linting, testing, or code coverage fails, the pre-commit hook prevents the changes from being committed. Review the results and fix the problems, or modify the thresholds to allow the commit to succeed.

### Experience tests
You can verify the state of your locally running application using the Selenium UI test script included in the `scripts` directory.

### Debugging your local app

You can build and debug your app locally by running the following command:

```bash
ibmcloud dev build --debug
ibmcloud dev debug
```

## Deploying to changes to IBM Cloud

Simply push to the master branch of your remote repo to initiate a new build/deploy cycle.  After a few minutes, your modified app will be running in the cloud.  You can check the progress of the deployment by visiting the pipeline details view.

## Getting support

<!-- Include the following details about how to get help from IBM Cloud support. Don't modify. -->

If you have problems or questions when using the starter kit, you can go directly to the [IBM Cloud Support Center](https://cloud.ibm.com/unifiedsupport/supportcenter) to review featured FAQs, view status, or post questions on Stack Overflow. You can also open a support case.

## Next steps

<!-- Wherever applicable, include information about how users can augment this application to suite their needs. You can include links to related documentation. -->
 - Augment this application to fit your own use case.
 - Try other starter kits for IBM Cloud.  We have applications available for [Node.js Express](https://github.com/IBM/node-express-app), [Go Gin](https://github.com/IBM/go-gin-app), [Python Flask](https://github.com/IBM/python-flask-app), [Python Django](https://github.com/IBM/python-django-app), [Java Spring](https://github.com/IBM/java-spring-app), [Java Liberty](https://github.com/IBM/java-liberty-app), [Swift Kitura](https://github.com/IBM/swift-kitura-app), [Android](https://github.com/IBM/android-app), and [iOS](https://github.com/IBM/ios-app).


