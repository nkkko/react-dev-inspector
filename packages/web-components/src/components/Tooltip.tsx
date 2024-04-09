import {
  type JSX,
} from 'solid-js'
import * as TooltipPrimitive from '@kobalte/core/tooltip'

import { cn } from '#utils'
import {
  useShadowRootContext,
} from './hooks'


export interface TooltipProps {
  content?: JSX.Element;
  children?: JSX.Element;
  rootProps?: TooltipPrimitive.TooltipRootProps;
  contentProps?: Parameters<typeof TooltipPrimitive.Content>[0];
}

export const Tooltip = (props: TooltipProps) => {
  const shadowRoot = useShadowRootContext()

  // https://kobalte.dev/docs/core/components/tooltip#tooltip-1
  return (
    <TooltipPrimitive.Root
      openDelay={200}
      closeDelay={100}
      placement='top'
      gutter={4}
      flip={'top bottom right left'}
      {...props.rootProps}
    >
      <TooltipPrimitive.Trigger
        as='div'
      >
        {props.children}
      </TooltipPrimitive.Trigger>

      <TooltipPrimitive.Portal
        mount={shadowRoot.host}
      >
        <TooltipPrimitive.Content
          {...props.contentProps}
          class={cn(
            `
            z-50 origin-[var(--kb-popover-content-transform-origin)] overflow-hidden rounded-md border bg-popover
            px-3 py-1.5 text-sm text-popover-foreground shadow-xl animate-in fade-in-0 zoom-in-95
            `,
            props.contentProps?.class,
          )}
        >
          {props.content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
}
