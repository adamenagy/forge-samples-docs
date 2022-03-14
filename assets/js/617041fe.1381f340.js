"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[501],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return N},default:function(){return E},frontMatter:function(){return y},metadata:function(){return C},toc:function(){return T}});var a=n(7462),o=n(3366),r=n(7294),i=n(3905),l=n(2389),s=n(9366),u=n(6010),p="tabItem_LplD";function c(e){var t,n,o,i=e.lazy,l=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.UB)(),w=b.tabGroupChoices,y=b.setTabGroupChoices,N=(0,r.useState)(k),C=N[0],x=N[1],T=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=w[m];null!=E&&E!==C&&v.some((function(e){return e.value===E}))&&x(E)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==C&&(O(t),x(a),null!=m&&y(m,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;n=T[o]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},h)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:j,onClick:j},o,{className:(0,u.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}function m(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}var h=["components"],f={toc:[]};function v(e){var t=e.components,r=(0,o.Z)(e,h);return(0,i.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We will also need the Node.js ",(0,i.kt)("em",{parentName:"p"},"runtime")," to run our code, and the Node.js package manager, ",(0,i.kt)("em",{parentName:"p"},"NPM"),",\nto manage 3rd party dependencies. You can get an installer for your platform on ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"https://nodejs.org/en/download"),"\nwhich will install both."),(0,i.kt)("p",null,"To make sure the tools are available, try running the following two commands in ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),(0,i.kt)("p",null,"You should see something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Checking node in terminal",src:n(8170).Z,width:"1910",height:"1190"})))}v.isMDXComponent=!0;var g=["components"],k={toc:[]};function b(e){var t=e.components,r=(0,o.Z)(e,g);return(0,i.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We will also need the .NET 6 ",(0,i.kt)("em",{parentName:"p"},"runtime")," to run our code and manage 3rd party dependencies.\nYou can get an installer for your platform on ",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet/6.0"},"https://dotnet.microsoft.com/download/dotnet/6.0"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Our sample applications have been developed and tested with .NET 6.0."))),(0,i.kt)("p",null,"To make sure the tool is available, try running the following command in ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet --version\n")),(0,i.kt)("p",null,"You should see something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Checking dotnet in terminal",src:n(7408).Z,width:"1910",height:"1246"})))}b.isMDXComponent=!0;var w=["components"],y={sidebar_position:2},N="Environment Setup",C={unversionedId:"setup",id:"setup",title:"Environment Setup",description:"Command-line interface",source:"@site/docs/setup.mdx",sourceDirName:".",slug:"/setup",permalink:"/forge-samples-docs/docs/setup",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/setup.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/forge-samples-docs/docs/intro"},next:{title:"Introduction",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/"}},x={},T=[{value:"Command-line interface",id:"command-line-interface",level:2},{value:"Source code management",id:"source-code-management",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Editor",id:"editor",level:2}],O={toc:T};function E(e){var t=e.components,r=(0,o.Z)(e,w);return(0,i.kt)("wrapper",(0,a.Z)({},O,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"environment-setup"},"Environment Setup"),(0,i.kt)("h2",{id:"command-line-interface"},"Command-line interface"),(0,i.kt)("p",null,"Command-line interface, a ",(0,i.kt)("em",{parentName:"p"},"CLI"),", is an essential tool when developing modern web applications.\nIt is often used to initialize new projects, handle their dependencies, or to manage their\nsource code. Different operating systems have their own options (for example, in Windows there's\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cmd.exe"},"Command Prompt")," and ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PowerShell"},"PowerShell"),",\nand Unix-based systems have all sorts of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_shell"},"shells"),")\nbut in our case we're going to be using ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," which is available ",(0,i.kt)("em",{parentName:"p"},"cross-platform"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On Unix-based systems, ",(0,i.kt)("inlineCode",{parentName:"li"},"bash")," (or one of its flavors like ",(0,i.kt)("inlineCode",{parentName:"li"},"zsh"),") is most likely available\nalready, and if not, you can get it from ",(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/bash"},"https://www.gnu.org/software/bash"),"."),(0,i.kt)("li",{parentName:"ul"},"On Windows, ",(0,i.kt)("inlineCode",{parentName:"li"},"bash")," will be installed as part of ",(0,i.kt)("inlineCode",{parentName:"li"},"git"),", the source code management tool\ndiscussed in the next section.")),(0,i.kt)("h2",{id:"source-code-management"},"Source code management"),(0,i.kt)("p",null,"Another essential part of the modern software development, especially for web, is the source code\nmanagement tool ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com"},"git"),". Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Downloads"),"\nsection, and install the latest release for your platform. As mentioned in the previous section,\nthe Windows installer comes with the ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," CLI as well."),(0,i.kt)("p",null,"To check whether ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," is installed and available, try running the following command in ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git --version\n")),(0,i.kt)("p",null,"You should see something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Checking git in terminal",src:n(8292).Z,width:"1910",height:"1190"})),(0,i.kt)("h2",{id:"runtime"},"Runtime"),(0,i.kt)(d,{groupId:"programming-language",mdxType:"Tabs"},(0,i.kt)(m,{value:"dotnet",label:".NET",default:!0,mdxType:"TabItem"},(0,i.kt)(b,{mdxType:"DotnetRuntime"})),(0,i.kt)(m,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)(v,{mdxType:"NodejsRuntime"}))),(0,i.kt)("h2",{id:"editor"},"Editor"),(0,i.kt)("p",null,"For the coding itself you're welcome to use whichever editor you like the most.\nIf you're open to suggestions, we recommend ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code"),"\nwhich is free, cross-platform, and fast. Simply install the latest stable build\nfor your platform."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We've also built an extension for Visual Studio Code that gives you access to\nsome of the Forge services and data directly from the editor, without writing\na single line of code:\n",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=petrbroz.vscode-forge-tools"},"vscode-forge-tools"),"."))))}E.isMDXComponent=!0},7408:function(e,t,n){t.Z=n.p+"assets/images/dotnet-692d8a162c073df86a313effe400bb94.png"},8292:function(e,t,n){t.Z=n.p+"assets/images/git-ece61253dfeb344588795370a1ad3e70.png"},8170:function(e,t,n){t.Z=n.p+"assets/images/node-597c3215c80b863f526ecf0419d78092.png"}}]);