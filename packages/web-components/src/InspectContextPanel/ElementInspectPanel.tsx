import type { Component, ComponentProps, JSX, ValidComponent } from 'solid-js'
import { cn } from '#utils'


export interface InspectPanelProps {
  class?: string | undefined;
  children?: JSX.Element;
}

export const InspectPanel = (props: InspectPanelProps) => {

  return (
    <>
      <style type="postcss">
        @import '../tailwind.css';
      </style>
      <div
        class={cn(
          'inspector-context-panel',
          `overflow-hidden rounded-md border bg-card shadow-xl`,
          props.class,
        )}
      >
        {props.children}
      </div>
    </>
  )
}
