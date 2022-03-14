"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[367],{5881:function(e,n,t){t.d(n,{ZP:function(){return d}});var o=t(7462),i=t(3366),a=(t(7294),t(3905)),l=t(1736),r=["components"],s={toc:[{value:"User interface",id:"user-interface",level:2},{value:"Viewer logic",id:"viewer-logic",level:2},{value:"Application logic",id:"application-logic",level:2}]};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"user-interface"},"User interface"),(0,a.kt)("p",null,"Let's start by defining the UI of our application with a simple HTML markup and CSS."),(0,a.kt)("p",null,"Create an ",(0,a.kt)("code",null,"index.html")," file in the ",(0,a.kt)("code",null,t.assetsFolder)," subfolder with the following content:"),(0,a.kt)(l.Z,{title:t.assetsFolder+"/index.html",className:"language-html",mdxType:"CodeBlock"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <link rel="stylesheet" href="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.css">\n    <link rel="stylesheet" href="/main.css">\n    <title>Autodesk Forge: Simple Viewer</title>\n</head>\n\n<body>\n    <div id="header">\n        <img class="logo" src="/logo.png" alt="Autodesk Forge">\n        <span class="title">Simple Viewer</span>\n        <select name="models" id="models"></select>\n        <button id="upload" title="Upload New Model">Upload</button>\n        <input style="display: none" type="file" id="input">\n    </div>\n    <div id="preview"></div>\n    <div id="overlay"></div>\n    <script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.js"><\/script>\n    <script src="/main.js" type="module"><\/script>\n</body>\n\n</html>'),(0,a.kt)("p",null,"The HTML markup simply uses a ",(0,a.kt)("inlineCode",{parentName:"p"},"<select>")," element as the dropdown for listing the viewable models,\nand an ",(0,a.kt)("inlineCode",{parentName:"p"},'<input type="file">')," element with a ",(0,a.kt)("inlineCode",{parentName:"p"},"<button>")," to handle the uploading of a new model."),(0,a.kt)("p",null,"Create a ",(0,a.kt)("code",null,"main.css")," file, also under the ",(0,a.kt)("code",null,t.assetsFolder)," subfolder, and populate it with these CSS rules:"),(0,a.kt)(l.Z,{title:t.assetsFolder+"/main.css",className:"language-css",mdxType:"CodeBlock"},"body, html {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    font-family: ArtifaktElement; /* Will be added by Forge Viewer */\n}\n\n#header, #preview, #overlay {\n    position: absolute;\n    width: 100%;\n}\n\n#header {\n    height: 3em;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#preview, #overlay {\n    top: 3em;\n    bottom: 0;\n}\n\n#overlay {\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 1em;\n    display: none;\n}\n\n#overlay > .notification {\n    margin: auto;\n    padding: 1em;\n    max-width: 50%;\n    background: white;\n}\n\n#header > * {\n    height: 2em;\n    margin: 0 0.5em;\n    font-size: 1em;\n    font-family: ArtifaktElement;\n}\n\n#header .title {\n    flex: 1 0 auto;\n    height: auto;\n}\n\n#models {\n    flex: 0 1 auto;\n    min-width: 2em;\n}"),(0,a.kt)("p",null,"The application will look for ",(0,a.kt)("code",null,"favicon.ico")," and ",(0,a.kt)("code",null,"logo.png")," images under the ",(0,a.kt)("code",null,t.assetsFolder)," folder to use as the website's icon and logo. If you don't have any images of your own, feel free to download them from one of our samples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/public/favicon.ico"},"https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/public/favicon.ico")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/public/logo.png"},"https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/public/logo.png"))),(0,a.kt)("h2",{id:"viewer-logic"},"Viewer logic"),(0,a.kt)("p",null,"Next, let's implement the Forge Viewer functionality for our application. Create a ",(0,a.kt)("code",null,"viewer.js")," file under the ",(0,a.kt)("code",null,t.assetsFolder)," subfolder with the following code:"),(0,a.kt)(l.Z,{title:t.assetsFolder+"/viewer.js",className:"language-js",mdxType:"CodeBlock"},"/// import * as Autodesk from \"@types/forge-viewer\";\n\nexport function initViewer(container) {\n    async function getAccessToken(callback) {\n        try {\n            const resp = await fetch('/api/auth/token');\n            if (!resp.ok) {\n                throw new Error(await resp.text());\n            }\n            const { access_token, expires_in } = await resp.json();\n            callback(access_token, expires_in);\n        } catch (err) {\n            alert('Could not obtain access token. See the console for more details.');\n            console.error(err);\n        }\n    }\n    return new Promise(function (resolve, reject) {\n        Autodesk.Viewing.Initializer({ getAccessToken }, function () {\n            const config = {\n                extensions: ['Autodesk.DocumentBrowser']\n            };\n            const viewer = new Autodesk.Viewing.GuiViewer3D(container, config);\n            viewer.start();\n            viewer.setTheme('light-theme');\n            resolve(viewer);\n        });\n    });\n}\n\nexport function loadModel(viewer, urn) {\n    return new Promise(function (resolve, reject) {\n        function onDocumentLoadSuccess(doc) {\n            resolve(viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry()));\n        }\n        function onDocumentLoadFailure(code, message, errors) {\n            reject({ code, message, errors });\n        }\n        viewer.setLightPreset(0);\n        Autodesk.Viewing.Document.load('urn:' + urn, onDocumentLoadSuccess, onDocumentLoadFailure);\n    });\n}"),(0,a.kt)("p",null,"The script is an ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ES6 module"),"\nthat exports two functions, ",(0,a.kt)("inlineCode",{parentName:"p"},"initViewer")," that will create a new instance of Forge Viewer\nin the specified DOM container, and ",(0,a.kt)("inlineCode",{parentName:"p"},"loadModel")," which will load a specific model to the viewer.\nWhen initializing the viewer we include a small helper function (",(0,a.kt)("inlineCode",{parentName:"p"},"getAccessToken"),") that\nretrieves a public token from our server application. The viewer can then use this token\nto start loading assets from the Model Derivative service."),(0,a.kt)("h2",{id:"application-logic"},"Application logic"),(0,a.kt)("p",null,"Finally, let's define the logic of the web application itself. We will need to populate the UI with all models available for viewing, as well as add UI for uploading and translating new models. Create a ",(0,a.kt)("code",null,"main.js")," file under the ",(0,a.kt)("code",null,t.assetsFolder)," subfolder with the following code:"),(0,a.kt)(l.Z,{title:t.assetsFolder+"/main.js",className:"language-js",mdxType:"CodeBlock"},"import { initViewer, loadModel } from './viewer.js';\n\ninitViewer(document.getElementById('preview')).then(viewer => {\n    const urn = window.location.hash?.substring(1);\n    setupModelSelection(viewer, urn);\n    setupModelUpload(viewer);\n});\n\nasync function setupModelSelection(viewer, selectedUrn) {\n    const dropdown = document.getElementById('models');\n    dropdown.innerHTML = '';\n    try {\n        const resp = await fetch('/api/models');\n        if (!resp.ok) {\n            throw new Error(await resp.text());\n        }\n        const models = await resp.json();\n        dropdown.innerHTML = models.map(model => `<option value=${model.urn} ${model.urn === selectedUrn ? 'selected' : ''}>${model.name}</option>`).join('\\n');\n        dropdown.onchange = () => onModelSelected(viewer, dropdown.value);\n        if (dropdown.value) {\n            onModelSelected(viewer, dropdown.value);\n        }\n    } catch (err) {\n        alert('Could not list models. See the console for more details.');\n        console.error(err);\n    }\n}\n\nasync function setupModelUpload(viewer) {\n    const upload = document.getElementById('upload');\n    const input = document.getElementById('input');\n    const models = document.getElementById('models');\n    upload.onclick = () => input.click();\n    input.onchange = async () => {\n        const file = input.files[0];\n        let data = new FormData();\n        data.append('model-file', file);\n        if (file.name.endsWith('.zip')) { // When uploading a zip file, ask for the main design file in the archive\n            const entrypoint = window.prompt('Please enter the filename of the main design inside the archive.');\n            data.append('model-zip-entrypoint', entrypoint);\n        }\n        upload.setAttribute('disabled', 'true');\n        models.setAttribute('disabled', 'true');\n        showNotification(`Uploading model <em>${file.name}</em>. Do not reload the page.`);\n        try {\n            const resp = await fetch('/api/models', { method: 'POST', body: data });\n            if (!resp.ok) {\n                throw new Error(await resp.text());\n            }\n            const model = await resp.json();\n            setupModelSelection(viewer, model.urn);\n        } catch (err) {\n            alert(`Could not upload model ${file.name}. See the console for more details.`);\n            console.error(err);\n        } finally {\n            clearNotification();\n            upload.removeAttribute('disabled');\n            models.removeAttribute('disabled');\n            input.value = '';\n        }\n    };\n}\n\nasync function onModelSelected(viewer, urn) {\n    if (window.onModelSelectedTimeout) {\n        clearTimeout(window.onModelSelectedTimeout);\n        delete window.onModelSelectedTimeout;\n    }\n    window.location.hash = urn;\n    try {\n        const resp = await fetch(`/api/models/${urn}/status`);\n        if (!resp.ok) {\n            throw new Error(await resp.text());\n        }\n        const status = await resp.json();\n        switch (status.status) {\n            case 'n/a':\n                showNotification(`Model has not been translated.`);\n                break;\n            case 'inprogress':\n                showNotification(`Model is being translated (${status.progress})...`);\n                window.onModelSelectedTimeout = setTimeout(onModelSelected, 5000, viewer, urn);\n                break;\n            case 'failed':\n                showNotification(`Translation failed. <ul>${status.messages.map(msg => `<li>${JSON.stringify(msg)}</li>`).join('')}</ul>`);\n                break;\n            default:\n                clearNotification();\n                loadModel(viewer, urn);\n                break; \n        }\n    } catch (err) {\n        alert('Could not load model. See the console for more details.');\n        console.error(err);\n    }\n}\n\nfunction showNotification(message) {\n    const overlay = document.getElementById('overlay');\n    overlay.innerHTML = `<div class=\"notification\">${message}</div>`;\n    overlay.style.display = 'flex';\n}\n\nfunction clearNotification() {\n    const overlay = document.getElementById('overlay');\n    overlay.innerHTML = '';\n    overlay.style.display = 'none';\n}"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Note that since ",(0,a.kt)("inlineCode",{parentName:"p"},"main.js")," is also an ES6 module, we have to use ",(0,a.kt)("inlineCode",{parentName:"p"},'type="module"')," in its ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tag in our HTML."))),(0,a.kt)("p",null,"The scripts will initialize the viewer, populate a dropdown element in the UI with models\nretrieved from the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/models")," endpoint, and setup the file upload. And when one of the models\nin the dropdown is selected, the app logic will check the status of the model in Forge (for example,\nwhether it's still being translated, or whether the translation failed), and load the model when\nit's available."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Note that when the uploaded file has a ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")," extension, the JavaScript logic will also prompt the user\nfor the name of the file ",(0,a.kt)("strong",{parentName:"p"},"inside the archive")," that should be converted by the Model Derivative service."))))}d.isMDXComponent=!0},6823:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=t(7462),i=t(3366),a=(t(7294),t(3905)),l=t(5881),r=["components"],s={sidebar_position:4},d="Viewer & UI",c={unversionedId:"tutorials/simple-viewer/dotnet/viewer",id:"tutorials/simple-viewer/dotnet/viewer",title:"Viewer & UI",description:"Finally, we're ready to build the client-side piece of our application.",source:"@site/docs/tutorials/simple-viewer/dotnet/04-viewer.mdx",sourceDirName:"tutorials/simple-viewer/dotnet",slug:"/tutorials/simple-viewer/dotnet/viewer",permalink:"/forge-samples-docs/cz/docs/tutorials/simple-viewer/dotnet/viewer",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/simple-viewer/dotnet/04-viewer.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Model Management",permalink:"/forge-samples-docs/cz/docs/tutorials/simple-viewer/dotnet/models"},next:{title:"Introduction",permalink:"/forge-samples-docs/cz/docs/tutorials/hubs-browser/"}},p={},u=[{value:"Try it out",id:"try-it-out",level:2}],m={toc:u};function h(e){var n=e.components,s=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"viewer--ui"},"Viewer & UI"),(0,a.kt)("p",null,"Finally, we're ready to build the client-side piece of our application."),(0,a.kt)(l.ZP,{assetsFolder:"wwwroot",mdxType:"ViewerPartial"}),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("p",null,"And that's it! Your application is now ready for action. Start it from the command line as usual:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nexport FORGE_BUCKET=optional-custom-bucket-name\ndotnet run\n")),(0,a.kt)("p",null,"And then navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://localhost:5001"},"https://localhost:5001")," in your browser. You should be\npresented with a simple UI, with a dropdown in the top-right corner that will eventually get populated\nwith all models available in your configured bucket, and with a button for uploading new models.\nAnd as soon as you select one of the options from the dropdown, the corresponding model will get loaded\nin the viewer occupying the rest of the webpage."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Final App",src:t(6038).Z,width:"1890",height:"1304"})))}h.isMDXComponent=!0},6038:function(e,n,t){n.Z=t.p+"assets/images/final-app-e22577b435e63247d263e62a9a0c4221.png"}}]);