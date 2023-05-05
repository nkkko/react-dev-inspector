import {
  forwardRef,
  createElement,
  type FC,
  type ForwardRefRenderFunction,
  type ComponentType,
} from 'react'
import { clsx } from 'clsx'
import { tags } from './tags'


interface StyleDefinedParams {
  className: string;
  /** using for compiler */
  displayName?: string;
}

interface StyledComponentCreator {
  <T, P extends { className?: string }>(
    Component: ForwardRefRenderFunction<T, P> | ComponentType<P>,
    params: StyleDefinedParams,
  ): typeof Component;

  <Tag extends keyof JSX.IntrinsicElements>(
    Component: Tag,
    params: StyleDefinedParams,
  ): FC<JSX.IntrinsicElements[Tag]>;
}


type StyledTagCreator = {
  [Tag in keyof JSX.IntrinsicElements]: (params: StyleDefinedParams) => FC<JSX.IntrinsicElements[Tag]>;
}


interface StyledCreator extends StyledComponentCreator, StyledTagCreator {}


export const twStyled = (
  <T, P extends { className?: string }, Tag extends keyof JSX.IntrinsicElements>(
    Component: ForwardRefRenderFunction<T, P> | ComponentType<P> | Tag,
    {
      className: defaultClassName,
      displayName,
    }: StyleDefinedParams,
  ): (
    (typeof Component) extends Tag
      ? FC<JSX.IntrinsicElements[Tag]>
      : typeof Component
  ) => {
    const StyledComponent = forwardRef<T, P>((props, ref) => {
      const { className } = props
      return createElement(
        Component,
        {
          ...props,
          ref,
          className: clsx(defaultClassName, className),
        },
      )
    }) as any

    StyledComponent.displayName = displayName ?? `TwStyled(${
      typeof Component === 'string'
        ? Component
        : Component.displayName || Component.name || 'Component'
    })`

    return StyledComponent
  }
) as StyledCreator


tags.forEach(tag => {
  twStyled[tag] = ((params: StyleDefinedParams) => twStyled(tag, params)) as any
})

export {
  twStyled as styled,
}
