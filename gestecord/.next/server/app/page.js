(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7404:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>f,tree:()=>d});var n=r(482),i=r(9108),o=r(2563),s=r.n(o),a=r(8300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,751)),"C:\\Users\\xinyu\\Desktop\\Gestion-de-tecnologias-informaticas-en-las-organizaciones\\gestecord\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,2917)),"C:\\Users\\xinyu\\Desktop\\Gestion-de-tecnologias-informaticas-en-las-organizaciones\\gestecord\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\Users\\xinyu\\Desktop\\Gestion-de-tecnologias-informaticas-en-las-organizaciones\\gestecord\\app\\page.tsx"],c="/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9331:(e,t,r)=>{Promise.resolve().then(r.bind(r,1685))},7580:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},7766:()=>{},1685:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(5344),i=r(3729),o=r(7412),s=r.n(o);function a(){let[e,t]=(0,i.useState)(""),r=async e=>{try{let t=await fetch(`http://localhost:8000/api/votes/${e}`,{method:"POST"}),r=await t.json();alert(r.message)}catch(e){console.error("Error:",e),alert("Something went wrong")}},o=async()=>{try{let e=await fetch("http://localhost:8000/api/contestants"),t=await e.json();alert(JSON.stringify(t))}catch(e){console.error("Error:",e),alert("Something went wrong")}};return(0,n.jsxs)("main",{id:"container",children:[n.jsx("h1",{children:n.jsx("div",{id:"logo",children:"Operaci\xf3n Triunfo"})}),n.jsx(s(),{src:"/_next/static/media/header.b214835f.jpg",className:"centered-image",alt:"header"}),n.jsx("div",{id:"space"}),(0,n.jsxs)("div",{id:"form",children:[n.jsx("button",{onClick:()=>r("65f8b2489193d7009bd1ae9a"),className:"button button1",children:"Voto a LUCAS"}),n.jsx("button",{onClick:()=>r("65f8b2169193d7009bd1ae99"),className:"button button2",children:"Voto a SUZETE"}),n.jsx("button",{onClick:()=>o(),className:"button button3",children:"Ver Contestants"})]}),n.jsx("div",{id:"message",children:e})]})}},1900:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let n=r(9694),i=r(7824),o=r(5344),s=i._(r(3729)),a=n._(r(1202)),l=n._(r(1758)),d=r(3855),u=r(3053),c=r(4187);r(837);let p=r(6150),f=n._(r(4931)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,n,i,o){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){let[t,r]=s.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let b=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:l,decoding:d,className:u,style:c,fetchPriority:p,placeholder:f,loading:m,unoptimized:b,fill:v,onLoadRef:x,onLoadingCompleteRef:y,setBlurComplete:_,setShowAltText:w,onLoad:j,onError:P,...S}=e;return(0,o.jsx)("img",{...S,...h(p),loading:m,width:l,height:a,decoding:d,"data-nimg":v?"fill":"1",className:u,style:c,sizes:i,srcSet:n,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&g(e,f,x,y,_,b))},[r,f,x,y,_,P,b,t]),onLoad:e=>{g(e.currentTarget,f,x,y,_,b)},onError:e=>{w(!0),"empty"!==f&&_(!0),P&&P(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let x=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(p.RouterContext),n=(0,s.useContext)(c.ImageConfigContext),i=(0,s.useMemo)(()=>{let e=m||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:l}=e,g=(0,s.useRef)(a);(0,s.useEffect)(()=>{g.current=a},[a]);let h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let[x,y]=(0,s.useState)(!1),[_,w]=(0,s.useState)(!1),{props:j,meta:P}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:x,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...j,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:w,ref:t}),P.priority?(0,o.jsx)(v,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7637:(e,t,r)=>{"use strict";e.exports=r(6372).vendored.contexts.AmpContext},2158:(e,t,r)=>{"use strict";e.exports=r(6372).vendored.contexts.HeadManagerContext},4187:(e,t,r)=>{"use strict";e.exports=r(6372).vendored.contexts.ImageConfigContext},6150:(e,t,r)=>{"use strict";e.exports=r(6372).vendored.contexts.RouterContext},3126:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3855:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(837);let n=r(6358),i=r(3053);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,d,{src:u,sizes:c,unoptimized:p=!1,priority:f=!1,loading:m,className:g,quality:h,width:b,height:v,fill:x=!1,style:y,onLoad:_,onLoadingComplete:w,placeholder:j="empty",blurDataURL:P,fetchPriority:S,layout:C,objectFit:O,objectPosition:z,lazyBoundary:E,lazyRoot:M,...k}=e,{imgConf:I,showAltText:A,blurComplete:R,defaultLoader:D}=t,G=I||i.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}let N=k.loader||D;delete k.loader,delete k.srcSet;let U="__next_img_default"in N;if(U){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:r,...n}=t;return e(n)}}if(C){"fill"===C&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!c&&(c=t)}let q="",T=s(b),L=s(v);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,P=P||e.blurDataURL,q=e.src,!x){if(T||L){if(T&&!L){let t=T/e.width;L=Math.round(e.height*t)}else if(!T&&L){let t=L/e.height;T=Math.round(e.width*t)}}else T=e.width,L=e.height}}let B=!f&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:q)||u.startsWith("data:")||u.startsWith("blob:"))&&(p=!0,B=!1),a.unoptimized&&(p=!0),U&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(p=!0),f&&(S="high");let F=s(h),V=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:z}:{},A?{}:{color:"transparent"},y),W=R||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:T,heightInt:L,blurWidth:l,blurHeight:d,blurDataURL:P||"",objectFit:V.objectFit})+'")':'url("'+j+'")',$=W?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},H=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:s,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,s),u=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:a({config:t,src:r,quality:o,width:l[u]})}}({config:a,src:u,unoptimized:p,width:T,quality:F,sizes:c,loader:N});return{props:{...k,loading:B?"lazy":m,fetchPriority:S,width:T,height:L,decoding:"async",className:g,style:{...V,...$},sizes:H.sizes,srcSet:H.srcSet,src:H.src},meta:{unoptimized:p,priority:f,placeholder:j,fill:x}}}},1758:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return g}});let n=r(9694),i=r(7824),o=r(5344),s=i._(r(3729)),a=n._(r(7984)),l=r(7637),d=r(2158),u=r(3126);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(837);let f=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,s=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){s=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!s)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,s.useContext)(l.AmpStateContext),n=(0,s.useContext)(d.HeadManagerContext);return(0,o.jsx)(a.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6358:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:s}=e,a=n?40*n:t,l=i?40*i:r,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3053:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7412:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return a},default:function(){return l}});let n=r(9694),i=r(3855),o=r(1900),s=n._(r(4931)),a=e=>{let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=o.Image},4931:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},7984:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(3729),i=()=>{},o=()=>{};function s(e){var t;let{headManager:r,reduceComponentsToState:s}=e;function a(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(s(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=a),()=>{r&&(r._pendingUpdate=a)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},2917:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>s});var n=r(5036),i=r(265),o=r.n(i);r(7272);let s={title:"Create Next App",description:"Generated by create next app"};function a({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:o().className,children:e})})}},751:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>s});let n=(0,r(6843).createProxy)(String.raw`C:\Users\xinyu\Desktop\Gestion-de-tecnologias-informaticas-en-las-organizaciones\gestecord\app\page.tsx`),{__esModule:i,$$typeof:o}=n,s=n.default},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,265],()=>r(7404));module.exports=n})();