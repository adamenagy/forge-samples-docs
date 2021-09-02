"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[998],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),b=o,g=d["".concat(l,".").concat(b)]||d[b]||p[b]||s;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4620:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),s=(t(7294),t(3905)),i=["components"],a={sidebar_position:3},l="Browsing Hubs",c={unversionedId:"tutorials/hubs-browser/dotnet/hubs",id:"tutorials/hubs-browser/dotnet/hubs",isDocsHomePage:!1,title:"Browsing Hubs",description:"In this step we'll extend our server so that we can browse the content of 3rd party",source:"@site/docs/tutorials/hubs-browser/dotnet/hubs.md",sourceDirName:"tutorials/hubs-browser/dotnet",slug:"/tutorials/hubs-browser/dotnet/hubs",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/dotnet/hubs",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/main/website/docs/tutorials/hubs-browser/dotnet/hubs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/dotnet/auth"},next:{title:"Viewer & UI",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/dotnet/viewer"}},u=[{value:"Forge helpers",id:"forge-helpers",children:[]},{value:"Server endpoints",id:"server-endpoints",children:[]},{value:"Try it out",id:"try-it-out",children:[]}],p={toc:u};function d(e){var n=e.components,a=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"browsing-hubs"},"Browsing Hubs"),(0,s.kt)("p",null,"In this step we'll extend our server so that we can browse the content of 3rd party\napplications built with Forge such as BIM 360 Docs or ACC."),(0,s.kt)("h2",{id:"forge-helpers"},"Forge helpers"),(0,s.kt)("p",null,"First, let's add a couple of helper methods to ",(0,s.kt)("inlineCode",{parentName:"p"},"ForgeService")," for browsing through\nData Management hubs, projects, folders, items, and versions. Create a ",(0,s.kt)("inlineCode",{parentName:"p"},"ForgeService.Hubs.cs"),"\nunder the ",(0,s.kt)("inlineCode",{parentName:"p"},"Models")," subfolder with the following content:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/ForgeService.Hubs.cs"',title:'"Models/ForgeService.Hubs.cs"'},"using System.Collections.Generic;\nusing System.Threading.Tasks;\nusing Autodesk.Forge;\nusing Autodesk.Forge.Model;\n\nnamespace hubsbrowser\n{\n    public partial class ForgeService : IForgeService\n    {\n        public async Task<IEnumerable<dynamic>> GetHubs(Tokens tokens)\n        {\n            var hubs = new List<dynamic>();\n            var api = new HubsApi();\n            api.Configuration.AccessToken = tokens.InternalToken;\n            var response = await api.GetHubsAsync();\n            foreach (KeyValuePair<string, dynamic> hub in new DynamicDictionaryItems(response.data))\n            {\n                hubs.Add(hub.Value);\n            }\n            return hubs;\n        }\n\n        public async Task<IEnumerable<dynamic>> GetProjects(string hubId, Tokens tokens)\n        {\n            var projects = new List<dynamic>();\n            var api = new ProjectsApi();\n            api.Configuration.AccessToken = tokens.InternalToken;\n            var response = await api.GetHubProjectsAsync(hubId);\n            foreach (KeyValuePair<string, dynamic> project in new DynamicDictionaryItems(response.data))\n            {\n                projects.Add(project.Value);\n            }\n            return projects;\n        }\n\n        public async Task<IEnumerable<dynamic>> GetContents(string hubId, string projectId, string folderId, Tokens tokens)\n        {\n            var contents = new List<dynamic>();\n            if (string.IsNullOrEmpty(folderId))\n            {\n                var api = new ProjectsApi();\n                api.Configuration.AccessToken = tokens.InternalToken;\n                var response = await api.GetProjectTopFoldersAsync(hubId, projectId);\n                foreach (KeyValuePair<string, dynamic> folders in new DynamicDictionaryItems(response.data))\n                {\n                    contents.Add(folders.Value);\n                }\n            }\n            else\n            {\n                var api = new FoldersApi();\n                api.Configuration.AccessToken = tokens.InternalToken;\n                var response = await api.GetFolderContentsAsync(projectId, folderId); // TODO: add paging\n                foreach (KeyValuePair<string, dynamic> item in new DynamicDictionaryItems(response.data))\n                {\n                    contents.Add(item.Value);\n                }\n            }\n            return contents;\n        }\n\n        public async Task<IEnumerable<dynamic>> GetVersions(string hubId, string projectId, string itemId, Tokens tokens)\n        {\n            var versions = new List<dynamic>();\n            var api = new ItemsApi();\n            api.Configuration.AccessToken = tokens.InternalToken;\n            var response = await api.GetItemVersionsAsync(projectId, itemId);\n            foreach (KeyValuePair<string, dynamic> version in new DynamicDictionaryItems(response.data))\n            {\n                versions.Add(version.Value);\n            }\n            return versions;\n        }\n    }\n}\n")),(0,s.kt)("p",null,"Next we'll need to update the ",(0,s.kt)("inlineCode",{parentName:"p"},"IForgeService")," interface in ",(0,s.kt)("inlineCode",{parentName:"p"},"Models/ForgeService.cs"),"\nto make the new methods available to our server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/ForgeService.cs"',title:'"Models/ForgeService.cs"'},"using System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\nusing Autodesk.Forge;\n\nnamespace hubsbrowser\n{\n    public class Tokens\n    {\n        public string InternalToken;\n        public string PublicToken;\n        public string RefreshToken;\n        public DateTime ExpiresAt;\n    }\n\n    public interface IForgeService\n    {\n        string GetAuthorizationURL();\n        Task<Tokens> GenerateTokens(string code);\n        Task<Tokens> RefreshTokens(Tokens tokens);\n        Task<dynamic> GetUserProfile(Tokens tokens);\n        // highlight-start\n        Task<IEnumerable<dynamic>> GetHubs(Tokens tokens);\n        Task<IEnumerable<dynamic>> GetProjects(string hubId, Tokens tokens);\n        Task<IEnumerable<dynamic>> GetContents(string hubId, string projectId, string folderId, Tokens tokens);\n        Task<IEnumerable<dynamic>> GetVersions(string hubId, string projectId, string itemId, Tokens tokens);\n        // highlight-end\n    }\n\n    public partial class ForgeService : IForgeService\n    {\n        private readonly string _clientId;\n        private readonly string _clientSecret;\n        private readonly string _callbackUri;\n        private readonly Scope[] InternalTokenScopes = new Scope[] { Scope.DataRead, Scope.ViewablesRead };\n        private readonly Scope[] PublicTokenScopes = new Scope[] { Scope.ViewablesRead };\n\n        public ForgeService(string clientId, string clientSecret, string callbackUri)\n        {\n            _clientId = clientId;\n            _clientSecret = clientSecret;\n            _callbackUri = callbackUri;\n        }\n    }\n}\n")),(0,s.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,s.kt)("p",null,"Finally, let's expose the new functionality to the client-side code through another ASP.NET\ncontroller. Create a ",(0,s.kt)("inlineCode",{parentName:"p"},"HubsController.cs")," file under the ",(0,s.kt)("inlineCode",{parentName:"p"},"Controllers")," subfolder with the following\ncontent:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Controllers/HubsController.cs"',title:'"Controllers/HubsController.cs"'},'using System.Threading.Tasks;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.Extensions.Logging;\nusing Newtonsoft.Json;\n\nnamespace hubsbrowser\n{\n    [ApiController]\n    [Route("api/[controller]")]\n    public class HubsController : ControllerBase\n    {\n        private readonly ILogger<HubsController> _logger;\n        private readonly IForgeService _forgeService;\n\n        public HubsController(ILogger<HubsController> logger, IForgeService forgeService)\n        {\n            _logger = logger;\n            _forgeService = forgeService;\n        }\n\n        [HttpGet()]\n        public async Task<ActionResult<string>> ListHubs()\n        {\n            var tokens = await AuthController.PrepareTokens(Request, Response, _forgeService);\n            if (tokens == null)\n            {\n                return Unauthorized();\n            }\n            var hubs = await _forgeService.GetHubs(tokens);\n            return JsonConvert.SerializeObject(hubs);\n        }\n\n        [HttpGet("{hub}/projects")]\n        public async Task<ActionResult<string>> ListProjects(string hub)\n        {\n            var tokens = await AuthController.PrepareTokens(Request, Response, _forgeService);\n            if (tokens == null)\n            {\n                return Unauthorized();\n            }\n            var projects = await _forgeService.GetProjects(hub, tokens);\n            return JsonConvert.SerializeObject(projects);\n        }\n\n        [HttpGet("{hub}/projects/{project}/contents")]\n        public async Task<ActionResult<string>> ListItems(string hub, string project, [FromQuery] string folder_id)\n        {\n            var tokens = await AuthController.PrepareTokens(Request, Response, _forgeService);\n            if (tokens == null)\n            {\n                return Unauthorized();\n            }\n            var contents = await _forgeService.GetContents(hub, project, folder_id, tokens);\n            return JsonConvert.SerializeObject(contents);\n        }\n\n        [HttpGet("{hub}/projects/{project}/contents/{item}/versions")]\n        public async Task<ActionResult<string>> ListVersions(string hub, string project, string item)\n        {\n            var tokens = await AuthController.PrepareTokens(Request, Response, _forgeService);\n            if (tokens == null)\n            {\n                return Unauthorized();\n            }\n            var versions = await _forgeService.GetVersions(hub, project, item, tokens);\n            return JsonConvert.SerializeObject(versions);\n        }\n    }\n}\n')),(0,s.kt)("p",null,"The controller handles several endpoints for browsing the content in 3rd party Forge\napplications such as BIM 360 Docs and ACC. We will make use of these endpoints when\nbuilding the UI part of the application."),(0,s.kt)("h2",{id:"try-it-out"},"Try it out"),(0,s.kt)("p",null,"And that's it for the server side. Time to try it out! Make sure you set all\nthe required environment variables, and run the application:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nexport FORGE_CALLBACK_URL=https://localhost:5001/api/auth/callback\ndotnet run\n")),(0,s.kt)("p",null,"You should now be able to explore the new endpoints tha will eventually be used from\nthe UI. For example, if you go to https://localhost:3000/api/hubs, the server should\nrespond with a JSON list of all the hubs you have access to. Try copying the ID of\none of the hubs, and use it in another address: https://localhost:5001/api/hubs/your-hub-id/projects.\nIn this case the server application should respond with a JSON list of all projects\navailable under the specified hub."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hubs Response",src:t(2044).Z})))}d.isMDXComponent=!0},2044:function(e,n,t){n.Z=t.p+"assets/images/hubs-response-b44bbc91659a885a92794d390ac252fb.png"}}]);