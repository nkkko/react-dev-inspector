"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[541],{414:function(t,e,o){o.d(e,{Jx:function(){return n},r8:function(){return i},sE:function(){return s}});var r=o(8783),i=!1,n="https://github.com/zthxxx/react-dev-inspector",s=function(t){if(i)return(0,r.$e)(t.codeInfo);var e=t.codeInfo,o=e.relativePath,s=e.absolutePath,a=e.lineNumber;if(o)window.open("".concat(n,"/blob/dev/").concat("docs/".concat(o),"#L").concat(a));else if(s){var l=s.replace(/^.*?\/docs\//,"docs/");window.open("".concat(n,"/blob/dev/").concat(l,"#L").concat(a))}}},8193:function(t,e,o){o.d(e,{z:function(){return l}});var r=o(4634),i=o(79),n=o(9841);function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,r)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach(function(e){(0,r.Z)(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var l=function(t,e){var o=e.className,r=e.displayName,s=(0,i.forwardRef)(function(e,r){var s=e.className;return(0,i.createElement)(t,a(a({},e),{},{ref:r,className:(0,n.W)(o,s)}))});return s.displayName=null!=r?r:"TwStyled(".concat("string"==typeof t?t:t.displayName||t.name||"Component",")"),s};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(t){l[t]=function(e){return l(t,e)}})},6842:function(t,e,o){o.d(e,{l:function(){return W},B:function(){return M}});var r,i=o(5250),n=o(79),s=o(821);let a=t=>"string"==typeof t?.type,l=t=>"symbol"==typeof t?.type?.$$typeof,p=t=>t?.type?.$$typeof===Symbol.for("react.forward_ref"),c=t=>{let e=Object.keys(t).find(t=>t.startsWith("__reactInternalInstance$")||t.startsWith("__reactFiber$"));if(e)return t[e]},d=t=>{if(!t)return;let e=c(t);return e||d(t.parentElement)},u=t=>{let e=t.return;for(;e;){if(!l(e))return e;e=e.return}return null},f=t=>{let e=t?.type;if(!e)return;let{displayName:o,name:r}=e;return"string"==typeof o?o:"string"==typeof r?r:void 0},h=t=>{if(!t)return;let e=t._debugSource??t._debugOwner?._debugSource;if(!e)return;let{fileName:o,lineNumber:r,columnNumber:i}=e;if(o&&r)return{lineNumber:String(r),columnNumber:String(i??1),absolutePath:o.match(/^<.*>$/)?o.replace(/^<|>$/g,""):o}},g=t=>{if(!t?.pendingProps)return;let{"data-inspector-line":e,"data-inspector-column":o,"data-inspector-relative-path":r}=t.pendingProps;if(e&&o&&r)return{lineNumber:e,columnNumber:o,relativePath:r}},m=t=>{let e=[h(t),g(t)].filter(Boolean);if(e.length)return Object.assign({},...e)},b=t=>{if(!t)return;let e=u(t);if(!e)return;let o=a(e),r=!e.child.sibling,i=!o&&r?e:t,n=i;for(;i;){if(m(i))return i;i=i.return}return n},v=t=>{let e=d(t),o=b(e);return m(o)},y=t=>{let e,o=t;for(;o;){let r,i=o.return??void 0;for(;l(i);)p(i)&&(r=i),i=i?.return??void 0;if(r&&(o=r),f(o)&&(e||(e=o),m(o)))return o;o=i}return e},x=t=>{let e=d(t),o=b(e),r=y(o),i=f(r),n=t.nodeName.toLowerCase(),s=i?`${n} in <${i}>`:n;return{fiber:o,name:i,title:s}};var w=o(8783);let S="undefined"!=typeof window&&window?.document?.createElement?n.useLayoutEffect:n.useEffect,R=({disable:t})=>{let e=(0,n.useRef)({x:0,y:0}),o=t=>{e.current.x=t.clientX,e.current.y=t.clientY};return(0,n.useEffect)(()=>(t||document.addEventListener("mousemove",o,!0),()=>{document.removeEventListener("mousemove",o,!0)}),[t]),e},O=t=>{let e=(0,n.useRef)(t);e.current=(0,n.useMemo)(()=>t,[t]);let o=(0,n.useRef)();return o.current||(o.current=function(...t){return e.current?.apply(this,t)}),o.current};var L=o(7540),E=o(847),P=o(355);let $=(t,e)=>{customElements.get(t)||customElements.define(t,e)};function B(t){let e=t.getBoundingClientRect();return{top:e.top,left:e.left,width:e.width,height:e.height,right:e.right,bottom:e.bottom}}var C=o(2989),j=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let _=class extends L.oi{constructor(){super(...arguments),this.styles={hostStyle:{top:0,left:0},marginStyle:(0,C.V)({display:"none"}),borderStyle:(0,C.V)({display:"none"}),paddingStyle:(0,C.V)({display:"none"}),contentStyle:(0,C.V)({display:"none"})}}updateBound({boxSizing:t,boundingRect:e}){this.boxSizing=t,this.boundingRect=e,this.styles={hostStyle:{top:(this.boundingRect?.top??0)-(this.boxSizing?.marginTop??0),left:(this.boundingRect?.left??0)-(this.boxSizing?.marginLeft??0)},marginStyle:(0,C.V)(this.getBoxStyle(this.boxSizing,"margin")),borderStyle:(0,C.V)(this.getBoxStyle(this.boxSizing,"border")),paddingStyle:(0,C.V)(this.getBoxStyle(this.boxSizing,"padding")),contentStyle:this.boundingRect&&this.boxSizing?(0,C.V)({height:`${this.boundingRect.height-this.boxSizing.borderTop-this.boxSizing.borderBottom-this.boxSizing.paddingTop-this.boxSizing.paddingBottom}px`,width:`${this.boundingRect.width-this.boxSizing.borderLeft-this.boxSizing.borderRight-this.boxSizing.paddingLeft-this.boxSizing.paddingRight}px`}):(0,C.V)({})}}getBoxStyle(t,e){return t?{borderTopWidth:`${t[`${e}Top`]}px`,borderLeftWidth:`${t[`${e}Left`]}px`,borderRightWidth:`${t[`${e}Right`]}px`,borderBottomWidth:`${t[`${e}Bottom`]}px`,borderStyle:"solid"}:{display:"none"}}render(){let{hostStyle:t,marginStyle:e,borderStyle:o,paddingStyle:r,contentStyle:i}=this.styles;return this.style.setProperty("--inspector-overlay-rect-top",`${t.top}px`),this.style.setProperty("--inspector-overlay-rect-left",`${t.left}px`),L.dy`
      <div
        class='inspector-overlay-margin'
        style=${e}
      >
        <div
          class='inspector-overlay-border'
          style=${o}
        >
          <div
            class='inspector-overlay-padding'
            style=${r}
          >
            <div
              class='inspector-overlay-content'
              style=${i}
            >
            </div>
          </div>
        </div>
      </div>
    `}};_.styles=L.iv`
    :host {
      position: fixed;
      z-index: 10000000;
      cursor: default;
      top: var(--inspector-overlay-rect-top, 0);
      left: var(--inspector-overlay-rect-left, 0);
    }

    .inspector-overlay-margin {
      /**
       * PageHighlight.Margin in
       *   https://github.com/ChromeDevTools/devtools-frontend/blob/chromium/6210/front_end/core/common/Color.ts#L2322
       */
      border-color: rgba(246, 178, 107, .66);
    }
    .inspector-overlay-border {
      /**
       * PageHighlight.Border in
       *   https://github.com/ChromeDevTools/devtools-frontend/blob/chromium/6210/front_end/core/common/Color.ts#L2320
       */
      border-color: rgba(255, 229, 153, .66);
    }
    .inspector-overlay-padding {
      /**
       * PageHighlight.Padding in
       *   https://github.com/ChromeDevTools/devtools-frontend/blob/chromium/6210/front_end/core/common/Color.ts#L2318
       */
      border-color: rgba(147, 196, 125, .55);
    }
    .inspector-overlay-content {
      /**
       * PageHighlight.Content in
       *   https://github.com/ChromeDevTools/devtools-frontend/blob/chromium/6210/front_end/core/common/Color.ts#L2315
       */
      background-color: rgba(111, 168, 220, .66);
    }
  `,j([(0,E.Cb)({attribute:!1}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],_.prototype,"styles",void 0),_=j([(0,E.Mo)("inspector-overlay-rect")],_);var z=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s},N=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let T=r=class extends L.oi{constructor(){super(...arguments),this.title="",this.info="",this.position={},this.infoStyle=(0,C.V)({})}updateTip({title:t,info:e,boundingRect:o,boxSizing:i,spaceBox:n}){this.title=t,this.info=e,this.boundingBox={...o,right:o.left+o.width,bottom:o.top+o.height},this.boxSizing=i,this.spaceBox=n??r.getViewSpaceBox(),this.infoStyle=(0,C.V)({display:this.info?"block":"none"})}get outerBox(){let{boundingBox:t,boxSizing:e}=this;if(!t||!e)return{top:0,left:0,width:0,height:0,bottom:0,right:0};let o={top:Math.min(t.top,t.top-e.marginTop),left:Math.min(t.left,t.left-e.marginLeft),right:Math.max(t.right,t.right+e.marginRight),bottom:Math.max(t.bottom,t.bottom+e.marginBottom)};return{top:o.top,left:o.left,right:o.right,bottom:o.bottom,width:o.right-o.left,height:o.bottom-o.top}}get width(){return Math.round(this.boundingBox?.width??0)}get height(){return Math.round(this.boundingBox?.height??0)}static getViewSpaceBox(t){let e=t??window.__REACT_DEVTOOLS_TARGET_WINDOW__??window,o=B(e.document.documentElement);return{top:o.top+e.scrollY,left:o.left+e.scrollX,right:o.left+e.scrollX+e.innerWidth,bottom:o.top+e.scrollY+e.innerHeight,width:e.innerWidth,height:e.innerHeight}}updated(t){!t.get("position")&&this.boundingBox&&this.boxSizing&&this.spaceBox&&(this.position=k({elementBox:this.outerBox,spaceBox:this.spaceBox,tipSize:this.getBoundingClientRect()}),this.requestUpdate("position"))}render(){let t=!this.boundingBox||!this.boxSizing;return this.style.setProperty("--inspector-overlay-tip-display",t?"none":"flex"),this.style.setProperty("--inspector-overlay-tip-top",`${this.position.top}px`),this.style.setProperty("--inspector-overlay-tip-left",`${this.position.left}px`),L.dy`
      <div class='inspector-tip-name' >
        <div class='inspector-tip-title' >
          &lrm;${this.title}&lrm;
        </div>

        <div
          class='inspector-tip-info'
          style=${this.infoStyle}
        >
          &lrm;${this.info}&lrm;
        </div>
      </div>
      <div class='inspector-tip-separator'></div>
      <div class='inspector-tip-size' >
        ${this.width}px × ${this.height}px
      </div>
    `}};T.styles=L.iv`
    :host {
      position: fixed;
      z-index: 10000000;
      display: var(--inspector-overlay-tip-display, none);
      top: var(--inspector-overlay-tip-top, 0);
      left: var(--inspector-overlay-tip-left, 0);

      flex-flow: row nowrap;
      align-items: center;
      border-radius: 4px;
      padding: 4px 12px;
      background-color: #333740;
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
      font-size: 12px;
      font-weight: bold;
      line-height: 1;
      white-space: nowrap;
      max-width: 97vw;
    }

    .inspector-tip-name {
      display: flex;
      flex-direction: column;
      flex: 0 1 auto;
      overflow: hidden;
    }

    .inspector-tip-separator {
      width: 0;
      flex: 0 0 auto;
      border-right: 1px solid #aaaaaa;
      margin-inline: 12px;
      height: 40px;
    }

    .inspector-tip-title, .inspector-tip-info {
      max-width: 750px;
      margin-block: 4px;
      color: #ee78e6;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      /**
       * use "direction: rtl" to ellipsis beginning of string from left;
       * and use Left-To-Right Mark "&lrm;" to avoid symbols reversed at beginning or end;
       * https://stackoverflow.com/questions/12761418/i-need-an-overflow-to-truncate-from-the-left-with-ellipses/66986273#66986273
       */
      direction: rtl;
      text-align: left;
    }
    .inspector-tip-title {
      font-size: 16px;
    }
    .inspector-tip-info {
      font-size: 14px;
    }
    .inspector-tip-size {
      flex: 0 0 auto;
      color: #d7d7d7;
    }
  `,z([(0,E.Cb)(),N("design:type",Object)],T.prototype,"title",void 0),z([(0,E.Cb)(),N("design:type",Object)],T.prototype,"info",void 0),z([(0,E.Cb)({attribute:!1}),N("design:type",Object)],T.prototype,"boundingBox",void 0),z([(0,E.Cb)({attribute:!1}),N("design:type",Object)],T.prototype,"boxSizing",void 0),z([(0,E.Cb)({attribute:!1}),N("design:type",Object)],T.prototype,"spaceBox",void 0),z([(0,E.SB)(),N("design:type",Object)],T.prototype,"position",void 0),z([(0,E.Cb)({attribute:!1}),N("design:type",void 0)],T.prototype,"infoStyle",void 0),T=r=z([(0,E.Mo)("inspector-overlay-tip")],T);let k=({elementBox:t,spaceBox:e,tipSize:o})=>{let r=Math.max(o.width,100),i=Math.max(o.height,48),n={top:4,left:4};return e.top>=t.bottom?n.top=e.top:t.top>=e.bottom?n.top=e.bottom-i:e.bottom-t.bottom>=i+4?n.top=t.bottom+4:t.top-e.top>=i+4?n.top=t.top-i-4:n.top=Math.max(t.top,e.top)+4,o.width>=e.width?n.left=e.left:e.left>=t.right?n.left=e.left:t.left>=e.right?n.left=e.right-r:e.right-t.left>=r+4?n.left=Math.max(t.left,e.left,4):n.left=e.right-r-4,n},D=class extends L.oi{constructor(){super(...arguments),this.boxRef=(0,P.V)(),this.tipRef=(0,P.V)()}async inspect({element:t,title:e="",info:o=""}){if(!t)return;this.boxRef.value&&this.tipRef.value||await this.updateComplete;let r=this.boxRef.value,i=this.tipRef.value;if(r&&i)return this._inspect({element:t,title:e,info:o,overlayRect:r,overlayTip:i})}_inspect({element:t,title:e,info:o,overlayRect:r,overlayTip:i}){let n=function(t){let e=window.getComputedStyle(t);return{borderLeft:Number.parseInt(e.borderLeftWidth,10),borderRight:Number.parseInt(e.borderRightWidth,10),borderTop:Number.parseInt(e.borderTopWidth,10),borderBottom:Number.parseInt(e.borderBottomWidth,10),marginLeft:Number.parseInt(e.marginLeft,10),marginRight:Number.parseInt(e.marginRight,10),marginTop:Number.parseInt(e.marginTop,10),marginBottom:Number.parseInt(e.marginBottom,10),paddingLeft:Number.parseInt(e.paddingLeft,10),paddingRight:Number.parseInt(e.paddingRight,10),paddingTop:Number.parseInt(e.paddingTop,10),paddingBottom:Number.parseInt(e.paddingBottom,10)}}(t),s=B(t);r.updateBound({boundingRect:s,boxSizing:n}),i.updateTip({title:e,info:o,boundingRect:s,boxSizing:n})}render(){return L.dy`
      <inspector-overlay-rect
        ${(0,P.i)(this.boxRef)}
      >
      </inspector-overlay-rect>
      <inspector-overlay-tip
        ${(0,P.i)(this.tipRef)}
      >
      </inspector-overlay-tip>
    `}};D.styles=L.iv`
    :host {
      pointer-events: none;
    }
  `,D=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s}([(0,E.Mo)("inspector-overlay")],D);class I{constructor(){$("inspector-overlay",D),$("inspector-overlay-rect",_),$("inspector-overlay-tip",T);let t=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.window=t;let e=t.document;this.overlay=document.createElement("inspector-overlay"),e.body.appendChild(this.overlay)}remove(){this.overlay.remove()}async inspect({element:t,title:e,info:o}){await this.overlay.inspect({element:t,title:e,info:o})}}let M=()=>navigator.platform?.startsWith("Mac")?["Ctrl","Shift","Command","C"]:["Ctrl","Shift","Alt","C"],W=t=>{let{keys:e,onHoverElement:o,onClickElement:r,onInspectElement:a,active:l,onActiveChange:p,disableLaunchEditor:c,disable:d=!0,children:u}=t,[f,h]=(0,n.useState)(l??!1);S(()=>{void 0!==l&&h(l)},[l]),(0,n.useEffect)(()=>(f?P():$(),$),[f]);let g=null===e?null:(e??[]).join("+"),m=(0,n.useRef)(),b=(0,n.useRef)(),y=R({disable:d}),L=O(()=>{p?.(!0),void 0===l&&h(!0)}),E=O(()=>{p?.(!1),void 0===l&&h(!1)}),P=O(()=>{if(m.current||d)return;let t=new I;m.current=t,(0,s.Z)("esc",E),b.current=function(t){var e;function o(){var t;(t=window)&&"function"==typeof t.removeEventListener&&(t.removeEventListener("click",r,{capture:!0}),t.removeEventListener("mousedown",i,{capture:!0}),t.removeEventListener("mouseover",i,{capture:!0}),t.removeEventListener("mouseup",i,{capture:!0}),t.removeEventListener("pointerdown",n,{capture:!0}),t.removeEventListener("pointerover",s,{capture:!0}),t.removeEventListener("pointerup",a,{capture:!0}))}function r(e){e.preventDefault(),e.stopPropagation(),o(),t.onClick?.(e.target)}function i(t){t.preventDefault(),t.stopPropagation()}function n(t){t.preventDefault(),t.stopPropagation()}function s(e){e.preventDefault(),e.stopPropagation();let o=e.target;t.onPointerOver?.(o)}function a(t){t.preventDefault(),t.stopPropagation()}return(e=window)&&"function"==typeof e.addEventListener&&(e.addEventListener("click",r,{capture:!0}),e.addEventListener("mousedown",i,{capture:!0}),e.addEventListener("mouseover",i,{capture:!0}),e.addEventListener("mouseup",i,{capture:!0}),e.addEventListener("pointerdown",n,{capture:!0}),e.addEventListener("pointerover",s,{capture:!0}),e.addEventListener("pointerup",a,{capture:!0})),o}({onPointerOver:B,onClick:C});let e=y.current,o=document.elementFromPoint(e.x,e.y);o&&B(o)}),$=O(()=>{m.current?.remove(),m.current=void 0,b.current?.(),b.current=void 0,s.Z.unbind("esc",E)}),B=O(t=>{let e=m.current,r=v(t),i=r?.relativePath,n=r?.absolutePath,{fiber:s,name:a,title:l}=x(t);e?.inspect({element:t,title:l,info:i??n}),o?.({element:t,fiber:s,codeInfo:r,name:a})}),C=O(t=>{E();let e=v(t),{fiber:o,name:i}=x(t);r?.({element:t,fiber:o,codeInfo:e,name:i}),o&&e&&(a?.({element:t,fiber:o,codeInfo:e,name:i}),a||c||(0,w.$e)(e))});return(0,n.useEffect)(()=>{let t=()=>{m.current?E():L()},e=null===g||d?null:g||M().join("+");if(e)return(0,s.Z)(e,t),()=>{s.Z.unbind(e,t)}},[g,d]),(0,i.jsx)(i.Fragment,{children:u??null})}},8783:function(t,e,o){o.d(e,{$e:function(){return s}});var r=o(8687),i=o.n(r);let n=t=>"codeInfo"in t?t.codeInfo:t,s=t=>{if(!t)return;let e=n(t),{lineNumber:o,columnNumber:r,relativePath:s,absolutePath:a}=e,l=Boolean(s),p=l?s:a;if(!p){console.error("[react-dev-inspector] Cannot open editor without source fileName",e);return}let c=l?`${i()}/relative`:i();fetch(`${c}?${new URLSearchParams({fileName:p,lineNumber:o,colNumber:r})}`)}}}]);