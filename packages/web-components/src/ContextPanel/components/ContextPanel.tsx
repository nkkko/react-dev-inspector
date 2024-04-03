import type { Component, ComponentProps, JSX, ValidComponent } from 'solid-js'
import { cn } from '#utils'

import {
  Trigger as ContextMenuTrigger,
  Portal as ContextMenuPortal,
  Sub as ContextMenuSub,
  Group as ContextMenuGroup,
  RadioGroup as ContextMenuRadioGroup,
} from '@kobalte/core/context-menu'


// import {} from './styles'

export interface ContextPanelProps {
  class?: string | undefined;
  children?: JSX.Element;
}

export const ContextPanel = (props: ContextPanelProps) => {

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
