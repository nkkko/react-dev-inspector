'use client'

import type { Fiber } from 'react-reconciler'
import {
  Overlay,
  type TagItem,
} from '@react-dev-inspector/web-components'
import {
  setupPointerListener,
  getElementCodeInfo,
  getElementFiberUpward,
  getElementFiber,
  getElementInspect,
  genInspectChainFromFibers,
  getPathWithLineNumber,
} from '../utils'
import type {
  CodeInfo,
  InspectAgent,
  InspectChainItem,
  Pointer,
} from '../types'


export type DOMElement = HTMLElement | SVGElement

export class DOMInspectAgent implements InspectAgent<DOMElement> {
  protected overlay?: Overlay
  protected unsubscribeListener?: () => void

  public activate = ({
    onHover,
    onPointerDown,
    onClick,
  }: {
    onHover: (params: { element: DOMElement; pointer: PointerEvent }) => void;
    onPointerDown: (params: { element?: DOMElement; pointer: PointerEvent }) => void;
    onClick: (params: { element?: DOMElement; pointer: PointerEvent }) => void;
  }) => {
    this.deactivate()
    this.overlay = new Overlay()

    this.unsubscribeListener = setupPointerListener({
      onPointerOver: onHover,
      onPointerDown,
      onClick,
    })
  }

  public deactivate = () => {
    this.overlay?.remove()
    this.overlay = undefined

    this.unsubscribeListener?.()
    this.unsubscribeListener = undefined
  }

  public indicate = ({ element, codeInfo, title }: {
    element: DOMElement;
    title?: string;
    codeInfo?: CodeInfo;
  }) => {
    if (!this.overlay) {
      this.overlay = new Overlay()
    }

    codeInfo ??= this.findCodeInfo(element)

    this.overlay.inspect({
      element,
      title,
      info: getPathWithLineNumber(codeInfo),
    })
  }

  public removeIndicate = () => {
    this.overlay?.hide()
  }

  public getTopElementFromPointer = (pointer: Pointer): DOMElement | undefined | null => {
    return document.elementFromPoint(pointer.clientX, pointer.clientY) as DOMElement | undefined
  }

  public getTopElementsFromPointer = (pointer: Pointer): DOMElement[] => {
    const elements = document.elementsFromPoint(pointer.clientX, pointer.clientY) as DOMElement[]
    const parents = new Set<DOMElement | null>([null, document.documentElement, document.body])

    // due to returns of `document.elementsFromPoint()` maybe not continuous elements
    for (const element of elements) {
      let parent = element.parentElement
      while (parent && !parents.has(parent)) {
        parents.add(parent)
        parent = parent.parentElement
      }
    }

    const topEntities = elements.filter(element => (
      element && !parents.has(element)
    ))

    return topEntities
  }

  public isAgentElement = (element: unknown): element is DOMElement => {
    return element instanceof HTMLElement || element instanceof SVGElement
  }

  public *getRenderChain(element: DOMElement): Generator<InspectChainItem<DOMElement>, unknown, void> {
    let fiber: Fiber | undefined | null

    while (element) {
      fiber = getElementFiber(element)
      if (fiber) {
        break
      }

      yield {
        agent: this,
        element,
        title: element.nodeName.toLowerCase(),
        tags: getDOMElementTags(element),
      }

      element = element.parentElement as DOMElement
    }

    function *fiberChain(): Generator<Fiber, void, void> {
      while (fiber) {
        yield fiber
        if (fiber.return === fiber) {
          return
        }
        fiber = fiber.return
      }
    }

    return yield * genInspectChainFromFibers<DOMElement>({
      agent: this,
      fibers: fiberChain(),
      isAgentElement: this.isAgentElement,
      getElementTags: getDOMElementTags,
    })
  }

  public *getSourceChain(element: DOMElement): Generator<InspectChainItem<DOMElement>, unknown, void> {
    let fiber: Fiber | undefined | null = this.findElementFiber(element)

    function *fiberChain(): Generator<Fiber, void, void> {
      while (fiber) {
        yield fiber
        if (fiber.return === fiber || fiber._debugOwner === fiber) {
          return
        }
        fiber = fiber._debugOwner ?? fiber.return
      }
    }

    return yield * genInspectChainFromFibers<DOMElement>({
      agent: this,
      fibers: fiberChain(),
      isAgentElement: this.isAgentElement,
      getElementTags: getDOMElementTags,
    })
  }

  public getNameInfo = (element: DOMElement): {
    name: string;
    title: string;
  } => {
    return getElementInspect(element)
  }

  public findCodeInfo = (element: DOMElement) => {
    return getElementCodeInfo(element)
  }

  public findElementFiber = (element: DOMElement): Fiber | undefined => {
    return getElementFiberUpward(element)
  }
}


export const domInspectAgent = new DOMInspectAgent()


export const getDOMElementTags = (element: unknown): TagItem[] => {
  const tags: TagItem[] = []

  if (element instanceof HTMLElement) {
    if (element.id) {
      tags.push({
        label: `#${element.id}`,
        background: 'var(--color-tag-gray-1)',
      })
    }

    let classList = ''
    element.classList.forEach(className => {
      classList += `.${className}`
    })
    if (classList) {
      tags.push({
        label: classList,
        background: 'var(--color-tag-gray-1)',
      })
    }
  }

  return tags
}
