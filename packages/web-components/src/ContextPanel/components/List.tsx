import {
  onMount,
  type JSX,
  For,
  batch,
  Component,
} from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import { cn, css } from '#utils'


export interface ElementItemInfo<Data> {
  props: Data;
  height: number;
}

export type ItemGenerator<ItemData> = Generator<ElementItemInfo<ItemData>, void, unknown>

export interface ListProps<ItemData extends {}>  {
  class?: string | undefined;
  style?: JSX.CSSProperties;
  forwardProps?: JSX.HTMLAttributes<HTMLDivElement>;
  onPointerLeave?: JSX.EventHandler<HTMLDivElement, PointerEvent>;
  generator: ItemGenerator<ItemData> ;
  ElementItem: Component<ItemData>;
}

export const List = <ItemData extends {}>(props: ListProps<ItemData>): JSX.Element => {
  const [store, setStore] = createStore({
    items: [] as ElementItemInfo<ItemData>[],
    loadDone: false,
    isLoading: false,
  })

  const setLoadDone = (value: boolean) => setStore('loadDone', value)
  const setIsLoading = (value: boolean) => setStore('isLoading', value)

  let containerRef: HTMLDivElement | undefined
  let itemsHeight = 0

  const loadItems = (count: number = 1) => {
    const newItems: ElementItemInfo<ItemData>[] = []
    for (let i = 0; i < count; i++) {
      const result = props.generator.next()
      if (result.done) {
        setLoadDone(true)
        break
      }
      newItems.push(result.value)
      itemsHeight += result.value.height
    }

    setStore(produce(store => {
      store.items.push(...newItems)
      store.isLoading = false
    }))
  }

  const onScroll = () => {
    if (!containerRef || store.isLoading || store.loadDone) return
    const { scrollTop, clientHeight, scrollHeight } = containerRef
    const scrollBottom = scrollTop + clientHeight
    const bottomTriggerToScroll = 30

    setIsLoading(true)

    batch(() => {
      while (
        !store.loadDone
        && (
          scrollBottom >= Math.max(itemsHeight, scrollHeight) - Math.max(clientHeight * 0.2, bottomTriggerToScroll)
        )
      ) {
        loadItems()
      }
    })

    setIsLoading(false)
  }

  onMount(async () => {
    if (containerRef) {
      await Promise.resolve()
      const initialHeight = containerRef.clientHeight
      batch(() => {
        do {
          loadItems()
        } while (itemsHeight < (2 * initialHeight) && !store.loadDone)
      })
    }
  })

  return (
    <div
      {...props.forwardProps}
      ref={containerRef}
      class={cn(
        `
          h-full overflow-y-auto flex flex-col items-stretch justify-start
          gap-1 p-1.5 pb-10
          [content-visibility:auto] [contain-intrinsic-size:auto_none] [flex:1_1_100%]
        `,
        props.class,
      )}
      style={props.style}
      onScroll={onScroll}
      onPointerLeave={props.onPointerLeave}
    >
      <For each={store.items}>
        {(item) => (
          <ListItem>
            <props.ElementItem {...item.props} />
          </ListItem>
        )}
      </For>
    </div>
  )
}

export interface ListItemProps {
  class?: string | undefined;
  children?: JSX.Element;
  style?: string;
}

export const ListItem = (props: ListItemProps) => {
  return (
    <div
      class={cn(
        props.class,
      )}
      style={css`
        ${props.style || ''}
        contain: layout paint;
        display: flex;
        align-items: stretch;
        justify-content: stretch;
      `}
    >
      {props.children}
    </div>
  )
}
