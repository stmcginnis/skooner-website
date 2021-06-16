---
title: Development
---

::: warning PSA
k8dash is now Skooner! We are currently updating our documentation to reflect this change.
:::

# Development 
## Prerequisites
A running Kubernetes cluster. Installing and running [minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) is an easy way to fulfill this prerequisite. After you install minikube, run it with the `minikube start --driver=docker` command.
Once the cluster is up and running, create some login credentials as described in [Install](/install).
## High-level Architecture
Skooner has two main components:
* [Client-side](#client-side)
* [Server-side](#server-side)
### Client Side
The Skooner client is a React application (using TypeScript) with minimal other dependencies. Skooner’s client-side architecture consists of
* a React application built with create-react-app
* SASS
* minimal third-party dependencies<br>

The client-side code is in the `client > src folder`. Within this folder you can find
* index.js
* the views and art in SVG format <br>

#### Run

To run the client:
1. Open a new terminal tab and navigate to the `/client` directory.
2. Run `npm i` and then `npm start`. 
This will open up a browser window to your local Skooner dashboard. If everything compiles correctly, the site will load and you will see the following error message: `Unhandled Rejection (Error): Api request error: Forbidden....` 
To close the message, click X (top right). After you close the message, you should see the UI where you can enter your token.
### Server Side
The Skooner server-side code in index.js is a proxy to the Kubernetes API consisting of less than 200 lines of code. Skooner’s client-side architecture consists of:
* @kubernetes/client-node, the Kubernetes npm module
* Express webserver
* Node JS
* http-proxy-middleware for proxy requests to the Kubernetes API
* openid-client npm module for Open ID Connect (OIDC)

#### Run

To run the server:
1. From the `/server` directory, run `npm i` to install dependencies.
2. To run the server, run `npm start`. The server is a simple express.js server that is primarily responsible for proxying requests to the Kubernetes API server.
3. During development, the server will use whatever is configured in `~/.kube/config` to connect the desired cluster. If you are using minikube, for example, you can run `kubectl config set-context minikube` to set up `~/.kube/config` correctly.