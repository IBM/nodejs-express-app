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


# Create and deploy a Node.js Express application

> We have applications available for [Node.js Express](https://github.com/IBM/node-express-app), [Go Gin](https://github.com/IBM/go-gin-app), [Python Flask](https://github.com/IBM/python-flask-app), [Python Django](https://github.com/IBM/python-django-app), [Java Spring](https://github.com/IBM/java-spring-app), [Java Liberty](https://github.com/IBM/java-liberty-app), and [Swift Kitura](https://github.com/IBM/swift-kitura-app).

In this sample, you will create a microservice using Express in Node.js, complete with standard best practices. A microservice is an individual component of an application that follows the **microservice architecture** - an architectural style that structures an application as a collection of loosely coupled services, which implement business capabilities. The microservice exposes a RESTful API matching a [Swagger](http://swagger.io) definition.

You can access the cloud native microservice capabilities at the following endpoints:
- The [Swagger UI](http://swagger.io/swagger-ui/) is running on: `/swagger/api-docs`
- Health endpoint: `/health`

## Steps

You can [deploy this application to IBM Cloud](https://cloud.ibm.com/developer/appservice/starter-kits/nodejs-express-app) or [build it locally](#building-locally) by cloning this repo first. Once your app is live, you can access the `/health` endpoint to build out your cloud native application.

### Deploying to IBM Cloud

<p align="center">
    <a href="https://cloud.ibm.com/developer/appservice/starter-kits/nodejs-express-app">
    <img src="https://cloud.ibm.com/devops/setup/deploy/button_x2.png" alt="Deploy to IBM Cloud">
    </a>
</p>

Click **Deploy to IBM Cloud** to deploy this same application to IBM Cloud. This option creates a deployment pipeline, complete with a hosted GitLab project and a DevOps toolchain. You can deploy your app to Cloud Foundry, a Kubernetes cluster, or a Red Hat OpenShift cluster. OpenShift is available only through a standard cluster, which requires you to have a billable account.

[IBM Cloud DevOps](https://www.ibm.com/cloud/devops) services provides toolchains as a set of tool integrations that support development, deployment, and operations tasks inside IBM Cloud.

### Building locally

To get started building this application locally, you can either run the application natively or use the [IBM Cloud Developer Tools](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started) for containerization and easy deployment to IBM Cloud.

#### Native application development

- Install the latest [Node.js](https://nodejs.org/en/download/) 12+ LTS version.

Once the Node toolchain has been installed, you can download the project dependencies with:

```bash
npm install
```

To run your application locally:

```bash
npm run start
```

Your application will be running at `http://localhost:3000`.  You can access the `/health` endpoint at the host. You can also verify the state of your locally running application using the Selenium UI test script included in the `scripts` directory.

#### IBM Cloud Developer Tools

Install [IBM Cloud Developer Tools](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started) on your machine by running the following command:
```
curl -sL https://ibm.biz/idt-installer | bash
```

Create an application on IBM Cloud by running:

```bash
ibmcloud dev create
```

This will create and download a starter application with the necessary files needed for local development and deployment.

Your application will be compiled with Docker containers. To compile and run your app, run:

```bash
ibmcloud dev build
ibmcloud dev run
```

This will launch your application locally. When you are ready to deploy to IBM Cloud on Cloud Foundry or Kubernetes, run one of the following commands:

```bash
ibmcloud dev deploy -t buildpack // to Cloud Foundry
ibmcloud dev deploy -t container // to K8s cluster
```

You can build and debug your app locally with:

```bash
ibmcloud dev build --debug
ibmcloud dev debug
```

## Testing, linting, and code coverage

### Running tests and code coverage

To run tests and code coverage, run `npm run test`. A `coverage` folder will be created with code coverage results that can be reviewed for gaps. The code coverage thresholds are also defined in `package.json` under `nyc` and can be adjusted if needed. Also, you can use the script `npm run fix` to automatically fix linting problems.

### Pre-commit hooks

By default, a [Husky](https://github.com/typicode/husky) pre-commit hook is defined in `package.json`, which runs linting, testing, and code coverage before the commit is made. If either the linting, testing, or code coverage fails, the pre-commit hook prevents the changes from being committed. Review the results and fix the problems, or modify the thresholds to allow the commit to succeed.

## Next steps
* Learn more about augmenting your Node.js applications on IBM Cloud with the [Node Programming Guide](https://cloud.ibm.com/docs/node?topic=nodejs-getting-started).
* Explore other [sample applications](https://cloud.ibm.com/developer/appservice/starter-kits) on IBM Cloud.

## License

This sample application is licensed under the Apache License, Version 2. Separate third-party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1](https://developercertificate.org/) and the [Apache License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt).

[Apache License FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)

