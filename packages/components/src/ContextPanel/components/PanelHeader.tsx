import type { Component, ComponentProps, JSX, ValidComponent } from 'solid-js'
import { cn, css } from '#utils'

export interface PanelHeaderProps {
  class?: string | undefined;
  children?: JSX.Element;
}

export const PanelHeader = (props: PanelHeaderProps) => {
  return (
    <>
      <div
        class={cn(
          'inspector-panel-header',
          `
            flex items-center justify-between flex-none
            w-full h-10 px-2 border-b gap-1
          `,
          props.class,
        )}
      >
        {props.children}
      </div>
      <style>
        {styles}
      </style>
    </>
  )
}

const styles = css`
  .inspector-panel-header {
  }
`
