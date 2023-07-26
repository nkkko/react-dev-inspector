
import { useState, useRef, useEffect } from 'react'
import type { Meta } from '@storybook/react'
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
  setupListener,
  getElementCodeInfo,
  getElementInspect,
} from '../utils'
import {
  getElementDimensions,
  getNestedBoundingClientRect,
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


export const OverlayTips = () => {
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
    ]


    // Set the positions for each tip
    positions.forEach((position, index) => {
      const rect = rects[index]
      const tip = tips[index]

      const boundingRect: Rect = {
        ...position,
        width: itemSize,
        height: itemSize,
        right: position.left + itemSize,
        bottom: position.top + itemSize,
      }

      const boxSizing: BoxSizing = {
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
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
    </Inspector>
  )
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
    const boundingRect = getNestedBoundingClientRect(element)

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

    const stopCallback = setupListener({
      onPointerOver: (element) => {
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
