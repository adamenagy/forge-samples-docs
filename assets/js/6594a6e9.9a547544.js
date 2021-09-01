"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[101],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7973:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:1},s="Introduction",u={unversionedId:"tutorials/simple-viewer/index",id:"tutorials/simple-viewer/index",isDocsHomePage:!1,title:"Introduction",description:"In this tutorial we're going to build a simple Forge application that will let us",source:"@site/docs/tutorials/simple-viewer/index.md",sourceDirName:"tutorials/simple-viewer",slug:"/tutorials/simple-viewer/index",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/index",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/main/website/docs/tutorials/simple-viewer/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Node.js",permalink:"/forge-samples-docs/docs/setup/nodejs"},next:{title:"Basic Server",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/nodejs/server"}},c=[],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this tutorial we're going to build a simple Forge application that will let us\nupload, translate, and preview 3D designs and 2D drawings."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"TODO: screenshot or gif")),(0,i.kt)("p",null,"We will use the following components of the platform:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/oauth/v2/developers_guide/overview"},"Authentication service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/data/v2/developers_guide/overview"},"Data Management service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/model-derivative/v2/developers_guide/overview"},"Model Derivative service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/viewer/v7/developers_guide/overview"},"Forge Viewer"))),(0,i.kt)("p",null,"Get started by selecting the programming language of your choice:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"nodejs/server"},"Node.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"dotnet/server"},".NET"))))}d.isMDXComponent=!0}}]);