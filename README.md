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

This starter application is a simple [microservice](https://www.ibm.com/cloud/learn/microservices) that incorporates the [Express web framework](https://expressjs.com/) to provide a landing page and these two endpoints:

- The [Swagger UI](http://swagger.io/swagger-ui/) is running on: `/swagger/api-docs`
- Health endpoint: `/health`

This app is meant to help you get started on IBM Cloud, and this readme will help you do so by setting up a cloud development environment to:
* Quickly iterate the starter application into a proof-of-concept based on your own use case.
* Learn about connecting IBM Cloud managed services to your application.
* Evaluate IBM Cloud developer tools and capabilities for production applications.

## Quick start

>By the time you see this readme, you may have already performed many of the steps below.

- [Create an IBM Cloud account](https://cloud.ibm.com/registration).
- [Install IBM Cloud CLI Developer Tools](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started).
- [Install npm](https://www.npmjs.com/get-npm).
- [install Docker](https://docs.docker.com/get-docker/).
- [Create a free dev cluster](https://cloud.ibm.com/kubernetes/catalog/about).
- [Set up an IBM Cloud dev environment and deploy the starter app](https://cloud.ibm.com/developer/appservice/starter-kits/nodejs-express-app).  This creates a source code repo and CI/CD pipeline.
- Verify your app is working on the cloud.  You can find the link to the running app in your App Details view in the IBM Cloud console.
- Clone the source code to your local machine.   You can find the link to the source code repo in the App Details view for your app in the IBM Cloud console.
- Modify with your favorite IDE.
- Run and debug locally 
    ```bash
    ibmcloud dev build --debug
    ibmcloud dev debug
    ```
 - Push to the remote master branch to initiate a new build/deploy cycle.
 - [Enhance your app with additional services](#Enhancing-your-app-with-additional-services).

> Out of the box, this application does not connect to external services, but you can add them yourself. If you want a starter app that is pre-configured to connect to external services, try the [IBM Cloud Node.js + Cloudant starter application](https://cloud.ibm.com/developer/appservice/starter-kits/nodejs-+-cloudant).

## What's included

The base app code includes:

- Node.js application that functions as a microservice (server.js)
- Rudimentary landing page and two endpoints (/health and /swagger)
- Extensible Node server code structure with directories for config, routes, and controllers
- Simple functional and unit tests
- Experience test script to verify your UI when the app is running
- Dockerfiles for container deployment

After you use the IBM Cloud developer workflow, you also get a cloud dev environment and some additional files in your repo:
- Continuous delivery toolchain on IBM Cloud that includes a build and deploy pipeline
- IBM Container Registry to hold your container images
- GitLab source code repo with webhook to trigger your pipeline
- Deployment assets (Helm chart for Kube, manifest yaml for Cloud Foundry) automatically added your repo
- A `cli-config.yml` file that contains information needed by the IBM Cloud cli developer tools

## License

Copyright 2020 IBM

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. 

You may obtain a copy of the license at http://www.apache.org/licenses/LICENSE-2.0. 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permission and limitations under the License. 

## Before you begin

### Installing prereqs
- [Set up an IBM Cloud account](https://cloud.ibm.com/registration).

- Install [IBM Cloud CLI Developer Tools](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started) on your machine.

- Prepare to run this application locally by [installing npm](https://www.npmjs.com/get-npm) and/or [installing Docker](https://docs.docker.com/get-docker/).

- If you plan to run this starter application in a container on the cloud, it's best to set up a Kubernetes cluster in advance. If you don't already have one, [set one up here](https://cloud.ibm.com/kubernetes/catalog/about).

## Configuring your starter application

This application comes ready to run and requires no explicit configuration.

## Developing on cloud

Get up and running on the cloud quickly using the IBM Cloud developer tools. If you prefer a UI, use the developer workflow in the IBM Cloud console.  If you prefer a CLI, use the IBM Cloud CLI developer tools.  

Both tools facilitate cloud native development and continuous delivery by setting up a cloud development environment.  The environment includes a source code repo on IBM-hosted GitLab and an automation toolchain that is powered by the [IBM Cloud Continuous Delivery Service](https://cloud.ibm.com/catalog/services/continuous-delivery#about). 

>We recommend that you always set up and initialize a cloud development environment and deploy the starter application at least once before you make any changes to the application. By doing that, you can have a "known good" deployment to work from, and you don't need to migrate your code changes into the new environment. The remainder of these instructions assume that you do this.

### Choosing a cloud deployment target

Before you begin, you should decide on the type of deployment environment you want to target for your app. The IBM Cloud platform offers many types of environments, but the most common for cloud native apps are the IBM Kubernetes Service (IKS), Red Hat OpenShift clusters, or Cloud Foundry.

>We recommend that you create an IKS cluster ahead of time and deploy your application there. Creating an IKS cluster can take 15-30 minutes, but it's worth the wait. IKS runs your app inside orchestrated containers, and this option represents best-practice architecture for cloud native applications. To create an IKS cluster, you need a billable account. (That is, you either you need a credit card that is associated with your account for identity verification, or you need an IBM Cloud subscription). However, IKS offers a free cluster for 30 days, so you have plenty of time to try your app first.

>Red Hat OpenShift, like IKS, is based on Kubernetes and represents best-practice architecture. OpenShift is especially good for hybrid environments as it can be run on IBM Cloud, in your own data center, or on the edge. OpenShift also requires a billable account but currently does not offer a free tier.

>Cloud Foundry abstracts away the runtime infrastructure, which makes deployment quick and easy. Although Cloud Foundry is easy to use, it is not as scalable as a Kubernetes-based solution, it typically costs more, and gives you less control over the environment. Cloud Foundry runtimes with small amounts of memory are available for IBM Cloud Lite accounts, but you will likely run out of memory quickly, even for exploratory applications. Therefore, you might want to upgrade to a billable account to do meaningful evaluations with Cloud Foundry.

### Setting up from the IBM Cloud console

Use the [developer workflow that is built into the IBM Cloud platform](https://cloud.ibm.com/developer/appservice/starter-kits/nodejs-express-app). Complete the required information, click **Create**, then click **Deploy to cloud**.

### Setting up from the IBM Cloud CLI

```bash
ibmcloud dev create
```

Follow the prompts and select the starter kit of interest (`Node.js Express App`) when the time comes. This sets up the CI/CD toolchain, creates a remote source code repo, clones the repo to your local machine, and starts the initial deployment.

>  Your machine must be configured for SSH access to your IBM Cloud GitLab account (for example, https://us-south.git.cloud.ibm.com/profile/keys) to clone the application code. For more information, see the [GitLab docs](https://us-south.git.cloud.ibm.com/help/ssh/README).

### Verifying that your cloud app is working

Internally, this starter app communicates on port 3000, but the exposed URL for your running application is determined by the runtime platform (Kubernetes, OpenShift, or Cloud Foundry). You can find a link to your running application in these ways:
- Look for the link in the App details view for your app in the IBM Cloud console.
- Look in the deployment logs that are produced by the deployment stage of your automated pipeline. See [Debugging your cloud app](#Debugging-build-and-deploy-problems) for details about how to find these logs.
- Look at the terminal output after you successfully run the `ibmcloud dev create` command.

Follow the app link or paste the URL into a browser to see the landing page for your new microservice. Check the endpoints that are provided by the microservice.

### Debugging build and deploy problems

If your app is not working, check your pipeline status. Problems with build and deploy are displayed there, and from there you can view build and deploy logs. The pipeline is found in the DevOps toolchain for your app. You can find the toolchain in these ways:
- Look for the link in the App details view for your app in the IBM Cloud console.
- From the IBM Cloud main dashboard, select DevOps from the navigation menu, then select the region in which your toolchain resides. Find your toolchain in the list, and click it reveal the toolchain components. Click the pipeline component. You see links to logs in the tile for each stage in the pipeline.

### Debugging your app in cloud container

Container logs hold the information that's coming from your running app, similar to what you would see in the terminal when you run your app locally. Use the kubectl CLI to fetch logs for the problematic pod. For more information, see the [docs for the `kubectl logs` command](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#logs).

## Developing locally

### Cloning the source code

When you set up your IBM Cloud development environment, and source code repo was created for you.  Clone the source code to your local machine. You can find the link to the source code repo in the App Details view for your app in the IBM Cloud console.  

### Working with local credentials

This app does not connect to any cloud services as is, but you can add services yourself.

If you added services to this app using the IBM Cloud developer workflow, download a local credentials file.

```bash
ibmcloud dev get-credentials
```

This will download the file `localdev-config.json` which goes in the `server` directory of your app.  If you are using IBM Cloud CLE developer tools, you don't need to add credentials to your local environment.  The CLI will do that for you.

If you want to connect to services that were not added using the IBM Cloud developer workflow, you will need to retrieve the credentials yourself and load them into your local environment.


### Compiling and running

Compile and run your application in a local Docker container by using either the IBM Cloud CLI or the Docker CLI.

>Be sure that you `cd` into the app root directory before you run these commands.

```bash
ibmcloud dev build
ibmcloud dev run
```

or

```bash
docker build .
docker run -p 3000:3000 <my_image_id>
```

You can find the image ID in the console output of the docker build command. The `-p` flag represents `publish` and is necessary to expose the local endpoint outside the container. The IBM Cloud CLI does this implicitly.

You can also compile and run using the native runtime.

```bash
npm install
npm start
```

>After the app is running, press `ctl-c` on your keyboard to stop the app server and return control to the command line.

### Verifying that your local app is working

Your application is running at `http://localhost:3000`. Check the endpoints that are provided by the microservice.

### Debugging your local app

You can build and debug your app locally by using the following command:

```bash
ibmcloud dev build --debug
ibmcloud dev debug
```
### Deploying local changes to IBM Cloud

Simply push to the master branch of your remote repo to initiate a new build/deploy cycle. After a few minutes, your modified app is running in the cloud. You can check the progress of the deployment by visiting the pipeline details view.

## Testing

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

## Enhancing your app with additional services

### Adding a service to your app
To add additional services to your app, do the following:

```bash
ibmcloud dev edit
```

Select the "Manage services" option, then follow the prompts to select an existing service or provision a new one.  The terminal output will tell you which files were created or need to be merged.

### Adding service dependencies and code into your app

Your service will likely have an SDK library to make programming easier.  Add the service library as a dependency in your package.json file, and add lines of code to initialize and use your new service.  See your service documentation for details.

After that is done, build and run your app locally to test the connection to the service.   Note that by using `ibm cloud edit` to add the service, you get a local credential file and you don't need to add credentials manually to your local environment.

### Modifying cloud deployment assets

After testing your connection locally, run

```bash
ibmcloud dev edit
```

again. This time select the "Create manual deployment files" option.  Follow the prompts to create deployment files. The terminal output will tell you which files were created or need to be merged.

For Kubernetes Helm deployments, the values.yaml will require a bit more attention.  The value of `secretKeyRef` will be "undefined", so you will need to add the service credentials as a secret in your Kube cluster, then past the secret name in the values.yml.

### Adding your service credentials as a Kubernetes secret

Copy your service credentials from the IBM Console.  You will find them in the Service Details view for your service instance.

Create a secret yaml file using the service credentials.  You should include all your service credentials as single secret item named 'binding'.  Here is an example yaml file with redacted credential values that you might use as a template:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: node-express-cloudant-secret
type: Opaque
stringData:
  binding: '{"apikey":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","host":"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-bluemix.cloudantnosqldb.appdomain.cloud","iam_apikey_description":"Auto-generated for key xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx","iam_apikey_name":"kube-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxx.default","iam_role_crn":"crn:v1:bluemix:public:iam::::serviceRole:Manager","iam_serviceid_crn":"crn:v1:bluemix:public:iam-identity::a/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx::serviceid:ServiceId-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx","password":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","port":443,"url":"https://xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-bluemix:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-bluemix.cloudantnosqldb.appdomain.cloud","username":"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-bluemix"}'
```

To add the secret to the cluster, paste your yaml directly into your cluster dashboard yaml editor, or save your secret as yaml file and apply it using your cluster CLI.  For example:

```bash
kubectl apply -f ./secret.yaml
```

After creating the secret, don't forget to paste the secret name ("node-express-cloudant-secret" in the example above) into your values.yaml file.  

Push your changes to you remote repo to deploy the revised app to the cloud.

## Getting support

If you have problems or questions when using the starter kit, you can go directly to the [IBM Cloud Support Center](https://cloud.ibm.com/unifiedsupport/supportcenter) to review featured FAQs, view status, or post questions on Stack Overflow. You can also open a support case.

## Next steps

 - Augment this application to fit your own use case.
 - Try other starter kits for IBM Cloud. Applications are available for [Node.js Express](https://github.com/IBM/node-express-app), [Go Gin](https://github.com/IBM/go-gin-app), [Python Flask](https://github.com/IBM/python-flask-app), [Python Django](https://github.com/IBM/python-django-app), [Java Spring](https://github.com/IBM/java-spring-app), [Java Liberty](https://github.com/IBM/java-liberty-app), [Swift Kitura](https://github.com/IBM/swift-kitura-app), [Android](https://github.com/IBM/android-app), and [iOS](https://github.com/IBM/ios-app).


