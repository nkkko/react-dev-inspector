import {
  createEffect,
  createSignal,
} from 'solid-js'
import type {
  PropertiesHyphen,
} from 'csstype'
import { css } from '#utils'
import type {
  Rect,
  BoxSizing,
} from './types'


type CSSProperties = Pick<
  PropertiesHyphen,
  | 'top'
  | 'left'
  | 'display'
  | 'height'
  | 'width'
  | 'border-top-width'
  | 'border-left-width'
  | 'border-right-width'
  | 'border-bottom-width'
  | 'border-style'
>


export const InspectorOverlayRect = (props: {
  class?: string;
  /** target element bounding Rect */
  boundingRect?: Rect;
  /** target element margin/border/padding */
  boxSizing?: BoxSizing;
}) => {
  const position = (): Required<Pick<CSSProperties, 'top' | 'left'>> => ({
    top: `${(props.boundingRect?.y ?? 0) - Math.max(props.boxSizing?.marginTop ?? 0, 0)}px`,
    left: `${(props.boundingRect?.x ?? 0) - Math.max(props.boxSizing?.marginLeft ?? 0, 0)}px`,
  })

  const [marginStyle, setMarginStyle] = createSignal<CSSProperties>({ display: 'none' })
  const [borderStyle, setBorderStyle] = createSignal<CSSProperties>({ display: 'none' })
  const [paddingStyle, setPaddingStyle] = createSignal<CSSProperties>({ display: 'none' })
  const [contentStyle, setContentStyle] = createSignal<CSSProperties>({ display: 'none' })

  const getBoxStyle = (boxSizing: BoxSizing | undefined, type: 'margin' | 'padding' | 'border'): CSSProperties => {
    if (!boxSizing) {
      return {
        display: 'none',
      }
    }

    return {
      'border-top-width': `${Math.max(boxSizing[`${type}Top`] ?? 0, 0)}px`,
      'border-left-width': `${Math.max(boxSizing[`${type}Left`] ?? 0, 0)}px`,
      'border-right-width': `${Math.max(boxSizing[`${type}Right`] ?? 0, 0)}px`,
      'border-bottom-width': `${Math.max(boxSizing[`${type}Bottom`] ?? 0, 0)}px`,
    }
  }

  createEffect(() => {
    const {
      boxSizing,
      boundingRect,
    } = props

    setMarginStyle(getBoxStyle(boxSizing, 'margin'))
    setBorderStyle(getBoxStyle(boxSizing, 'border'))
    setPaddingStyle(getBoxStyle(boxSizing, 'padding'))
    setContentStyle(!(boundingRect && boxSizing)
      ? {}
      : {
        height: `${
          boundingRect.height
          - boxSizing.borderTop
          - boxSizing.borderBottom
          - boxSizing.paddingTop
          - boxSizing.paddingBottom
        }px`,
        width: `${
          boundingRect.width
          - boxSizing.borderLeft
          - boxSizing.borderRight
          - boxSizing.paddingLeft
          - boxSizing.paddingRight
        }px`,
      })
  })


  return (
    <div
      class={`inspector-overlay-rect-container ${props.class ?? ''}`}
      style={position()}
    >
      <div
        class='inspector-overlay-margin'
        style={marginStyle()}
      >
        <div
          class='inspector-overlay-border'
          style={borderStyle()}
        >
          <div
            class='inspector-overlay-padding'
            style={paddingStyle()}
          >
            <div
              class='inspector-overlay-content'
              style={contentStyle()}
            />
          </div>
        </div>
      </div>
      <style>
        {css`
          .inspector-overlay-rect-container {
            position: fixed;
            display: block;
            cursor: default;
            box-sizing: border-box;
          }

          .inspector-overlay-margin {
            /**
             * PageHighlight.Margin in
             *   https://github.com/ChromeDevTools/devtools-frontend/blob/chromium/6210/front_end/core/common/Color.ts#L2322
             */
            border-color: rgba(246, 178, 107, .66);
            border-style: solid;
          }
          .inspector-overlay-border {
            /**
             * PageHighlight.Border in
             *   https://github.com/ChromeDevTools/devtools-frontend/blob/chromium/6210/front_end/core/common/Color.ts#L2320
             */
            border-color: rgba(255, 229, 153, .66);
            border-style: solid;
          }
          .inspector-overlay-padding {
            /**
             * PageHighlight.Padding in
             *   https://github.com/ChromeDevTools/devtools-frontend/blob/chromium/6210/front_end/core/common/Color.ts#L2318
             */
            border-color: rgba(147, 196, 125, .55);
            border-style: solid;
          }
          .inspector-overlay-content {
            /**
             * PageHighlight.Content in
             *   https://github.com/ChromeDevTools/devtools-frontend/blob/chromium/6210/front_end/core/common/Color.ts#L2315
             */
            background-color: rgba(111, 168, 220, .66);
          }
        `}
      </style>
    </div>
  )
}
