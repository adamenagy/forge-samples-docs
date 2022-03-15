"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[750],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(h,s(s({ref:t},c),{},{components:n})):i.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7790:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],o={sidebar_position:3},l="Model Management",u={unversionedId:"tutorials/simple-viewer/nodejs-vscode/models",id:"tutorials/simple-viewer/nodejs-vscode/models",title:"Model Management",description:"Next, let's extend our server so that we can list models, upload them, and initiate their translation for viewing.",source:"@site/docs/tutorials/simple-viewer/nodejs-vscode/03-models.md",sourceDirName:"tutorials/simple-viewer/nodejs-vscode",slug:"/tutorials/simple-viewer/nodejs-vscode/models",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/nodejs-vscode/models",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/simple-viewer/nodejs-vscode/03-models.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/nodejs-vscode/auth"},next:{title:"Viewer & UI",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/nodejs-vscode/viewer"}},c={},p=[{value:"Preparing a bucket",id:"preparing-a-bucket",level:2},{value:"Listing and uploading models",id:"listing-and-uploading-models",level:2},{value:"Translating models",id:"translating-models",level:2},{value:"Server endpoints",id:"server-endpoints",level:2},{value:"Try it out",id:"try-it-out",level:2}],d={toc:p};function m(e){var t=e.components,o=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"model-management"},"Model Management"),(0,r.kt)("p",null,"Next, let's extend our server so that we can list models, upload them, and initiate their translation for viewing."),(0,r.kt)("h2",{id:"preparing-a-bucket"},"Preparing a bucket"),(0,r.kt)("p",null,"First, let's make sure that our application has a bucket in the Data Management service\nto store its files in. Typically the bucket would be created just once as part of a provisioning\nstep but in our sample we will implement a helper function that will make sure that the bucket\nis available, and use it in other parts of the server app."),(0,r.kt)("p",null,"Let's update the ",(0,r.kt)("inlineCode",{parentName:"p"},"services/forge.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/forge.js"',title:'"services/forge.js"'},"const fs = require('fs');\n// highlight-start\nconst { AuthClientTwoLegged, BucketsApi } = require('forge-apis');\nconst { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET } = require('../config.js');\n// highlight-end\n\nlet internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'], true);\nlet publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['viewables:read'], true);\n\nasync function getInternalToken() {\n    if (!internalAuthClient.isAuthorized()) {\n        await internalAuthClient.authenticate();\n    }\n    return internalAuthClient.getCredentials();\n}\n\nasync function getPublicToken() {\n    if (!publicAuthClient.isAuthorized()) {\n        await publicAuthClient.authenticate();\n    }\n    return publicAuthClient.getCredentials();\n}\n\n// highlight-start\nasync function ensureBucketExists() {\n    const token = await getInternalToken();\n    try {\n        await new BucketsApi().getBucketDetails(BUCKET, null, token);\n    } catch (err) {\n        if (err.statusCode === 404) {\n            await new BucketsApi().createBucket({ bucketKey: BUCKET, policyKey: 'temporary' }, {}, null, token);\n        } else {\n            throw err;\n        }\n    }\n}\n// highlight-end\n\nmodule.exports = {\n    getPublicToken,\n};\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ensureBucketExists")," function will simply try and request additional information\nabout a specific bucket using the ",(0,r.kt)("inlineCode",{parentName:"p"},"BucketsApi")," class from the Forge SDK, and if the response\nfrom Forge is ",(0,r.kt)("inlineCode",{parentName:"p"},"404 Not Found"),", it will attempt to create a new bucket with this name."),(0,r.kt)("h2",{id:"listing-and-uploading-models"},"Listing and uploading models"),(0,r.kt)("p",null,"Now, let's add two more functions in ",(0,r.kt)("inlineCode",{parentName:"p"},"services/forge.js")," that will be used to list\nall objects in the preconfigured bucket, and to upload files to this bucket:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/forge.js"',title:'"services/forge.js"'},"const fs = require('fs');\n// highlight-start\nconst { AuthClientTwoLegged, BucketsApi, ObjectsApi } = require('forge-apis');\n// highlight-end\nconst { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET } = require('../config.js');\n\nlet internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'], true);\nlet publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['viewables:read'], true);\n\nasync function getInternalToken() {\n    if (!internalAuthClient.isAuthorized()) {\n        await internalAuthClient.authenticate();\n    }\n    return internalAuthClient.getCredentials();\n}\n\nasync function getPublicToken() {\n    if (!publicAuthClient.isAuthorized()) {\n        await publicAuthClient.authenticate();\n    }\n    return publicAuthClient.getCredentials();\n}\n\nasync function ensureBucketExists(bucketKey) {\n    try {\n        await new BucketsApi().getBucketDetails(bucketKey, null, await getInternalToken());\n    } catch (err) {\n        if (err.statusCode === 404) {\n            await new BucketsApi().createBucket({ bucketKey, policyKey: 'temporary' }, {}, null, await getInternalToken());\n        } else {\n            throw err;\n        }\n    }\n}\n\n// highlight-start\nasync function listObjects() {\n    await ensureBucketExists(FORGE_BUCKET);\n    let resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64 }, null, await getInternalToken());\n    let objects = resp.body.items;\n    while (resp.body.next) {\n        const startAt = new URL(resp.body.next).searchParams.get('startAt');\n        resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64, startAt }, null, await getInternalToken());\n        objects = objects.concat(resp.body.items);\n    }\n    return objects;\n}\n\nasync function uploadObject(objectName, filePath) {\n    await ensureBucketExists(FORGE_BUCKET);\n    const buffer = fs.readFileSync(filePath);\n    const resp = await new ObjectsApi().uploadObject(FORGE_BUCKET, objectName, buffer.byteLength, buffer, {}, null, await getInternalToken());\n    return resp.body;\n}\n// highlight-end\n\nmodule.exports = {\n    getPublicToken,\n// highlight-start\n    listObjects,\n    uploadObject,\n// highlight-end\n};\n")),(0,r.kt)("p",null,"As you can see, the ",(0,r.kt)("inlineCode",{parentName:"p"},"getObjects")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectsApi")," class (responsible for listing files in a Data Management bucket)\nuses pagination. In our code we simply iterate through all the pages and return all files from our application's bucket\nin a single list."),(0,r.kt)("h2",{id:"translating-models"},"Translating models"),(0,r.kt)("p",null,"Finally, we will implement a couple of helper functions that will extract various types of information\nfrom the uploaded files - for example, 2D drawings, 3D geometry, and metadata - that we can later load\ninto the Forge Viewer component in our HTML page. To do so, we will need to start a new conversion job\nin the ",(0,r.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/model-derivative/v2/developers_guide/overview"},"Model Derivative"),"\nservice, and checking the status of the conversion. Also, the Model Derivative service requires all IDs\nwe use in the API calls to be ",(0,r.kt)("a",{parentName:"p",href:"https://cs.wikipedia.org/wiki/Base64"},"base64"),"-encoded, so we include a small\nutility function that will help with that."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Base64-encoded IDs are referred to as ",(0,r.kt)("em",{parentName:"p"},"URNs"),"."))),(0,r.kt)("p",null,"Add the following code to ",(0,r.kt)("inlineCode",{parentName:"p"},"services/forge.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/forge.js"',title:'"services/forge.js"'},"const fs = require('fs');\n// highlight-start\nconst { AuthClientTwoLegged, BucketsApi, ObjectsApi, DerivativesApi } = require('forge-apis');\n// highlight-end\nconst { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET } = require('../config.js');\n\nlet internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'], true);\nlet publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['viewables:read'], true);\n\nasync function getInternalToken() {\n    if (!internalAuthClient.isAuthorized()) {\n        await internalAuthClient.authenticate();\n    }\n    return internalAuthClient.getCredentials();\n}\n\nasync function getPublicToken() {\n    if (!publicAuthClient.isAuthorized()) {\n        await publicAuthClient.authenticate();\n    }\n    return publicAuthClient.getCredentials();\n}\n\nasync function ensureBucketExists(bucketKey) {\n    try {\n        await new BucketsApi().getBucketDetails(bucketKey, null, await getInternalToken());\n    } catch (err) {\n        if (err.statusCode === 404) {\n            await new BucketsApi().createBucket({ bucketKey, policyKey: 'temporary' }, {}, null, await getInternalToken());\n        } else {\n            throw err;\n        }\n    }\n}\n\nasync function listObjects() {\n    await ensureBucketExists(FORGE_BUCKET);\n    let resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64 }, null, await getInternalToken());\n    let objects = resp.body.items;\n    while (resp.body.next) {\n        const startAt = new URL(resp.body.next).searchParams.get('startAt');\n        resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64, startAt }, null, await getInternalToken());\n        objects = objects.concat(resp.body.items);\n    }\n    return objects;\n}\n\nasync function uploadObject(objectName, filePath) {\n    await ensureBucketExists(FORGE_BUCKET);\n    const buffer = fs.readFileSync(filePath);\n    const resp = await new ObjectsApi().uploadObject(FORGE_BUCKET, objectName, buffer.byteLength, buffer, {}, null, await getInternalToken());\n    return resp.body;\n}\n\n// highlight-start\nasync function translateObject(urn, rootFilename) {\n    const job = {\n        input: { urn },\n        output: { formats: [{ type: 'svf', views: ['2d', '3d'] }] }\n    };\n    if (rootFilename) {\n        job.input.compressedUrn = true;\n        job.input.rootFilename = rootFilename;\n    }\n    const resp = await new DerivativesApi().translate(job, {}, null, await getInternalToken());\n    return resp.body;\n}\n\nasync function getManifest(urn) {\n    try {\n        const resp = await new DerivativesApi().getManifest(urn, {}, null, await getInternalToken());\n        return resp.body;\n    } catch (err) {\n        if (err.statusCode === 404) {\n            return null;\n        } else {\n            throw err;\n        }\n    }\n}\n\nfunction urnify(id) {\n    return Buffer.from(id).toString('base64').replace(/=/g, '');\n}\n// highlight-end\n\nmodule.exports = {\n    getPublicToken,\n    listObjects,\n    uploadObject,\n// highlight-start\n    translateObject,\n    getManifest,\n    urnify,\n// highlight-end\n};\n")),(0,r.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,r.kt)("p",null,"Finally, let's make this new functionality available to the client through another\nExpress router. Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"models.js")," file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"routes")," subfolder with the following\ncontent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/models.js"',title:'"routes/models.js"'},"const express = require('express');\nconst formidable = require('express-formidable');\nconst { listObjects, uploadObject, translateObject, getManifest, urnify } = require('../services/forge.js');\n\nlet router = express.Router();\n\nrouter.get('/', async function (req, res, next) {\n    try {\n        const objects = await listObjects();\n        res.json(objects.map(o => ({\n            name: o.objectKey,\n            urn: urnify(o.objectId)\n        })));\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.get('/:urn/status', async function (req, res, next) {\n    try {\n        const manifest = await getManifest(req.params.urn);\n        if (manifest) {\n            let messages = [];\n            if (manifest.derivatives) {\n                for (const derivative of manifest.derivatives) {\n                    messages = messages.concat(derivative.messages || []);\n                    if (derivative.children) {\n                        for (const child of derivative.children) {\n                            messages.concat(child.messages || []);\n                        }\n                    }\n                }\n            }\n            res.json({ status: manifest.status, progress: manifest.progress, messages });\n        } else {\n            res.json({ status: 'n/a' });\n        }\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.post('/', formidable(), async function (req, res, next) {\n    const file = req.files['model-file'];\n    if (!file) {\n        res.status(400).send('The required field (\"model-file\") is missing.');\n        return;\n    }\n    try {\n        const obj = await uploadObject(file.name, file.path);\n        await translateObject(urnify(obj.objectId), req.fields['model-zip-entrypoint']);\n        res.json({\n            name: obj.objectKey,\n            urn: urnify(obj.objectId)\n        });\n    } catch (err) {\n        next(err);\n    }\n});\n\nmodule.exports = router;\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"formidable()")," middleware used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request handler will make sure that any ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," content\ncoming with the request is parsed and available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"req.files")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"req.fields")," properties."))),(0,r.kt)("p",null,"And mount the router to our server application by modifying ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst { PORT } = require('./config.js');\n\nlet app = express();\napp.use(express.static('public'));\napp.use('/api/auth', require('./routes/auth.js'));\n// highlight-start\napp.use('/api/models', require('./routes/models.js'));\n// highlight-end\napp.use(function (err, req, res, next) {\n    console.error(err);\n    res.status(500).send(err.message);\n});\napp.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });\n")),(0,r.kt)("p",null,"The router will handle 3 types of requests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /api/models")," - when the client wants to get the list of all models available for viewing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /api/models/:urn/status")," - used to check the status of the conversion (incl. error messages if there are any)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/models")," - when the client wants to upload a new model and start its translation")),(0,r.kt)("h2",{id:"try-it-out"},"Try it out"),(0,r.kt)("p",null,"Time to try our improved server application. This time, apart from setting the Forge application\ncredentials, you can also include the name of the Data Management bucket you want to use via\nthe optional ",(0,r.kt)("inlineCode",{parentName:"p"},"FORGE_BUCKET")," environment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nexport FORGE_BUCKET=your-custom-bucket-name\nnpm start\n")),(0,r.kt)("p",null,"When you navigate to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/api/models"},"http://localhost:3000/api/models"),"\nin the browser, the server should respond with a JSON list with names and URNs of all objects\navailable in your configured bucket. If you are getting started, you may get a JSON response\nwith an empty array (",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),") which is expected. In the screenshot below we can already see a couple\nof files that were uploaded to our bucket in the past."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Server Response",src:n(3741).Z,width:"1500",height:"1035"})))}m.isMDXComponent=!0},3741:function(e,t,n){t.Z=n.p+"assets/images/data-response-6b458b15736c261dd2ab5d6ea2f63734.png"}}]);