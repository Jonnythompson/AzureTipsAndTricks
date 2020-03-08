(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{459:function(e,s,t){"use strict";t.r(s);var a=t(43),n=Object(a.a)({},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("💡 Learn more :  "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/ingress-basic?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ingress Controller in Azure Kubernetes Service"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("This article was brought to you by "),t("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("@kumarallamraju"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"intro"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[e._v("#")]),e._v(" Intro")]),e._v(" "),t("p",[e._v("In a recent customer engagement, they wanted to access all the AKS services via an Azure virtual network. This customer's application is not an external facing and needs to be on a corporate network to access their resources (e.g. HR, payroll,procurement etc..) If you are familiar with the Kubernetes eco system, we can use NGINX ingress controller to expose Kubernetes services on an external IP address. Azure Kubernetes Services comes to the rescue. AKS provides an option to deploy your NGINX ingress controller on an internal network which keeps the resources accessible only on an internal network and can be accessible via Express Route or VPN.")]),e._v(" "),t("p",[e._v("In few simple steps, let's understand the process to make this happen.")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("Please make sure you have an AKS cluster provisioned and running before proceeding further. Instructions to create a new AKS cluster is documented "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("This article uses Helm to install the NGINX ingress controller, and a sample web app. You need to have Helm initialized within your AKS cluster and using a service account for Tiller. For more information on configuring and using Helm, see "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-helm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install applications with Helm in AKS"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_1-create-an-nginx-ingress-controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-an-nginx-ingress-controller","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Create an NGINX Ingress Controller")]),e._v(" "),t("p",[e._v("Create a file named "),t("code",[e._v("internal-ingress.yaml")]),e._v(" using the following example manifest file. This example assigns 10.240.0.42 to the loadBalancerIP resource. Provide your own internal IP address for use with the ingress controller. Make sure that this IP address is not already in use within your virtual network.")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('controller:\n  service:\n    loadBalancerIP: 10.240.0.42\n    annotations:\n      service.beta.kubernetes.io/azure-load-balancer-internal: "true"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("h2",{attrs:{id:"_2-create-a-separate-namespace-and-ingress-controller-by-passing-the-above-file-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-a-separate-namespace-and-ingress-controller-by-passing-the-above-file-name","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Create a separate namespace and ingress controller by passing the above file name.")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# Create a namespace for your ingress resources\nkubectl create namespace ingress-basic\n\n# Use Helm to deploy an NGINX ingress controller\nhelm install stable/nginx-ingress \\\n    --namespace ingress-basic --name mynginx-ingress \\\n    --set controller.replicaCount=1 \\\n    --set controller.nodeSelector."beta\\.kubernetes\\.io/os"=linux \\\n    --set defaultBackend.nodeSelector."beta\\.kubernetes\\.io/os"=linux \\\n    -f internal-ingress.yaml #[this is important]\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("h2",{attrs:{id:"_3-check-the-status-of-nginx-controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-check-the-status-of-nginx-controller","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. Check the status of nginx controller")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('kubectl get service -l app=nginx-ingress --namespace ingress-basic\n\nIt takes a minute or two to see assigned private IP in the "EXTERNAL-IP" section.\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h2",{attrs:{id:"_4-let-s-create-some-ingress-rules-to-see-the-example-in-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-let-s-create-some-ingress-rules-to-see-the-example-in-action","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. Let's create some ingress rules to see the example in action.")]),e._v(" "),t("p",[e._v("In this example, Helm is used to deploy two instances of a simple 'Hello world' application.")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("helm repo add azure-samples https://azure-samples.github.io/helm-charts/\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"_5-create-the-first-demo-application-from-a-helm-chart-with-the-following-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-create-the-first-demo-application-from-a-helm-chart-with-the-following-command","aria-hidden":"true"}},[e._v("#")]),e._v(" 5. Create the first demo application from a Helm chart with the following command:")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("helm install azure-samples/aks-helloworld --namespace ingress-basic\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"_6-now-install-a-second-instance-of-the-demo-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-now-install-a-second-instance-of-the-demo-application","aria-hidden":"true"}},[e._v("#")]),e._v(" 6. Now install a second instance of the demo application.")]),e._v(" "),t("p",[e._v("For the second instance, you specify a new title so that the two applications are visually distinct. You also specify a unique service name:")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('helm install azure-samples/aks-helloworld \\\n    --namespace ingress-basic \\\n    --set title="Allamraju\'s 2nd AKS Ingress Demo" \\\n    --set serviceName="ingress-demo"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h2",{attrs:{id:"_7-create-an-ingress-route"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-create-an-ingress-route","aria-hidden":"true"}},[e._v("#")]),e._v(" 7. Create an Ingress Route")]),e._v(" "),t("p",[e._v("Both applications are now running on your Kubernetes cluster. To route traffic to each application, create a Kubernetes ingress resource. The ingress resource configures the rules that route traffic to one of the two applications.")]),e._v(" "),t("p",[e._v("In the following example, traffic to the address http://10.240.0.42/ is routed to the service named aks-helloworld. Traffic to the address http://10.240.0.42/hello-world-two is routed to the ingress-demo service.")]),e._v(" "),t("p",[e._v("Create a file named "),t("code",[e._v("hello-world-ingress-internalIP.yaml")]),e._v(" and copy in the following example YAML.")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: hello-world-ingress\n  namespace: ingress-basic\n  annotations:\n    kubernetes.io/ingress.class: nginx\n    nginx.ingress.kubernetes.io/ssl-redirect: "false"\n    nginx.ingress.kubernetes.io/rewrite-target: /$1\nspec:\n  rules:\n  - http:\n      paths:\n      - backend:\n          serviceName: aks-helloworld\n          servicePort: 80\n        path: /(.*)\n      - backend:\n          serviceName: ingress-demo\n          servicePort: 80\n        path: /hello-world-two(/|$)(.*)\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br")])]),t("h2",{attrs:{id:"_8-deploy-this-resource-to-your-kubernetes-cluster-using-kubectl-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-deploy-this-resource-to-your-kubernetes-cluster-using-kubectl-command","aria-hidden":"true"}},[e._v("#")]),e._v(" 8. Deploy this resource to your Kubernetes cluster using kubectl command")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl apply -f hello-world-ingress.yaml \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"_9-time-to-validate-the-ingress-controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-time-to-validate-the-ingress-controller","aria-hidden":"true"}},[e._v("#")]),e._v(" 9. Time to validate the ingress controller")]),e._v(" "),t("p",[e._v("To test the routes for the ingress controller, browse to the two applications pointing your web browser to http://10.240.0.42. But to resolve this IP you need to access this IP via Express Route or VPN from your on-premises network. If needed, you can quickly test this internal-only functionality from a pod on the AKS cluster. Create a test pod and attach a terminal session to it:")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl run -it --rm aks-ingress-test --image=debian --namespace ingress-basic\n\napt-get update && apt-get install -y curl\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl -L http://10.240.0.42\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token doctype"}},[e._v("<!DOCTYPE html>")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("html")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("xmlns")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("http://www.w3.org/1999/xhtml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("head")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("link")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rel")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("stylesheet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("text/css"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("href")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("/static/default.css"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("Welcome to Azure Kubernetes Service (AKS)"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n[...]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl -L -k http://10.240.0.42/hello-world-two\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token doctype"}},[e._v("<!DOCTYPE html>")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("html")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("xmlns")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("http://www.w3.org/1999/xhtml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("head")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("link")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rel")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("stylesheet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("text/css"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("href")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("/static/default.css"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("KS Ingress Demo"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n[...]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("Once you are done validating this functionality, please do not forget to clean up the resources")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("helm repo remove azure-samples\n\nhelm ls --all mynginx-ingress --namespace ingress-basic\nhelm del --purge mynginx-ingress\n\nkubectl delete -f hello-world-ingress-internalIP.yaml\n\nkubectl delete namespace ingress-basic\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("h2",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),t("p",[e._v("By default, an NGINX ingress controller is created with a dynamic public IP address assignment. A common configuration requirement is to use an internal, private network and IP address. The approach discussed above allows you to restrict access to your services to internal users, with no external access via public internet.")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/ingress-internal-ip?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ingress Controller in an Azure Virtual Network"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://kubernetes.io/docs/concepts/services-networking/ingress/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Overview of Kubernetes Ingress"),t("OutboundLink")],1)])])])])},[],!1,null,null,null);s.default=n.exports}}]);