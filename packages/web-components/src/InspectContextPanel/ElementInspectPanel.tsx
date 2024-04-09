import {
  type JSX,
  Show,
  For,
  createSignal,
  createEffect,
  onMount,
} from 'solid-js'
import {
  Settings,
  Layers,
} from 'lucide-solid'
import {
  IconBox,
  LazyList,
  Layer,
  Tabs,
  ElementItem,
  ELEMENT_ITEM_HEIGHT,
  type ElementItemProps,
  type ItemInfo,
  PanelContainer,
  PanelBody,
  PanelHeader,
  Tooltip,
} from '#components'
import { styled } from '#utils'
import {
  type ElementInfoGenerator,
  type ElementInfoGeneratorGetter,
  type EditorType,
  ElementChainMode,
} from './types'


export interface ElementInspectPanelProps<Item extends ItemInfo = ItemInfo> {
  elementChainMode: ElementChainMode;
  onChangeChainMode: (mode: ElementChainMode) => void;
  layers: ElementInfoGeneratorGetter<Item>[];
  onClickItem?: (item: Item) => void;
  onClickEditor?: (params: {
    item: Item;
    editor: EditorType;
  }) => void | Promise<void>;
  onHoverItem?: (item: Item | null) => void;
  toSettingsPanel?: () => void;
}

export const ElementInspectPanel = <Item extends ItemInfo = ItemInfo>(props: ElementInspectPanelProps<Item>) => {
  const [selectedLayer, setSelectedLayer] = createSignal(1)
  const [listElement, setListElement] = createSignal<JSX.Element | null>(null)

  const elementChainGenerator = () => {
    const layer = props.layers[selectedLayer()]
    return layer?.() ?? []
  }

  function *getListItem(elementChain: ElementInfoGenerator<Item>): LazyList.ItemGenerator<ElementItemProps<Item>> {
    let index = 1
    for (const item of elementChain) {
      yield {
        props: {
          index,
          item,
          onClickItem: props.onClickItem,
          onClickEditor: props.onClickEditor,
          onHoverItem: props.onHoverItem,
        },
        height: ELEMENT_ITEM_HEIGHT,
      }

      index += 1
    }
  }

  const getListElement = () => {
    const generator = getListItem(elementChainGenerator())

    return (
      <LazyList.List
        ElementItem={ElementItem}
        // due to reactive will loose in `generator` props which will be transform to a getter
        generator={generator}
        onPointerLeave={() => props.onHoverItem?.(null)}
      />
    )
  }

  onMount(() => {
    setListElement(getListElement())
  })

  createEffect(() => {
    setListElement(getListElement())
  })

  return (
    <PanelContainer>
      <PanelHeader>
        <Tabs.Tabs
          value={props.elementChainMode}
          onChange={(tab) => props.onChangeChainMode(tab as ElementChainMode)}
        >
          <Tabs.List>
            <Tooltip
              content={'List elements as render hierarchy. (root at bottom)'}
              rootProps={{
                placement: 'top-start',
                shift: -40,
                openDelay: 500,
              }}
            >
              <Tabs.Trigger
                value={ElementChainMode.Render}
              >
                Render Chain
              </Tabs.Trigger>
            </Tooltip>
            <Tooltip
              content={'List elements as source-code hierarchy. (root at bottom)'}
              rootProps={{
                placement: 'top-start',
                shift: -40,
                openDelay: 500,
              }}
            >
              <Tabs.Trigger
                value={ElementChainMode.Source}
              >
                Source Chain
              </Tabs.Trigger>
            </Tooltip>
          </Tabs.List>
        </Tabs.Tabs>

        <Show
          when={props.toSettingsPanel}
        >
          <div class={`flex items-center justify-between py-1 gap-2`}>
            <S.VerticalDivider />

            <Tooltip
              content={'Goto Settings Panel'}
              rootProps={{
                openDelay: 500,
              }}
            >
              <IconBox
                onClick={props.toSettingsPanel}
              >
                <Settings size={16} strokeWidth={1.5} />
              </IconBox>
            </Tooltip>
          </div>
        </Show>
      </PanelHeader>

      <PanelBody>
        <Show
          when={props.layers.length > 1}
        >
          <Layer.LayerSide class={`pb-1`}>
            <Layer.Title>
              <Tooltip
                content='Layers'
              >
                <Layers size={16} strokeWidth={1} />
              </Tooltip>
            </Layer.Title>
            <Layer.Divider />
            <Layer.LayerList>
              <For each={props.layers}>
                {(_, index) => {
                  const isSelected = () => selectedLayer() === index()
                  return (
                    <Layer.LayerItem
                      aria-selected={isSelected()}
                    >
                      <S.LayerButton
                        forwardProps={{
                          'aria-selected': isSelected(),
                        }}
                        onClick={() => {
                          if (isSelected()) return
                          setSelectedLayer(index())
                        }}
                      >
                        <Layer.LayerItemText>
                          #{index() + 1}
                        </Layer.LayerItemText>
                      </S.LayerButton>
                    </Layer.LayerItem>
                  )
                }}
              </For>
              <Layer.LayerItem
                class={`h-10`}
              />
            </Layer.LayerList>
          </Layer.LayerSide>
        </Show>

        {listElement()}
      </PanelBody>
    </PanelContainer>
  )
}

const S = {
  VerticalDivider: styled.div({
    class: `w-[1px] h-5 bg-border flex-none`,
  }),

  LayerButton: styled(IconBox, {
    class: `
      aria-selected:text-text-0 aria-selected:bg-bg-active-2
      [&:hover>*]:opacity-100 [&>*]:aria-selected:opacity-100
    `,
  }),
}
