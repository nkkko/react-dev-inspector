import {
  customElement,
} from 'solid-element'
import {
  getElementDimensions,
  getBoundingRect,
} from './utils'
import {
  InspectorOverlay,
  type InspectorOverlayElement,
} from './InspectorOverlay'

import type {
  Rect,
  BoxSizing,
} from './types'

export class Overlay {
  window: Window
  overlay: InspectorOverlayElement

  constructor() {
    // ensure register with no-side-effect tree-shaking
    customElement('inspector-overlay', InspectorOverlay)

    // Find the root window, because overlays are positioned relative to it.
    const currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window
    this.window = currentWindow

    const doc = currentWindow.document
    this.overlay = document.createElement('inspector-overlay')
    doc.body.appendChild(this.overlay)
  }

  public async inspect<Element = HTMLElement>({
    element,
    title,
    info,
    getBoxSizing = getElementDimensions,
    getBoundingRect: _getBoundingRect = getBoundingRect,
  }: {
    element?: Element;
    title?: string;
    info?: string;
    /**
     * default as `window.getComputedStyle(element)`
     */
    getBoxSizing?: (element: Element) => BoxSizing;
    /**
     * default as `element.getBoundingClientRect()`
     */
    getBoundingRect?: (element: Element) => Rect;
  }) {
    await this.overlay.inspect({
      element,
      title,
      info,
      getBoxSizing,
      getBoundingRect: _getBoundingRect,
    })
  }

  public async hide() {
    await this.overlay.hide()
  }

  public remove() {
    this.overlay.remove()
  }
}
