"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{6367:function(e,t,r){r.d(t,{Jx:function(){return n},r8:function(){return o},sE:function(){return a}});var i=r(8783),o=!1,n="https://github.com/zthxxx/react-dev-inspector",a=function(e){if(o)return(0,i.$e)(e.codeInfo);var t=e.codeInfo,r=t.relativePath,a=t.absolutePath,s=t.lineNumber;if(r)window.open("".concat(n,"/blob/dev/").concat("docs/".concat(r),"#L").concat(s));else if(a){var l=a.replace(/^.*?\/docs\//,"docs/");window.open("".concat(n,"/blob/dev/").concat(l,"#L").concat(s))}}},2366:function(e,t,r){r.d(t,{z:function(){return l}});var i=r(4962),o=r(79),n=r(9841);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var l=function(e,t){var r=t.className,i=t.displayName,a=(0,o.forwardRef)(function(t,i){var a=t.className;return(0,o.createElement)(e,s(s({},t),{},{ref:i,className:(0,n.W)(r,a)}))});return a.displayName=null!=i?i:"TwStyled(".concat("string"==typeof e?e:e.displayName||e.name||"Component",")"),a};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){l[e]=function(t){return l(e,t)}})},6626:function(e,t,r){r.d(t,{l:function(){return J}});var i,o=r(5250),n=r(79),a=r(8783);let s=({disable:e})=>{let t=(0,n.useRef)();return(0,n.useEffect)(()=>{let r=e=>{t.current=e};return e||document.addEventListener("pointermove",r,!0),()=>{t.current=void 0,document.removeEventListener("pointermove",r,!0)}},[e]),t},l=e=>{let t=(0,n.useRef)(e);t.current=(0,n.useMemo)(()=>e,[e]);let r=(0,n.useRef)();return r.current||(r.current=function(...e){return t.current?.apply(this,e)}),r.current};var c=r(821);let d="undefined"!=typeof window&&window?.document?.createElement?n.useLayoutEffect:n.useEffect,p=({controlledActive:e,onActiveChange:t,onActivate:r,onDeactivate:i,disable:o})=>{let[a,s]=(0,n.useState)(e??!1),p=(0,n.useRef)(a);d(()=>{void 0!==e&&(p.current=e,s(p.current))},[e]);let u=l(()=>{t?.(!0),void 0===e&&(p.current=!0,s(p.current))}),f=l(()=>{t?.(!1),void 0===e&&(p.current=!1,s(p.current))}),h=l(e=>{e?.preventDefault(),e?.stopImmediatePropagation(),f?.()}),g=l(()=>{r?.(),(0,c.Z)("esc",{capture:!0,element:window},h)}),m=l(()=>{c.Z.unbind("esc",h),i?.()});return(0,n.useEffect)(()=>()=>{c.Z.unbind("esc",h)},[]),(0,n.useEffect)(()=>(a&&!o?g():m(),i),[a,o]),{activate:u,deactivate:f,isActive:a,activeRef:p}};var u=r(649),f=r(7540),h=r(355);let g=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{m(e,t)}):m(e,t)},m=(e,t)=>{customElements.get(e)||customElements.define(e,t)};function b(e){let t=e?.getBoundingClientRect?.();return t?{x:t.left,y:t.top,width:t.width,height:t.height}:{x:0,y:0,width:0,height:0}}function v(e){if(e instanceof HTMLElement){let t=window.getComputedStyle(e);return{borderLeft:Number.parseInt(t.borderLeftWidth,10),borderRight:Number.parseInt(t.borderRightWidth,10),borderTop:Number.parseInt(t.borderTopWidth,10),borderBottom:Number.parseInt(t.borderBottomWidth,10),marginLeft:Number.parseInt(t.marginLeft,10),marginRight:Number.parseInt(t.marginRight,10),marginTop:Number.parseInt(t.marginTop,10),marginBottom:Number.parseInt(t.marginBottom,10),paddingLeft:Number.parseInt(t.paddingLeft,10),paddingRight:Number.parseInt(t.paddingRight,10),paddingTop:Number.parseInt(t.paddingTop,10),paddingBottom:Number.parseInt(t.paddingBottom,10)}}return{borderTop:0,borderBottom:0,borderLeft:0,borderRight:0,paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0}}var y=r(6502),x=r(2989),w=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let R=class extends f.oi{constructor(){super(...arguments),this.styles={hostStyle:{top:0,left:0},marginStyle:(0,x.V)({display:"none"}),borderStyle:(0,x.V)({display:"none"}),paddingStyle:(0,x.V)({display:"none"}),contentStyle:(0,x.V)({display:"none"})}}updateBound({boxSizing:e,boundingRect:t}){this.boxSizing=e,this.boundingRect=t,this.styles={hostStyle:{top:(this.boundingRect?.y??0)-Math.max(this.boxSizing?.marginTop??0,0),left:(this.boundingRect?.x??0)-Math.max(this.boxSizing?.marginLeft??0,0)},marginStyle:(0,x.V)(this.getBoxStyle(this.boxSizing,"margin")),borderStyle:(0,x.V)(this.getBoxStyle(this.boxSizing,"border")),paddingStyle:(0,x.V)(this.getBoxStyle(this.boxSizing,"padding")),contentStyle:this.boundingRect&&this.boxSizing?(0,x.V)({height:`${this.boundingRect.height-this.boxSizing.borderTop-this.boxSizing.borderBottom-this.boxSizing.paddingTop-this.boxSizing.paddingBottom}px`,width:`${this.boundingRect.width-this.boxSizing.borderLeft-this.boxSizing.borderRight-this.boxSizing.paddingLeft-this.boxSizing.paddingRight}px`}):(0,x.V)({})}}getBoxStyle(e,t){return e?{borderTopWidth:`${Math.max(e[`${t}Top`],0)}px`,borderLeftWidth:`${Math.max(e[`${t}Left`],0)}px`,borderRightWidth:`${Math.max(e[`${t}Right`],0)}px`,borderBottomWidth:`${Math.max(e[`${t}Bottom`],0)}px`,borderStyle:"solid"}:{display:"none"}}render(){let{hostStyle:e,marginStyle:t,borderStyle:r,paddingStyle:i,contentStyle:o}=this.styles;return this.style.setProperty("--inspector-overlay-rect-top",`${e.top}px`),this.style.setProperty("--inspector-overlay-rect-left",`${e.left}px`),f.dy`
      <div
        class='inspector-overlay-margin'
        style=${t}
      >
        <div
          class='inspector-overlay-border'
          style=${r}
        >
          <div
            class='inspector-overlay-padding'
            style=${i}
          >
            <div
              class='inspector-overlay-content'
              style=${o}
            >
            </div>
          </div>
        </div>
      </div>
    `}};R.styles=f.iv`
    :host {
      position: fixed;
      z-index: 10000000;
      display: var(--inspector-overlay-rect-display, block);
      cursor: default;
      top: var(--inspector-overlay-rect-top, 0);
      left: var(--inspector-overlay-rect-left, 0);
      box-sizing: border-box;
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
  `,w([(0,y.Cb)({attribute:!1}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],R.prototype,"styles",void 0),R=w([g("inspector-overlay-rect")],R);var S=r(2307),E=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a},L=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let O=i=class extends f.oi{constructor(){super(...arguments),this.title="",this.info="",this.position={},this.infoStyle=(0,x.V)({})}updateTip({title:e,info:t,boundingRect:r,boxSizing:o,spaceBox:n}){this.title=e,this.info=t,this.boundingRect=r,this.boxSizing=o,this.spaceBox=n??i.getViewSpaceBox(),this.infoStyle=(0,x.V)({display:this.info?"block":"none"})}get outerBox(){let{boundingRect:e,boxSizing:t}=this;if(!e||!t)return{x:0,y:0,width:0,height:0};let r=e.y-Math.max(t.marginTop,0),i=e.x-Math.max(t.marginLeft,0),o=e.x+e.width+Math.max(t.marginRight,0),n=e.y+e.height+Math.max(t.marginBottom,0);return{x:i,y:r,width:o-i,height:n-r}}get width(){return Math.round(this.boundingRect?.width??0)}get height(){return Math.round(this.boundingRect?.height??0)}static getViewSpaceBox(e){let t=e??window.__REACT_DEVTOOLS_TARGET_WINDOW__??window,r=b(t.document.documentElement);return{x:r.x+t.scrollX,y:r.y+t.scrollY,width:t.innerWidth,height:t.innerHeight}}updated(e){!e.get("position")&&this.boundingRect&&this.boxSizing&&this.spaceBox&&_({elementBox:this.outerBox,spaceBox:this.spaceBox,tipSize:this.getBoundingClientRect().toJSON()}).then(e=>{this.position=e,this.requestUpdate("position")})}render(){let e=!this.boundingRect||!this.boxSizing;return this.style.setProperty("--inspector-overlay-tip-display",e?"none":"flex"),this.style.setProperty("--inspector-overlay-tip-top",`${this.position.top}px`),this.style.setProperty("--inspector-overlay-tip-left",`${this.position.left}px`),f.dy`
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
    `}};O.styles=f.iv`
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
      box-sizing: border-box;
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
  `,E([(0,y.Cb)(),L("design:type",Object)],O.prototype,"title",void 0),E([(0,y.Cb)(),L("design:type",Object)],O.prototype,"info",void 0),E([(0,y.Cb)({attribute:!1}),L("design:type",Object)],O.prototype,"boundingRect",void 0),E([(0,y.Cb)({attribute:!1}),L("design:type",Object)],O.prototype,"boxSizing",void 0),E([(0,y.Cb)({attribute:!1}),L("design:type",Object)],O.prototype,"spaceBox",void 0),E([(0,y.SB)(),L("design:type",Object)],O.prototype,"position",void 0),E([(0,y.Cb)({attribute:!1}),L("design:type",void 0)],O.prototype,"infoStyle",void 0),O=i=E([g("inspector-overlay-tip")],O);let _=async({elementBox:e,spaceBox:t,tipSize:r})=>{let{x:i,y:o}=await (0,S.oo)(e,r,{platform:{getElementRects:e=>e,getDimensions:e=>e,getClippingRect:()=>t},placement:"bottom-start",strategy:"fixed",middleware:[(0,S.cv)(4),(0,S.RR)({crossAxis:!1,fallbackAxisSideDirection:"start"}),(0,S.uY)({padding:4,crossAxis:!0})]});return{left:i,top:o}},P=class extends f.oi{constructor(){super(...arguments),this.boxRef=(0,h.V)(),this.tipRef=(0,h.V)()}async inspect({element:e,title:t="",info:r="",getBoxSizing:i,getBoundingRect:o}){if(!e)return;this.boxRef.value&&this.tipRef.value||await this.updateComplete;let n=this.boxRef.value,a=this.tipRef.value;if(!(n&&a))return;let s=i(e),l=o(e);return this._inspect({title:t,info:r,overlayRect:n,overlayTip:a,boxSizing:s,boundingRect:l})}async hide(){await this.updateComplete,this.style.setProperty("--inspector-overlay-display","none")}_inspect({title:e,info:t,overlayRect:r,overlayTip:i,boxSizing:o,boundingRect:n}){this.style.setProperty("--inspector-overlay-display","block"),r.updateBound({boundingRect:n,boxSizing:o}),i.updateTip({title:e,info:t,boundingRect:n,boxSizing:o})}render(){return f.dy`
      <inspector-overlay-rect
        ${(0,h.i)(this.boxRef)}
      >
      </inspector-overlay-rect>
      <inspector-overlay-tip
        ${(0,h.i)(this.tipRef)}
      >
      </inspector-overlay-tip>
    `}};P.styles=f.iv`
    :host {
      position: fixed;
      display: var(--inspector-overlay-display, block);
      pointer-events: none;
      z-index: 10000000;
    }
  `,P=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([g("inspector-overlay")],P);class C{constructor(){m("inspector-overlay",P),m("inspector-overlay-rect",R),m("inspector-overlay-tip",O);let e=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.window=e;let t=e.document;this.overlay=document.createElement("inspector-overlay"),t.body.appendChild(this.overlay)}async inspect({element:e,title:t,info:r,getBoxSizing:i=v,getBoundingRect:o=b}){await this.overlay.inspect({element:e,title:t,info:r,getBoxSizing:i,getBoundingRect:o})}async hide(){await this.overlay.hide()}remove(){this.overlay.remove()}}let B=e=>{var t;let r=()=>{i(e.target??window)},i=e=>{"function"==typeof e?.removeEventListener&&(e.removeEventListener("click",s,{capture:!0}),e.removeEventListener("mousedown",a,{capture:!0}),e.removeEventListener("mouseover",o,{capture:!0}),e.removeEventListener("mouseup",o,{capture:!0}),e.removeEventListener("pointerdown",a,{capture:!0}),e.removeEventListener("pointerover",n,{capture:!0}),e.removeEventListener("pointerup",o,{capture:!0}))},o=e=>{e.preventDefault(),e.stopPropagation()},n=t=>{o(t);let r=t.target;e.onPointerOver?.({element:r,pointer:t})},a=t=>{let r=t.target;e.onPointerDown?.({element:r,pointer:t})},s=t=>{let r=t.target;e.onClick?.({element:r,pointer:t})};return t=e.target??window,"function"==typeof t?.addEventListener&&(t.addEventListener("click",s,{capture:!0}),t.addEventListener("mousedown",a,{capture:!0}),t.addEventListener("mouseover",o,{capture:!0}),t.addEventListener("mouseup",o,{capture:!0}),t.addEventListener("pointerdown",a,{capture:!0}),t.addEventListener("pointerover",n,{capture:!0}),t.addEventListener("pointerup",o,{capture:!0})),r},$=e=>"string"==typeof e?.type,T=e=>"symbol"==typeof e?.type?.$$typeof,I=e=>e?.type?.$$typeof===Symbol.for("react.forward_ref"),j=new Set,z=e=>{if(!window.__REACT_DEVTOOLS_GLOBAL_HOOK__?.renderers)return;let{renderers:t}=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;for(let r of t.values())try{let i=r.findFiberByHostInstance?.(e);if(i)return i}catch{}},N=e=>{if(!e)return;let t=z(e);if(t)return t;for(let r of j)if(e[r])return e[r];let i=Object.keys(e).find(e=>e.startsWith("__reactFiber$")||e.startsWith("__reactInternalInstance$"));if(i)return j.add(i),e[i]},k=e=>{if(!e)return;let t=N(e);return t||k(e.parentElement)},D=e=>{let t=e.return;for(;t;){if(!T(t))return t;t=t.return}return null},M=e=>{let t=e?.type;if(!t)return;if("string"==typeof t)return t;let{displayName:r,name:i}=t;return"string"==typeof r?r:"string"==typeof i?i:void 0},V=e=>{if(!e)return;let t=e._debugSource??e._debugOwner?._debugSource??e._debugOwner?._debugOwner?._debugSource;if(!t)return;let{fileName:r,lineNumber:i,columnNumber:o}=t;if(r&&i)return{lineNumber:String(i),columnNumber:String(o??1),absolutePath:r.match(/^<.*>$/)?r.replace(/^<|>$/g,""):r}},W=e=>{if(!e?.pendingProps)return;let{"data-inspector-line":t,"data-inspector-column":r,"data-inspector-relative-path":i}=e.pendingProps;if(t&&r&&i)return{lineNumber:t,columnNumber:r,relativePath:i}},A=e=>{let t=[V(e),W(e)].filter(Boolean);if(t.length)return Object.assign({},...t)},H=e=>{if(!e)return;let t=D(e);if(!t)return;let r=$(t),i=!t.child.sibling,o=!r&&i?t:e,n=o;for(;o;){if(A(o))return o;o=o.return}return n},F=e=>{let t=k(e),r=H(t);return A(r)},G=e=>{let t,r=e;for(;r;){let i,o=r.return??void 0;for(;T(o);)I(o)&&(i=o),o=o?.return??void 0;if(i&&(r=i),M(r)&&(t||(t=r),A(r)))return r;r=o}return t},Z=e=>{let t=k(e),r=H(t),i=G(r),o=e.nodeName.toLowerCase(),n=M(i);n===o&&(n=M(i?.return));let a=n&&n!==o?`${o} in <${n}>`:o;return{fiber:r,name:n||o,title:a}},q=new class{activate({pointer:e,onHover:t,onPointerDown:r,onClick:i}){if(this.deactivate(),this.overlay=new C,this.unsubscribeListener=B({onPointerOver:t,onPointerDown:r,onClick:i}),!e)return;let o=document.elementFromPoint(e.clientX,e.clientY);o&&t({element:o,pointer:e})}deactivate(){this.overlay?.remove(),this.overlay=void 0,this.unsubscribeListener?.(),this.unsubscribeListener=void 0}getElementFiber(e){return k(e)}*getAncestorChain(e){let t=e;for(;t;)this.getElementFiber(t)&&(yield t),t=t.parentElement}getNameInfo(e){return Z(e)}findCodeInfo(e){return F(e)}indicate({element:e,title:t}){let r=this.findCodeInfo(e),i=r?.relativePath,o=r?.absolutePath;this.overlay?.inspect({element:e,title:t,info:i??o})}removeIndicate(){this.overlay?.hide()}},Y=[q],J=function(e){let{keys:t,onHoverElement:r,onClickElement:i,onInspectElement:c,active:d,onActiveChange:f,inspectAgents:h=Y,disableLaunchEditor:g,disable:m=!0,children:b}=e,v=s({disable:m}),y=(0,n.useRef)();(0,n.useEffect)(()=>()=>{y.current=void 0,h.forEach(e=>{e.deactivate()})},[h]);let x=l(()=>{h.forEach(e=>{e.activate({pointer:v.current,onHover:t=>R({...t,agent:e}),onPointerDown:t=>S({...t,agent:e}),onClick:t=>E({...t,agent:e})})})}),w=l(()=>{y.current?.removeIndicate(),h.forEach(e=>{e.deactivate()}),y.current=void 0}),R=l(({agent:e,element:t,pointer:i})=>{e!==y.current&&(y.current?.removeIndicate(),y.current=e);let o=e.getNameInfo(t);if(e.indicate({element:t,pointer:i,name:o?.name,title:o?.title}),!r)return;let n=e.findCodeInfo(t),a=t instanceof HTMLElement?q.getElementFiber(t):void 0;r({element:t,fiber:a,codeInfo:n,name:o?.name??""})}),S=l(({agent:e,element:t,pointer:r})=>{e===y.current&&(r.preventDefault(),r.stopPropagation(),r.stopImmediatePropagation(),t&&R({agent:e,element:t,pointer:r}))}),E=l(({agent:e,element:t,pointer:r})=>{if(e!==y.current||(r.preventDefault(),r.stopPropagation(),r.stopImmediatePropagation(),e.removeIndicate(),!t))return;let o=e.getNameInfo(t),n=e.findCodeInfo(t),s=t instanceof HTMLElement?q.getElementFiber(t):void 0;O(),i?.({element:t,fiber:s,codeInfo:n,name:o?.name}),s&&n&&c?.({element:t,fiber:s,codeInfo:n,name:o?.name??""}),!n||c||g||(0,a.$e)(n)}),{activate:L,deactivate:O,activeRef:_}=p({controlledActive:d,onActiveChange:f,onActivate:x,onDeactivate:w,disable:m});return(0,u.e)({keys:t,disable:m,activeRef:_,deactivate:O,activate:L}),(0,o.jsx)(o.Fragment,{children:b??null})}},649:function(e,t,r){r.d(t,{B:function(){return n},e:function(){return a}});var i=r(79),o=r(821);let n=()=>navigator.platform?.startsWith("Mac")?["Ctrl","Shift","Command","C"]:["Ctrl","Shift","Alt","C"],a=({keys:e,disable:t,activate:r,deactivate:a,activeRef:s})=>{let l=null===e?null:(e??[]).join("+");(0,i.useEffect)(()=>{let e=e=>{e?.preventDefault(),e?.stopImmediatePropagation(),s.current?a():r()},i=null===l||t?null:l||n().join("+");if(i)return(0,o.Z)(i,{capture:!0,element:window},e),()=>{o.Z.unbind(i,e)}},[l,t])}},8783:function(e,t,r){r.d(t,{$e:function(){return a}});var i=r(8687),o=r.n(i);let n=e=>"codeInfo"in e?e.codeInfo:e,a=e=>{if(!e)return;let t=n(e),{lineNumber:r,columnNumber:i,relativePath:a,absolutePath:s}=t,l=Boolean(a),c=l?a:s;if(!c){console.error("[react-dev-inspector] Cannot open editor without source fileName",t);return}let d=l?`${o()}/relative`:o();fetch(`${d}?${new URLSearchParams({fileName:c,lineNumber:r,colNumber:i})}`)}}}]);