'use client'

import {
  useEffect,
  useRef,
  type ReactNode,
} from 'react'
import type { Fiber } from 'react-reconciler'
import {
  gotoServerEditor,
} from './utils'
import {
  useHotkeyToggle,
  useEffectEvent,
  useRecordPointer,
  useControlledActive,
} from './hooks'
import { domInspectAgent } from './DOMInspectAgent'
import type {
  CodeInfo,
  InspectAgent,
} from './types'


const defaultInspectAgents: InspectAgent<HTMLElement>[] = [
  domInspectAgent,
]

/**
 * the inspect meta info that is sent to the callback when an element is hovered over or clicked.
 */
export interface InspectParams<Element = HTMLElement> {
  /** hover / click event target dom element */
  element: Element;
  /** nearest named react component fiber for dom element */
  fiber?: Fiber;
  /** source file line / column / path info for react component */
  codeInfo?: CodeInfo;
  /** react component name for dom element */
  name?: string;
}

export interface InspectorProps<Element> {
  /**
   * Inspector Component toggle hotkeys,
   *
   * supported keys see: https://github.com/jaywcjlove/hotkeys#supported-keys
   *
   * @default - `['Ctrl', 'Shift', 'Command', 'C']` on macOS, `['Ctrl', 'Shift', 'Alt', 'C']` on other platforms.
   *
   * Setting `keys={null}` explicitly means that disable use hotkeys to trigger it.
   */
  keys?: string[] | null;

  /**
   * If setting `active` prop, the Inspector will be a Controlled React Component,
   *   you need to control the `true`/`false` state to active the Inspector.
   *
   * If not setting `active` prop, this only a Uncontrolled component that
   *   will activate/deactivate by hotkeys.
   *
   * > add in version `v2.0.0`
   */
  active?: boolean;

  /**
   * Trigger by `active` state change, includes:
   * - hotkeys toggle, before activate/deactivate Inspector
   * - Escape / Click, before deactivate Inspector
   *
   * will NOT trigger by `active` prop change.
   *
   * > add in version `v2.0.0`
   */
  onActiveChange?: (active: boolean) => void;

  /**
   * Whether to disable all behavior include hotkeys listening or trigger,
   * will automatically disable in production environment by default.
   *
   * @default `true` if `NODE_ENV` is 'production', otherwise is `false`.
   * > add in version `v2.0.0`
   */
  disable?: boolean;

  /**
   * Agent for get inspection info in different React renderer with user interaction
   * @default [domInspectAgent]
   */
  inspectAgents?: InspectAgent<Element>[];

  /**
   * Callback when left-clicking on an element, with ensuring the source code info is found.
   *
   * By setting the `onInspectElement` prop, the default behavior ("open local IDE") will be disabled,
   *   that means you want to manually handle the source info, or handle how to goto editor by yourself.
   *
   * You can also use builtin `gotoServerEditor` utils in `onInspectElement` to get origin behavior ("open local IDE on server-side"),
   *   it looks like:
   *
   * ```tsx
   * import { Inspector, gotoServerEditor } from 'react-dev-inspector'
   *
   * <Inspector
   *   onInspectElement={({ codeInfo }) => {
   *     ...; // your processing
   *     gotoServerEditor(codeInfo)
   *   }}
   * </Inspector>
   * ```
   *
   * > add in version `v2.0.0`
   */
  onInspectElement?: (params: Required<InspectParams<Element>>) => void;

  /** Callback when hovering on an element */
  onHoverElement?: (params: InspectParams<Element>) => void;

  /**
   * Callback when left-clicking on an element.
   */
  onClickElement?: (params: InspectParams<Element>) => void;

  /** any children of react nodes */
  children?: ReactNode;

  /**
   * Whether to disable default behavior: "launch to local IDE when click on component".
   *
   * @default `true` if setting `onInspectElement` callback, otherwise is `false`.
   * @deprecated please use `onInspectElement` callback instead for fully custom controlling.
   */
  disableLaunchEditor?: boolean;
}

export const Inspector = function<Element>(props: InspectorProps<Element>) {
  const {
    keys,
    onHoverElement,
    onClickElement,
    onInspectElement,
    active: controlledActive,
    onActiveChange,
    inspectAgents = defaultInspectAgents as InspectAgent<Element>[],
    disableLaunchEditor,
    disable = (process.env.NODE_ENV !== 'development'),
    children,
  } = props

  const pointerRef = useRecordPointer({ disable })
  const agentRef = useRef<InspectAgent<Element>>()

  useEffect(() => {
    return () => {
      agentRef.current = undefined
      inspectAgents.forEach(agent => {
        agent.deactivate()
      })
    }
  }, [inspectAgents])

  const startInspecting = useEffectEvent(() => {
    inspectAgents.forEach(agent => {
      agent.activate({
        pointer: pointerRef.current,
        onHover: (params) => handleHoverElement({
          agent,
          ...params,
        }),
        onClick: (params) => handleClickElement({
          agent,
          ...params,
        }),
      })
    })
  })

  const stopInspecting = useEffectEvent(() => {
    inspectAgents.forEach(agent => {
      agent.deactivate()
    })
  })

  const handleHoverElement = useEffectEvent(({ agent, element, pointer }: {
    agent: InspectAgent<Element>;
    element: Element;
    pointer: PointerEvent;
  }) => {
    if (agent !== agentRef.current) {
      agentRef.current?.removeIndicate()
      agentRef.current = agent
    }

    const nameInfo = agent.getNameInfo(element)
    agent.indicate({
      element,
      pointer,
      name: nameInfo?.name,
      title: nameInfo?.title,
    })

    if (!onHoverElement) {
      return
    }

    const codeInfo = agent.findCodeInfo(element)
    const fiber = (element instanceof HTMLElement)
      ? domInspectAgent.getElementFiber(element)
      : undefined

    onHoverElement({
      element,
      fiber,
      codeInfo,
      name: nameInfo?.name ?? '',
    })
  })

  const handleClickElement = useEffectEvent(({ agent, element, pointer }: {
    agent: InspectAgent<Element>;
    element: Element;
    pointer: PointerEvent;
  }) => {
    if (agent !== agentRef.current) {
      return
    }

    agent.removeIndicate()

    const nameInfo = agent.getNameInfo(element)
    const codeInfo = agent.findCodeInfo(element)
    const fiber = (element instanceof HTMLElement)
      ? domInspectAgent.getElementFiber(element)
      : undefined

    deactivate()

    onClickElement?.({
      element,
      fiber,
      codeInfo,
      name: nameInfo?.name,
    })

    if (fiber && codeInfo) {
      onInspectElement?.({
        element,
        fiber,
        codeInfo,
        name: nameInfo?.name ?? '',
      })
    }

    if (codeInfo && !onInspectElement && !disableLaunchEditor) {
      gotoServerEditor(codeInfo)
    }
  })

  const { activate, deactivate, activeRef } = useControlledActive({
    controlledActive,
    onActiveChange,
    onActivate: startInspecting,
    onDeactivate: stopInspecting,
    disable,
  })

  useHotkeyToggle({
    keys,
    disable,
    activeRef,
    deactivate,
    activate,
  })

  return (<>{children ?? null}</>)
}
