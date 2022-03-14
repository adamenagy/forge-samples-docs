"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[848],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2096:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:1},l="Introduction",u={unversionedId:"tutorials/dashboard/index",id:"tutorials/dashboard/index",title:"Introduction",description:"In this tutorial we will enhance an existing Forge application with dashboard-like",source:"@site/docs/tutorials/dashboard/index.md",sourceDirName:"tutorials/dashboard",slug:"/tutorials/dashboard/",permalink:"/forge-samples-docs/cz/docs/tutorials/dashboard/",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/dashboard/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Viewer & UI",permalink:"/forge-samples-docs/cz/docs/tutorials/hubs-browser/dotnet/viewer"},next:{title:"Basic Extension",permalink:"/forge-samples-docs/cz/docs/tutorials/dashboard/basic"}},c={},p=[],d={toc:p};function f(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this tutorial we will enhance an existing Forge application with dashboard-like\nfunctionality, for example, retrieving and aggregating information from our designs'\nmetadata, displaying the results in charts and tables, and linking the results back\nto the design preview."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Preview",src:r(431).Z,width:"640",height:"387"})),(0,a.kt)("p",null,"Throughout this tutorial we will be using the ",(0,a.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/viewer/v7/developers_guide/overview"},"Viewer"),"\nAPI and its various features such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creating and loading viewer extensions"),(0,a.kt)("li",{parentName:"ul"},"Querying metadata of loaded models"),(0,a.kt)("li",{parentName:"ul"},"Controlling the state of the viewer"),(0,a.kt)("li",{parentName:"ul"},"Customizing the viewer toolbar"),(0,a.kt)("li",{parentName:"ul"},"Creating custom UI elements")),(0,a.kt)("p",null,"All the features will be implemented as viewer extensions, and will only use\nthe viewer UI, so you're free to use any Forge application you want as your starting\npoint. We will use the sample app from the ",(0,a.kt)("a",{parentName:"p",href:"../simple-viewer"},"Simple Viewer"),"\ntutorial, and you can already check out the implementation of our dashboard application\nin the ",(0,a.kt)("inlineCode",{parentName:"p"},"dashboard")," branch of the original sample code for Node.js:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/petrbroz/forge-simple-viewer-nodejs/tree/dashboards"},"https://github.com/petrbroz/forge-simple-viewer-nodejs/tree/dashboards"),"."),(0,a.kt)("p",null,"Alright, let's get started!"))}f.isMDXComponent=!0},431:function(e,t,r){t.Z=r.p+"assets/images/preview-1b24d91e14e25520e277435fe5b424d6.gif"}}]);