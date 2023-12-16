import assert from 'assert'
import { useState, useRef, useEffect } from 'react'
import type { StoryFn, Meta } from '@storybook/react'
import { clsx } from 'clsx'
import {
  fromEvent,
  map,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs'
import {
  Button,
  Card as CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from '@stories/components'
import {
  Inspector,
} from '../Inspector'
import {
  setupPointerListener,
  getElementCodeInfo,
  getElementInspect,
} from '../utils'
import {
  getElementDimensions,
  getBoundingBox,
} from './utils'
import {
  type InspectorOverlay,
  Overlay,
} from './Overlay'
import {
  type InspectorOverlayRect,
} from './OverlayRect'
import {
  type InspectorOverlayTip,
} from './OverlayTip'
import type {
  Rect,
  BoxSizing,
} from './types'

// https://storybook.js.org/docs/react/writing-stories/introduction#component-story-format
export default {
  title: 'Overlay',
} satisfies Meta

export const CornerItems = () => {
  const setup = async () => {
    const tips = document.querySelectorAll('inspector-overlay-tip')
    const rects = document.querySelectorAll('inspector-overlay-rect')
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    const itemSize = 120

    // Calculate the positions for the tips
    const positions = [
      // Top left corner
      {
        top: 0,
        left: 0,
      },
      // Top right corner
      {
        top: 0,
        left: screenWidth - itemSize,
      },
      // Bottom left corner
      {
        top: screenHeight - itemSize,
        left: 0,
      },
      // Bottom right corner
      {
        top: screenHeight - itemSize,
        left: screenWidth - itemSize,
      },
      // Center
      {
        top: (screenHeight - itemSize) / 2,
        left: (screenWidth - itemSize) / 2,
      },

      // Top-Center but outside the space
      {
        top: -2 * itemSize,
        left: (screenWidth - itemSize) / 2,
      },

      // Bottom-Center but outside the space
      {
        top: screenHeight + 2 * itemSize,
        left: (screenWidth - itemSize) / 2,
      },

      // Left-Center but outside the space
      {
        top: (screenHeight - itemSize) / 2,
        left: -2 * itemSize,
      },

      // Right-Center but outside the space
      {
        top: (screenHeight - itemSize) / 2,
        left: screenWidth + 2 * itemSize,
      },
    ]


    // Set the positions for each tip
    positions.forEach((position, index) => {
      const rect = rects[index]
      const tip = tips[index]
      assert(rect)
      assert(tip)

      const boundingRect: Rect = {
        ...position,
        width: itemSize,
        height: itemSize,
      }

      const boxSizing: BoxSizing = {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderTop: 2,
        borderLeft: 2,
        borderRight: 2,
        borderBottom: 2,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
      }

      rect.updateBound({
        boundingRect,
        boxSizing,
      })
      tip.updateTip({
        title: 'div in <Card>',
        info: '',
        boundingRect,
        boxSizing,
      })
    })
  }

  useEffect(() => {
    setup()
  }, [])

  return (
    <Inspector>
      <inspector-overlay-rect />
      <inspector-overlay-tip />

      <inspector-overlay-rect />
      <inspector-overlay-tip />

      <inspector-overlay-rect />
      <inspector-overlay-tip />

      <inspector-overlay-rect />
      <inspector-overlay-tip />

      <inspector-overlay-rect />
      <inspector-overlay-tip />

      <inspector-overlay-rect />
      <inspector-overlay-tip />

      <inspector-overlay-rect />
      <inspector-overlay-tip />

      <inspector-overlay-rect />
      <inspector-overlay-tip />

      <inspector-overlay-rect />
      <inspector-overlay-tip />
    </Inspector>
  )
}


export const MoveableDragItem: StoryFn<{ itemSize: 'normal' | 'full' | 'large' }> = ({ itemSize }) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<InspectorOverlayRect>(null)
  const overlayTipRef = useRef<InspectorOverlayTip>(null)

  const positionRef = useRef({
    top: 0,
    left: 0,
  })
  const [position, setPosition] = useState(positionRef.current)

  const mockInspectElement = (element?: HTMLElement | null) => {
    const overlayRect = overlayRef.current
    const overlayTip = overlayTipRef.current
    if (!(element && overlayRect && overlayTip)) return

    const boxSizing = getElementDimensions(element)
    const boundingRect = getBoundingBox(element)

    overlayRect.updateBound({
      boundingRect,
      boxSizing,
    })

    overlayTip.updateTip({
      title: 'div in <Card>',
      info: 'relative/path/to/packages/component.tsx',
      boundingRect,
      boxSizing,
    })
  }

  useEffect(() => {
    const element = elementRef.current
    assert(element)
    mockInspectElement(element)

    const subscriber = fromEvent<PointerEvent>(element, 'pointerdown').pipe(
      switchMap(down => {
        const start = positionRef.current
        return fromEvent<PointerEvent>(document, 'pointermove').pipe(
          map(move => ({
            x: move.clientX - down.clientX,
            y: move.clientY - down.clientY,
          })),
          map(movement => ({
            left: movement.x + start.left,
            top: movement.y + start.top,
          })),
          takeUntil(fromEvent(document, 'pointerup')),
        )
      }),
      tap(position => {
        setPosition(position)
        positionRef.current = position
        mockInspectElement(element)
      }),
    ).subscribe()

    return () => subscriber.unsubscribe()
  }, [])

  return (
    <div>
      <div
        ref={elementRef}
        className={clsx(
          `
            relative flex justify-center items-center
            m-4 p-2
            border border-slate-800 text-black
            select-none cursor-move
          `,
          itemSize === 'normal' && 'w-32 h-32',
          itemSize === 'full' && 'w-screen h-screen',
          itemSize === 'large' && 'w-[120vw] h-[120vw]',
        )}
        style={position}
      >
        <span>({position.top.toFixed(0)}, {position.left.toFixed(0)})</span>
      </div>

      <inspector-overlay-rect
        ref={overlayRef}
        class='pointer-events-none'
      />
      <inspector-overlay-tip
        ref={overlayTipRef}
      />
    </div>
  )
}

/**
 * https://storybook.js.org/docs/api/arg-types
 */
MoveableDragItem.argTypes = {
  itemSize: {
    name: 'Item Size',
    type: {
      name: 'enum',
      value: ['normal', 'full', 'large'],
      required: true,
    },
  },
}

// https://storybook.js.org/docs/writing-stories/args
MoveableDragItem.args = {
  itemSize: 'normal',
}


export const OverlayRectAndTipItems = () => {
  const [active, setActive] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<InspectorOverlayRect>(null)
  const overlayTipRef = useRef<InspectorOverlayTip>(null)

  const mockInspectElement = (element?: HTMLElement | null) => {
    const overlayRect = overlayRef.current
    const overlayTip = overlayTipRef.current
    if (!(element && overlayRect && overlayTip)) return

    const boxSizing = getElementDimensions(element)
    const boundingRect = getBoundingBox(element)

    overlayRect.updateBound({
      boundingRect,
      boxSizing,
    })

    overlayTip.updateTip({
      title: 'div in <Card>',
      info: '/absolute/path/of/packages/inspector/src/Inspector/Overlays/Overlay.stories.tsx',
      boundingRect,
      boxSizing,
    })
  }

  useEffect(() => {
    const contentElement = contentRef.current
    mockInspectElement(contentElement)
  }, [])

  return (
    <Inspector
      active={active}
      onActiveChange={setActive}
    >
      <CardContainer className='w-96'>
        <CardHeader
          title='Overlay Elements Demo'
          description='show overlay elements without any interaction'
        />
        <CardContent>
          <div
            className='my-2 p-2'
            ref={contentRef}
          >
            Content article ...
          </div>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button
            variant='outline'
            onClick={() => setActive(false)}
          >
            Deactivate
          </Button>
          <Button
            onClick={() => setActive(true)}
          >
            Activate
          </Button>
        </CardFooter>
      </CardContainer>

      <inspector-overlay-rect
        ref={overlayRef}
      />
      <inspector-overlay-tip
        ref={overlayTipRef}
      />
    </Inspector>
  )
}


export const OverlayWithEntryElement = () => {
  const [active, setActive] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<InspectorOverlay>(null)

  useEffect(() => {
    const contentElement = contentRef.current
    overlayRef.current?.inspect({
      element: contentElement!,
      title: 'div in <Card>',
      info: '/absolute/path/of/packages/inspector/src/Inspector/Overlays/Overlay.stories.tsx',
      getBoxSizing: getElementDimensions,
      getBoundingRect: getBoundingBox,
    })
  }, [])

  return (
    <Inspector
      active={active}
      onActiveChange={setActive}
    >
      <CardContainer className='w-96'>
        <CardHeader
          title='Overlay Entry Element Demo'
          description='show overlay with entry element without any interaction'
        />
        <CardContent>
          <div
            className='my-2 p-2'
            ref={contentRef}
          >
            Content article ...
          </div>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button
            variant='outline'
            onClick={() => setActive(false)}
          >
            Deactivate
          </Button>
          <Button
            onClick={() => setActive(true)}
          >
            Activate
          </Button>
        </CardFooter>
      </CardContainer>

      <inspector-overlay
        ref={overlayRef}
      />
    </Inspector>
  )
}


export const OverlayHover = () => {
  const [active, setActive] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return

    const overlay = new Overlay()

    const stopCallback = setupPointerListener({
      onPointerOver: ({ element }) => {
        const codeInfo = getElementCodeInfo(element)
        const relativePath = codeInfo?.relativePath
        const absolutePath = codeInfo?.absolutePath

        const { title } = getElementInspect(element)

        overlay.inspect({
          element,
          title,
          info: relativePath ?? absolutePath,
        })
      },
    })

    return () => {
      stopCallback()
      overlay.remove()
    }
  }, [active])

  return (
    <Inspector>
      <CardContainer className='w-96'>
        <CardHeader
          title='Overlay Hover Demo'
          description='control by Overlay class with Buttons ↓'
        />
        <CardContent>
          <div
            className='my-2 p-2'
            ref={contentRef}
          >
            Content article ...
          </div>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button
            variant='outline'
            onClick={() => setActive(false)}
          >
            Deactivate
          </Button>
          <Button
            onClick={() => setActive(true)}
          >
            Activate
          </Button>
        </CardFooter>
      </CardContainer>
    </Inspector>
  )
}
