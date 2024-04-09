import type { JSX } from 'solid-js'
import { cn } from '#utils'


// import {} from './styles'

export interface ContextPanelProps {
  class?: string | undefined;
  children?: JSX.Element;
}

export const ContextPanel = (props: ContextPanelProps) => {
  return (
    <div
      class={cn(
        'inspector-context-panel',
        `overflow-hidden rounded-md border bg-card shadow-xl`,
        props.class,
      )}
    >
      {props.children}
    </div>
  )
}
