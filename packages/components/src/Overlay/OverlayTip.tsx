import {
  createSignal,
  createEffect,
} from 'solid-js'
import type {
  PropertiesHyphen as CSSProperties,
} from 'csstype'
import {
  computePosition,
  offset,
  flip,
  shift,
  type Dimensions,
} from '@floating-ui/core'
import {
  getBoundingRect,
} from './utils'
import type {
  Rect,
  BoxSizing,
} from './types'


export const InspectorOverlayTip = (props: {
  class?: string;
  title: string;
  info?: string;
  /** target element bounding Rect */
  boundingRect?: Rect;
  /** target element margin/border/padding */
  boxSizing?: Pick<BoxSizing, `margin${'Top' | 'Left' | 'Right' | 'Bottom'}`>;
  /** viewport space box relative of client */
  spaceBox?: Rect;
}) => {
  const spaceBox = () => props.spaceBox ?? getViewSpaceBox()
  const hidden = () => !props.boundingRect || !props.boxSizing
  const infoDisplay = () => props.info ? 'block' : 'none'
  const width = () => Math.round(props.boundingRect?.width ?? 0)
  const height = () => Math.round(props.boundingRect?.height ?? 0)

  const [position, setPosition] = createSignal<Pick<CSSProperties, 'top' | 'left'>>({
    top: '0',
    left: '0',
  })

  const outerBox = (): Rect => {
    const { boundingRect, boxSizing } = props
    if (!boundingRect || !boxSizing) {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      }
    }

    const top = boundingRect.y - Math.max(boxSizing.marginTop, 0)
    const left = boundingRect.x - Math.max(boxSizing.marginLeft, 0)
    const right = boundingRect.x + boundingRect.width + Math.max(boxSizing.marginRight, 0)
    const bottom = boundingRect.y + boundingRect.height + Math.max(boxSizing.marginBottom, 0)

    return {
      x: left,
      y: top,
      width: right - left,
      height: bottom - top,
    }
  }

  // @eslint-ignore-next-line `'container' is never reassigned. Use 'const' instead `
  //   but it reassigned by solid-js ref
  let container: HTMLDivElement | undefined

  createEffect(() => {
    restraintTipPosition({
      elementBox: outerBox(),
      spaceBox: spaceBox(),
      tipSize: container!.getBoundingClientRect().toJSON(),
    }).then(position => {
      setPosition({
        top: `${position.top}px`,
        left: `${position.left}px`,
      })
    })
  })

  const host = (
    <div
      class={`inspector-tip-container ${props.class ?? ''}`}
      ref={container}
      style={{
        display: hidden() ? 'none' : 'flex',
        ...position(),
      }}
    >
      <div class='inspector-tip-name'>
        <div class='inspector-tip-title'>
          &lrm;${props.title}&lrm;
        </div>

        <div
          class='inspector-tip-info'
          style={{
            display: infoDisplay(),
          }}
        >
          &lrm;${props.info}&lrm;
        </div>
      </div>
      <div class='inspector-tip-separator' />
      <div class='inspector-tip-size'>
        {width()}px × {height()}px
      </div>

      <style>
        {`
          .inspector-tip-container {
            position: fixed;

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
            box-sizing: border-box;
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
        `}
      </style>
    </div>
  )

  return host
}

const getViewSpaceBox = (boundaryWindow?: Window): Rect => {
  const windowAgent = boundaryWindow ?? window.__REACT_DEVTOOLS_TARGET_WINDOW__ ?? window
  const documentBox = getBoundingRect(windowAgent.document.documentElement)
  return {
    x: documentBox.x + windowAgent.scrollX,
    y: documentBox.y + windowAgent.scrollY,
    width: windowAgent.innerWidth,
    height: windowAgent.innerHeight,
  }
}

export const restraintTipPosition = async ({ elementBox, spaceBox, tipSize }: {
  /** the `reference` of computePosition */
  elementBox: Rect;
  /** the `ClippingRect` of computePosition */
  spaceBox: Rect;
  /** the `floating` of computePosition */
  tipSize: Dimensions;
}): Promise<{ top: number; left: number }> => {
  // https://floating-ui.com/docs/platform
  const { x, y } = await computePosition(elementBox, tipSize, {
    platform: {
      getElementRects: elementRects => elementRects,
      getDimensions: element => element,
      getClippingRect: () => spaceBox,
    },
    // y-axis is the main axis
    placement: 'bottom-start',
    // css position type
    strategy: 'fixed',
    middleware: [
      /**
       * add distance (margin or spacing) between the reference and floating element
       *
       * https://floating-ui.com/docs/offset
       */
      offset(4),
      /**
       * prevents the floating element from overflowing a clipping container
       * by flipping it to the opposite placement to stay in view.
       *
       * https://floating-ui.com/docs/flip
       */
      flip({
        crossAxis: false,
        fallbackAxisSideDirection: 'start',
      }),
      /**
       * prevents the floating element from overflowing a clipping container
       * by shifting it to stay in view (container).
       *
       * https://floating-ui.com/docs/shift
       */
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
