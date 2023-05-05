'use client'

import {
  useState,
  useEffect,
  useRef,
  type FC,
  type PropsWithChildren,
} from 'react'
import type { Fiber } from 'react-reconciler'
import hotkeys from 'hotkeys-js'
import {
  setupHighlighter,
  getElementCodeInfo,
  gotoServerEditor,
  getElementInspect,
  type CodeInfo,
} from './utils'
import {
  useLayoutEffect,
  useEffectEvent,
  useMousePosition,
} from './hooks'
import { Overlay } from './Overlay'


/**
 * the inspect meta info that is sent to the callback when an element is hovered over or clicked.
 */
export interface InspectParams {
  /** hover / click event target dom element */
  element: HTMLElement;
  /** nearest named react component fiber for dom element */
  fiber?: Fiber;
  /** source file line / column / path info for react component */
  codeInfo?: CodeInfo;
  /** react component name for dom element */
  name?: string;
}


const defaultHotkeys = ['control', 'shift', 'command', 'c']

export interface InspectorProps {
  /**
   * Inspector Component toggle hotkeys,
   *
   * supported keys see: https://github.com/jaywcjlove/hotkeys#supported-keys
   *
   * @default - ['control', 'shift', 'command', 'c']
   *
   * Setting keys={null} explicitly means that NO hotkeys will trigger it.
   */
  keys?: string[] | null;

  /** Callback when hovering on an element */
  onHoverElement?: (params: InspectParams) => void;

  /**
   * Callback when left-clicking on an element.
   */
  onClickElement?: (params: InspectParams) => void;

  /**
   * callback when left-clicking on an element, with ensuring the source code info is found.
   *
   * By setting the `onInspectElement` prop, the `disableLaunchEditor` will automatically default to `true`,
   *   that means you want to manually handle the source info and goto editor by yourself.
   */
  onInspectElement?: (params: Required<InspectParams>) => void;

  /**
   * If setting `active` prop, the Inspector will be a Controlled React Component,
   *   you need to control the `true`/`false` state to active the Inspector.
   *
   * If not setting `active` prop, this only a Uncontrolled component that
   *   will activate/deactivate by hotkeys.
   */
  active?: boolean;

  /**
   * Trigger by `active` state change, includes:
   * - hotkeys toggle, before activate/deactivate Inspector
   * - Escape / Click, before deactivate Inspector
   *
   * will NOT trigger by `active` prop change.
   */
  onActiveChange?: (active: boolean) => void;

  /**
   * Whether to disable default behavior: "launch to local IDE when click on component".
   *
   * @default `true` if setting `onInspectElement` callback, otherwise `false`.
   */
  disableLaunchEditor?: boolean;
}

export const Inspector: FC<PropsWithChildren<InspectorProps>> = (props) => {
  const {
    keys,
    onHoverElement,
    onClickElement,
    onInspectElement,
    active: controlledActive,
    onActiveChange,
    disableLaunchEditor,
    children,
  } = props

  const [isActive, setActive] = useState<boolean>(controlledActive ?? false)

  // sync state as controlled component
  useLayoutEffect(() => {
    if (controlledActive !== undefined) {
      setActive(controlledActive)
    }
  }, [controlledActive])

  useEffect(() => {
    isActive
      ? startInspect()
      : stopInspect()
  }, [isActive])

  // hotkeys-js params need string
  const hotkey: string | null = keys === null
    ? null
    : (keys ?? defaultHotkeys).join('+')

  /** inspector tooltip overlay */
  const overlayRef = useRef<Overlay>()
  const mouseRef = useMousePosition()

  const activate = useEffectEvent(() => {
    onActiveChange?.(true)
    if (controlledActive === undefined) {
      setActive(true)
    }
  })

  const deactivate = useEffectEvent(() => {
    onActiveChange?.(false)
    if (controlledActive === undefined) {
      setActive(false)
    }
  })

  const startInspect = useEffectEvent(() => {
    const overlay = new Overlay()
    overlayRef.current = overlay

    hotkeys(`esc`, deactivate)

    const stopCallback = setupHighlighter({
      onPointerOver: handleHoverElement,
      onClick: handleClickElement,
    })

    overlay.setRemoveCallback(stopCallback)

    // inspect element immediately at mouse point
    const initPoint = mouseRef.current
    const initElement = document.elementFromPoint(initPoint.x, initPoint.y)
    if (initElement) handleHoverElement(initElement as HTMLElement)
  })

  const stopInspect = useEffectEvent(() => {
    overlayRef.current?.remove()
    overlayRef.current = undefined

    hotkeys.unbind(`esc`, deactivate)
  })

  const handleHoverElement = useEffectEvent((element: HTMLElement) => {
    const overlay = overlayRef.current

    const codeInfo = getElementCodeInfo(element)
    const relativePath = codeInfo?.relativePath
    const absolutePath = codeInfo?.absolutePath

    const { fiber, name, title } = getElementInspect(element)

    overlay?.inspect?.([element], title, relativePath ?? absolutePath)

    onHoverElement?.({
      element,
      fiber,
      codeInfo,
      name,
    })
  })

  const handleClickElement = useEffectEvent((element: HTMLElement) => {
    deactivate()

    const codeInfo = getElementCodeInfo(element)
    const { fiber, name } = getElementInspect(element)

    onClickElement?.({
      element,
      fiber,
      codeInfo,
      name,
    })

    if (fiber && codeInfo) {
      onInspectElement?.({
        element,
        fiber,
        codeInfo,
        name: name!,
      })

      if (!onInspectElement && !disableLaunchEditor) {
        gotoServerEditor(codeInfo)
      }
    }
  })

  useEffect(() => {
    if (!hotkey) return

    const handleHotKeys = () => {
      overlayRef.current
        ? deactivate()
        : activate()
    }

    // https://github.com/jaywcjlove/hotkeys
    hotkeys(`${hotkey}`, handleHotKeys)

    return () => {
      hotkeys.unbind(`${hotkey}`, handleHotKeys)
    }
  }, [hotkey])

  return (<>{children ?? null}</>)
}
