# Install

To Install and run k8dash on your Kubernetes cluster by following these steps:
1. Download kubernetes-k8dash.yaml
2. Deploy k8dash by running the following command:
```sh
kubectl apply -f 
https://raw.githubusercontent.com/herbrandson/k8dash/master/kubernetes-k8dash.yaml
```
To access k8dash, you must make it publicly visible. If you have an ingress server setup, you can accomplish by adding a route like the following:
```sh
kind: Ingress
apiVersion: extensions/v1beta1
metadata:
  name: k8dash
  namespace: kube-system
spec:
  rules:
  -
    host: k8dash.example.com
    http:
      paths:
      -
        path: /
        backend:
          serviceName: k8dash
          servicePort: 80
```
3. Sign In
   <ol type="a">
   <li> Setting Up a Service Account Token
    The first (and easiest) option is to create a dedicated service account. This can be accomplished using the following script. </li>

