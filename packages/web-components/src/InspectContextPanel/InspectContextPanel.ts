import {
  customElement,
} from 'solid-element'
import {
  InspectContextPanelRoot,
  type InspectContextPanelElement,
  type InspectContextPanelShowParams,
} from './InspectContextPanelRoot'


export class InspectContextPanel {
  window: Window
  panel: InspectContextPanelElement

  constructor() {
    // ensure register with no-side-effect tree-shaking
    customElement('inspect-context-panel', InspectContextPanelRoot)

    // Find the root window, because overlays are positioned relative to it.
    const currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window
    this.window = currentWindow

    const doc = currentWindow.document
    this.panel = document.createElement('inspect-context-panel')
    doc.body.appendChild(this.panel)
  }

  public show(params: InspectContextPanelShowParams) {
    this.panel.show(params)
  }

  public hide() {
    this.panel.hide()
  }

  public remove() {
    this.panel.remove()
  }
}
