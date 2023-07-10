"use strict";
(self["webpackChunk_example_umi4"] = self["webpackChunk_example_umi4"] || []).push([[866],{

/***/ 882:
/*!******************************************!*\
  !*** ./src/pages/index.tsx + 20 modules ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.4.1_@babel+core@7.22.8_@types+react@18.0.26_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(3348);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7458);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(2983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/hotkeys-js@3.10.1/node_modules/hotkeys-js/dist/hotkeys.esm.js
var hotkeys_esm = __webpack_require__(3113);
;// CONCATENATED MODULE: ../../packages/inspector/es/Inspector/utils/highlight.js
/**
 * mirror from https://github.com/facebook/react/blob/v16.13.1/packages/react-devtools-shared/src/backend/views/Highlighter/index.js
 */
// This plug-in provides in-page highlighting of the selected element.
// It is used by the browser extension nad the standalone DevTools shell
// (when connected to a browser).
// It is not currently the mechanism used to highlight React Native views.
// That is done by the React Native Inspector component.
let iframesListeningTo = new Set();
function setupHighlighter(handlers) {
    function startInspectingNative() {
        registerListenersOnWindow(window);
    }
    function registerListenersOnWindow(window) {
        // This plug-in may run in non-DOM environments (e.g. React Native).
        if (window && typeof window.addEventListener === 'function') {
            window.addEventListener('click', onClick, true);
            window.addEventListener('mousedown', onMouseEvent, true);
            window.addEventListener('mouseover', onMouseEvent, true);
            window.addEventListener('mouseup', onMouseEvent, true);
            window.addEventListener('pointerdown', onPointerDown, true);
            window.addEventListener('pointerover', onPointerOver, true);
            window.addEventListener('pointerup', onPointerUp, true);
        }
    }
    function stopInspectingNative() {
        removeListenersOnWindow(window);
        iframesListeningTo.forEach((frame) => {
            try {
                removeListenersOnWindow(frame.contentWindow);
            }
            catch (error) {
                // This can error when the iframe is on a cross-origin.
            }
        });
        iframesListeningTo = new Set();
    }
    function removeListenersOnWindow(window) {
        // This plug-in may run in non-DOM environments (e.g. React Native).
        if (window && typeof window.removeEventListener === 'function') {
            window.removeEventListener('click', onClick, true);
            window.removeEventListener('mousedown', onMouseEvent, true);
            window.removeEventListener('mouseover', onMouseEvent, true);
            window.removeEventListener('mouseup', onMouseEvent, true);
            window.removeEventListener('pointerdown', onPointerDown, true);
            window.removeEventListener('pointerover', onPointerOver, true);
            window.removeEventListener('pointerup', onPointerUp, true);
        }
    }
    function onClick(event) {
        var _a;
        event.preventDefault();
        event.stopPropagation();
        stopInspectingNative();
        (_a = handlers.onClick) === null || _a === void 0 ? void 0 : _a.call(handlers, event.target);
    }
    function onMouseEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    function onPointerDown(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    function onPointerOver(event) {
        var _a;
        event.preventDefault();
        event.stopPropagation();
        const target = event.target;
        if (target.tagName === 'IFRAME') {
            const iframe = target;
            try {
                if (!iframesListeningTo.has(iframe)) {
                    const window = iframe.contentWindow;
                    registerListenersOnWindow(window);
                    iframesListeningTo.add(iframe);
                }
            }
            catch (error) {
                // This can error when the iframe is on a cross-origin.
            }
        }
        (_a = handlers.onPointerOver) === null || _a === void 0 ? void 0 : _a.call(handlers, event.target);
    }
    function onPointerUp(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    startInspectingNative();
    return stopInspectingNative;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dev-utils@12.0.1_eslint@8.44.0_typescript@5.1.6_webpack@5.88.1/node_modules/react-dev-utils/launchEditorEndpoint.js
var launchEditorEndpoint = __webpack_require__(5293);
var launchEditorEndpoint_default = /*#__PURE__*/__webpack_require__.n(launchEditorEndpoint);
;// CONCATENATED MODULE: ../../packages/inspector/es/Inspector/utils/fiber.js
/**
 * only native html tag fiber's type will be string,
 * all the others (component / functional component / context) type will be function or object
 */
const isNativeTagFiber = (fiber) => typeof (fiber === null || fiber === void 0 ? void 0 : fiber.type) === 'string';
/**
 * react fiber symbol types see:
 * https://github.com/facebook/react/blob/v17.0.0/packages/shared/ReactSymbols.js#L39-L58
 */
const isReactSymbolFiber = (fiber) => { var _a; return typeof ((_a = fiber === null || fiber === void 0 ? void 0 : fiber.type) === null || _a === void 0 ? void 0 : _a.$$typeof) === 'symbol'; };
const isForwardRef = (fiber) => { var _a; return ((_a = fiber === null || fiber === void 0 ? void 0 : fiber.type) === null || _a === void 0 ? void 0 : _a.$$typeof) === Symbol.for('react.forward_ref'); };
/**
 * https://stackoverflow.com/questions/29321742/react-getting-a-component-from-a-dom-element-for-debugging
 */
const getElementFiber = (element) => {
    const fiberKey = Object.keys(element).find(key => (
    /**
     * for react <= v16.13.1
     * https://github.com/facebook/react/blob/v16.13.1/packages/react-dom/src/client/ReactDOMComponentTree.js#L21
     */
    key.startsWith('__reactInternalInstance$')
        /**
         * for react >= v16.14.0
         * https://github.com/facebook/react/blob/v16.14.0/packages/react-dom/src/client/ReactDOMComponentTree.js#L39
         */
        || key.startsWith('__reactFiber$')));
    if (fiberKey) {
        return element[fiberKey];
    }
    return undefined;
};
const getElementFiberUpward = (element) => {
    if (!element)
        return undefined;
    const fiber = getElementFiber(element);
    if (fiber)
        return fiber;
    return getElementFiberUpward(element.parentElement);
};
/**
 * find first parent of native html tag or react component,
 * skip react Provider / Context / ForwardRef / Fragment etc.
 */
const getDirectParentFiber = (child) => {
    let current = child.return;
    while (current) {
        /**
         * react fiber symbol types see:
         * https://github.com/facebook/react/blob/v17.0.0/packages/shared/ReactSymbols.js#L39-L58
         */
        if (!isReactSymbolFiber(current)) {
            return current;
        }
        current = current.return;
    }
    return null;
};
/**
 * The displayName property is not guaranteed to be a string.
 * It's only safe to use for our purposes if it's a string.
 * github.com/facebook/react-devtools/issues/803
 *
 * https://github.com/facebook/react/blob/v17.0.0/packages/react-devtools-shared/src/utils.js#L90-L112
 */
const getFiberName = (fiber) => {
    const fiberType = fiber === null || fiber === void 0 ? void 0 : fiber.type;
    if (!fiberType)
        return undefined;
    const { displayName, name } = fiberType;
    if (typeof displayName === 'string') {
        return displayName;
    }
    else if (typeof name === 'string') {
        return name;
    }
    return undefined;
};

;// CONCATENATED MODULE: ../../packages/inspector/es/Inspector/utils/inspect.js
/**
 * https://github.com/facebook/create-react-app/blob/v5.0.1/packages/react-dev-utils/launchEditorEndpoint.js
 * used in https://github.com/facebook/create-react-app/blob/v5.0.1/packages/react-dev-utils/errorOverlayMiddleware.js#L14
 */
// @ts-expect-error import from deep path for reduce load files


/**
 * react fiber property `_debugSource` created by `@babel/plugin-transform-react-jsx-source`
 *     https://github.com/babel/babel/blob/v7.16.4/packages/babel-plugin-transform-react-jsx-source/src/index.js
 *
 * and injected `__source` property used by `React.createElement`, then pass to `ReactElement`
 *     https://github.com/facebook/react/blob/v18.0.0/packages/react/src/ReactElement.js#L189
 *     https://github.com/facebook/react/blob/v18.0.0/packages/react/src/ReactElement.js#L389
 *     https://github.com/facebook/react/blob/v18.0.0/packages/react/src/ReactElement.js#L447
 *
 * finally, used by `createFiberFromElement` to become a fiber property `_debugSource`.
 *     https://github.com/facebook/react/blob/v18.0.0/packages/react-reconciler/src/ReactFiber.new.js#L648-L649
 */
const getCodeInfoFromDebugSource = (fiber) => {
    if (!(fiber === null || fiber === void 0 ? void 0 : fiber._debugSource))
        return undefined;
    const { fileName, lineNumber, columnNumber, } = fiber._debugSource;
    if (fileName && lineNumber) {
        return {
            lineNumber: String(lineNumber),
            columnNumber: String(columnNumber !== null && columnNumber !== void 0 ? columnNumber : 1),
            /**
             * `fileName` in `_debugSource` is absolutely
             * ---
             *
             * compatible with the incorrect `fileName: "</xxx/file>"` by [rspack](https://github.com/web-infra-dev/rspack)
             */
            absolutePath: fileName.match(/^<.*>$/)
                ? fileName.replace(/^<|>$/g, '')
                : fileName,
        };
    }
    return undefined;
};
/**
 * code location data-attribute props inject by `react-dev-inspector/plugins/babel`
 */
const getCodeInfoFromProps = (fiber) => {
    if (!(fiber === null || fiber === void 0 ? void 0 : fiber.pendingProps))
        return undefined;
    const { 'data-inspector-line': lineNumber, 'data-inspector-column': columnNumber, 'data-inspector-relative-path': relativePath, } = fiber.pendingProps;
    if (lineNumber && columnNumber && relativePath) {
        return {
            lineNumber,
            columnNumber,
            relativePath,
        };
    }
    return undefined;
};
const getCodeInfoFromFiber = (fiber) => {
    var _a;
    return ((_a = getCodeInfoFromProps(fiber)) !== null && _a !== void 0 ? _a : getCodeInfoFromDebugSource(fiber));
};
/**
 * give a `base` dom fiber,
 * and will try to get the human friendly react component `reference` fiber from it;
 *
 * rules and examples see below:
 * *******************************************************
 *
 * if parent is html native tag, `reference` is considered to be as same as `base`
 *
 *  div                                       div
 *    └─ h1                                     └─ h1  (<--base) <--reference
 *      └─ span  (<--base) <--reference           └─ span
 *
 * *******************************************************
 *
 * if parent is NOT html native tag,
 *   and parent ONLY have one child (the `base` itself),
 *   then `reference` is considered to be the parent.
 *
 *  Title  <--reference                       Title
 *    └─ h1  (<--base)                          └─ h1  (<--base) <--reference
 *      └─ span                                 └─ span
 *                                              └─ div
 *
 * *******************************************************
 *
 * while follow the last one,
 *   "parent" is considered to skip continuous Provider/Customer/ForwardRef components
 *
 *  Title  <- reference                       Title  <- reference
 *    └─ TitleName [ForwardRef]                 └─ TitleName [ForwardRef]
 *      └─ Context.Customer                       └─ Context.Customer
 *         └─ Context.Customer                      └─ Context.Customer
 *          └─ h1  (<- base)                          └─ h1  (<- base)
 *            └─ span                             └─ span
 *                                                └─ div
 *
 *  Title
 *    └─ TitleName [ForwardRef]
 *      └─ Context.Customer
 *         └─ Context.Customer
 *          └─ h1  (<- base) <- reference
 *    └─ span
 *    └─ div
 */
const getReferenceFiber = (baseFiber) => {
    if (!baseFiber)
        return undefined;
    const directParent = getDirectParentFiber(baseFiber);
    if (!directParent)
        return undefined;
    const isParentNative = isNativeTagFiber(directParent);
    const isOnlyOneChild = !directParent.child.sibling;
    let referenceFiber = (!isParentNative && isOnlyOneChild)
        ? directParent
        : baseFiber;
    // fallback for cannot find code-info fiber when traverse to root
    const originReferenceFiber = referenceFiber;
    while (referenceFiber) {
        if (getCodeInfoFromFiber(referenceFiber))
            return referenceFiber;
        referenceFiber = referenceFiber.return;
    }
    return originReferenceFiber;
};
const getElementCodeInfo = (element) => {
    const fiber = getElementFiberUpward(element);
    const referenceFiber = getReferenceFiber(fiber);
    return getCodeInfoFromFiber(referenceFiber);
};
const gotoEditor = (source) => {
    if (!source)
        return;
    const { lineNumber, columnNumber, relativePath, absolutePath, } = source;
    const isRelative = Boolean(relativePath);
    const fileName = isRelative ? relativePath : absolutePath;
    if (!fileName) {
        console.error(`[react-dev-inspector] Cannot open editor without source fileName`, source);
        return;
    }
    const launchParams = {
        fileName,
        lineNumber,
        colNumber: columnNumber,
    };
    /**
     * api in '@react-dev-inspector/plugin-webpack/middlewares' launchEditorMiddleware
     */
    const apiRoute = isRelative
        ? `${(launchEditorEndpoint_default())}/relative`
        : (launchEditorEndpoint_default());
    fetch(`${apiRoute}?${new URLSearchParams(launchParams)}`);
};
const getNamedFiber = (baseFiber) => {
    var _a, _b;
    let fiber = baseFiber;
    // fallback for cannot find code-info fiber when traverse to root
    let originNamedFiber;
    while (fiber) {
        let parent = (_a = fiber.return) !== null && _a !== void 0 ? _a : undefined;
        let forwardParent;
        while (isReactSymbolFiber(parent)) {
            if (isForwardRef(parent)) {
                forwardParent = parent;
            }
            parent = (_b = parent === null || parent === void 0 ? void 0 : parent.return) !== null && _b !== void 0 ? _b : undefined;
        }
        if (forwardParent) {
            fiber = forwardParent;
        }
        if (getFiberName(fiber)) {
            if (!originNamedFiber)
                originNamedFiber = fiber;
            if (getCodeInfoFromFiber(fiber))
                return fiber;
        }
        fiber = parent;
    }
    return originNamedFiber;
};
const getElementInspect = (element) => {
    const fiber = getElementFiberUpward(element);
    const referenceFiber = getReferenceFiber(fiber);
    const namedFiber = getNamedFiber(referenceFiber);
    const fiberName = getFiberName(namedFiber);
    const nodeName = element.nodeName.toLowerCase();
    const title = fiberName
        ? `${nodeName} in <${fiberName}>`
        : nodeName;
    return {
        fiber: referenceFiber,
        name: fiberName,
        title,
    };
};

;// CONCATENATED MODULE: ../../packages/inspector/es/Inspector/utils/overlay.js
/**
 * mirror from https://github.com/facebook/react/blob/v16.13.1/packages/react-devtools-shared/src/backend/views/Highlighter/Overlay.js
 *
 * remove all process for iframe, because iframe only need to think in chrome extension app,
 * which will deal multiple levels of nesting iframe.
 */
function getNestedBoundingClientRect(node) {
    return node.getBoundingClientRect();
}
function getElementDimensions(domElement) {
    const calculatedStyle = window.getComputedStyle(domElement);
    return {
        borderLeft: Number.parseInt(calculatedStyle.borderLeftWidth, 10),
        borderRight: Number.parseInt(calculatedStyle.borderRightWidth, 10),
        borderTop: Number.parseInt(calculatedStyle.borderTopWidth, 10),
        borderBottom: Number.parseInt(calculatedStyle.borderBottomWidth, 10),
        marginLeft: Number.parseInt(calculatedStyle.marginLeft, 10),
        marginRight: Number.parseInt(calculatedStyle.marginRight, 10),
        marginTop: Number.parseInt(calculatedStyle.marginTop, 10),
        marginBottom: Number.parseInt(calculatedStyle.marginBottom, 10),
        paddingLeft: Number.parseInt(calculatedStyle.paddingLeft, 10),
        paddingRight: Number.parseInt(calculatedStyle.paddingRight, 10),
        paddingTop: Number.parseInt(calculatedStyle.paddingTop, 10),
        paddingBottom: Number.parseInt(calculatedStyle.paddingBottom, 10),
    };
}

;// CONCATENATED MODULE: ../../packages/inspector/es/Inspector/Overlay.js
/**
 * mirror from https://github.com/facebook/react/blob/v16.13.1/packages/react-devtools-shared/src/backend/views/utils.js
 */

// Note that the Overlay components are not affected by the active Theme,
// because they highlight elements in the main Chrome window (outside of devtools).
// The colors below were chosen to roughly match those used by Chrome devtools.
class OverlayRect {
    constructor(doc, container) {
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "border", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "padding", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "content", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.node = doc.createElement('div');
        this.border = doc.createElement('div');
        this.padding = doc.createElement('div');
        this.content = doc.createElement('div');
        this.border.style.borderColor = overlayStyles.border;
        this.padding.style.borderColor = overlayStyles.padding;
        this.content.style.backgroundColor = overlayStyles.background;
        Object.assign(this.node.style, {
            borderColor: overlayStyles.margin,
            pointerEvents: 'none',
            position: 'fixed',
        });
        this.node.style.zIndex = '10000000';
        this.node.appendChild(this.border);
        this.border.appendChild(this.padding);
        this.padding.appendChild(this.content);
        // ensure OverlayRect dom always before OverlayTip dom rather than cover OverlayTip
        container.prepend(this.node);
    }
    remove() {
        if (this.node.parentNode) {
            this.node.parentNode.removeChild(this.node);
        }
    }
    update(box, dims) {
        boxWrap(dims, 'margin', this.node);
        boxWrap(dims, 'border', this.border);
        boxWrap(dims, 'padding', this.padding);
        Object.assign(this.content.style, {
            height: `${box.height
                - dims.borderTop
                - dims.borderBottom
                - dims.paddingTop
                - dims.paddingBottom}px`,
            width: `${box.width
                - dims.borderLeft
                - dims.borderRight
                - dims.paddingLeft
                - dims.paddingRight}px`,
        });
        Object.assign(this.node.style, {
            top: `${box.top - dims.marginTop}px`,
            left: `${box.left - dims.marginLeft}px`,
        });
    }
}
class OverlayTip {
    constructor(doc, container) {
        Object.defineProperty(this, "tip", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nameSpan", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "titleDiv", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "infoDiv", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dimSpan", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.tip = doc.createElement('div');
        Object.assign(this.tip.style, {
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            backgroundColor: '#333740',
            borderRadius: '2px',
            fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
            fontWeight: 'bold',
            padding: '6px 8px',
            pointerEvents: 'none',
            position: 'fixed',
            fontSize: '12px',
            whiteSpace: 'nowrap',
        });
        this.nameSpan = doc.createElement('span');
        this.tip.appendChild(this.nameSpan);
        Object.assign(this.nameSpan.style, {
            display: 'flex',
            flexDirection: 'column',
            borderRight: '1px solid #aaaaaa',
            paddingRight: '0.8rem',
            marginRight: '0.8rem',
        });
        this.titleDiv = doc.createElement('div');
        this.nameSpan.appendChild(this.titleDiv);
        Object.assign(this.titleDiv.style, {
            color: '#ee78e6',
            fontSize: '16px',
        });
        this.infoDiv = doc.createElement('div');
        this.nameSpan.appendChild(this.infoDiv);
        Object.assign(this.infoDiv.style, {
            color: '#ee78e6',
            fontSize: '14px',
        });
        this.dimSpan = doc.createElement('span');
        this.tip.appendChild(this.dimSpan);
        Object.assign(this.dimSpan.style, {
            color: '#d7d7d7',
        });
        this.tip.style.zIndex = '10000000';
        container.appendChild(this.tip);
    }
    remove() {
        if (this.tip.parentNode) {
            this.tip.parentNode.removeChild(this.tip);
        }
    }
    updateText(name, info, width, height) {
        this.titleDiv.textContent = name;
        this.infoDiv.textContent = info !== null && info !== void 0 ? info : '';
        this.dimSpan.textContent
            = `${Math.round(width)}px × ${Math.round(height)}px`;
    }
    updatePosition(dims, bounds) {
        const tipRect = this.tip.getBoundingClientRect();
        const tipPos = findTipPos(dims, bounds, {
            width: tipRect.width,
            height: tipRect.height,
        });
        Object.assign(this.tip.style, tipPos.style);
    }
}
class Overlay {
    constructor() {
        Object.defineProperty(this, "window", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tipBoundsWindow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tip", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rects", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "removeCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Find the root window, because overlays are positioned relative to it.
        const currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
        this.window = currentWindow;
        // When opened in shells/dev,
        // the tooltip should be bound by the app iframe, not by the topmost window.
        const tipBoundsWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
        this.tipBoundsWindow = tipBoundsWindow;
        const doc = currentWindow.document;
        this.container = doc.createElement('div');
        this.container.style.zIndex = '10000000';
        this.tip = new OverlayTip(doc, this.container);
        this.rects = [];
        this.removeCallback = () => { };
        doc.body.appendChild(this.container);
    }
    remove() {
        this.tip.remove();
        this.rects.forEach(rect => {
            rect.remove();
        });
        this.rects.length = 0;
        if (this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
        this.removeCallback();
    }
    setRemoveCallback(callback) {
        this.removeCallback = callback.bind(this);
    }
    inspect(nodes, name, info) {
        var _a;
        // We can't get the size of text nodes or comment nodes. React as of v15
        // heavily uses comment nodes to delimit text.
        const elements = nodes.filter(node => node.nodeType === Node.ELEMENT_NODE);
        while (this.rects.length > elements.length) {
            const rect = this.rects.pop();
            rect === null || rect === void 0 ? void 0 : rect.remove();
        }
        if (elements.length === 0) {
            return;
        }
        while (this.rects.length < elements.length) {
            this.rects.push(new OverlayRect(this.window.document, this.container));
        }
        const outerBox = {
            top: Number.POSITIVE_INFINITY,
            right: Number.NEGATIVE_INFINITY,
            bottom: Number.NEGATIVE_INFINITY,
            left: Number.POSITIVE_INFINITY,
        };
        elements.forEach((element, index) => {
            const box = getNestedBoundingClientRect(element, this.window);
            const dims = getElementDimensions(element);
            outerBox.top = Math.min(outerBox.top, box.top - dims.marginTop);
            outerBox.right = Math.max(outerBox.right, box.left + box.width + dims.marginRight);
            outerBox.bottom = Math.max(outerBox.bottom, box.top + box.height + dims.marginBottom);
            outerBox.left = Math.min(outerBox.left, box.left - dims.marginLeft);
            const rect = this.rects[index];
            rect.update(box, dims);
        });
        if (!name) {
            name = elements[0].nodeName.toLowerCase();
            const node = elements[0];
            const hook = (_a = node.ownerDocument.defaultView) === null || _a === void 0 ? void 0 : _a.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (hook === null || hook === void 0 ? void 0 : hook.rendererInterfaces) {
                let ownerName = null;
                for (const rendererInterface of hook.rendererInterfaces.values()) {
                    const id = rendererInterface.getFiberIDForNative(node, true);
                    if (id !== null) {
                        ownerName = rendererInterface.getDisplayNameForFiberID(id, true);
                        break;
                    }
                }
                if (ownerName) {
                    name += ` (in ${ownerName})`;
                }
            }
        }
        this.tip.updateText(name, info, outerBox.right - outerBox.left, outerBox.bottom - outerBox.top);
        const tipBounds = getNestedBoundingClientRect(this.tipBoundsWindow.document.documentElement, this.window);
        this.tip.updatePosition({
            top: outerBox.top,
            left: outerBox.left,
            height: outerBox.bottom - outerBox.top,
            width: outerBox.right - outerBox.left,
        }, {
            top: tipBounds.top + this.tipBoundsWindow.scrollY,
            left: tipBounds.left + this.tipBoundsWindow.scrollX,
            height: this.tipBoundsWindow.innerHeight,
            width: this.tipBoundsWindow.innerWidth,
        });
    }
}
function findTipPos(dims, bounds, tipSize) {
    const tipHeight = Math.max(tipSize.height, 20);
    const tipWidth = Math.max(tipSize.width, 60);
    const margin = 5;
    let top;
    if (dims.top + dims.height + tipHeight <= bounds.top + bounds.height) {
        if (dims.top + dims.height < bounds.top + 0) {
            top = bounds.top + margin;
        }
        else {
            top = dims.top + dims.height + margin;
        }
    }
    else if (dims.top - tipHeight <= bounds.top + bounds.height) {
        if (dims.top - tipHeight - margin < bounds.top + margin) {
            top = bounds.top + margin;
        }
        else {
            top = dims.top - tipHeight - margin;
        }
    }
    else {
        top = bounds.top + bounds.height - tipHeight - margin;
    }
    let left = dims.left + margin;
    if (dims.left < bounds.left) {
        left = bounds.left + margin;
    }
    if (dims.left + tipWidth > bounds.left + bounds.width) {
        left = bounds.left + bounds.width - tipWidth - margin;
    }
    return {
        style: {
            top: `${top}px`,
            left: `${left}px`,
        },
    };
}
function boxWrap(dims, what, node) {
    Object.assign(node.style, {
        borderTopWidth: `${dims[`${what}Top`]}px`,
        borderLeftWidth: `${dims[`${what}Left`]}px`,
        borderRightWidth: `${dims[`${what}Right`]}px`,
        borderBottomWidth: `${dims[`${what}Bottom`]}px`,
        borderStyle: 'solid',
    });
}
const overlayStyles = {
    background: 'rgba(120, 170, 210, 0.7)',
    padding: 'rgba(77, 200, 0, 0.3)',
    margin: 'rgba(255, 155, 0, 0.3)',
    border: 'rgba(255, 200, 50, 0.3)',
};

;// CONCATENATED MODULE: ../../packages/inspector/es/Inspector/Inspector.js






const defaultHotKeys = ['control', 'shift', 'command', 'c'];
const Inspector = (props) => {
    const { keys, onHoverElement, onClickElement, disableLaunchEditor, children, } = props;
    // hotkeys-js params need string
    const hotkey = (keys !== null && keys !== void 0 ? keys : defaultHotKeys).join('+');
    /** inspector tooltip overlay */
    const overlayRef = (0,react.useRef)();
    const mousePointRef = (0,react.useRef)({ x: 0, y: 0 });
    const recordMousePoint = ({ clientX, clientY }) => {
        mousePointRef.current.x = clientX;
        mousePointRef.current.y = clientY;
    };
    const startInspect = () => {
        const overlay = new Overlay();
        overlayRef.current = overlay;
        const stopCallback = setupHighlighter({
            onPointerOver: handleHoverElement,
            onClick: handleClickElement,
        });
        overlay.setRemoveCallback(stopCallback);
        // inspect element immediately at mouse point
        const initPoint = mousePointRef.current;
        const initElement = document.elementFromPoint(initPoint.x, initPoint.y);
        if (initElement)
            handleHoverElement(initElement);
    };
    const stopInspect = () => {
        var _a;
        (_a = overlayRef.current) === null || _a === void 0 ? void 0 : _a.remove();
        overlayRef.current = undefined;
    };
    const handleHoverElement = (element) => {
        var _a;
        const overlay = overlayRef.current;
        const codeInfo = getElementCodeInfo(element);
        const relativePath = codeInfo === null || codeInfo === void 0 ? void 0 : codeInfo.relativePath;
        const absolutePath = codeInfo === null || codeInfo === void 0 ? void 0 : codeInfo.absolutePath;
        const { fiber, name, title } = getElementInspect(element);
        (_a = overlay === null || overlay === void 0 ? void 0 : overlay.inspect) === null || _a === void 0 ? void 0 : _a.call(overlay, [element], title, relativePath !== null && relativePath !== void 0 ? relativePath : absolutePath);
        onHoverElement === null || onHoverElement === void 0 ? void 0 : onHoverElement({
            element,
            fiber,
            codeInfo,
            name,
        });
    };
    const handleClickElement = (element) => {
        stopInspect();
        const codeInfo = getElementCodeInfo(element);
        const { fiber, name } = getElementInspect(element);
        if (!disableLaunchEditor)
            gotoEditor(codeInfo);
        onClickElement === null || onClickElement === void 0 ? void 0 : onClickElement({
            element,
            fiber,
            codeInfo,
            name,
        });
    };
    (0,react.useEffect)(() => {
        document.addEventListener('mousemove', recordMousePoint, true);
        return () => {
            document.removeEventListener('mousemove', recordMousePoint, true);
        };
    }, []);
    (0,react.useEffect)(() => {
        const handleHotKeys = (event, handler) => {
            if (handler.key === hotkey) {
                overlayRef.current
                    ? stopInspect()
                    : startInspect();
            }
            else if (handler.key === 'esc' && overlayRef.current) {
                stopInspect();
            }
        };
        // https://github.com/jaywcjlove/hotkeys
        (0,hotkeys_esm/* default */.Z)(`${hotkey}, esc`, handleHotKeys);
        return () => {
            hotkeys_esm/* default.unbind */.Z.unbind(`${hotkey}, esc`, handleHotKeys);
        };
    }, [hotkey]);
    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: children !== null && children !== void 0 ? children : null }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(4400);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.3.0_@babel+core@7.22.8_@emotion+react@11.4.1_@types+react@18.0.26_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js + 2 modules
var emotion_styled_browser_esm = __webpack_require__(6555);
;// CONCATENATED MODULE: ./src/HomePage/components/Title/styles.ts

var _templateObject;

var TitleName = emotion_styled_browser_esm/* default.h1 */.Z.h1(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  font-size: 4rem;\n  padding: 0 3rem;\n"])));
;// CONCATENATED MODULE: ./src/HomePage/components/Title/Title.tsx


var Title = function Title(props) {
  var children = props.children;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TitleName, {
    "data-inspector-line": "11",
    "data-inspector-column": "4",
    "data-inspector-relative-path": "src/HomePage/components/Title/Title.tsx",
    children: children
  });
};
;// CONCATENATED MODULE: ./src/HomePage/components/Title/index.ts

;// CONCATENATED MODULE: ./src/HomePage/components/Slogan/styles.ts

var styles_templateObject;

var Description = emotion_styled_browser_esm/* default.div */.Z.div(styles_templateObject || (styles_templateObject = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  padding: 2rem;\n  font-size: 1.5rem;\n  color: #999;\n  \n  p {\n    margin: 0.5rem auto;\n  }\n"])));
;// CONCATENATED MODULE: ./src/HomePage/components/Slogan/Slogan.tsx


var Slogan = function Slogan(props) {
  var children = props.children;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Description, {
    "data-inspector-line": "11",
    "data-inspector-column": "4",
    "data-inspector-relative-path": "src/HomePage/components/Slogan/Slogan.tsx",
    children: children
  });
};
;// CONCATENATED MODULE: ./src/HomePage/components/Slogan/index.ts

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(7016);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1697);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(1769);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__(9881);
var createSuper_default = /*#__PURE__*/__webpack_require__.n(createSuper);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+css@11.1.3_@babel+core@7.22.8/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__(781);
;// CONCATENATED MODULE: ./src/HomePage/components/Keypress/styles.ts

var Keypress_styles_templateObject, _templateObject2, _templateObject3;



/**
 * https://github.com/sindresorhus/github-markdown-css/blob/gh-pages/github-markdown.css#L183
 */
var keyTone = (0,emotion_css_esm/* css */.iv)(Keypress_styles_templateObject || (Keypress_styles_templateObject = taggedTemplateLiteral_default()(["\n  display: inline-block;\n  padding: 0.5rem 0.8rem;\n  font: 12px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 1.2rem;\n  font-weight: 600;\n  height: 1.2rem;\n  line-height: 1.2rem;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 0.4rem;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n"])));
var Keys = emotion_styled_browser_esm/* default.div */.Z.div(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  display: inline-block;\n  padding: 0 0.5rem;\n  opacity:1;\n  animation: flickerAnimation 2s ease-in-out infinite;\n\n  & > .", " {\n    margin: auto 0.8rem;\n  }\n\n  @keyframes flickerAnimation {\n    0%   { opacity: 1; }\n    50%  { opacity: .6; }\n    100% { opacity: 1; }\n  }\n"])), keyTone);
var Pad = emotion_styled_browser_esm/* default.div */.Z.div(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n  vertical-align: center;\n  margin: 0 auto;\n  padding: 2rem;\n  font-size: 1.5rem;\n  color: #666;\n"])));
;// CONCATENATED MODULE: ./src/HomePage/components/Keypress/Keypress.tsx








var Keypress = function Keypress(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("kbd", {
    "data-inspector-line": "7",
    "data-inspector-column": "4",
    "data-inspector-relative-path": "src/HomePage/components/Keypress/Keypress.tsx",
    className: keyTone,
    children: children
  });
};
var KeyPad = /*#__PURE__*/function (_Component) {
  inherits_default()(KeyPad, _Component);
  var _super = createSuper_default()(KeyPad);
  function KeyPad() {
    classCallCheck_default()(this, KeyPad);
    return _super.apply(this, arguments);
  }
  createClass_default()(KeyPad, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Pad, {
        "data-inspector-line": "22",
        "data-inspector-column": "6",
        "data-inspector-relative-path": "src/HomePage/components/Keypress/Keypress.tsx",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          "data-inspector-line": "23",
          "data-inspector-column": "8",
          "data-inspector-relative-path": "src/HomePage/components/Keypress/Keypress.tsx",
          children: "press"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Keys, {
          "data-inspector-line": "25",
          "data-inspector-column": "8",
          "data-inspector-relative-path": "src/HomePage/components/Keypress/Keypress.tsx",
          children: children
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          "data-inspector-line": "27",
          "data-inspector-column": "8",
          "data-inspector-relative-path": "src/HomePage/components/Keypress/Keypress.tsx",
          children: "to try! \uD83C\uDF6D"
        })]
      });
    }
  }]);
  return KeyPad;
}(react.Component);
;// CONCATENATED MODULE: ./src/HomePage/components/Keypress/index.ts

;// CONCATENATED MODULE: ./src/HomePage/components/Badge/styles.ts

var Badge_styles_templateObject;

var Badge = emotion_styled_browser_esm/* default.div */.Z.div(Badge_styles_templateObject || (Badge_styles_templateObject = taggedTemplateLiteral_default()(["\n  display: inline-block;\n  margin-left: 1rem;\n  border: 1px solid transparent;\n  border-radius: 2rem;\n  padding: .2rem 1rem;\n  line-height: 1;\n  font-size: 1.5rem;\n  font-weight: 600;\n  /* transform: translateY(-0.4rem); */\n\n  border-color: #059669;\n  color: #10b981;\n  background-color: #10b9810d;\n"])));
;// CONCATENATED MODULE: ./src/HomePage/components/Badge/Badge.tsx


var TitleBadge = function TitleBadge(props) {
  var children = props.children;
  if (!children) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Badge, {
    "data-inspector-line": "13",
    "data-inspector-column": "4",
    "data-inspector-relative-path": "src/HomePage/components/Badge/Badge.tsx",
    children: children
  });
};
;// CONCATENATED MODULE: ./src/HomePage/components/Badge/index.ts

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-github-corner@2.5.0_react@18.2.0/node_modules/react-github-corner/lib/GithubCorner.js
var GithubCorner = __webpack_require__(2251);
;// CONCATENATED MODULE: ./src/HomePage/styles.ts

var HomePage_styles_templateObject, styles_templateObject2, styles_templateObject3;



var globalCss = (0,emotion_react_browser_esm/* css */.iv)(HomePage_styles_templateObject || (HomePage_styles_templateObject = taggedTemplateLiteral_default()(["\n  html, body, #root {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n  }\n"])));
var Base = emotion_styled_browser_esm/* default.div */.Z.div(styles_templateObject2 || (styles_templateObject2 = taggedTemplateLiteral_default()(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"])));
var styles_GithubCorner = (0,emotion_styled_browser_esm/* default */.Z)(GithubCorner/* default */.Z)(styles_templateObject3 || (styles_templateObject3 = taggedTemplateLiteral_default()(["\n\n"])));
;// CONCATENATED MODULE: ./src/HomePage/index.tsx









var projectRepo = 'https://github.com/zthxxx/react-dev-inspector';
var isDev = "production" === 'development';
var HomePage = function HomePage(_ref) {
  var name = _ref.name,
    titleBadge = _ref.titleBadge;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Inspector, {
    "data-inspector-line": "20",
    "data-inspector-column": "4",
    "data-inspector-relative-path": "src/HomePage/index.tsx",
    disableLaunchEditor: !isDev,
    onClickElement: function onClickElement(inspect) {
      console.debug('[InspectParams]', inspect);
      if (isDev || !inspect.codeInfo) return;
      var _inspect$codeInfo = inspect.codeInfo,
        relativePath = _inspect$codeInfo.relativePath,
        absolutePath = _inspect$codeInfo.absolutePath,
        lineNumber = _inspect$codeInfo.lineNumber;
      if (relativePath) {
        var onlineFilePath = "examples/".concat(name, "/").concat(relativePath);
        window.open("".concat(projectRepo, "/blob/master/").concat(onlineFilePath, "#L").concat(lineNumber));
      } else if (absolutePath) {
        var _onlineFilePath = absolutePath.replace(/^.*?\/examples\//, 'examples/');
        window.open("".concat(projectRepo, "/blob/master/").concat(_onlineFilePath, "#L").concat(lineNumber));
      }
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(emotion_react_browser_esm/* Global */.xB, {
      "data-inspector-line": "37",
      "data-inspector-column": "6",
      "data-inspector-relative-path": "src/HomePage/index.tsx",
      styles: globalCss
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Base, {
      "data-inspector-line": "40",
      "data-inspector-column": "6",
      "data-inspector-relative-path": "src/HomePage/index.tsx",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(styles_GithubCorner, {
        "data-inspector-line": "41",
        "data-inspector-column": "8",
        "data-inspector-relative-path": "src/HomePage/index.tsx",
        href: projectRepo
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Title, {
        "data-inspector-line": "45",
        "data-inspector-column": "8",
        "data-inspector-relative-path": "src/HomePage/index.tsx",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          "data-inspector-line": "46",
          "data-inspector-column": "10",
          "data-inspector-relative-path": "src/HomePage/index.tsx",
          children: "React Dev Inspector"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(TitleBadge, {
          "data-inspector-line": "47",
          "data-inspector-column": "10",
          "data-inspector-relative-path": "src/HomePage/index.tsx",
          children: titleBadge
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Slogan, {
        "data-inspector-line": "50",
        "data-inspector-column": "8",
        "data-inspector-relative-path": "src/HomePage/index.tsx",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          "data-inspector-line": "51",
          "data-inspector-column": "10",
          "data-inspector-relative-path": "src/HomePage/index.tsx",
          children: "Quick jump to local IDE source code directly from browser React component by just a simple click!"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          "data-inspector-line": "52",
          "data-inspector-column": "10",
          "data-inspector-relative-path": "src/HomePage/index.tsx",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
            "data-inspector-line": "52",
            "data-inspector-column": "13",
            "data-inspector-relative-path": "src/HomePage/index.tsx",
            children: "( for this prod online demo page, jump to GitHub file )"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(KeyPad, {
        "data-inspector-line": "55",
        "data-inspector-column": "8",
        "data-inspector-relative-path": "src/HomePage/index.tsx",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Keypress, {
          "data-inspector-line": "56",
          "data-inspector-column": "10",
          "data-inspector-relative-path": "src/HomePage/index.tsx",
          children: "Ctrl \u2303"
        }), "+", /*#__PURE__*/(0,jsx_runtime.jsx)(Keypress, {
          "data-inspector-line": "58",
          "data-inspector-column": "10",
          "data-inspector-relative-path": "src/HomePage/index.tsx",
          children: "Shift \u21E7"
        }), "+", /*#__PURE__*/(0,jsx_runtime.jsx)(Keypress, {
          "data-inspector-line": "60",
          "data-inspector-column": "10",
          "data-inspector-relative-path": "src/HomePage/index.tsx",
          children: "Command \u2318"
        }), "+", /*#__PURE__*/(0,jsx_runtime.jsx)(Keypress, {
          "data-inspector-line": "62",
          "data-inspector-column": "10",
          "data-inspector-relative-path": "src/HomePage/index.tsx",
          children: "C"
        })]
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/pages/index.tsx


/* harmony default export */ var pages = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(HomePage, {
    "data-inspector-line": "4",
    "data-inspector-column": "2",
    "data-inspector-relative-path": "src/pages/index.tsx",
    name: 'umi4',
    titleBadge: 'Umi 4'
  });
});

/***/ })

}]);