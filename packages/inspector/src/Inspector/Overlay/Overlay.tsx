import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { ref, createRef, type Ref } from 'lit/directives/ref.js'
import {
  registerElement,
  getElementDimensions,
  getNestedBoundingBox,
} from './utils'
import {
  InspectorOverlayRect,
} from './OverlayRect'
import {
  InspectorOverlayTip,
} from './OverlayTip'

@customElement('inspector-overlay')
export class InspectorOverlay extends LitElement {
  protected boxRef: Ref<InspectorOverlayRect> = createRef()
  protected tipRef: Ref<InspectorOverlayTip> = createRef()

  public async inspect({ element, title = '', info = '' }: {
    element?: HTMLElement;
    title?: string;
    info?: string;
  }) {
    if (!element) return
    // ensure ref has set after render html
    if (!(this.boxRef.value && this.tipRef.value)) {
      await this.updateComplete
    }

    const overlayRect = this.boxRef.value
    const overlayTip = this.tipRef.value

    if (!(overlayRect && overlayTip)) return

    return this._inspect({
      element,
      title,
      info,
      overlayRect,
      overlayTip,
    })
  }

  public hide() {
    this.style.setProperty('--inspector-overlay-display', 'none')
  }

  protected _inspect({
    element,
    title,
    info,
    overlayRect,
    overlayTip,
  }: {
    element: HTMLElement;
    title: string;
    info: string;
    overlayRect: InspectorOverlayRect;
    overlayTip: InspectorOverlayTip;
  }) {
    this.style.setProperty('--inspector-overlay-display', 'block')

    const boxSizing = getElementDimensions(element)
    const boundingRect = getNestedBoundingBox(element)

    overlayRect.updateBound({
      boundingRect,
      boxSizing,
    })

    overlayTip.updateTip({
      title,
      info,
      boundingRect,
      boxSizing,
    })
  }

  override render() {
    return html`
      <inspector-overlay-rect
        ${ref(this.boxRef)}
      >
      </inspector-overlay-rect>
      <inspector-overlay-tip
        ${ref(this.tipRef)}
      >
      </inspector-overlay-tip>
    `
  }

  static styles = css`
    :host {
      pointer-events: none;
      display: var(--inspector-overlay-display, block);
    }
  `
}

export class Overlay {
  window: Window
  overlay: InspectorOverlay

  constructor() {
    // ensure register without tree-shaking
    registerElement('inspector-overlay', InspectorOverlay)
    registerElement('inspector-overlay-rect', InspectorOverlayRect)
    registerElement('inspector-overlay-tip', InspectorOverlayTip)

    // Find the root window, because overlays are positioned relative to it.
    const currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window
    this.window = currentWindow

    const doc = currentWindow.document
    this.overlay = document.createElement('inspector-overlay')
    doc.body.appendChild(this.overlay)
  }

  public async inspect({ element, title, info }: {
    element: HTMLElement;
    title?: string;
    info?: string;
  }) {
    await this.overlay.inspect({
      element,
      title,
      info,
    })
  }

  public hide() {
    this.overlay.hide()
  }

  public remove() {
    this.overlay.remove()
  }
}
