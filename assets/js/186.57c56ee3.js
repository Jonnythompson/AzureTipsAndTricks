(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{468:function(e,t,s){"use strict";s.r(t);var n=s(43),r=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("📺 Watch the video : "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=IoKkdVCvpNc&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=29?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to work with the Azure Functions File System"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"work-with-the-azure-functions-file-system-using-the-console"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#work-with-the-azure-functions-file-system-using-the-console","aria-hidden":"true"}},[e._v("#")]),e._v(" Work with the Azure Functions File System using the Console")]),e._v(" "),s("p",[e._v('I debated writing this one, but have seen a lot of folks struggling with files and folders while using Azure Functions. The most common question being, "How do I rename my Function?" as shown below.')]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azfunc1.png")}}),e._v(" "),s("p",[e._v("My preferred method for this type of task is working with the Azure Portal Console. You can access it by clicking on the name of your Azure Functions (You may have to click on "),s("strong",[e._v("Platform features")]),e._v(" and looking for "),s("strong",[e._v("Development Tools")]),e._v(" then "),s("strong",[e._v("Command")]),e._v(" as shown below.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azfunc2.png")}}),e._v(" "),s("p",[e._v("Now that we have a "),s("strong",[e._v("Command Prompt")]),e._v(", we should see the following:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> dir\nD:\\home\\site\\wwwroot\nVolume in drive D is Windows\n Volume Serial Number is FE33-4717\n\n Directory of D:\\home\\site\\wwwroot\n\n06/02/2017  02:49 PM    <DIR>          .\n06/02/2017  02:49 PM    <DIR>          ..\n06/02/2017  06:01 PM                28 host.json\n06/02/2017  02:49 PM    <DIR>          TimerTriggerCSharp1\n06/02/2017  08:40 PM    <DIR>          TriggerICS\n               1 File(s)             28 bytes\n               4 Dir(s)  5,497,557,942,272 bytes free\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[e._v("We will rename the "),s("strong",[e._v("TimerTriggerCSharp1")]),e._v(" to something more meaningful by typing the following:")]),e._v(" "),s("p",[s("code",[e._v("ren TimerTriggerCharp1 MyAwesomeNewTriggerName")])]),e._v(" "),s("p",[e._v("You'll need to refresh the Azure Portal and you can see that the name changed.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azfunc3.png")}})])},[],!1,null,null,null);t.default=r.exports}}]);