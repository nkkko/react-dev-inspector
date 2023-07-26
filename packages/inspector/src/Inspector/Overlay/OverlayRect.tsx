import { type CSSProperties } from 'react'
import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap, type StyleInfo } from 'lit/directives/style-map.js'
import type {
  Box,
  BoxSizing,
} from './types'


@customElement('inspector-overlay-rect')
export class InspectorOverlayRect extends LitElement {
  @property({ attribute: false })
  public boundingRect?: Box

  @property({ attribute: false })
  public boxSizing?: BoxSizing

  public updateBound({ boundingRect, boxSizing }: {
    boundingRect: Box;
    boxSizing: BoxSizing;
  }) {
    this.boundingRect = boundingRect
    this.boxSizing = boxSizing
  }

  protected getBoxStyle(boxSizing: BoxSizing | undefined, type: 'margin' | 'padding' | 'border'): CSSProperties {
    if (!boxSizing) {
      return {
        display: 'none',
      }
    }

    return {
      borderTopWidth: `${boxSizing[`${type}Top`]}px`,
      borderLeftWidth: `${boxSizing[`${type}Left`]}px`,
      borderRightWidth: `${boxSizing[`${type}Right`]}px`,
      borderBottomWidth: `${boxSizing[`${type}Bottom`]}px`,
      borderStyle: 'solid',
    }
  }

  override render() {
    const marginStyle = styleMap({
      ...this.getBoxStyle(this.boxSizing, 'margin') as StyleInfo,
      top: `${(this.boundingRect?.top ?? 0) - (this.boxSizing?.marginTop ?? 0)}px`,
      left: `${(this.boundingRect?.left ?? 0) - (this.boxSizing?.marginLeft ?? 0)}px`,
    })

    const borderStyle = styleMap(this.getBoxStyle(this.boxSizing, 'border') as StyleInfo)

    const paddingStyle = styleMap(this.getBoxStyle(this.boxSizing, 'padding') as StyleInfo)

    const contentStyle = !(this.boundingRect && this.boxSizing)
      ? styleMap({})
      : styleMap({
        height: `${
          this.boundingRect.height
          - this.boxSizing.borderTop
          - this.boxSizing.borderBottom
          - this.boxSizing.paddingTop
          - this.boxSizing.paddingBottom
        }px`,
        width: `${
          this.boundingRect.width
          - this.boxSizing.borderLeft
          - this.boxSizing.borderRight
          - this.boxSizing.paddingLeft
          - this.boxSizing.paddingRight
        }px`,
      })

    return html`
      <div
        class='inspector-overlay-margin'
        style=${marginStyle}
      >
        <div
          class='inspector-overlay-border'
          style=${borderStyle}
        >
          <div
            class='inspector-overlay-padding'
            style=${paddingStyle}
          >
            <div
              class='inspector-overlay-content'
              style=${contentStyle}
            >
            </div>
          </div>
        </div>
      </div>
    `
  }

  /**
   * same color style used in `OverlayModel.buildHighlightConfig` with ChromeDevTools
   * https://github.com/ChromeDevTools/devtools-frontend/blob/chromium/6210/front_end/core/sdk/OverlayModel.ts#L553
   */
  static styles = css`
    .inspector-overlay-margin {
      position: fixed;
      z-index: 10000000;
      /**
       * PageHighlight.Margin in
       *   https://github.com/ChromeDevTools/devtools-frontend/blob/chromium/6210/front_end/core/common/Color.ts#L2322
       */
      border-color: rgba(246, 178, 107, .66);
      cursor: default;
    }
    .inspector-overlay-border {
      /**
       * PageHighlight.Border in
       *   https://github.com/ChromeDevTools/devtools-frontend/blob/chromium/6210/front_end/core/common/Color.ts#L2320
       */
      border-color: rgba(255, 229, 153, .66);
    }
    .inspector-overlay-padding {
      /**
       * PageHighlight.Padding in
       *   https://github.com/ChromeDevTools/devtools-frontend/blob/chromium/6210/front_end/core/common/Color.ts#L2318
       */
      border-color: rgba(147, 196, 125, .55);
    }
    .inspector-overlay-content {
      /**
       * PageHighlight.Content in
       *   https://github.com/ChromeDevTools/devtools-frontend/blob/chromium/6210/front_end/core/common/Color.ts#L2315
       */
      background-color: rgba(111, 168, 220, .66);
    }
  `
}
