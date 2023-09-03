(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{9841:function(t,e,a){"use strict";function n(){for(var t,e,a=0,n="";a<arguments.length;)(t=arguments[a++])&&(e=function t(e){var a,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e){if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=t(e[a]))&&(i&&(i+=" "),i+=n);else for(a in e)e[a]&&(i&&(i+=" "),i+=a)}return i}(t))&&(n&&(n+=" "),n+=e);return n}a.d(e,{W:function(){return n}})},3738:function(t,e,a){"use strict";a.d(e,{h:function(){return l},v:function(){return p}});var n=a(79),i=a(1872),r=i.z.div({displayName:"StepContainer",className:"\n    flex justify-center items-center my-4 py-2 w-full\n    select-none text-sm font-medium text-center text-gray-500 lg:text-base\n    dark:text-gray-400\n  "}),o=i.z.a({displayName:"StepItem",className:"\n    group/step flex justify-center items-center grow-0 w-auto whitespace-nowrap\n\n    [&[href]]:hover:text-gray-500/80 dark:[&[href]]:hover:text-gray-300/90\n    data-[active]:text-blue-600 data-[active]:dark:text-blue-500\n  "}),s=i.z.div({displayName:"StepDivision",className:"\n    last:hidden\n    flex justify-center items-center grow w-auto h-auto\n    after:grow after:content-['/'] after:w-auto after:h-auto after:mx-2\n    after:text-gray-300 after:border-gray-300 after:border-0\n\n    lg:after:content-[''] lg:after:w-full lg:after:h-1 lg:after:mx-6\n    lg:after:border-b\n\n    lg:after:mx-3 xl:after:mx-4\n\n    dark:after:text-gray-200 dark:after:border-gray-700\n  "}),c=i.z.span({displayName:"StepIndex",className:"\n    relative flex justify-center items-center mr-2\n    rounded-full border-2 w-6 h-6\n    text-sm font-normal\n\n    border-gray-300 dark:border-gray-500\n    group-hover/step:border-gray-300/80 dark:group-hover/step:border-gray-400\n\n    data-[active]:bg-blue-500 data-[active]:border-0\n    data-[active]:text-white data-[active]:font-semibold\n    data-[active]:dark:bg-blue-600\n  "}),d=a(5250),p=function(t){var e=t.children;return(0,d.jsx)(r,{"data-inspector-line":"22","data-inspector-column":"2","data-inspector-relative-path":"components/stepper/stepper.tsx",children:n.Children.map(e,function(t,e){return(0,d.jsxs)(n.Fragment,{children:[t,(0,d.jsx)(s,{"data-inspector-line":"26","data-inspector-column":"8","data-inspector-relative-path":"components/stepper/stepper.tsx"})]},"item-".concat(e))})})},l=function(t){var e=t.index,a=t.active,n=t.link,i=t.children;return(0,d.jsx)(o,{"data-inspector-line":"43","data-inspector-column":"2","data-inspector-relative-path":"components/stepper/stepper.tsx","data-active":a||null,href:a?void 0:n,children:(0,d.jsxs)("span",{"data-inspector-line":"47","data-inspector-column":"4","data-inspector-relative-path":"components/stepper/stepper.tsx",className:"flex justify-start items-center",children:["number"==typeof e?(0,d.jsx)(c,{"data-inspector-line":"53","data-inspector-column":"12","data-inspector-relative-path":"components/stepper/stepper.tsx","data-active":a||null,children:e}):e,(0,d.jsx)("div",{"data-inspector-line":"61","data-inspector-column":"6","data-inspector-relative-path":"components/stepper/stepper.tsx",children:i})]})})}},1872:function(t,e,a){"use strict";a.d(e,{z:function(){return c}});var n=a(3671),i=a(79),r=a(9841);function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach(function(e){(0,n.Z)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var c=function(t,e){var a=e.className,n=e.displayName,o=(0,i.forwardRef)(function(e,n){var o=e.className;return(0,i.createElement)(t,s(s({},e),{},{ref:n,className:(0,r.W)(a,o)}))});return o.displayName=null!=n?n:"TwStyled(".concat("string"==typeof t?t:t.displayName||t.name||"Component",")"),o};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(t){c[t]=function(e){return c(t,e)}})},9424:function(t,e,a){"use strict";a.d(e,{A:function(){return h}});var n=a(3671),i=a(460),r=a(6663),o=a.n(r),s=a(3738),c=a(693),d=a(5250);function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach(function(e){(0,n.Z)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var h=[];function m(t){var e=Object.assign({p:"p",strong:"strong",em:"em",a:"a"},(0,i.a)(),t.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.v,{"data-inspector-line":"14","data-inspector-column":"11","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",children:[(0,d.jsx)(s.h,{"data-inspector-line":"14","data-inspector-column":"20","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",index:0,link:"/docs/compiler-plugin",children:(0,d.jsxs)(e.p,{"data-inspector-line":"14","data-inspector-column":"65","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",children:["Optional ",(0,d.jsx)("br",{"data-inspector-line":"14","data-inspector-column":"93","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",className:"block sm:hidden"})," Compiler"]})}),(0,d.jsx)(s.h,{"data-inspector-line":"14","data-inspector-column":"163","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",index:1,link:"/docs/inspector-component",children:(0,d.jsxs)(e.p,{"data-inspector-line":"14","data-inspector-column":"212","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",children:["Inspector ",(0,d.jsx)("br",{"data-inspector-line":"14","data-inspector-column":"241","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",className:"block sm:hidden"})," Component"]})}),(0,d.jsx)(s.h,{"data-inspector-line":"14","data-inspector-column":"312","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",index:2,link:"/docs/integration",active:!0,children:(0,d.jsxs)(e.p,{"data-inspector-line":"14","data-inspector-column":"360","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",children:["Dev Server ",(0,d.jsx)("br",{"data-inspector-line":"14","data-inspector-column":"390","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",className:"block sm:hidden"})," Middleware"]})})]}),"\n",(0,d.jsxs)(e.p,{"data-inspector-line":"14","data-inspector-column":"478","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",children:["This page is the ",(0,d.jsx)(e.strong,{"data-inspector-line":"14","data-inspector-column":"514","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",children:(0,d.jsx)(e.em,{"data-inspector-line":"14","data-inspector-column":"534","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",children:"Part.2"})})," of configuration, we will add a middleware in dev-server to receives API from Inspector Component,\nand call your local IDE/Editor to open the source file from server side. Please make sure you have already added the ",(0,d.jsx)(e.a,{"data-inspector-line":"14","data-inspector-column":"820","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",href:"/docs/inspector-component",children:"Inspector Component"})," in your project as ",(0,d.jsx)(e.em,{"data-inspector-line":"14","data-inspector-column":"931","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",children:"Part.1"}),"."]}),"\n",(0,d.jsx)(o(),{"data-inspector-line":"14","data-inspector-column":"1001","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx",src:c.Z,className:"mt-2 mx-auto w-full"})]})}e.Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,i.a)(),t.components).wrapper;return e?(0,d.jsx)(e,l(l({"data-inspector-line":"18","data-inspector-column":"21","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx"},t),{},{children:(0,d.jsx)(m,l({"data-inspector-line":"18","data-inspector-column":"43","data-inspector-relative-path":"pages/docs/integration/_snip-declaration.mdx"},t))})):m(t)}},9636:function(t,e,a){"use strict";a.r(e),a.d(e,{__toc:function(){return m}});var n=a(3671),i=a(1364),r=a(5313),o=a(460),s=a(9446),c=a(9829),d=a(9424),p=a(5250);function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach(function(e){(0,n.Z)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var m=[].concat((0,i.Z)(d.A),[{depth:2,value:"Setup",id:"setup"},{depth:2,value:"Example",id:"example"}]);function v(t){var e=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",span:"span",img:"img"},(0,o.a)(),t.components);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e.h1,{"data-inspector-line":"28","data-inspector-column":"11","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:"Vite Plugin"}),"\n",(0,p.jsx)(d.Z,{"data-inspector-line":"28","data-inspector-column":"65","data-inspector-relative-path":"pages/docs/integration/vite.mdx"}),"\n",(0,p.jsxs)(e.p,{"data-inspector-line":"28","data-inspector-column":"93","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:["In this section, follow the simple setup below to integrate ",(0,p.jsx)(e.code,{"data-inspector-line":"28","data-inspector-column":"172","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:"react-dev-inspector"})," into your ",(0,p.jsx)(e.a,{"data-inspector-line":"28","data-inspector-column":"247","data-inspector-relative-path":"pages/docs/integration/vite.mdx",href:"https://vitejs.dev",children:"Vite"})," project."]}),"\n",(0,p.jsx)(e.h2,{"data-inspector-line":"28","data-inspector-column":"347","data-inspector-relative-path":"pages/docs/integration/vite.mdx",id:"setup",children:"Setup"}),"\n",(0,p.jsx)(e.p,{"data-inspector-line":"28","data-inspector-column":"406","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:"At first install the plugin package:"}),"\n",(0,p.jsxs)(c.mQ,{"data-inspector-line":"28","data-inspector-column":"483","data-inspector-relative-path":"pages/docs/integration/vite.mdx",items:["npm","pnpm","yarn"],storageKey:"selectedPackageManager",children:[(0,p.jsx)(c.OK,{"data-inspector-line":"28","data-inspector-column":"558","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:(0,p.jsx)(e.pre,{"data-inspector-line":"28","data-inspector-column":"564","data-inspector-relative-path":"pages/docs/integration/vite.mdx","data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,p.jsx)(e.code,{"data-inspector-line":"28","data-inspector-column":"635","data-inspector-relative-path":"pages/docs/integration/vite.mdx","data-language":"bash","data-theme":"default",children:(0,p.jsxs)(e.span,{"data-inspector-line":"28","data-inspector-column":"695","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:[(0,p.jsx)(e.span,{"data-inspector-line":"28","data-inspector-column":"730","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,p.jsx)(e.span,{"data-inspector-line":"30","data-inspector-column":"31","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"32","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-string)"},children:"i"}),(0,p.jsx)(e.span,{"data-inspector-line":"34","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"36","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-string)"},children:"-D"}),(0,p.jsx)(e.span,{"data-inspector-line":"38","data-inspector-column":"30","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"40","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-string)"},children:"@react-dev-inspector/vite-plugin"})]})})})}),(0,p.jsx)(c.OK,{"data-inspector-line":"42","data-inspector-column":"123","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:(0,p.jsx)(e.pre,{"data-inspector-line":"42","data-inspector-column":"129","data-inspector-relative-path":"pages/docs/integration/vite.mdx","data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,p.jsx)(e.code,{"data-inspector-line":"42","data-inspector-column":"200","data-inspector-relative-path":"pages/docs/integration/vite.mdx","data-language":"bash","data-theme":"default",children:(0,p.jsxs)(e.span,{"data-inspector-line":"42","data-inspector-column":"260","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:[(0,p.jsx)(e.span,{"data-inspector-line":"42","data-inspector-column":"295","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,p.jsx)(e.span,{"data-inspector-line":"44","data-inspector-column":"32","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"46","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-string)"},children:"add"}),(0,p.jsx)(e.span,{"data-inspector-line":"48","data-inspector-column":"31","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"50","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-string)"},children:"-D"}),(0,p.jsx)(e.span,{"data-inspector-line":"52","data-inspector-column":"30","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"54","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-string)"},children:"@react-dev-inspector/vite-plugin"})]})})})}),(0,p.jsx)(c.OK,{"data-inspector-line":"56","data-inspector-column":"123","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:(0,p.jsx)(e.pre,{"data-inspector-line":"56","data-inspector-column":"129","data-inspector-relative-path":"pages/docs/integration/vite.mdx","data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,p.jsx)(e.code,{"data-inspector-line":"56","data-inspector-column":"200","data-inspector-relative-path":"pages/docs/integration/vite.mdx","data-language":"bash","data-theme":"default",children:(0,p.jsxs)(e.span,{"data-inspector-line":"56","data-inspector-column":"260","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:[(0,p.jsx)(e.span,{"data-inspector-line":"56","data-inspector-column":"295","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,p.jsx)(e.span,{"data-inspector-line":"58","data-inspector-column":"32","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"60","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-string)"},children:"add"}),(0,p.jsx)(e.span,{"data-inspector-line":"62","data-inspector-column":"31","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"64","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-string)"},children:"--dev"}),(0,p.jsx)(e.span,{"data-inspector-line":"66","data-inspector-column":"33","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"68","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-string)"},children:"@react-dev-inspector/vite-plugin"})]})})})})]}),"\n",(0,p.jsxs)(e.p,{"data-inspector-line":"70","data-inspector-column":"137","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:["The ",(0,p.jsx)(e.span,{"data-inspector-line":"70","data-inspector-column":"160","data-inspector-relative-path":"pages/docs/integration/vite.mdx","data-rehype-pretty-code-fragment":"",children:(0,p.jsx)(e.code,{"data-inspector-line":"70","data-inspector-column":"214","data-inspector-relative-path":"pages/docs/integration/vite.mdx","data-language":"ts","data-theme":"default",children:(0,p.jsxs)(e.span,{"data-inspector-line":"70","data-inspector-column":"272","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:[(0,p.jsx)(e.span,{"data-inspector-line":"70","data-inspector-column":"307","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"@react"}),(0,p.jsx)(e.span,{"data-inspector-line":"72","data-inspector-column":"34","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,p.jsx)(e.span,{"data-inspector-line":"74","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"dev"}),(0,p.jsx)(e.span,{"data-inspector-line":"76","data-inspector-column":"31","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,p.jsx)(e.span,{"data-inspector-line":"78","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"inspector"}),(0,p.jsx)(e.span,{"data-inspector-line":"80","data-inspector-column":"37","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,p.jsx)(e.span,{"data-inspector-line":"82","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"vite"}),(0,p.jsx)(e.span,{"data-inspector-line":"84","data-inspector-column":"32","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,p.jsx)(e.span,{"data-inspector-line":"86","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"plugin"})]})})})," now export a ",(0,p.jsx)(e.code,{"data-inspector-line":"88","data-inspector-column":"109","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:"inspectorServer"})," that compatible with ",(0,p.jsx)(e.code,{"data-inspector-line":"88","data-inspector-column":"191","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:"vite@4"})," / ",(0,p.jsx)(e.code,{"data-inspector-line":"88","data-inspector-column":"245","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:"vite@3"})," / ",(0,p.jsx)(e.code,{"data-inspector-line":"88","data-inspector-column":"299","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:"vite@2"}),",\njust add it into ",(0,p.jsx)(e.code,{"data-inspector-line":"88","data-inspector-column":"370","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:"vite.config.ts"})," and that's all done."]}),"\n",(0,p.jsx)(e.pre,{"data-inspector-line":"88","data-inspector-column":"472","data-inspector-relative-path":"pages/docs/integration/vite.mdx","data-language":"ts","data-theme":"default",filename:"vite.config.ts",hasCopyCode:!0,children:(0,p.jsxs)(e.code,{"data-inspector-line":"88","data-inspector-column":"567","data-inspector-relative-path":"pages/docs/integration/vite.mdx","data-line-numbers":"","data-language":"ts","data-theme":"default","data-line-numbers-max-digits":"2",children:[(0,p.jsxs)(e.span,{"data-inspector-line":"88","data-inspector-column":"679","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:[(0,p.jsx)(e.span,{"data-inspector-line":"88","data-inspector-column":"714","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,p.jsx)(e.span,{"data-inspector-line":"90","data-inspector-column":"34","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,p.jsx)(e.span,{"data-inspector-line":"92","data-inspector-column":"46","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,p.jsx)(e.span,{"data-inspector-line":"94","data-inspector-column":"32","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"96","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-string-expression)"},children:"'vite'"})]}),"\n",(0,p.jsxs)(e.span,{"data-inspector-line":"98","data-inspector-column":"59","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:[(0,p.jsx)(e.span,{"data-inspector-line":"98","data-inspector-column":"94","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,p.jsx)(e.span,{"data-inspector-line":"100","data-inspector-column":"34","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" react "}),(0,p.jsx)(e.span,{"data-inspector-line":"102","data-inspector-column":"35","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,p.jsx)(e.span,{"data-inspector-line":"104","data-inspector-column":"32","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"106","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-string-expression)"},children:"'@vitejs/plugin-react'"})]}),"\n",(0,p.jsxs)(e.span,{"data-inspector-line":"108","data-inspector-column":"75","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line highlighted",children:[(0,p.jsx)(e.span,{"data-inspector-line":"108","data-inspector-column":"122","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,p.jsx)(e.span,{"data-inspector-line":"110","data-inspector-column":"34","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" { inspectorServer } "}),(0,p.jsx)(e.span,{"data-inspector-line":"112","data-inspector-column":"49","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,p.jsx)(e.span,{"data-inspector-line":"114","data-inspector-column":"32","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"116","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-string-expression)"},children:"'@react-dev-inspector/vite-plugin'"})]}),"\n",(0,p.jsx)(e.span,{"data-inspector-line":"118","data-inspector-column":"87","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:" "}),"\n",(0,p.jsx)(e.span,{"data-inspector-line":"118","data-inspector-column":"152","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:(0,p.jsx)(e.span,{"data-inspector-line":"118","data-inspector-column":"187","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-comment)"},children:"// https://vitejs.dev/config/"})}),"\n",(0,p.jsxs)(e.span,{"data-inspector-line":"120","data-inspector-column":"82","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:[(0,p.jsx)(e.span,{"data-inspector-line":"120","data-inspector-column":"117","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,p.jsx)(e.span,{"data-inspector-line":"122","data-inspector-column":"34","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"124","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,p.jsx)(e.span,{"data-inspector-line":"126","data-inspector-column":"35","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:" "}),(0,p.jsx)(e.span,{"data-inspector-line":"128","data-inspector-column":"29","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,p.jsx)(e.span,{"data-inspector-line":"130","data-inspector-column":"40","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,p.jsxs)(e.span,{"data-inspector-line":"132","data-inspector-column":"55","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:[(0,p.jsx)(e.span,{"data-inspector-line":"132","data-inspector-column":"90","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"  "}),(0,p.jsx)(e.span,{"data-inspector-line":"134","data-inspector-column":"30","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,p.jsx)(e.span,{"data-inspector-line":"136","data-inspector-column":"56","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:" "}),"\n",(0,p.jsx)(e.span,{"data-inspector-line":"136","data-inspector-column":"121","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:(0,p.jsx)(e.span,{"data-inspector-line":"136","data-inspector-column":"156","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"  plugins: ["})}),"\n",(0,p.jsxs)(e.span,{"data-inspector-line":"138","data-inspector-column":"65","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:[(0,p.jsx)(e.span,{"data-inspector-line":"138","data-inspector-column":"100","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"    "}),(0,p.jsx)(e.span,{"data-inspector-line":"140","data-inspector-column":"32","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-function)"},children:"react"}),(0,p.jsx)(e.span,{"data-inspector-line":"142","data-inspector-column":"33","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"()"}),(0,p.jsx)(e.span,{"data-inspector-line":"144","data-inspector-column":"30","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,p.jsx)(e.span,{"data-inspector-line":"146","data-inspector-column":"54","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:" "}),"\n",(0,p.jsxs)(e.span,{"data-inspector-line":"146","data-inspector-column":"119","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:[(0,p.jsx)(e.span,{"data-inspector-line":"146","data-inspector-column":"154","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"    "}),(0,p.jsx)(e.span,{"data-inspector-line":"148","data-inspector-column":"32","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-comment)"},children:"/**"})]}),"\n",(0,p.jsx)(e.span,{"data-inspector-line":"150","data-inspector-column":"56","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:(0,p.jsx)(e.span,{"data-inspector-line":"150","data-inspector-column":"91","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-comment)"},children:"     * react-dev-inspector server config for vite"})}),"\n",(0,p.jsx)(e.span,{"data-inspector-line":"152","data-inspector-column":"102","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:(0,p.jsx)(e.span,{"data-inspector-line":"152","data-inspector-column":"137","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-comment)"},children:"     */"})}),"\n",(0,p.jsxs)(e.span,{"data-inspector-line":"154","data-inspector-column":"60","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:[(0,p.jsx)(e.span,{"data-inspector-line":"154","data-inspector-column":"95","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"    "}),(0,p.jsx)(e.span,{"data-inspector-line":"156","data-inspector-column":"32","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-function)"},children:"inspectorServer"}),(0,p.jsx)(e.span,{"data-inspector-line":"158","data-inspector-column":"43","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"()"}),(0,p.jsx)(e.span,{"data-inspector-line":"160","data-inspector-column":"30","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,p.jsxs)(e.span,{"data-inspector-line":"162","data-inspector-column":"54","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line highlighted",children:[(0,p.jsx)(e.span,{"data-inspector-line":"162","data-inspector-column":"101","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"  ]"}),(0,p.jsx)(e.span,{"data-inspector-line":"164","data-inspector-column":"31","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,p.jsx)(e.span,{"data-inspector-line":"166","data-inspector-column":"54","data-inspector-relative-path":"pages/docs/integration/vite.mdx",className:"line",children:(0,p.jsx)(e.span,{"data-inspector-line":"166","data-inspector-column":"89","data-inspector-relative-path":"pages/docs/integration/vite.mdx",style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,p.jsx)(e.h2,{"data-inspector-line":"168","data-inspector-column":"92","data-inspector-relative-path":"pages/docs/integration/vite.mdx",id:"example",children:"Example"}),"\n",(0,p.jsxs)(e.p,{"data-inspector-line":"168","data-inspector-column":"155","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:["Example project code you can find in ",(0,p.jsx)(e.a,{"data-inspector-line":"168","data-inspector-column":"211","data-inspector-relative-path":"pages/docs/integration/vite.mdx",href:"https://github.com/zthxxx/react-dev-inspector/blob/dev/examples/vite4/vite.config.ts",children:"examples/vite4"}),",\nor see online demo via:"]}),"\n",(0,p.jsx)(e.p,{"data-inspector-line":"168","data-inspector-column":"404","data-inspector-relative-path":"pages/docs/integration/vite.mdx",children:(0,p.jsxs)(e.a,{"data-inspector-line":"168","data-inspector-column":"419","data-inspector-relative-path":"pages/docs/integration/vite.mdx",href:"https://stackblitz.com/github/zthxxx/react-dev-inspector/tree/dev/examples/vite4",children:["\n",(0,p.jsx)(e.img,{"data-inspector-line":"168","data-inspector-column":"528","data-inspector-relative-path":"pages/docs/integration/vite.mdx",alt:"Open in StackBlitz",src:s.Z}),"\n"]})})]})}e.default=(0,r.j)({MDXContent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,o.a)(),t.components).wrapper;return e?(0,p.jsx)(e,h(h({"data-inspector-line":"172","data-inspector-column":"21","data-inspector-relative-path":"pages/docs/integration/vite.mdx"},t),{},{children:(0,p.jsx)(v,h({"data-inspector-line":"172","data-inspector-column":"43","data-inspector-relative-path":"pages/docs/integration/vite.mdx"},t))})):v(t)},pageOpts:{filePath:"pages/docs/integration/vite.mdx",route:"/docs/integration/vite",title:"Vite Plugin",headings:m},pageNextRoute:"/docs/integration/vite"})},1597:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/integration/vite",function(){return a(9636)}])},9446:function(t,e){"use strict";e.Z={src:"/_next/static/media/open-in-stackblitz.bdc07784.svg",height:32,width:162}},693:function(t,e){"use strict";e.Z={src:"/_next/static/media/middleware-part.cd36038e.svg",height:469,width:1464}},1911:function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=Array(e);a<e;a++)n[a]=t[a];return n}a.d(e,{Z:function(){return n}})},1364:function(t,e,a){"use strict";a.d(e,{Z:function(){return r}});var n=a(1911),i=a(3304);function r(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,i.Z)(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},3304:function(t,e,a){"use strict";a.d(e,{Z:function(){return i}});var n=a(1911);function i(t,e){if(t){if("string"==typeof t)return(0,n.Z)(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if("Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return(0,n.Z)(t,e)}}}},function(t){t.O(0,[313,774,888,179],function(){return t(t.s=1597)}),_N_E=t.O()}]);