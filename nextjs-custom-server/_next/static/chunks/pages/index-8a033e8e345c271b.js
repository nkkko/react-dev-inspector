(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4834:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eo}});var i=n(6545),o=n.n(i),r=n(3348),a=n(7458),s=n(2983),l=n(3113);let d=new Set;var c=n(5293),p=n.n(c);let u=e=>"string"==typeof(null==e?void 0:e.type),m=e=>{var t;return"symbol"==typeof(null===(t=null==e?void 0:e.type)||void 0===t?void 0:t.$$typeof)},h=e=>{var t;return(null===(t=null==e?void 0:e.type)||void 0===t?void 0:t.$$typeof)===Symbol.for("react.forward_ref")},g=e=>{let t=Object.keys(e).find(e=>e.startsWith("__reactInternalInstance$")||e.startsWith("__reactFiber$"));if(t)return e[t]},f=e=>{if(!e)return;let t=g(e);return t||f(e.parentElement)},v=e=>{let t=e.return;for(;t;){if(!m(t))return t;t=t.return}return null},b=e=>{let t=null==e?void 0:e.type;if(!t)return;let{displayName:n,name:i}=t;return"string"==typeof n?n:"string"==typeof i?i:void 0},x=e=>{if(!(null==e?void 0:e._debugSource))return;let{fileName:t,lineNumber:n,columnNumber:i}=e._debugSource;if(t&&n)return{lineNumber:String(n),columnNumber:String(null!=i?i:1),absolutePath:t.match(/^<.*>$/)?t.replace(/^<|>$/g,""):t}},y=e=>{if(!(null==e?void 0:e.pendingProps))return;let{"data-inspector-line":t,"data-inspector-column":n,"data-inspector-relative-path":i}=e.pendingProps;if(t&&n&&i)return{lineNumber:t,columnNumber:n,relativePath:i}},w=e=>{var t;return null!==(t=y(e))&&void 0!==t?t:x(e)},j=e=>{if(!e)return;let t=v(e);if(!t)return;let n=u(t),i=!t.child.sibling,o=!n&&i?t:e,r=o;for(;o;){if(w(o))return o;o=o.return}return r},E=e=>{let t=f(e),n=j(t);return w(n)},P=e=>{if(!e)return;let{lineNumber:t,columnNumber:n,relativePath:i,absolutePath:o}=e,r=Boolean(i),a=r?i:o;if(!a){console.error("[react-dev-inspector] Cannot open editor without source fileName",e);return}let s=r?`${p()}/relative`:p();fetch(`${s}?${new URLSearchParams({fileName:a,lineNumber:t,colNumber:n})}`)},N=e=>{var t,n;let i;let o=e;for(;o;){let r,a=null!==(t=o.return)&&void 0!==t?t:void 0;for(;m(a);)h(a)&&(r=a),a=null!==(n=null==a?void 0:a.return)&&void 0!==n?n:void 0;if(r&&(o=r),b(o)&&(i||(i=o),w(o)))return o;o=a}return i},C=e=>{let t=f(e),n=j(t),i=N(n),o=b(i),r=e.nodeName.toLowerCase(),a=o?`${r} in <${o}>`:r;return{fiber:n,name:o,title:a}};function I(e){return e.getBoundingClientRect()}class O{constructor(e,t){Object.defineProperty(this,"node",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"border",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"padding",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"content",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.node=e.createElement("div"),this.border=e.createElement("div"),this.padding=e.createElement("div"),this.content=e.createElement("div"),this.border.style.borderColor=k.border,this.padding.style.borderColor=k.padding,this.content.style.backgroundColor=k.background,Object.assign(this.node.style,{borderColor:k.margin,pointerEvents:"none",position:"fixed"}),this.node.style.zIndex="10000000",this.node.appendChild(this.border),this.border.appendChild(this.padding),this.padding.appendChild(this.content),t.prepend(this.node)}remove(){this.node.parentNode&&this.node.parentNode.removeChild(this.node)}update(e,t){T(t,"margin",this.node),T(t,"border",this.border),T(t,"padding",this.padding),Object.assign(this.content.style,{height:`${e.height-t.borderTop-t.borderBottom-t.paddingTop-t.paddingBottom}px`,width:`${e.width-t.borderLeft-t.borderRight-t.paddingLeft-t.paddingRight}px`}),Object.assign(this.node.style,{top:`${e.top-t.marginTop}px`,left:`${e.left-t.marginLeft}px`})}}class _{constructor(e,t){Object.defineProperty(this,"tip",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"nameSpan",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"titleDiv",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"infoDiv",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dimSpan",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.tip=e.createElement("div"),Object.assign(this.tip.style,{display:"flex",flexFlow:"row nowrap",alignItems:"center",backgroundColor:"#333740",borderRadius:"2px",fontFamily:'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',fontWeight:"bold",padding:"6px 8px",pointerEvents:"none",position:"fixed",fontSize:"12px",whiteSpace:"nowrap"}),this.nameSpan=e.createElement("span"),this.tip.appendChild(this.nameSpan),Object.assign(this.nameSpan.style,{display:"flex",flexDirection:"column",borderRight:"1px solid #aaaaaa",paddingRight:"0.8rem",marginRight:"0.8rem"}),this.titleDiv=e.createElement("div"),this.nameSpan.appendChild(this.titleDiv),Object.assign(this.titleDiv.style,{color:"#ee78e6",fontSize:"16px"}),this.infoDiv=e.createElement("div"),this.nameSpan.appendChild(this.infoDiv),Object.assign(this.infoDiv.style,{color:"#ee78e6",fontSize:"14px"}),this.dimSpan=e.createElement("span"),this.tip.appendChild(this.dimSpan),Object.assign(this.dimSpan.style,{color:"#d7d7d7"}),this.tip.style.zIndex="10000000",t.appendChild(this.tip)}remove(){this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip)}updateText(e,t,n,i){this.titleDiv.textContent=e,this.infoDiv.textContent=null!=t?t:"",this.dimSpan.textContent=`${Math.round(n)}px \xd7 ${Math.round(i)}px`}updatePosition(e,t){let n=this.tip.getBoundingClientRect(),i=function(e,t,n){let i;let o=Math.max(n.height,20),r=Math.max(n.width,60);i=e.top+e.height+o<=t.top+t.height?e.top+e.height<t.top+0?t.top+5:e.top+e.height+5:e.top-o<=t.top+t.height?e.top-o-5<t.top+5?t.top+5:e.top-o-5:t.top+t.height-o-5;let a=e.left+5;return e.left<t.left&&(a=t.left+5),e.left+r>t.left+t.width&&(a=t.left+t.width-r-5),{style:{top:`${i}px`,left:`${a}px`}}}(e,t,{width:n.width,height:n.height});Object.assign(this.tip.style,i.style)}}class L{constructor(){Object.defineProperty(this,"window",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"tipBoundsWindow",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"tip",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rects",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"removeCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0});let e=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.window=e;let t=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.tipBoundsWindow=t;let n=e.document;this.container=n.createElement("div"),this.container.style.zIndex="10000000",this.tip=new _(n,this.container),this.rects=[],this.removeCallback=()=>{},n.body.appendChild(this.container)}remove(){this.tip.remove(),this.rects.forEach(e=>{e.remove()}),this.rects.length=0,this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.removeCallback()}setRemoveCallback(e){this.removeCallback=e.bind(this)}inspect(e,t,n){var i;let o=e.filter(e=>e.nodeType===Node.ELEMENT_NODE);for(;this.rects.length>o.length;){let r=this.rects.pop();null==r||r.remove()}if(0===o.length)return;for(;this.rects.length<o.length;)this.rects.push(new O(this.window.document,this.container));let a={top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,left:Number.POSITIVE_INFINITY};if(o.forEach((e,t)=>{let n=I(e,this.window),i=function(e){let t=window.getComputedStyle(e);return{borderLeft:Number.parseInt(t.borderLeftWidth,10),borderRight:Number.parseInt(t.borderRightWidth,10),borderTop:Number.parseInt(t.borderTopWidth,10),borderBottom:Number.parseInt(t.borderBottomWidth,10),marginLeft:Number.parseInt(t.marginLeft,10),marginRight:Number.parseInt(t.marginRight,10),marginTop:Number.parseInt(t.marginTop,10),marginBottom:Number.parseInt(t.marginBottom,10),paddingLeft:Number.parseInt(t.paddingLeft,10),paddingRight:Number.parseInt(t.paddingRight,10),paddingTop:Number.parseInt(t.paddingTop,10),paddingBottom:Number.parseInt(t.paddingBottom,10)}}(e);a.top=Math.min(a.top,n.top-i.marginTop),a.right=Math.max(a.right,n.left+n.width+i.marginRight),a.bottom=Math.max(a.bottom,n.top+n.height+i.marginBottom),a.left=Math.min(a.left,n.left-i.marginLeft);let o=this.rects[t];o.update(n,i)}),!t){t=o[0].nodeName.toLowerCase();let s=o[0],l=null===(i=s.ownerDocument.defaultView)||void 0===i?void 0:i.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(null==l?void 0:l.rendererInterfaces){let d=null;for(let c of l.rendererInterfaces.values()){let p=c.getFiberIDForNative(s,!0);if(null!==p){d=c.getDisplayNameForFiberID(p,!0);break}}d&&(t+=` (in ${d})`)}}this.tip.updateText(t,n,a.right-a.left,a.bottom-a.top);let u=I(this.tipBoundsWindow.document.documentElement,this.window);this.tip.updatePosition({top:a.top,left:a.left,height:a.bottom-a.top,width:a.right-a.left},{top:u.top+this.tipBoundsWindow.scrollY,left:u.left+this.tipBoundsWindow.scrollX,height:this.tipBoundsWindow.innerHeight,width:this.tipBoundsWindow.innerWidth})}}function T(e,t,n){Object.assign(n.style,{borderTopWidth:`${e[`${t}Top`]}px`,borderLeftWidth:`${e[`${t}Left`]}px`,borderRightWidth:`${e[`${t}Right`]}px`,borderBottomWidth:`${e[`${t}Bottom`]}px`,borderStyle:"solid"})}let k={background:"rgba(120, 170, 210, 0.7)",padding:"rgba(77, 200, 0, 0.3)",margin:"rgba(255, 155, 0, 0.3)",border:"rgba(255, 200, 50, 0.3)"},R=["control","shift","command","c"],S=e=>{let{keys:t,onHoverElement:n,onClickElement:i,disableLaunchEditor:o,children:r}=e,c=(null!=t?t:R).join("+"),p=(0,s.useRef)(),u=(0,s.useRef)({x:0,y:0}),m=({clientX:e,clientY:t})=>{u.current.x=e,u.current.y=t},h=()=>{let e=new L;p.current=e;let t=function(e){function t(e){e&&"function"==typeof e.addEventListener&&(e.addEventListener("click",o,!0),e.addEventListener("mousedown",r,!0),e.addEventListener("mouseover",r,!0),e.addEventListener("mouseup",r,!0),e.addEventListener("pointerdown",a,!0),e.addEventListener("pointerover",s,!0),e.addEventListener("pointerup",l,!0))}function n(){i(window),d.forEach(e=>{try{i(e.contentWindow)}catch(t){}}),d=new Set}function i(e){e&&"function"==typeof e.removeEventListener&&(e.removeEventListener("click",o,!0),e.removeEventListener("mousedown",r,!0),e.removeEventListener("mouseover",r,!0),e.removeEventListener("mouseup",r,!0),e.removeEventListener("pointerdown",a,!0),e.removeEventListener("pointerover",s,!0),e.removeEventListener("pointerup",l,!0))}function o(t){var i;t.preventDefault(),t.stopPropagation(),n(),null===(i=e.onClick)||void 0===i||i.call(e,t.target)}function r(e){e.preventDefault(),e.stopPropagation()}function a(e){e.preventDefault(),e.stopPropagation()}function s(n){var i;n.preventDefault(),n.stopPropagation();let o=n.target;if("IFRAME"===o.tagName)try{if(!d.has(o)){let r=o.contentWindow;t(r),d.add(o)}}catch(a){}null===(i=e.onPointerOver)||void 0===i||i.call(e,n.target)}function l(e){e.preventDefault(),e.stopPropagation()}return t(window),n}({onPointerOver:f,onClick:v});e.setRemoveCallback(t);let n=u.current,i=document.elementFromPoint(n.x,n.y);i&&f(i)},g=()=>{var e;null===(e=p.current)||void 0===e||e.remove(),p.current=void 0},f=e=>{var t;let i=p.current,o=E(e),r=null==o?void 0:o.relativePath,a=null==o?void 0:o.absolutePath,{fiber:s,name:l,title:d}=C(e);null===(t=null==i?void 0:i.inspect)||void 0===t||t.call(i,[e],d,null!=r?r:a),null==n||n({element:e,fiber:s,codeInfo:o,name:l})},v=e=>{g();let t=E(e),{fiber:n,name:r}=C(e);o||P(t),null==i||i({element:e,fiber:n,codeInfo:t,name:r})};return(0,s.useEffect)(()=>(document.addEventListener("mousemove",m,!0),()=>{document.removeEventListener("mousemove",m,!0)}),[]),(0,s.useEffect)(()=>{let e=(e,t)=>{t.key===c?p.current?g():h():"esc"===t.key&&p.current&&g()};return(0,l.Z)(`${c}, esc`,e),()=>{l.Z.unbind(`${c}, esc`,e)}},[c]),(0,a.jsx)(a.Fragment,{children:null!=r?r:null})};var D=n(5429),$=(0,D.Z)("h1",{target:"e177eggu0",label:"TitleName"})({name:"1trfe00",styles:"font-size:4rem;padding:0 3rem"}),B=function(e){var t=e.children;return(0,a.jsx)($,{"data-inspector-line":"11","data-inspector-column":"4","data-inspector-relative-path":"components/HomePage/components/Title/Title.tsx",children:t})},H=(0,D.Z)("div",{target:"e1u2u1s90",label:"Description"})({name:"17iv70g",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0 auto;padding:2rem;font-size:1.5rem;color:#999;p{margin:0.5rem auto;}"}),W=function(e){var t=e.children;return(0,a.jsx)(H,{"data-inspector-line":"11","data-inspector-column":"4","data-inspector-relative-path":"components/HomePage/components/Slogan/Slogan.tsx",children:t})},F=n(9743),M=n(5825),Z=n(7984),z=n(9044),K=n(6379),A=(0,n(781).iv)({name:"1662ycn-keyTone",styles:"display:inline-block;padding:0.5rem 0.8rem;font:12px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1.2rem;font-weight:600;height:1.2rem;line-height:1.2rem;color:#444d56;vertical-align:middle;background-color:#fafbfc;border:1px solid #d1d5da;border-radius:0.4rem;box-shadow:inset 0 -1px 0 #d1d5da;label:keyTone;"}),V=(0,D.Z)("div",{target:"eupgomr1",label:"Keys"})("display:inline-block;padding:0 0.5rem;opacity:1;animation:flickerAnimation 2s ease-in-out infinite;&>.",A,"{margin:auto 0.8rem;}@keyframes flickerAnimation{0%{opacity:1;}50%{opacity:.6;}100%{opacity:1;}}"),G=(0,D.Z)("div",{target:"eupgomr0",label:"Pad"})({name:"1bj9ao8",styles:"vertical-align:center;margin:0 auto;padding:2rem;font-size:1.5rem;color:#666"}),Y=function(e){var t=e.children;return(0,a.jsx)("kbd",{"data-inspector-line":"7","data-inspector-column":"4","data-inspector-relative-path":"components/HomePage/components/Keypress/Keypress.tsx",className:A,children:t})},X=function(e){(0,Z.Z)(i,e);var t,n=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=(0,K.Z)(i);if(t){var o=(0,K.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,z.Z)(this,e)});function i(){return(0,F.Z)(this,i),n.apply(this,arguments)}return(0,M.Z)(i,[{key:"render",value:function(){var e=this.props.children;return(0,a.jsxs)(G,{"data-inspector-line":"22","data-inspector-column":"6","data-inspector-relative-path":"components/HomePage/components/Keypress/Keypress.tsx",children:[(0,a.jsx)("span",{"data-inspector-line":"23","data-inspector-column":"8","data-inspector-relative-path":"components/HomePage/components/Keypress/Keypress.tsx",children:"press"}),(0,a.jsx)(V,{"data-inspector-line":"25","data-inspector-column":"8","data-inspector-relative-path":"components/HomePage/components/Keypress/Keypress.tsx",children:e}),(0,a.jsx)("span",{"data-inspector-line":"27","data-inspector-column":"8","data-inspector-relative-path":"components/HomePage/components/Keypress/Keypress.tsx",children:"to try! \uD83C\uDF6D"})]})}}]),i}(s.Component),q=(0,D.Z)("div",{target:"e10lyeky0",label:"Badge"})({name:"v6av",styles:"display:inline-block;margin-left:1rem;border:1px solid transparent;border-radius:2rem;padding:.2rem 1rem;line-height:1;font-size:1.5rem;font-weight:600;border-color:#059669;color:#10b981;background-color:#10b9810d"}),Q=function(e){var t=e.children;return t?(0,a.jsx)(q,{"data-inspector-line":"13","data-inspector-column":"4","data-inspector-relative-path":"components/HomePage/components/Badge/Badge.tsx",children:t}):null},U=n(2100),J={name:"11lsj2l-globalCss",styles:"html,body,#root{margin:0;width:100%;height:100%;};label:globalCss;"},ee=(0,D.Z)("div",{target:"e1g0qsk51",label:"Base"})({name:"wfjpag",styles:"position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%"}),et=(0,D.Z)(U.Z,{target:"e1g0qsk50",label:"GithubCorner"})(""),en="https://github.com/zthxxx/react-dev-inspector",ei=function(e){var t=e.name,n=e.titleBadge;return(0,a.jsxs)(S,{"data-inspector-line":"20","data-inspector-column":"4","data-inspector-relative-path":"components/HomePage/index.tsx",disableLaunchEditor:!0,onClickElement:function(e){if(console.debug("[InspectParams]",e),e.codeInfo){var n=e.codeInfo,i=n.relativePath,o=n.absolutePath,r=n.lineNumber;if(i){var a="examples/".concat(t,"/").concat(i);window.open("".concat(en,"/blob/master/").concat(a,"#L").concat(r))}else if(o){var s=o.replace(/^.*?\/examples\//,"examples/");window.open("".concat(en,"/blob/master/").concat(s,"#L").concat(r))}}},children:[(0,a.jsx)(r.xB,{"data-inspector-line":"37","data-inspector-column":"6","data-inspector-relative-path":"components/HomePage/index.tsx",styles:J}),(0,a.jsxs)(ee,{"data-inspector-line":"40","data-inspector-column":"6","data-inspector-relative-path":"components/HomePage/index.tsx",children:[(0,a.jsx)(et,{"data-inspector-line":"41","data-inspector-column":"8","data-inspector-relative-path":"components/HomePage/index.tsx",href:en}),(0,a.jsxs)(B,{"data-inspector-line":"45","data-inspector-column":"8","data-inspector-relative-path":"components/HomePage/index.tsx",children:[(0,a.jsx)("span",{"data-inspector-line":"46","data-inspector-column":"10","data-inspector-relative-path":"components/HomePage/index.tsx",children:"React Dev Inspector"}),(0,a.jsx)(Q,{"data-inspector-line":"47","data-inspector-column":"10","data-inspector-relative-path":"components/HomePage/index.tsx",children:n})]}),(0,a.jsxs)(W,{"data-inspector-line":"50","data-inspector-column":"8","data-inspector-relative-path":"components/HomePage/index.tsx",children:[(0,a.jsx)("p",{"data-inspector-line":"51","data-inspector-column":"10","data-inspector-relative-path":"components/HomePage/index.tsx",children:"Quick jump to local IDE source code directly from browser React component by just a simple click!"}),(0,a.jsx)("p",{"data-inspector-line":"52","data-inspector-column":"10","data-inspector-relative-path":"components/HomePage/index.tsx",children:(0,a.jsx)("small",{"data-inspector-line":"52","data-inspector-column":"13","data-inspector-relative-path":"components/HomePage/index.tsx",children:"( for this prod online demo page, jump to GitHub file )"})})]}),(0,a.jsxs)(X,{"data-inspector-line":"55","data-inspector-column":"8","data-inspector-relative-path":"components/HomePage/index.tsx",children:[(0,a.jsx)(Y,{"data-inspector-line":"56","data-inspector-column":"10","data-inspector-relative-path":"components/HomePage/index.tsx",children:"Ctrl ⌃"}),"+",(0,a.jsx)(Y,{"data-inspector-line":"58","data-inspector-column":"10","data-inspector-relative-path":"components/HomePage/index.tsx",children:"Shift ⇧"}),"+",(0,a.jsx)(Y,{"data-inspector-line":"60","data-inspector-column":"10","data-inspector-relative-path":"components/HomePage/index.tsx",children:"Command ⌘"}),"+",(0,a.jsx)(Y,{"data-inspector-line":"62","data-inspector-column":"10","data-inspector-relative-path":"components/HomePage/index.tsx",children:"C"})]})]})]})};function eo(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{"data-inspector-line":"7","data-inspector-column":"6","data-inspector-relative-path":"pages/index.tsx",children:[(0,a.jsx)("meta",{"data-inspector-line":"8","data-inspector-column":"8","data-inspector-relative-path":"pages/index.tsx",charSet:"utf-8"}),(0,a.jsx)("meta",{"data-inspector-line":"9","data-inspector-column":"8","data-inspector-relative-path":"pages/index.tsx",name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("meta",{"data-inspector-line":"10","data-inspector-column":"8","data-inspector-relative-path":"pages/index.tsx",name:"theme-color",content:"#000000"}),(0,a.jsx)("meta",{"data-inspector-line":"11","data-inspector-column":"8","data-inspector-relative-path":"pages/index.tsx",name:"description",content:"website demo for react-dev-inspector"}),(0,a.jsx)("title",{"data-inspector-line":"16","data-inspector-column":"8","data-inspector-relative-path":"pages/index.tsx",children:"React Dev Inspector | vite4 demo"})]}),(0,a.jsx)(ei,{"data-inspector-line":"19","data-inspector-column":"6","data-inspector-relative-path":"pages/index.tsx",name:"nextjs-custom-server",titleBadge:"Next.js 13"})]})}},1948:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4834)}])}},function(e){e.O(0,[401,774,888,179],function(){return e(e.s=1948)}),_N_E=e.O()}]);