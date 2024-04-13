import {
  type JSX,
} from 'solid-js'
import { cn } from '#utils'
import {
  DragHandlers,
} from './DragHandlers'
import {
  type DragPanelParams,
  useResizeAndDrag,
} from './hooks'


export interface ContextPanelProps extends DragPanelParams {
  class?: string | undefined;
  children?: JSX.Element;
  style?: JSX.CSSProperties;
}

export const ContextPanel = (props: ContextPanelProps) => {
  const {
    setContainerRef,
    positionStyle,
    resizeOrDragTrigger,
  } = useResizeAndDrag(props)

  return (
    <div
      class={cn(
        `
        inspector-context-panel
        relative top-0 left-0
        flex items-stretch justify-stretch
        overflow-hidden rounded-md border bg-card shadow-xl
        *:data-[dragging]:pointer-events-none data-[dragging]:cursor-move
        *:data-[resizing]:pointer-events-none
        `,
        props.class,
      )}
      ref={setContainerRef}
      style={positionStyle()}
      onPointerDown={resizeOrDragTrigger}
      data-draggable-block
    >
      {props.children}

      <DragHandlers />
    </div>
  )
}
