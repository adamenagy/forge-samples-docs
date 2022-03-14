"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[863],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,v=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return r?o.createElement(v,a(a({ref:t},c),{},{components:r})):o.createElement(v,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3194:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:1},u="\xdavod",s={unversionedId:"tutorials/simple-viewer/index",id:"tutorials/simple-viewer/index",title:"\xdavod",description:"V tomto tutori\xe1lu vytvo\u0159\xedme jednoduchou Forge aplikaci, pomoc\xed kter\xe9 budeme moci",source:"@site/i18n/cz/docusaurus-plugin-content-docs/current/tutorials/simple-viewer/index.md",sourceDirName:"tutorials/simple-viewer",slug:"/tutorials/simple-viewer/",permalink:"/forge-samples-docs/cz/docs/tutorials/simple-viewer/",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/simple-viewer/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"P\u0159\xedprava prost\u0159ed\xed",permalink:"/forge-samples-docs/cz/docs/setup"},next:{title:"Basic Server",permalink:"/forge-samples-docs/cz/docs/tutorials/simple-viewer/nodejs/server"}},c={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\xfavod"},"\xdavod"),(0,i.kt)("p",null,"V tomto tutori\xe1lu vytvo\u0159\xedme jednoduchou Forge aplikaci, pomoc\xed kter\xe9 budeme moci\nnahr\xe1t, zkonvertovat a prohl\xed\u017eet na\u0161e vlastn\xed 3D modely a 2D v\xfdresy."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"TODO: screenshot or gif")),(0,i.kt)("p",null,"Budeme vyu\u017e\xedvat n\xe1sleduj\xedc\xed komponenty:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/oauth/v2/developers_guide/overview"},"Authentication service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/data/v2/developers_guide/overview"},"Data Management service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/model-derivative/v2/developers_guide/overview"},"Model Derivative service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/viewer/v7/developers_guide/overview"},"Forge Viewer"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"IDEA: maybe replace the bullet list with a collection of official Forge icons")),(0,i.kt)("p",null,"Kompletn\xed implementace t\xe9to uk\xe1zov\xe9 aplikace je k m\xe1n\xed na GitHubu:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/petrbroz/forge-simple-viewer-nodejs"},"https://github.com/petrbroz/forge-simple-viewer-nodejs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/petrbroz/forge-simple-viewer-dotnet"},"https://github.com/petrbroz/forge-simple-viewer-dotnet"))),(0,i.kt)("p",null,"Za\u010dn\u011bte v\xfdb\u011brem Va\u0161eho programovac\xedho jazyka:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"nodejs/server"},"Node.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"dotnet/server"},".NET"))))}d.isMDXComponent=!0}}]);