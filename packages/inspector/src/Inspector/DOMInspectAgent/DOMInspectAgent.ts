
import type { Fiber } from 'react-reconciler'
import { Overlay } from '../Overlay'
import {
  setupPointerListener,
  getElementCodeInfo,
  getElementFiberUpward,
  getElementInspect,
  type HTMLElementWithFiber,
} from '../utils'
import type {
  InspectAgent,
} from '../types'


export class DOMInspectAgent implements InspectAgent<HTMLElement> {
  protected overlay?: Overlay
  protected unsubscribeListener?: () => void

  public activate({ pointer, onHover, onClick }: {
    /**
     * the last PointerMove event when activate inspector,
     * use to check whether hovered any element at initial
     */
    pointer?: PointerEvent;
    onHover: (params: { element: any; pointer: PointerEvent }) => void;
    onClick: (params: { element: any; pointer: PointerEvent }) => void;
  }) {
    this.overlay = new Overlay()

    this.unsubscribeListener = setupPointerListener({
      onPointerOver: onHover,
      onClick,
    })

    if (!pointer) {
      return
    }
    const element = document.elementFromPoint(pointer.clientX, pointer.clientY) as HTMLElement | undefined
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

  public getElementFiber(element?: HTMLElement): Fiber | undefined {
    return getElementFiberUpward(element as HTMLElementWithFiber)
  }

  public *getAncestorChain(element: HTMLElement): Generator<HTMLElement, void, void> {
    let current: HTMLElement | null = element
    while (current) {
      if (this.getElementFiber(current)) {
        yield current
      }

      current = current.parentElement
    }
  }

  public getNameInfo(element: HTMLElement): {
    name: string;
    title: string;
  } {
    return getElementInspect(element)
  }

  public findCodeInfo(element: HTMLElement) {
    return getElementCodeInfo(element)
  }

  public indicate({ element, title }: {
    element: HTMLElement;
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
