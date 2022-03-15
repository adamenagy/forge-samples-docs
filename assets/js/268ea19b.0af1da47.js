"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[110],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="Authentication",u={unversionedId:"tutorials/hubs-browser/nodejs-vscode/auth",id:"tutorials/hubs-browser/nodejs-vscode/auth",title:"Authentication",description:"In this step we're going to extend the server implementation so that it can authenticate itself",source:"@site/docs/tutorials/hubs-browser/nodejs-vscode/auth.md",sourceDirName:"tutorials/hubs-browser/nodejs-vscode",slug:"/tutorials/hubs-browser/nodejs-vscode/auth",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs-vscode/auth",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/hubs-browser/nodejs-vscode/auth.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basic Server",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs-vscode/server"},next:{title:"Browsing Hubs",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs-vscode/hubs"}},c={},p=[{value:"Token management",id:"token-management",level:2},{value:"Server endpoints",id:"server-endpoints",level:2},{value:"Try it out",id:"try-it-out",level:2}],d={toc:p};function h(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"In this step we're going to extend the server implementation so that it can authenticate itself\nto the Forge platform, guide the user through a ",(0,i.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token"},"3-legged OAuth workflow"),",\nand generate access tokens for various needs."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'It is a good practice to generate an "internal" token with more capabilities (for example,\nallowing the owner to create or delete files in the Data Management service) that will only be used\nby the server, and a "public" token with fewer capabilities that can be safely shared with\nthe client-side logic.'))),(0,i.kt)("h2",{id:"token-management"},"Token management"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"forge.js")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," subfolder. This is where we will be implementing\nall the Forge-specific logic that will be used in different areas of our server application. Let's\nstart by adding the following code to the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/forge.js"',title:'"services/forge.js"'},"const { AuthClientThreeLegged, UserProfileApi } = require('forge-apis');\n\nconst { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL } = process.env;\nif (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET || !FORGE_CALLBACK_URL) {\n    console.warn('Missing some of the environment variables.');\n    process.exit(1);\n}\nconst INTERNAL_TOKEN_SCOPES = ['viewables:read', 'data:read'];\nconst PUBLIC_TOKEN_SCOPES = ['viewables:read'];\n\nfunction getAuthorizationUrl() {\n    return 'https://developer.api.autodesk.com' +\n        '/authentication/v1/authorize?response_type=code' +\n        '&client_id=' + FORGE_CLIENT_ID +\n        '&redirect_uri=' + FORGE_CALLBACK_URL +\n        '&scope=' + INTERNAL_TOKEN_SCOPES.join(' ');\n}\n\nconst internalAuthClient = new AuthClientThreeLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL, INTERNAL_TOKEN_SCOPES);\nconst publicAuthClient = new AuthClientThreeLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL, PUBLIC_TOKEN_SCOPES);\n\nasync function authCallbackMiddleware(req, res, next) {\n    const internalCredentials = await internalAuthClient.getToken(req.query.code);\n    const publicCredentials = await publicAuthClient.refreshToken(internalCredentials);\n    req.session.public_token = publicCredentials.access_token;\n    req.session.internal_token = internalCredentials.access_token;\n    req.session.refresh_token = publicCredentials.refresh_token;\n    req.session.expires_at = Date.now() + internalCredentials.expires_in * 1000;\n    next();\n}\n\nasync function authRefreshMiddleware(req, res, next) {\n    const { refresh_token, expires_at } = req.session;\n    if (!refresh_token) {\n        res.status(401).end();\n        return;\n    }\n\n    if (expires_at < Date.now()) {\n        const internalCredentials = await internalAuthClient.refreshToken({ refresh_token });\n        const publicCredentials = await publicAuthClient.refreshToken(internalCredentials);\n        req.session.public_token = publicCredentials.access_token;\n        req.session.internal_token = internalCredentials.access_token;\n        req.session.refresh_token = publicCredentials.refresh_token;\n        req.session.expires_at = Date.now() + internalCredentials.expires_in * 1000;\n    }\n    req.internalOAuthToken = {\n        access_token: req.session.internal_token,\n        expires_in: Math.round((req.session.expires_at - Date.now()) / 1000)\n    };\n    req.publicOAuthToken = {\n        access_token: req.session.public_token,\n        expires_in: Math.round((req.session.expires_at - Date.now()) / 1000)\n    };\n    next();\n}\n\nasync function getUserProfile(token) {\n    const resp = await new UserProfileApi().getUserProfile(internalAuthClient, token);\n    return resp.body;\n}\n\nmodule.exports = {\n    getAuthorizationUrl,\n    authCallbackMiddleware,\n    authRefreshMiddleware,\n    getUserProfile,\n};\n")),(0,i.kt)("p",null,"The script expects a couple of configuration values to be provided via environment variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FORGE_CLIENT_ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"FORGE_CLIENT_SECRET")," are the credentials generated for you after\n",(0,i.kt)("a",{parentName:"li",href:"../../../intro#create-an-app"},"creating a new Forge application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FORGE_CALLBACK_URL")," should be the callback URL the user should be redirected to after logging\nin successfully")),(0,i.kt)("p",null,"The code then provides a couple of helper functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"getAuthorizationUrl")," function generates a URL for our users to be redirected to when\ninitiating the 3-legged authentication workflow"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"authCallbackMiddleware")," function can be used as an Express.js middleware\nwhen the user logs in successfully and is redirected back to our application"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"authRefreshMiddleware")," function is then used as an Express.js middleware for all requests\nthat will need to make use of the Forge access tokens"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"getUserProfile")," function returns additional details about the authenticated user based on\nan existing access token")),(0,i.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,i.kt)("p",null,"Next, let's add a first endpoint to our server. Create an ",(0,i.kt)("inlineCode",{parentName:"p"},"auth.js")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"routes")," subfolder\nwith the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/auth.js"',title:'"routes/auth.js"'},"const express = require('express');\nconst { getAuthorizationUrl, authCallbackMiddleware, authRefreshMiddleware, getUserProfile } = require('../services/forge.js');\n\nlet router = express.Router();\n\nrouter.get('/login', function (req, res) {\n    res.redirect(getAuthorizationUrl());\n});\n\nrouter.get('/logout', function (req, res) {\n    req.session = null;\n    res.redirect('/');\n});\n\nrouter.get('/callback', authCallbackMiddleware, function (req, res) {\n    res.redirect('/');\n});\n\nrouter.get('/token', authRefreshMiddleware, function (req, res) {\n    res.json(req.publicOAuthToken);\n});\n\nrouter.get('/profile', authRefreshMiddleware, async function (req, res, next) {\n    try {\n        const profile = await getUserProfile(req.internalOAuthToken);\n        res.json({ name: `${profile.firstName} ${profile.lastName}` });\n    } catch (err) {\n        next(err);\n    }\n});\n\nmodule.exports = router;\n")),(0,i.kt)("p",null,"Here we implement a new Express.js ",(0,i.kt)("a",{parentName:"p",href:"http://expressjs.com/en/4x/api.html#router"},"router"),' that\nwill handle all the authentication-related endpoints. Let\'s "mount" the router to our server\napplication by modifying ',(0,i.kt)("inlineCode",{parentName:"p"},"server.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst session = require('cookie-session')\nconst PORT = process.env.PORT || 3000;\n\nlet app = express();\napp.use(express.static('public'));\napp.use(session({\n    secret: process.env.SERVER_SESSION_SECRET,\n    maxAge: 24 * 60 * 60 * 1000,\n}));\n// highlight-start\napp.use('/api/auth', require('./routes/auth.js'));\n// highlight-end\napp.use(function (err, req, res, next) {\n    console.error(err);\n    res.status(500).send(err.message);\n});\napp.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));\n")),(0,i.kt)("p",null,"Since we've attached the router to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/auth")," prefix, the router will now handle the following\nrequests:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/auth/login")," will redirect the user to the Autodesk login page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/auth/callback")," is the URL our user will be redirected to after logging in successfully,\nand it is where we're going to generate a new set of tokens for the user"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/auth/logout")," will remove any cookie-based session data for the given user, effectively\nlogging the user out of our application"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/auth/token")," will generate a public access token that will later be used by Forge Viewer\nto load our designs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/auth/profile")," will return a simple JSON with additional information about the logged in user")),(0,i.kt)("h2",{id:"try-it-out"},"Try it out"),(0,i.kt)("p",null,"Let's see if our new server endpoint works. Try setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_SECRET"),"\nenvironment variables to your own Forge app credentials, and set the ",(0,i.kt)("inlineCode",{parentName:"p"},"FORGE_CALLBACK_URL")," env.\nvariable to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/api/auth/callback")," because that's where we implemented our\ncode handling the callbacks from Forge:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export SERVER_SESSION_SECRET=some-secret-phrase\nexport FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nexport FORGE_CALLBACK_URL=http://localhost:3000/api/auth/callback\nnpm start\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The callback URL we specify here must match the callback URL that you've configured\nfor your Forge application on ",(0,i.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/myapps"},"https://forge.autodesk.com/myapps"),"."))),(0,i.kt)("p",null,"When you navigate to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/api/auth/login"},"http://localhost:3000/api/auth/login"),"\nin the browser, you should be redirected to Autodesk login page, and after logging in,\nyou should be redirected back to your application, for now simply showing ",(0,i.kt)("inlineCode",{parentName:"p"},"Cannot GET /"),".\nThis is expected as we haven't implemented the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /")," endpoint yet. However, if you try\nand explore the cookies stored by your browser for the ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," origin,\nyou'll notice that the application is already storing the session data in an ",(0,i.kt)("inlineCode",{parentName:"p"},"express:sess")," cookie.\nThat is where we will get our tokens from later in this tutorial."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Empty Response",src:n(258).Z,width:"1500",height:"1035"})))}h.isMDXComponent=!0},258:function(e,t,n){t.Z=n.p+"assets/images/empty-response-744c7abe45e7047a989ee585658e8869.png"}}]);