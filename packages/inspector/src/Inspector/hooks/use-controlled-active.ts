
import {
  useState,
  useEffect,
  useRef,
  type MutableRefObject,
} from 'react'
import hotkeys from 'hotkeys-js'
import {
  useLayoutEffect,
} from './use-layout-effect'
import {
  useEffectEvent,
} from './use-effect-event'

/**
 * sync prop to state as a controlled component
 */
export const useControlledActive = ({
  controlledActive,
  onActiveChange,
  onActivate,
  onDeactivate,
  disable,
}: {
  controlledActive?: boolean;
  onActiveChange?: (active: boolean) => void;
  onActivate?: () => void;
  onDeactivate?: () => void;
  disable?: boolean;
}): {
    activate: () => void;
    deactivate: () => void;
    isActive: boolean;
    activeRef: MutableRefObject<boolean>;
  } => {
  const [isActive, setActive] = useState<boolean>(controlledActive ?? false)
  const activeRef = useRef<boolean>(isActive)

  // sync state as controlled component
  useLayoutEffect(() => {
    if (controlledActive !== undefined) {
      activeRef.current = controlledActive
      setActive(activeRef.current)
    }
  }, [controlledActive])

  const activate = useEffectEvent(() => {
    onActiveChange?.(true)
    if (controlledActive === undefined) {
      activeRef.current = true
      setActive(activeRef.current)
    }
  })

  const deactivate = useEffectEvent(() => {
    onActiveChange?.(false)
    if (controlledActive === undefined) {
      activeRef.current = false
      setActive(activeRef.current)
    }
  })

  const handelEscapeToCancel = useEffectEvent((event?: KeyboardEvent) => {
    event?.preventDefault()
    event?.stopImmediatePropagation()
    deactivate?.()
  })

  const handleActivate = useEffectEvent(() => {
    onActivate?.()

    hotkeys(
      'esc',
      {
        capture: true,
        element: window as any as HTMLElement,
      },
      handelEscapeToCancel,
    )
  })

  const handleDeactivate = useEffectEvent(() => {
    hotkeys.unbind('esc', handelEscapeToCancel)

    onDeactivate?.()
  })

  useEffect(() => {
    return () => {
      hotkeys.unbind('esc', handelEscapeToCancel)
    }
  }, [])

  // trigger activate/deactivate next render after state change
  useEffect(() => {
    (isActive && !disable)
      ? handleActivate()
      : handleDeactivate()

    return onDeactivate
  }, [isActive, disable])


  return {
    activate,
    deactivate,
    isActive,
    activeRef,
  }
}
