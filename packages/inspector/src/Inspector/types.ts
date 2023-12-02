
export interface CodeInfo {
  lineNumber: string;
  columnNumber: string;
  /**
   * code source file relative path to dev-server cwd(current working directory)
   * need use with `@react-dev-inspector/babel-plugin`
   */
  relativePath?: string;
  /**
   * code source file absolute path
   * just need use with `@babel/plugin-transform-react-jsx-source` which auto set by most framework
   */
  absolutePath?: string;
}

/**
 * props that injected into react nodes
 *
 * like <div data-inspector-line="2" data-inspector-column="3" data-inspector-relative-path="xxx/ooo" />
 * this props will be record in fiber
 */
export interface CodeDataAttribute {
  'data-inspector-line': string;
  'data-inspector-column': string;
  'data-inspector-relative-path': string;
}


/**
 * Agent for collect inspection info from it's React renderer with user interaction (like PointerEvent)
 */
export interface InspectAgent<Element> {
  /**
   * trigger when user activate inspector in <Inspector/>
   */
  activate(params: {
    /**
     * the last PointerMove event when activate inspector,
     * use to check whether hovered any element then trigger hover it immediately at initialization
     */
    pointer?: PointerEvent;
    onHover: (params: { element: Element; pointer: PointerEvent }) => void;
    onClick: (params: { element: Element; pointer: PointerEvent }) => void;
  }): void;


  /**
   * trigger when user deactivate inspector in <Inspector/>,
   * to clear agent's indicators, release resources and reset states
   */
  deactivate(): void;

  /**
   * use for filter valid elements from input element upward to render root.
   * a "valid" element considered have a valid name and you want show it in the inspected list.
   */
  getAncestorChain(element: Element): Generator<Element, void, void>;

  getNameInfo(element: Element): (
    | undefined
    | {
      /** element's constructor name */
      name: string;
      /** display to describe the element as short */
      title: string;
    }
  );

  findCodeInfo(element: Element): CodeInfo | undefined;

  indicate(params: {
    element: Element;
    pointer: PointerEvent;
    name?: string;
    title?: string;
  }): void;

  removeIndicate(): void;
}
