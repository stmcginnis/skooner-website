---
title: Install
---

::: warning PSA
k8dash is now Skooner! We are currently updating our documentation to reflect this change.
:::

# Install 

## Installing Skooner on Kubernetes Cluster

To Install and run Skooner (previously k8dash) on your Kubernetes cluster
1. Download [kubernetes-k8dash.yaml](https://raw.githubusercontent.com/skooner-k8s/skooner/master/kubernetes-k8dash.yaml).
2. Deploy Skooner by running the following command:
```sh
kubectl apply -f 
https://raw.githubusercontent.com/skooner-k8s/skooner/master/kubernetes-k8dash.yaml
```
To access Skooner, you must make it publicly visible. If you have an ingress server setup, you can accomplish this by adding a route:
```sh
kind: Ingress
apiVersion: extensions/v1beta1
metadata:
  name: skooner
  namespace: kube-system
spec:
  rules:
  -
    host: skooner.example.com
    http:
      paths:
      -
        path: /
        backend:
          serviceName: skooner
          servicePort: 80
```
3. Sign In
      * The easiest option to sign in is to create a dedicated service account and use its token. This can be accomplished using the following script:
        ```sh
        # Create the service account in the current namespace (we assume default)
        kubectl create serviceaccount skooner-sa

        # Give that service account root on the cluster
        kubectl create clusterrolebinding skooner-sa --clusterrole=cluster-admin --serviceaccount=default:skooner-sa

        # Find the secret that was created to hold the token for the SA
        kubectl get secrets

        # Show the contents of the secret to extract the token
        kubectl describe secret skooner-sa-token-xxxxx
        ```
        Retrieve the `token` value from the secret and enter it into the login screen to access the dashboard.
      * You can also log in to Skooner with [OIDC](#running-oidc-on-Skooner) or [NodePort](#running-Skooner-with-nodeport).

## Installing Metrics Server

Skooner relies heavily on metrics-server to display real-time cluster metrics. It is strongly recommended that you install metrics-server for the best experience from Skooner.
* [Installing metrics-server](https://github.com/kubernetes-incubator/metrics-server)
* [Running metrics-server with kubeadm](https://medium.com/@waleedkhan91/how-to-configure-metrics-server-on-kubeadm-provisioned-kubernetes-cluster-f755a2ac43a2)

## Running OIDC on Skooner

Skooner makes using OpenId Connect for authentication easy. Assuming your cluster is configured to use OIDC, all you need to do is create a secret containing your credentials and run the kubernetes-k8dash-oidc.yaml config.
To learn more about configuring a cluster for OIDC, check out these great links:
* [Authenticating in Kubernetes](https://kubernetes.io/docs/reference/access-authn-authz/authentication/)
* [Kubernetes Day 2 Operations: AuthN/AuthZ with OIDC and a Little Help From Keycloak](https://medium.com/@mrbobbytables/kubernetes-day-2-operations-authn-authz-with-oidc-and-a-little-help-from-keycloak-de4ea1bdbbe)
* [kubectl with OpenID Connect](https://medium.com/@int128/kubectl-with-openid-connect-43120b451672)

You can deploy Skooner with OIDC support using something like the following script...<br><br>
**NOTE:** never trust a file downloaded from the internet. Make sure to review the contents of kubernetes-k8dash-oidc.yaml before running the script below.
```sh
OIDC_URL=<put your endpoint url here... something like https://accounts.google.com>
OIDC_ID=<put your id here... something like blah-blah-blah.apps.googleusercontent.com>
OIDC_SECRET=<put your oidc secret here>

kubectl create secret -n kube-system generic Skooner \
--from-literal=url="$OIDC_URL" \
--from-literal=id="$OIDC_ID" \
--from-literal=secret="$OIDC_SECRET"
```

kubectl apply -f https://raw.githubusercontent.com/skooner-k8s/skooner/master/kubernetes-k8dash-oidc.yaml

Additionally, there are a few other OIDC options you can provide via environment variables. First is `OIDC_SCOPES`. The default value for this value is `openid email`, but additional scopes can also be added using something like`OIDC_SCOPES="openid email groups"`.<br><br>
The other option is`OIDC_METADATA`. Skooner uses the excellent node-openid-client module. `OIDC_METADATA` will take a json string and pass it to the Client constructor. Docs here. For example, `OIDC_METADATA='{"token_endpoint_auth_method":"client_secret_post"}`

## Running Skooner with Nodeport
If you do not have an ingress server setup, you can utilize a NodePort service as configured in the kubernetes-k8dash-nodeport.yaml. This is ideal when creating a single node master, or if you want to get up and running as fast as possible.
This will map the Skooner port 4654 to a randomly selected port on the running node. The assigned port can be found using

```sh
$ kubectl get svc --namespace=kube-system

NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
skooner     NodePort    10.107.107.62   <none>        4654:32565/TCP   1m
```






   