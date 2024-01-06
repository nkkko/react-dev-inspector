import type { JSX, Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"

import { clsx } from 'clsx'

const Card: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      class={clsx("rounded-lg border bg-card text-card-foreground shadow-sm", local.class)}
      {...others}
    />
  )
}

const CardHeader: Component<ComponentProps<"div"> & {
  title?: JSX.Element;
  description?: JSX.Element;
}> = (props) => {
  const [local, others] = splitProps(props, ["class", "children", "title", "description"])
  return (
    <div
      class={clsx("flex flex-col space-y-1.5 p-6", local.class)}
      {...others}
    >
      {local.title && (
        <CardTitle>
          {local.title}
        </CardTitle>
      )}
      {local.description && (
        <CardDescription>
          {local.description}
        </CardDescription>
      )}
      {local.children}
    </div>
  )
}

const CardTitle: Component<ComponentProps<"h3">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <h3 class={clsx("text-lg font-semibold leading-none tracking-tight", local.class)} {...others} />
  )
}

const CardDescription: Component<ComponentProps<"p">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <p class={clsx("text-sm text-muted-foreground", local.class)} {...others} />
}

const CardContent: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <div class={clsx("p-6 pt-0", local.class)} {...others} />
}

const CardFooter: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <div class={clsx("flex items-center p-6 pt-0", local.class)} {...others} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
