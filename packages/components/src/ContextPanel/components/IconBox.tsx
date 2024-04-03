import {
  mergeProps,
  type JSX,
} from 'solid-js'
import { cn } from '#utils'


export interface IconBoxProps {
  class?: string;
  style?: JSX.CSSProperties;
  children?: JSX.Element;
  /** default is 28 */
  boxSize?: number;
  /** default is 14 */
  size?: number;
  onClick?: (e: MouseEvent) => void;
  forwardProps?: JSX.HTMLAttributes<HTMLDivElement>;
}

export const IconBox = (props: IconBoxProps) => {
  return (
    <div
      {...props.forwardProps}
      class={cn(
        `
          iconbox flex flex-none items-center justify-center rounded
          size-7 text-sm leading-none
        `,
        props.onClick && 'cursor-pointer hover:bg-gray-100 active:bg-gray-200',
        props.class,
      )}
      style={{
        width: props.boxSize && `${props.boxSize}px`,
        height: props.boxSize && `${props.boxSize}px`,
        'font-size': props.size && `${props.size}px`,
        ...props.style,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}
