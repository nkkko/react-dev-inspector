import { type CSSProperties } from 'react'
import {
  html,
  css,
  LitElement,
  type PropertyValues,
} from 'lit'
import { property, state } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import {
  computePosition,
  offset,
  flip,
  shift,
  type Rect as FloatingRect,
  type Dimensions,
} from '@floating-ui/core'
import {
  customElement,
  getBoundingBox,
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
  public boundingBox?: Box

  @property({ attribute: false })
  public boxSizing?: Pick<BoxSizing, `margin${'Top' | 'Left' | 'Right' | 'Bottom'}`>

  @property({ attribute: false })
  public spaceBox?: Box

  @state()
  protected position: Pick<CSSProperties, 'top' | 'left'> = {}

  @property({ attribute: false })
  private infoStyle: ReturnType<typeof styleMap> = styleMap({})

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
    this.boundingBox = {
      ...boundingRect,
      right: boundingRect.left + boundingRect.width,
      bottom: boundingRect.top + boundingRect.height,
    }
    this.boxSizing = boxSizing
    this.spaceBox = spaceBox ?? InspectorOverlayTip.getViewSpaceBox()
    this.infoStyle = styleMap({
      display: this.info ? 'block' : 'none',
    })
  }

  protected get outerBox(): Box {
    const { boundingBox, boxSizing } = this
    if (!boundingBox || !boxSizing) {
      return {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
      }
    }

    const box = {
      top: Math.min(boundingBox.top, boundingBox.top - boxSizing.marginTop),
      left: Math.min(boundingBox.left, boundingBox.left - boxSizing.marginLeft),
      right: Math.max(boundingBox.right, boundingBox.right + boxSizing.marginRight),
      bottom: Math.max(boundingBox.bottom, boundingBox.bottom + boxSizing.marginBottom),
    }

    return {
      top: box.top,
      left: box.left,
      right: box.right,
      bottom: box.bottom,
      width: box.right - box.left,
      height: box.bottom - box.top,
    }
  }

  protected get width() {
    return Math.round(this.boundingBox?.width ?? 0)
  }

  protected get height() {
    return Math.round(this.boundingBox?.height ?? 0)
  }

  static getViewSpaceBox(boundaryWindow?: Window): Box {
    const windowAgent = boundaryWindow ?? window.__REACT_DEVTOOLS_TARGET_WINDOW__ ?? window
    const documentBox = getBoundingBox(windowAgent.document.documentElement)
    return {
      top: documentBox.top + windowAgent.scrollY,
      left: documentBox.left + windowAgent.scrollX,
      right: documentBox.left + windowAgent.scrollX + windowAgent.innerWidth,
      bottom: documentBox.top + windowAgent.scrollY + windowAgent.innerHeight,
      width: windowAgent.innerWidth,
      height: windowAgent.innerHeight,
    }
  }

  override updated(changed: PropertyValues) {
    if (
      !changed.get('position')
      && this.boundingBox
      && this.boxSizing
      && this.spaceBox
    ) {
      restraintTipPosition({
        elementBox: this.outerBox,
        spaceBox: this.spaceBox,
        tipSize: this.getBoundingClientRect().toJSON(),
      }).then(position => {
        this.position = position
        this.requestUpdate('position')
      })
    }
  }

  override render() {
    const hidden = !this.boundingBox || !this.boxSizing

    this.style.setProperty(
      '--inspector-overlay-tip-display',
      hidden ? 'none' : 'flex',
    )
    this.style.setProperty(
      '--inspector-overlay-tip-top',
      `${this.position.top}px`,
    )
    this.style.setProperty(
      '--inspector-overlay-tip-left',
      `${this.position.left}px`,
    )

    return html`
      <div class='inspector-tip-name' >
        <div class='inspector-tip-title' >
          &lrm;${this.title}&lrm;
        </div>

        <div
          class='inspector-tip-info'
          style=${this.infoStyle}
        >
          &lrm;${this.info}&lrm;
        </div>
      </div>
      <div class='inspector-tip-separator'></div>
      <div class='inspector-tip-size' >
        ${this.width}px × ${this.height}px
      </div>
    `
  }

  static styles = css`
    :host {
      position: fixed;
      z-index: 10000000;
      display: var(--inspector-overlay-tip-display, none);
      top: var(--inspector-overlay-tip-top, 0);
      left: var(--inspector-overlay-tip-left, 0);

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

export const restraintTipPosition = async ({ elementBox, spaceBox, tipSize }: {
  /** the `reference` of computePosition */
  elementBox: Box;
  /** the `ClippingRect` of computePosition */
  spaceBox: Box;
  /** the `floating` of computePosition */
  tipSize: Dimensions;
}): Promise<{ top: number; left: number }> => {
  const { x, y } = await computePosition(elementBox, tipSize, {
    platform: {
      getElementRects: ({ reference, floating }: { reference: Box; floating: Dimensions }) => {
        return ({
          reference: {
            ...reference,
            x: reference.left,
            y: reference.top,
          },
          floating: floating as FloatingRect,
        })
      },
      getDimensions: (element: Box) => element,
      getClippingRect: () => {
        return ({
          ...spaceBox,
          x: spaceBox.left,
          y: spaceBox.top,
        })
      },
    },
    placement: 'bottom-start',
    strategy: 'fixed',
    middleware: [
      offset(4),
      flip({
        crossAxis: false,
        fallbackAxisSideDirection: 'start',
      }),
      shift({
        padding: 4,
        crossAxis: true,
      }),
    ],
  })

  return {
    left: x,
    top: y,
  }
}

