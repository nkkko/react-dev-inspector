import {
  onMount,
  createSignal,
} from 'solid-js'
import {
  customElement,
  type ComponentType,
} from 'solid-element'
import { css } from '#utils'
import type {
  Rect,
  BoxSizing,
} from '#floating'
import {
  InspectContextPanelTagName,
} from '../InspectContextPanel'
import {
  InspectorOverlayRect,
} from './OverlayRect'
import {
  InspectorOverlayTip,
} from './OverlayTip'


export interface InspectorOverlayExpose {
  inspect: <Element = HTMLElement>(params: {
    element?: Element;
    title?: string;
    info?: string;
    getBoxSizing: (element: Element) => BoxSizing;
    getBoundingRect: (element: Element) => Rect;
  }) => Promise<void>;
  hide: () => void;
}

export interface InspectorOverlayElement extends HTMLElement, InspectorOverlayExpose {}

export const InspectorOverlay: ComponentType<Record<string, never>> = (_props, { element }) => {
  const [inspectInfo, setInspectInfo] = createSignal<{
    display: 'block' | 'none';
    title: string;
    info: string;
    /** target element bounding Rect */
    boundingRect?: Rect;
    /** target element margin/border/padding */
    boxSizing?: BoxSizing;
    /**
     * only show OverlayTips's corner hint message when no opened InspectContextPanel
     */
    hasInspectContextPanel?: boolean;
  }>({
    display: 'none',
    title: '',
    info: '',
  })


  const inspect: InspectorOverlayExpose['inspect'] = async <Element = HTMLElement>({
    element,
    title = '',
    info = '',
    getBoxSizing,
    getBoundingRect,
  }: {
    element?: Element;
    title?: string;
    info?: string;
    getBoxSizing: (element: Element) => BoxSizing;
    getBoundingRect: (element: Element) => Rect;
  }) => {
    if (!element) {
      hide()
      return
    }

    const boxSizing = getBoxSizing(element)
    const boundingRect = getBoundingRect(element)
    const hasInspectContextPanel = document.getElementsByTagName(InspectContextPanelTagName).length > 0

    setInspectInfo({
      display: 'block',
      title,
      info,
      boundingRect,
      boxSizing,
      hasInspectContextPanel,
    })
  }

  const hide: InspectorOverlayExpose['hide'] = () => {
    setInspectInfo({
      display: 'none',
      title: '',
      info: '',
    })
  }

  const getHost = () => (element.renderRoot as ShadowRoot)?.host as Element & {
    style: CSSStyleDeclaration;
  } & InspectorOverlayExpose | undefined

  onMount(() => {
    const host = getHost()
    if (host) {
      host.inspect = inspect
      host.hide = hide
    }
  })

  return (
    <>
      <InspectorOverlayRect
        boundingRect={inspectInfo().boundingRect}
        boxSizing={inspectInfo().boxSizing}
      />
      <InspectorOverlayTip
        title={inspectInfo().title}
        info={inspectInfo().info}
        boundingRect={inspectInfo().boundingRect}
        boxSizing={inspectInfo().boxSizing}
        showCornerHint={!inspectInfo().hasInspectContextPanel}
      />
      <style>
        {hostStyles}
        {css`:host { display: ${inspectInfo().display}; }`}
      </style>
    </>
  )
}

const hostStyles = css`
  :host {
    position: fixed;
    display: none;
    pointer-events: none;
    z-index: 10000000;
  }
`

export const InspectorOverlayTagName = 'inspector-overlay'

/**
 * that's also no-side-effect for tree-shaking,
 * because it will call again in `Overlay` constructor
 */
customElement(InspectorOverlayTagName, InspectorOverlay)
