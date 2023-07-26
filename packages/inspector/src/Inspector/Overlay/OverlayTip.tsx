import { type CSSProperties } from 'react'
import {
  html,
  css,
  LitElement,
  type PropertyValues,
} from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import { ref, createRef, type Ref } from 'lit/directives/ref.js'
import {
  getNestedBoundingClientRect,
} from './utils'
import type {
  Box,
  Rect,
  BoxSizing,
} from './types'


@customElement('inspector-overlay-tip')
export class InspectorOverlayTip extends LitElement {
  @property()
  public title = ''

  @property()
  public info = ''

  @property({ attribute: false })
  public boundingRect?: Rect

  @property({ attribute: false })
  public boxSizing?: Pick<BoxSizing, `margin${'Top' | 'Left' | 'Right' | 'Bottom'}`>

  @property({ attribute: false })
  public spaceBox?: Box

  @state()
  protected position: Pick<CSSProperties, 'top' | 'left'> = {}

  protected tipRef: Ref<HTMLDivElement> = createRef()

  public updateTip({
    title,
    info,
    boundingRect,
    boxSizing,
    spaceBox,
  }: {
    title: string;
    info: string;
    boundingRect: Rect;
    boxSizing: BoxSizing;
    spaceBox?: Box;
  }) {
    this.title = title
    this.info = info
    this.boundingRect = boundingRect
    this.boxSizing = boxSizing
    this.spaceBox = spaceBox ?? InspectorOverlayTip.getViewSpaceBox()
  }

  protected get outerBox(): Box {
    const { boundingRect, boxSizing } = this
    if (!boundingRect || !boxSizing) {
      return {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      }
    }

    const box = {
      top: Math.min(boundingRect.top, boundingRect.top - boxSizing.marginTop),
      left: Math.max(boundingRect.left, boundingRect.left - boxSizing.marginLeft),
      right: Math.max(boundingRect.right, boundingRect.right + boxSizing.marginRight),
      bottom: Math.max(boundingRect.bottom, boundingRect.bottom + boxSizing.marginBottom),
    }

    return {
      top: box.top,
      left: box.left,
      width: box.right - box.left,
      height: box.bottom - box.top,
    }
  }

  protected get width() {
    return Math.round(this.boundingRect?.width ?? 0)
  }

  protected get height() {
    return Math.round(this.boundingRect?.height ?? 0)
  }


  static getViewSpaceBox(boundaryWindow?: Window): Box {
    const windowAgent = boundaryWindow ?? window.__REACT_DEVTOOLS_TARGET_WINDOW__ ?? window
    const documentBox = getNestedBoundingClientRect(windowAgent.document.documentElement)
    return {
      top: documentBox.top + window.scrollY,
      left: documentBox.left + window.scrollX,
      height: windowAgent.innerHeight,
      width: windowAgent.innerWidth,
    }
  }

  override updated(changed: PropertyValues) {
    if (
      !changed.get('position')
      && this.tipRef.value
      && this.boundingRect
      && this.boxSizing
      && this.spaceBox
    ) {
      this.position = this.calcTipPosition(
        this.outerBox,
        this.spaceBox,
        this.tipRef.value.getBoundingClientRect(),
      )
      this.requestUpdate('position')
    }
  }

  protected calcTipPosition(elementBox: Box, space: Box, tipSize: Box): Pick<CSSProperties, 'top' | 'left'> {
    const tipHeight = Math.max(tipSize.height, 20)
    const tipWidth = Math.max(tipSize.width, 60)
    const margin = 5

    let top
    if (elementBox.top + elementBox.height + tipHeight <= space.top + space.height) {
      if (elementBox.top + elementBox.height < space.top + 0) {
        top = space.top + margin
      }
      else {
        top = elementBox.top + elementBox.height + margin
      }
    }
    else if (elementBox.top - tipHeight <= space.top + space.height) {
      if (elementBox.top - tipHeight - margin < space.top + margin) {
        top = space.top + margin
      }
      else {
        top = Math.max(0, elementBox.top - tipHeight - margin)
      }
    }
    else {
      top = Math.max(0, space.top + space.height - tipHeight - margin)
    }

    let left = elementBox.left + margin
    if (elementBox.left < space.left) {
      left = space.left + margin
    }
    if (elementBox.left + tipWidth > space.left + space.width) {
      left = Math.max(0, space.left + space.width - tipWidth - margin)
    }

    return {
      top: `${top}px`,
      left: `${left}px`,
    }
  }

  override render() {
    const hidden = !this.boundingRect || !this.boxSizing
    const containerStyles = styleMap({
      ...this.position,
      display: hidden ? 'none' : 'flex',
    })
    const tipInfoStyles = styleMap({
      display: this.info ? 'block' : 'none',
    })

    return html`
      <div
        class='inspector-tip-container'
        style=${containerStyles}
        ${ref(this.tipRef)}
      >
        <div class='inspector-tip-name' >
          <div class='inspector-tip-title' >
            &lrm;${this.title}&lrm;
          </div>

          <div
            class='inspector-tip-info'
            style=${tipInfoStyles}
          >
            &lrm;${this.info}&lrm;
          </div>
        </div>
        <div class='inspector-tip-separator'></div>
        <div class='inspector-tip-size' >
          ${this.width}px × ${this.height}px
        </div>
      </div>
    `
  }

  static styles = css`
    .inspector-tip-container {
      position: fixed;
      z-index: 10000000;
      display: flex;
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
  `
}
