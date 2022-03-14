"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[215],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=n,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6813:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:1},l="Introduction",u={unversionedId:"tutorials/hubs-browser/index",id:"tutorials/hubs-browser/index",title:"Introduction",description:"In this tutorial we're going to build a Forge application that will let us",source:"@site/docs/tutorials/hubs-browser/index.md",sourceDirName:"tutorials/hubs-browser",slug:"/tutorials/hubs-browser/",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/hubs-browser/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Viewer & UI",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/dotnet/viewer"},next:{title:"Basic Server",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs/server"}},c={},p=[],f={toc:p};function d(e){var t=e.components,s=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this tutorial we're going to build a Forge application that will let us\nbrowse through our designs in 3rd party applications built on top of the platform\nsuch as BIM 360 Docs or ACC."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Preview",src:r(6387).Z,width:"844",height:"536"})),(0,i.kt)("p",null,"We will use the following components of the platform:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/oauth/v2/developers_guide/overview"},"Authentication service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/data/v2/developers_guide/overview"},"Data Management service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/viewer/v7/developers_guide/overview"},"Forge Viewer"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"IDEA: maybe replace the bullet list with a collection of official Forge icons")),(0,i.kt)("p",null,"The full implementation of this sample is available on GitHub:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/petrbroz/forge-hubs-browser-nodejs"},"https://github.com/petrbroz/forge-hubs-browser-nodejs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/petrbroz/forge-hubs-browser-dotnet"},"https://github.com/petrbroz/forge-hubs-browser-dotnet"))),(0,i.kt)("p",null,"Get started by selecting the programming language of your choice:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"nodejs/server"},"Node.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"dotnet/server"},".NET"))))}d.isMDXComponent=!0},6387:function(e,t,r){t.Z=r.p+"assets/images/preview-67e148a6da685077ddb673f1d553792d.gif"}}]);