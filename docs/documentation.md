---
title: Documentation
---

Once you have k8dash running, familiarize yourself with the k8dash user interface.

<img src="images/k8dash-screen.png" alt="k8dash user interface" class="img-with-border" />

|Section|Description|
|---|---|
|**Nodes**| Provides insights on server resource allocations. <br/> Shows the list of servers and the CPU / RAM used by each server. <br/>&nbsp;<br/> For more details, click on a server. This shows which pods are running on that server.|
|**Workloads**| Useful to monitor deployments. <br/> Shows the deployments, daemon sets, jobs, etc. <br/>&nbsp;<br/> For more details, click on the listed pods. <br/> In this view, you can: <br/> - Edit the pod configuration YAML <br/> - View the documentation <br/> - Delete a pod <br/> - View logs or even SSH directly into a pod directly from your browser. |
|**Namespace**| Helps to filter your cluster details by namespace. |
|<nobr>**Config Maps**</nobr>| A config map is a Kubernetes concept that allows you to set up configurations and tie them to deployments. |
|<nobr>**Service Accounts**</nobr>| Manage users, roles, and permissions for your cluster. |
|**Apply**| Make YAML configuration changes to your cluster. |
|**Ingress**| Manage configurations. |
|**Storage**| Manage persistent volumes and claims. |

k8dash also includes sections for Services, Replicas, and more. 
