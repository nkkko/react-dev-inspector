export type StopFunction = () => void

export function setupPointerListener(
  handlers: {
    onPointerOver?: (params: { element: HTMLElement; pointer: PointerEvent }) => void;
    onClick?: (params: { element: HTMLElement; pointer: PointerEvent }) => void;
  },
): StopFunction {
  function startInspectingNative() {
    registerListeners(window)
  }

  function registerListeners(element?: HTMLElement | Window) {
    // This plug-in may run in non-DOM environments (e.g. React Native).
    if (element && typeof element.addEventListener === 'function') {
      element.addEventListener('click', onClick, { capture: true })
      element.addEventListener('mousedown', onMouseEvent, { capture: true })
      element.addEventListener('mouseover', onMouseEvent, { capture: true })
      element.addEventListener('mouseup', onMouseEvent, { capture: true })
      element.addEventListener('pointerdown', onPointerDown, { capture: true })
      element.addEventListener('pointerover', onPointerOver, { capture: true })
      element.addEventListener('pointerup', onPointerUp, { capture: true })
    }
  }

  function stopInspectingNative() {
    removeListeners(window)
  }

  function removeListeners(element?: HTMLElement | Window) {
    // This plug-in may run in non-DOM environments (e.g. React Native).
    if (element && typeof element.removeEventListener === 'function') {
      element.removeEventListener('click', onClick, { capture: true })
      element.removeEventListener('mousedown', onMouseEvent, { capture: true })
      element.removeEventListener('mouseover', onMouseEvent, { capture: true })
      element.removeEventListener('mouseup', onMouseEvent, { capture: true })
      element.removeEventListener('pointerdown', onPointerDown, { capture: true })
      element.removeEventListener('pointerover', onPointerOver, { capture: true })
      element.removeEventListener('pointerup', onPointerUp, { capture: true })
    }
  }

  function onClick(event: Event) {
    event.preventDefault()
    event.stopPropagation()

    const target = event.target as HTMLElement
    handlers.onClick?.({
      element: target,
      pointer: event as PointerEvent,
    })
  }

  function onMouseEvent(event: Event) {
    event.preventDefault()
    event.stopPropagation()
  }

  function onPointerDown(event: Event) {
    event.preventDefault()
    event.stopPropagation()
  }

  function onPointerOver(event: Event) {
    event.preventDefault()
    event.stopPropagation()

    const target = event.target as HTMLElement

    handlers.onPointerOver?.({
      element: target,
      pointer: event as PointerEvent,
    })
  }

  function onPointerUp(event: Event) {
    event.preventDefault()
    event.stopPropagation()
  }

  startInspectingNative()

  return stopInspectingNative
}
