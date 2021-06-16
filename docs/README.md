---
home: true
heroImage: /images/edited-k8dash-banner.png
heroText: null
tagline: A Kubernetes dashboard that helps you understand & manage your cluster.
actions:
- text: Get Started
  link: https://github.com/skooner-k8s/skooner 
- text: Join the Community
  link: https://github.com/skooner-k8s/skooner/discussions 
features:
- title: Monitor Cluster Health
  image: /images/monitor.png
  alt: heart
  details: Quickly view your cluster’s health via real-time charts that help you track poorly performing resources.
  width: 25%
- title: Fast and Live Metrics
  image: /images/fast.png
  alt: lightening bolt
  details: Benefit from a Kubernetes dashboard that automatically refreshes and updates.
  width: 25%
- title: Responsive UI
  image: /images/responsive.png
  alt: responsive icon
  details: Monitor your cluster on your phone or tablet utilizing the 100% responsive UI.
  width: 25%
---

::: slot quick-install

### Start in as little as a minute

Install Skooner (previously k8dash) via the available YAML file.

* Download [kubernetes-k8dash.yaml &nbsp;](https://raw.githubusercontent.com/skooner-k8s/skooner/master/kubernetes-k8dash.yaml)

Deploy Skooner by running the following command:

```sh
kubectl apply -f https://raw.githubusercontent.com/skooner-k8s/skooner/master/kubernetes-k8dash.yaml

```

See [Skooner installation](/install/) to learn more. 

:::

::: slot quick-start

### Customize Skooner

You can configure Skooner in multiple ways, making it totally customizable. 

Features you can install include 

- [OpenID Connect](install/#running-oidc-on-skooner) for easy authentication
- [NodePort](install/#running-k8dash-with-nodeport) for instances where you do not have an ingress server set up

:::


