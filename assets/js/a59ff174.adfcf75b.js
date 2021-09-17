"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[235],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},894:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:2},l="Authentication",c={unversionedId:"tutorials/hubs-browser/dotnet/auth",id:"tutorials/hubs-browser/dotnet/auth",isDocsHomePage:!1,title:"Authentication",description:"In this step we're going to extend the server implementation so that it can authenticate itself",source:"@site/docs/tutorials/hubs-browser/dotnet/auth.md",sourceDirName:"tutorials/hubs-browser/dotnet",slug:"/tutorials/hubs-browser/dotnet/auth",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/dotnet/auth",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/hubs-browser/dotnet/auth.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basic Server",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/dotnet/server"},next:{title:"Browsing Hubs",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/dotnet/hubs"}},p=[{value:"Token management",id:"token-management",children:[]},{value:"Server endpoints",id:"server-endpoints",children:[]},{value:"Try it out",id:"try-it-out",children:[]}],u={toc:p};function d(e){var n=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"In this step we're going to extend the server implementation so that it can authenticate itself\nto the Forge platform, guide the user through a ",(0,i.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token"},"3-legged OAuth workflow"),",\nand generate access tokens for various needs."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'It is a good practice to generate an "internal" token with more capabilities (for example,\nallowing the owner to create or delete files in the Data Management service) that will only be used\nby the server, and a "public" token with fewer capabilities that can be safely shared with\nthe client-side logic.'))),(0,i.kt)("h2",{id:"token-management"},"Token management"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgeService.cs")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Models")," subfolder. This is where we will be implementing\nthe Forge-specific logic that will be used in different areas of our server application. Let's\nstart by adding the following code to the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/ForgeService.cs"',title:'"Models/ForgeService.cs"'},"using System;\nusing Autodesk.Forge;\n\npublic class Tokens\n{\n    public string InternalToken;\n    public string PublicToken;\n    public string RefreshToken;\n    public DateTime ExpiresAt;\n}\n\npublic partial class ForgeService\n{\n    private readonly string _clientId;\n    private readonly string _clientSecret;\n    private readonly string _callbackUri;\n    private readonly Scope[] InternalTokenScopes = new Scope[] { Scope.DataRead, Scope.ViewablesRead };\n    private readonly Scope[] PublicTokenScopes = new Scope[] { Scope.ViewablesRead };\n\n    public ForgeService(string clientId, string clientSecret, string callbackUri)\n    {\n        _clientId = clientId;\n        _clientSecret = clientSecret;\n        _callbackUri = callbackUri;\n    }\n}\n")),(0,i.kt)("p",null,"Notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgeService")," class is declared as ",(0,i.kt)("inlineCode",{parentName:"p"},"partial"),". We're going to extend in other ",(0,i.kt)("inlineCode",{parentName:"p"},"*.cs")," files later.\nA ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgeService")," singleton will then be provided to our server through ASP.NET's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0"},"dependency injection"),"."),(0,i.kt)("p",null,"Next, let's create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgeService.Auth.cs")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Models")," subfolder with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/ForgeService.Auth.cs"',title:'"Models/ForgeService.Auth.cs"'},'using System;\nusing System.Threading.Tasks;\nusing Autodesk.Forge;\n\npublic partial class ForgeService\n{\n    public string GetAuthorizationURL()\n    {\n        return new ThreeLeggedApi().Authorize(_clientId, "code", _callbackUri, InternalTokenScopes);\n    }\n\n    public async Task<Tokens> GenerateTokens(string code)\n    {\n        dynamic internalAuth = await new ThreeLeggedApi().GettokenAsync(_clientId, _clientSecret, "authorization_code", code, _callbackUri);\n        dynamic publicAuth = await new ThreeLeggedApi().RefreshtokenAsync(_clientId, _clientSecret, "refresh_token", internalAuth.refresh_token, PublicTokenScopes);\n        return new Tokens\n        {\n            PublicToken = publicAuth.access_token,\n            InternalToken = internalAuth.access_token,\n            RefreshToken = publicAuth.refresh_token,\n            ExpiresAt = DateTime.Now.ToUniversalTime().AddSeconds(internalAuth.expires_in)\n        };\n    }\n\n    public async Task<Tokens> RefreshTokens(Tokens tokens)\n    {\n        dynamic internalAuth = await new ThreeLeggedApi().RefreshtokenAsync(_clientId, _clientSecret, "refresh_token", tokens.RefreshToken, InternalTokenScopes);\n        dynamic publicAuth = await new ThreeLeggedApi().RefreshtokenAsync(_clientId, _clientSecret, "refresh_token", internalAuth.refresh_token, PublicTokenScopes);\n        return new Tokens\n        {\n            PublicToken = publicAuth.access_token,\n            InternalToken = internalAuth.access_token,\n            RefreshToken = publicAuth.refresh_token,\n            ExpiresAt = DateTime.Now.ToUniversalTime().AddSeconds(internalAuth.expires_in)\n        };\n    }\n\n    public async Task<dynamic> GetUserProfile(Tokens tokens)\n    {\n        var api = new UserProfileApi();\n        api.Configuration.AccessToken = tokens.InternalToken;\n        dynamic profile = await api.GetUserProfileAsync();\n        return profile;\n    }\n}\n')),(0,i.kt)("p",null,"These helper methods will later be used in our server's controllers to handle\nvarious types of requests related to authentication, for example, redirecting the user\nto the Autodesk login page, processing the callback when the user gets redirected back\nto our application, or refreshing tokens that have expired."),(0,i.kt)("p",null,"Finally, let's update our ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," file to make a singleton instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgeService")," class\navailable to our server application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},'using System;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\npublic class Startup\n{\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n\n    public IConfiguration Configuration { get; }\n\n    // This method gets called by the runtime. Use this method to add services to the container.\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddControllers();\n        var ForgeClientID = Environment.GetEnvironmentVariable("FORGE_CLIENT_ID");\n        var ForgeClientSecret = Environment.GetEnvironmentVariable("FORGE_CLIENT_SECRET");\n        var ForgeCallbackURL = Environment.GetEnvironmentVariable("FORGE_CALLBACK_URL");\n        if (string.IsNullOrEmpty(ForgeClientID) || string.IsNullOrEmpty(ForgeClientSecret) || string.IsNullOrEmpty(ForgeCallbackURL))\n        {\n            throw new ApplicationException("Missing required environment variables FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, or FORGE_CALLBACK_URL.");\n        }\n        // highlight-start\n        services.AddSingleton<ForgeService>(new ForgeService(ForgeClientID, ForgeClientSecret, ForgeCallbackURL));\n        // highlight-end\n    }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        app.UseHttpsRedirection();\n        app.UseDefaultFiles();\n        app.UseStaticFiles();\n        app.UseRouting();\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }\n}\n')),(0,i.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,i.kt)("p",null,"Next, let's add a first endpoint to our server. Create an ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthController.cs")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Controllers")," subfolder\nwith the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Controllers/AuthController.cs"',title:'"Controllers/AuthController.cs"'},'using System;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.Extensions.Logging;\n\n[ApiController]\n[Route("api/[controller]")]\npublic class AuthController : ControllerBase\n{\n    private readonly ILogger<AuthController> _logger;\n    private readonly ForgeService _forgeService;\n\n    public AuthController(ILogger<AuthController> logger, ForgeService forgeService)\n    {\n        _logger = logger;\n        _forgeService = forgeService;\n    }\n\n    public static async Task<Tokens> PrepareTokens(HttpRequest request, HttpResponse response, ForgeService forgeService)\n    {\n        if (!request.Cookies.ContainsKey("internal_token"))\n        {\n            return null;\n        }\n        var tokens = new Tokens\n        {\n            PublicToken = request.Cookies["public_token"],\n            InternalToken = request.Cookies["internal_token"],\n            RefreshToken = request.Cookies["refresh_token"],\n            ExpiresAt = DateTime.Parse(request.Cookies["expires_at"])\n        };\n        if (tokens.ExpiresAt < DateTime.Now.ToUniversalTime())\n        {\n            tokens = await forgeService.RefreshTokens(tokens);\n            response.Cookies.Append("public_token", tokens.PublicToken);\n            response.Cookies.Append("internal_token", tokens.InternalToken);\n            response.Cookies.Append("refresh_token", tokens.RefreshToken);\n            response.Cookies.Append("expires_at", tokens.ExpiresAt.ToString());\n        }\n        return tokens;\n    }\n\n    [HttpGet("login")]\n    public ActionResult Login()\n    {\n        var redirectUri = _forgeService.GetAuthorizationURL();\n        return Redirect(redirectUri);\n    }\n\n    [HttpGet("logout")]\n    public ActionResult Logout()\n    {\n        Response.Cookies.Delete("public_token");\n        Response.Cookies.Delete("internal_token");\n        Response.Cookies.Delete("refresh_token");\n        Response.Cookies.Delete("expires_at");\n        return Redirect("/");\n    }\n\n    [HttpGet("callback")]\n    public async Task<ActionResult> Callback(string code)\n    {\n        var tokens = await _forgeService.GenerateTokens(code);\n        Response.Cookies.Append("public_token", tokens.PublicToken);\n        Response.Cookies.Append("internal_token", tokens.InternalToken);\n        Response.Cookies.Append("refresh_token", tokens.RefreshToken);\n        Response.Cookies.Append("expires_at", tokens.ExpiresAt.ToString());\n        return Redirect("/");\n    }\n\n    [HttpGet("profile")]\n    public async Task<dynamic> GetProfile(string code)\n    {\n        var tokens = await PrepareTokens(Request, Response, _forgeService);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        dynamic profile = await _forgeService.GetUserProfile(tokens);\n        return new\n        {\n            name = string.Format("{0} {1}", profile.firstName, profile.lastName)\n        };\n    }\n\n    [HttpGet("token")]\n    public async Task<dynamic> GetPublicToken(string code)\n    {\n        var tokens = await PrepareTokens(Request, Response, _forgeService);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        return new\n        {\n            access_token = tokens.PublicToken,\n            token_type = "Bearer",\n            expires_in = Math.Floor((tokens.ExpiresAt - DateTime.Now.ToUniversalTime()).TotalSeconds)\n        };\n    }\n}\n')),(0,i.kt)("p",null,"The controller handles several different endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/auth/login")," will redirect the user to the Autodesk login page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/auth/callback")," is the URL our user will be redirected to after logging in successfully,\nand it is where we're going to generate a new set of tokens for the user"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/auth/logout")," will remove any cookie-based session data for the given user, effectively\nlogging the user out of our application"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/auth/token")," will generate a public access token that will later be used by Forge Viewer\nto load our designs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/auth/profile")," will return a simple JSON with additional information about the logged in user")),(0,i.kt)("h2",{id:"try-it-out"},"Try it out"),(0,i.kt)("p",null,"Let's see if our new server endpoint works. Try setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_SECRET"),"\nenvironment variables to your own Forge app credentials, and set the ",(0,i.kt)("inlineCode",{parentName:"p"},"FORGE_CALLBACK_URL")," env.\nvariable to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://localhost:5001/api/auth/callback")," because that's where we implemented our\ncode handling the callbacks from Forge:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nexport FORGE_CALLBACK_URL=https://localhost:5001/api/auth/callback\ndotnet run\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The callback URL we specify here must match the callback URL that you've configured\nfor your Forge application on ",(0,i.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/myapps"},"https://forge.autodesk.com/myapps"),"."))),(0,i.kt)("p",null,"When you navigate to ",(0,i.kt)("a",{parentName:"p",href:"https://localhost:5001/api/auth/login"},"https://localhost:5001/api/auth/login"),"\nin the browser, you should be redirected to Autodesk login page, and after logging in, you should\nbe redirected back to your application, for now simply returning 404. This is expected as we haven't\nimplemented the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /")," endpoint yet. However, if you try and explore the cookies stored\nby your browser for the ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," origin, you'll notice that the application is already storing\nthe authentication data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Empty Response",src:t(2376).Z})))}d.isMDXComponent=!0},2376:function(e,n,t){n.Z=t.p+"assets/images/empty-response-d6a133ad33d80d16d231e3a3eaf4d4e3.png"}}]);