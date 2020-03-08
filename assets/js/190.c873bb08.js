(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{473:function(t,e,s){"use strict";s.r(e);var a=s(43),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/logic-apps/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Logic Apps Documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("📺 Watch the video : "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=oIwDgJPmVCg&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=32?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to create a HTTP Trigger with Azure Logic Apps"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h4",{attrs:{id:"my-scenario-tracking-run-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#my-scenario-tracking-run-data","aria-hidden":"true"}},[t._v("#")]),t._v(" My Scenario - Tracking Run Data")]),t._v(" "),s("p",[t._v("I thought I'd use this week's Tip and Tricks series to show a practical example of how I am using Azure. I've started running outdoors and would like to extract several links that my app generates via email and send them to my OneDrive account automatically vs doing it manually after each run. I'm also concerned that the app that generates my data may be abandoned one day. In order to secure my data, I used a combination of "),s("a",{attrs:{href:"http://www.zapier.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zappier.com"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"http://www.azure.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure"),s("OutboundLink")],1),t._v(" to solve my problem and over the course of this week, we'll cover the following sections needed in order to implement this:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip37.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parse Emails to be used in a Azure Logic Apps"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip38.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create JSON Schema to be used in a Azure Logic Apps"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip39.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("This post - Setup an HTTP Request Trigger that is used in an Azure Logic Apps"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip40.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Upload Files from a URL with Azure Logic Apps"),s("OutboundLink")],1)])]),t._v(" "),s("h4",{attrs:{id:"setup-an-http-request-trigger-that-is-used-in-an-azure-logic-apps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-an-http-request-trigger-that-is-used-in-an-azure-logic-apps","aria-hidden":"true"}},[t._v("#")]),t._v(" Setup an HTTP Request Trigger that is used in an Azure Logic Apps")]),t._v(" "),s("p",[t._v("In the "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip38.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("this post"),s("OutboundLink")],1),t._v(", we used Zappier to setup a web hook that calls a POST method that provides the filename, csv, gpx and kml url that it parsed from our email.")]),t._v(" "),s("p",[t._v("We'll pick up by creating a new Azure Logic App. Go to the Azure Portal and create a new Logic App.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/logicappblog1.png")}}),t._v(" "),s("p",[t._v("After the resource is ready, we're are going to need to trigger an action when an HTTP request comes in. Thankfully, this is one of the "),s("strong",[t._v("Common Triggers")]),t._v(" and we can select it to begin.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/logicappblog2.png")}}),t._v(" "),s("p",[t._v("Note that the URL isn't generated until we provide the parameters.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/logicappblog3.png")}}),t._v(" "),s("p",[t._v("Go ahead and press "),s("strong",[t._v("Edit")]),t._v(" and remember the JSON Schema from the "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip38.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("this post"),s("OutboundLink")],1),t._v("? Well, now is the time to paste it in. I'll also include it below:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$schema"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://json-schema.org/draft-06/schema#"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"definitions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/example.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"csv"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/csv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"filename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/filename"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gpx"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/gpx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kml"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/kml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br")])]),s("p",[s("strong",[t._v("Note:")]),t._v(' You can use the "Use sample payload to generate schema" option, but I prefer the additional meta data that '),s("a",{attrs:{href:"https://jsonschema.net/#/editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Schema"),s("OutboundLink")],1),t._v(" can provide.")]),t._v(" "),s("p",[t._v("You'll now have a GET URL that you can put in Zappier and replace the "),s("a",{attrs:{href:"https://requestb.in/",target:"_blank",rel:"noopener noreferrer"}},[t._v("requestb.in"),s("OutboundLink")],1),t._v(" that we stubbed out earlier.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/logicappblog4.png")}}),t._v(" "),s("p",[t._v("Head back over to "),s("a",{attrs:{href:"https://zapier.com/app/editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zappier Editor"),s("OutboundLink")],1),t._v(" and modify your Zap by editing the template and replacing the requestb.in URL with your live Azure Logic Apps ones.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/logicappblog5.png")}})])},[],!1,null,null,null);e.default=r.exports}}]);