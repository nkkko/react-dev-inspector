import type { Component, ComponentProps, JSX, ValidComponent } from 'solid-js'
import { cn, css } from '#utils'

export interface PanelContainerProps {
  class?: string | undefined;
  children?: JSX.Element;
  style?: JSX.CSSProperties;
}

export const PanelContainer = (props: PanelContainerProps) => {
  return (
    <>
      <div
        class={cn(
          'inspector-panel-container',
          `
            flex flex-col items-stretch justify-stretch
            max-w-96 max-h-[400px] w-[300px] h-96
            bg-bg-1  text-text-1 text-sm
          `,
          props.class,
        )}
        style={props.style}
      >
        {props.children}
      </div>
      <style>
        {styles}
      </style>
    </>
  )
}


export interface PanelBodyProps {
  class?: string | undefined;
  children?: JSX.Element;
  style?: JSX.CSSProperties | string;
}

export const PanelBody = (props: PanelBodyProps) => {
  return (
    <div
      class={cn(
        'inspector-panel-body',
        `
          flex items-stretch justify-stretch flex-auto
          min-h-0 min-w-0
        `,
        props.class,
      )}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

const styles = css`
  .inspector-panel-container {
  }
`
