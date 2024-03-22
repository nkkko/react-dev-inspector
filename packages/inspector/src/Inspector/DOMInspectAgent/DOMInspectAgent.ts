
import type { Fiber } from 'react-reconciler'
import {
  Overlay,
} from '@react-dev-inspector/components'
import {
  setupPointerListener,
  getElementCodeInfo,
  getElementFiberUpward,
  getElementInspect,
} from '../utils'
import type {
  InspectAgent,
} from '../types'


export type DOMElement = HTMLElement | SVGElement

export class DOMInspectAgent implements InspectAgent<DOMElement> {
  protected overlay?: Overlay
  protected unsubscribeListener?: () => void

  public activate({
    pointer,
    onHover,
    onPointerDown,
    onClick,
  }: {
    /**
     * the last PointerMove event when activate inspector,
     * use to check whether hovered any element at initial
     */
    pointer?: PointerEvent;
    onHover: (params: { element: DOMElement; pointer: PointerEvent }) => void;
    onPointerDown: (params: { element?: DOMElement; pointer: PointerEvent }) => void;
    onClick: (params: { element?: DOMElement; pointer: PointerEvent }) => void;
  }) {
    this.deactivate()
    this.overlay = new Overlay()

    this.unsubscribeListener = setupPointerListener({
      onPointerOver: onHover,
      onPointerDown,
      onClick,
    })

    if (!pointer) {
      return
    }
    const element = document.elementFromPoint(pointer.clientX, pointer.clientY) as DOMElement | undefined
    if (element) {
      onHover({
        element,
        pointer,
      })
    }
  }

  public deactivate() {
    this.overlay?.remove()
    this.overlay = undefined

    this.unsubscribeListener?.()
    this.unsubscribeListener = undefined
  }

  public isAgentElement(element: unknown): element is DOMElement {
    return element instanceof HTMLElement || element instanceof SVGElement
  }

  public findElementFiber(element?: DOMElement): Fiber | undefined {
    return getElementFiberUpward(element)
  }

  public getNameInfo(element: DOMElement): {
    name: string;
    title: string;
  } {
    return getElementInspect(element)
  }

  public findCodeInfo(element: DOMElement) {
    return getElementCodeInfo(element)
  }

  public indicate({ element, title }: {
    element: DOMElement;
    title?: string;
  }) {
    const codeInfo = this.findCodeInfo(element)

    const relativePath = codeInfo?.relativePath
    const absolutePath = codeInfo?.absolutePath

    this.overlay?.inspect({
      element,
      title,
      info: relativePath ?? absolutePath,
    })
  }

  public removeIndicate() {
    this.overlay?.hide()
  }
}


export const domInspectAgent = new DOMInspectAgent()
