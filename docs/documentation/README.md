---
title: Documentation
---

::: warning PSA
k8dash is now Skooner! We are currently updating our documentation to reflect this change.
:::

# {{ $frontmatter.title }}

::: tip
More documentation coming soon.
:::

## Understanding the Skooner UI

Once you have [Skooner running](/install/), familiarize yourself with the Skooner user interface.

<!--<img 
:src="$withBase('/images/k8dash-screen.png')" alt="Skooner user interface" class="img-with-border"/>
<br></br> -->

|Section|Description|
|---|---|
|**Nodes**| Provides insight on server resource allocations. Shows the list of servers and the CPU / RAM used by each server. <br/>&nbsp;<br/> For more details, click on a server. This shows which pods are running on that server.|
|**Workloads**| Helps you monitor deployments. Shows the deployments, daemon sets, jobs, etc. <br/>&nbsp;<br/> For more details, click on the listed pods. In this view, you can: <br/>&nbsp;<br/> - Edit the pod configuration YAML <br/> - View the documentation <br/> - Delete a pod <br/> - View logs or even SSH into a pod directly from your browser. |
|**Namespace**| Helps to filter your cluster details by namespace. |
|<nobr>**Config Maps**</nobr>| A config map is a Kubernetes concept that allows you to set up configurations and tie them to deployments. |
|<nobr>**Service Accounts**</nobr>| Manage users, roles, and permissions for your cluster. |
|**Apply**| Make YAML configuration changes to your cluster. |
|**Ingress**| Manage configurations. |
|**Storage**| Manage persistent volumes and claims. |

Skooner also includes sections for services, replicas, and more. 
