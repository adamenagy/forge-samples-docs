"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[525],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(k,o(o({ref:n},p),{},{components:t})):a.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5801:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],s={sidebar_position:3},c="Data Management",l={unversionedId:"tutorials/simple-viewer/dotnet/data",id:"tutorials/simple-viewer/dotnet/data",isDocsHomePage:!1,title:"Data Management",description:"Next, let's extend our server so that we can list models, upload them, and also initiate",source:"@site/docs/tutorials/simple-viewer/dotnet/data.md",sourceDirName:"tutorials/simple-viewer/dotnet",slug:"/tutorials/simple-viewer/dotnet/data",permalink:"/forge-samples-docs/cz/docs/tutorials/simple-viewer/dotnet/data",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/simple-viewer/dotnet/data.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/forge-samples-docs/cz/docs/tutorials/simple-viewer/dotnet/auth"},next:{title:"Viewer & UI",permalink:"/forge-samples-docs/cz/docs/tutorials/simple-viewer/dotnet/viewer"}},p=[{value:"Preparing a bucket",id:"preparing-a-bucket",children:[]},{value:"Listing models",id:"listing-models",children:[]},{value:"Uploading and translating models",id:"uploading-and-translating-models",children:[]},{value:"Server endpoints",id:"server-endpoints",children:[]},{value:"Try it out",id:"try-it-out",children:[]}],u={toc:p};function d(e){var n=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-management"},"Data Management"),(0,r.kt)("p",null,"Next, let's extend our server so that we can list models, upload them, and also initiate\ntheir translation for viewing."),(0,r.kt)("h2",{id:"preparing-a-bucket"},"Preparing a bucket"),(0,r.kt)("p",null,"First, let's make sure that our application has a bucket in the Data Management service\nto store its files in. Typically the bucket would be created just once as part of a provisioning\nstep but in our sample we will implement a helper function that will make sure that the bucket\nis available. Let's update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Models/ForgeService.cs")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/ForgeService.cs"',title:'"Models/ForgeService.cs"'},'using Autodesk.Forge;\nusing Autodesk.Forge.Client;\nusing Autodesk.Forge.Model;\n\nnamespace simpleviewer\n{\n    public class Token\n    {\n        public string AccessToken { get; set; }\n        public DateTime ExpiresAt { get; set; }\n    }\n\n    public class ForgeService\n    {\n        private readonly string _clientId;\n        private readonly string _clientSecret;\n        private readonly string _bucket;\n        private Token _internalTokenCache;\n        private Token _publicTokenCache;\n\n        public ForgeService(string clientId, string clientSecret, string bucket = null)\n        {\n            _clientId = clientId;\n            _clientSecret = clientSecret;\n            _bucket = string.IsNullOrEmpty(bucket) ? string.Format("{0}-basic-app", _clientId.ToLower()) : bucket;\n        }\n\n        // highlight-start\n        private async Task EnsureBucketExists(string bucketKey)\n        {\n            var token = await GetInternalToken();\n            var api = new BucketsApi();\n            api.Configuration.AccessToken = token.AccessToken;\n            try\n            {\n                await api.GetBucketDetailsAsync(bucketKey);\n            }\n            catch (ApiException e)\n            {\n                if (e.ErrorCode == 404)\n                {\n                    await api.CreateBucketAsync(new PostBucketsPayload(bucketKey, null, PostBucketsPayload.PolicyKeyEnum.Temporary));\n                }\n                else\n                {\n                    throw e;\n                }\n            }\n        }\n        // highlight-end\n\n        public async Task<Token> GetPublicToken()\n        {\n            if (_publicTokenCache == null || _publicTokenCache.ExpiresAt < DateTime.UtcNow)\n                _publicTokenCache = await GetToken(new Scope[] { Scope.ViewablesRead });\n            return _publicTokenCache;\n        }\n\n        private async Task<Token> GetInternalToken()\n        {\n            if (_internalTokenCache == null || _internalTokenCache.ExpiresAt < DateTime.UtcNow)\n                _internalTokenCache = await GetToken(new Scope[] { Scope.BucketCreate, Scope.BucketRead, Scope.DataRead, Scope.DataWrite, Scope.DataCreate });\n            return _internalTokenCache;\n        }\n\n        private async Task<Token> GetToken(Scope[] scopes)\n        {\n            dynamic auth = await new TwoLeggedApi().AuthenticateAsync(_clientId, _clientSecret, "client_credentials", scopes);\n            return new Token\n            {\n                AccessToken = auth.access_token,\n                ExpiresAt = DateTime.UtcNow.AddSeconds(auth.expires_in)\n            };\n        }\n    }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EnsureBucketExists")," method will simply try and request additional information\nabout a specific bucket, and if the response from Forge is ",(0,r.kt)("inlineCode",{parentName:"p"},"404 Not Found"),", it will\nattempt to create a new bucket with that name."),(0,r.kt)("h2",{id:"listing-models"},"Listing models"),(0,r.kt)("p",null,"Now we will update the ",(0,r.kt)("inlineCode",{parentName:"p"},"ForgeService")," class with a helper function that will\nlist all objects in the preconfigured bucket:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/ForgeService.cs"',title:'"Models/ForgeService.cs"'},'using Autodesk.Forge;\nusing Autodesk.Forge.Client;\nusing Autodesk.Forge.Model;\n\nnamespace simpleviewer\n{\n    public class Token\n    {\n        public string AccessToken { get; set; }\n        public DateTime ExpiresAt { get; set; }\n    }\n\n    public class ForgeService\n    {\n        private readonly string _clientId;\n        private readonly string _clientSecret;\n        private readonly string _bucket;\n        private Token _internalTokenCache;\n        private Token _publicTokenCache;\n\n        public ForgeService(string clientId, string clientSecret, string bucket = null)\n        {\n            _clientId = clientId;\n            _clientSecret = clientSecret;\n            _bucket = string.IsNullOrEmpty(bucket) ? string.Format("{0}-basic-app", _clientId.ToLower()) : bucket;\n        }\n\n        // highlight-start\n        public async Task<IEnumerable<dynamic>> GetObjects()\n        {\n            const int PageSize = 64;\n            await EnsureBucketExists(_bucket);\n            var token = await GetInternalToken();\n            var api = new ObjectsApi();\n            api.Configuration.AccessToken = token.AccessToken;\n            var objects = new List<dynamic>();\n            dynamic response = await api.GetObjectsAsync(_bucket, PageSize);\n            foreach (KeyValuePair<string, dynamic> obj in new DynamicDictionaryItems(response.items))\n            {\n                objects.Add(new { name = obj.Value.objectKey, urn = Base64Encode(obj.Value.objectId) });\n            }\n            while ((response as DynamicDictionary).Dictionary.ContainsKey("next")) // This feels hacky... is there a better way?\n            {\n                var queryParams = Microsoft.AspNetCore.WebUtilities.QueryHelpers.ParseQuery(new Uri(response.next).Query);\n                response = await api.GetObjectsAsync(_bucket, PageSize, null, queryParams["startAt"]);\n                foreach (KeyValuePair<string, dynamic> obj in new DynamicDictionaryItems(response.items))\n                {\n                    objects.Add(new { name = obj.Value.objectKey, urn = Base64Encode(obj.Value.objectId) });\n                }\n            }\n            return objects;\n        }\n        // highlight-end\n\n        private async Task EnsureBucketExists(string bucketKey)\n        {\n            var token = await GetInternalToken();\n            var api = new BucketsApi();\n            api.Configuration.AccessToken = token.AccessToken;\n            try\n            {\n                await api.GetBucketDetailsAsync(bucketKey);\n            }\n            catch (ApiException e)\n            {\n                if (e.ErrorCode == 404)\n                {\n                    await api.CreateBucketAsync(new PostBucketsPayload(bucketKey, null, PostBucketsPayload.PolicyKeyEnum.Temporary));\n                }\n                else\n                {\n                    throw e;\n                }\n            }\n        }\n\n        public async Task<Token> GetPublicToken()\n        {\n            if (_publicTokenCache == null || _publicTokenCache.ExpiresAt < DateTime.UtcNow)\n                _publicTokenCache = await GetToken(new Scope[] { Scope.ViewablesRead });\n            return _publicTokenCache;\n        }\n\n        private async Task<Token> GetInternalToken()\n        {\n            if (_internalTokenCache == null || _internalTokenCache.ExpiresAt < DateTime.UtcNow)\n                _internalTokenCache = await GetToken(new Scope[] { Scope.BucketCreate, Scope.BucketRead, Scope.DataRead, Scope.DataWrite, Scope.DataCreate });\n            return _internalTokenCache;\n        }\n\n        private async Task<Token> GetToken(Scope[] scopes)\n        {\n            dynamic auth = await new TwoLeggedApi().AuthenticateAsync(_clientId, _clientSecret, "client_credentials", scopes);\n            return new Token\n            {\n                AccessToken = auth.access_token,\n                ExpiresAt = DateTime.UtcNow.AddSeconds(auth.expires_in)\n            };\n        }\n\n        // highlight-start\n        private static string Base64Encode(string plainText)\n        {\n            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);\n            return System.Convert.ToBase64String(plainTextBytes).TrimEnd(\'=\');\n        }\n        // highlight-end\n    }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GetObjects")," method pages through all objects in the bucket, and returns their name and URN\n(the base64-encoded ID that will later be used when communicating with the Model Derivative service)."),(0,r.kt)("h2",{id:"uploading-and-translating-models"},"Uploading and translating models"),(0,r.kt)("p",null,"Next we will add helper methods to ",(0,r.kt)("inlineCode",{parentName:"p"},"ForgeService")," that will handle the uploading of files\nto the Data Management service, and their translation into a format that can later be loaded into\nForge Viewer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/ForgeService.cs"',title:'"Models/ForgeService.cs"'},'using Autodesk.Forge;\nusing Autodesk.Forge.Client;\nusing Autodesk.Forge.Model;\n\nnamespace simpleviewer\n{\n    public class Token\n    {\n        public string AccessToken { get; set; }\n        public DateTime ExpiresAt { get; set; }\n    }\n\n    public class ForgeService\n    {\n        private readonly string _clientId;\n        private readonly string _clientSecret;\n        private readonly string _bucket;\n        private Token _internalTokenCache;\n        private Token _publicTokenCache;\n\n        public ForgeService(string clientId, string clientSecret, string bucket = null)\n        {\n            _clientId = clientId;\n            _clientSecret = clientSecret;\n            _bucket = string.IsNullOrEmpty(bucket) ? string.Format("{0}-basic-app", _clientId.ToLower()) : bucket;\n        }\n\n        public async Task<IEnumerable<dynamic>> GetObjects()\n        {\n            const int PageSize = 64;\n            await EnsureBucketExists(_bucket);\n            var token = await GetInternalToken();\n            var api = new ObjectsApi();\n            api.Configuration.AccessToken = token.AccessToken;\n            var objects = new List<dynamic>();\n            dynamic response = await api.GetObjectsAsync(_bucket, PageSize);\n            foreach (KeyValuePair<string, dynamic> obj in new DynamicDictionaryItems(response.items))\n            {\n                objects.Add(new { name = obj.Value.objectKey, urn = Base64Encode(obj.Value.objectId) });\n            }\n            while ((response as DynamicDictionary).Dictionary.ContainsKey("next")) // This feels hacky... is there a better way?\n            {\n                var queryParams = Microsoft.AspNetCore.WebUtilities.QueryHelpers.ParseQuery(new Uri(response.next).Query);\n                response = await api.GetObjectsAsync(_bucket, PageSize, null, queryParams["startAt"]);\n                foreach (KeyValuePair<string, dynamic> obj in new DynamicDictionaryItems(response.items))\n                {\n                    objects.Add(new { name = obj.Value.objectKey, urn = Base64Encode(obj.Value.objectId) });\n                }\n            }\n            return objects;\n        }\n\n        // highlight-start\n        public async Task<dynamic> UploadModel(string objectName, Stream content, long contentLength)\n        {\n            await EnsureBucketExists(_bucket);\n            var token = await GetInternalToken();\n            var api = new ObjectsApi();\n            api.Configuration.AccessToken = token.AccessToken;\n            dynamic obj = await api.UploadObjectAsync(_bucket, objectName, (int)contentLength, content);\n            return obj;\n        }\n\n        public async Task<dynamic> TranslateModel(string objectId, string rootFilename)\n        {\n            var token = await GetInternalToken();\n            var api = new DerivativesApi();\n            api.Configuration.AccessToken = token.AccessToken;\n            var formats = new List<JobPayloadItem> {\n                new JobPayloadItem (JobPayloadItem.TypeEnum.Svf, new List<JobPayloadItem.ViewsEnum> { JobPayloadItem.ViewsEnum._2d, JobPayloadItem.ViewsEnum._2d })\n            };\n            var payload = new JobPayload(\n                new JobPayloadInput(Base64Encode(objectId)),\n                new JobPayloadOutput(formats)\n            );\n            if (!string.IsNullOrEmpty(rootFilename))\n            {\n                payload.Input.RootFilename = rootFilename;\n                payload.Input.CompressedUrn = true;\n            }\n            dynamic job = await api.TranslateAsync(payload);\n            return job;\n        }\n        // highlight-end\n\n        private async Task EnsureBucketExists(string bucketKey)\n        {\n            var token = await GetInternalToken();\n            var api = new BucketsApi();\n            api.Configuration.AccessToken = token.AccessToken;\n            try\n            {\n                await api.GetBucketDetailsAsync(bucketKey);\n            }\n            catch (ApiException e)\n            {\n                if (e.ErrorCode == 404)\n                {\n                    await api.CreateBucketAsync(new PostBucketsPayload(bucketKey, null, PostBucketsPayload.PolicyKeyEnum.Temporary));\n                }\n                else\n                {\n                    throw e;\n                }\n            }\n        }\n\n        public async Task<Token> GetPublicToken()\n        {\n            if (_publicTokenCache == null || _publicTokenCache.ExpiresAt < DateTime.UtcNow)\n                _publicTokenCache = await GetToken(new Scope[] { Scope.ViewablesRead });\n            return _publicTokenCache;\n        }\n\n        private async Task<Token> GetInternalToken()\n        {\n            if (_internalTokenCache == null || _internalTokenCache.ExpiresAt < DateTime.UtcNow)\n                _internalTokenCache = await GetToken(new Scope[] { Scope.BucketCreate, Scope.BucketRead, Scope.DataRead, Scope.DataWrite, Scope.DataCreate });\n            return _internalTokenCache;\n        }\n\n        private async Task<Token> GetToken(Scope[] scopes)\n        {\n            dynamic auth = await new TwoLeggedApi().AuthenticateAsync(_clientId, _clientSecret, "client_credentials", scopes);\n            return new Token\n            {\n                AccessToken = auth.access_token,\n                ExpiresAt = DateTime.UtcNow.AddSeconds(auth.expires_in)\n            };\n        }\n\n        private static string Base64Encode(string plainText)\n        {\n            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);\n            return System.Convert.ToBase64String(plainTextBytes).TrimEnd(\'=\');\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,r.kt)("p",null,"Finally, let's expose this new functionality to the client-side code through another ASP.NET\ncontroller. Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelsController.cs")," file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Controllers")," subfolder\nwith the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Controllers/ModelsController.cs"',title:'"Controllers/ModelsController.cs"'},'using Microsoft.AspNetCore.Mvc;\nusing Newtonsoft.Json;\n\nnamespace simpleviewer\n{\n    [ApiController]\n    [Route("api/[controller]")]\n    public class ModelsController : ControllerBase\n    {\n        private readonly ForgeService _forgeService;\n\n        public ModelsController(ForgeService forgeService)\n        {\n            _forgeService = forgeService;\n        }\n\n        [HttpGet()]\n        public async Task<ActionResult<string>> GetModels()\n        {\n            var objects = await _forgeService.GetObjects();\n            return JsonConvert.SerializeObject(objects);\n        }\n\n        public class UploadModelForm\n        {\n            [FromForm(Name = "model-zip-entrypoint")]\n            public string Entrypoint { get; set; }\n\n            [FromForm(Name = "model-file")]\n            public IFormFile File { get; set; }\n        }\n\n        [HttpPost()]\n        public async Task UploadAndTranslateModel([FromForm] UploadModelForm form)\n        {\n            var tmpPath = Path.GetTempFileName();\n            using (var stream = new FileStream(tmpPath, FileMode.OpenOrCreate))\n            {\n                await form.File.CopyToAsync(stream);\n            }\n            using (var stream = System.IO.File.OpenRead(tmpPath))\n            {\n                dynamic obj = await _forgeService.UploadModel(form.File.FileName, stream, form.File.Length);\n                await _forgeService.TranslateModel(obj.objectId, form.Entrypoint);\n            }\n            System.IO.File.Delete(tmpPath);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"The controller will handle two types of requests - a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/models")," request when the client wants\nto get the list of all available models for viewing, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/models")," request when the client\nwants to upload a new model and translate it for viewing."),(0,r.kt)("h2",{id:"try-it-out"},"Try it out"),(0,r.kt)("p",null,"Time to test our improved server application. This time, apart from setting the Forge application\ncredentials, you can also include the name of the Data Management bucket you want to use via\nthe optional ",(0,r.kt)("inlineCode",{parentName:"p"},"FORGE_BUCKET")," environment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nexport FORGE_BUCKET=your-custom-bucket-name\ndotnet run\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the bucket name is ",(0,r.kt)("em",{parentName:"p"},"not")," provided, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ForgeService")," class will generate one by appending ",(0,r.kt)("inlineCode",{parentName:"p"},"-basic-app"),"\nto your Forge client ID."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that the Data Management service requires bucket names to be ",(0,r.kt)("strong",{parentName:"p"},"globally unique"),",\nand attempts to create a bucket with an already used name will fail with ",(0,r.kt)("inlineCode",{parentName:"p"},"409 Conflict"),".\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/data/v2/reference/http/buckets-POST"},"documentation"),"\nfor more details."))),(0,r.kt)("p",null,"When you navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://localhost:5001/api/models"},"https://localhost:5001/api/models"),"\nin the browser, the server should respond with a JSON list with names and URNs of all objects\navailable in your configured bucket."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Server Response",src:t(797).Z})))}d.isMDXComponent=!0},797:function(e,n,t){n.Z=t.p+"assets/images/data-response-cb765486658eaeb9fc210d91a78fe868.png"}}]);