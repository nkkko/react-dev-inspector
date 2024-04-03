import { action } from '@storybook/addon-actions'
import { withActions } from '@storybook/addon-actions/decorator'
import { createSignal, Show, Switch, Match, For } from "solid-js"
import type { StoryFn, Meta } from 'storybook-solidjs'
// import { Tabs } from "@kobalte/core/tabs"
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
// } from '@stories/components'
import {
  Settings,
  Layers,
} from 'lucide-solid'
import {
  ContextPanel,
} from './ContextPanel'
import {
  PanelContainer,
  PanelBody,
} from './PanelContainer'
import {
  PanelHeader,
} from './PanelHeader'
import {
  IconBox,
} from './IconBox'
import {
  List,
  type ItemGenerator,
} from './List'
import {
  ElementItem,
  type ElementItemProps,
} from './ElementItem'
import * as Tabs from './Tabs'
import * as Layer from './LayerSide'

// https://storybook.js.org/docs/react/writing-stories/introduction#component-story-format
export default {
  title: 'ContextPanel',
  decorators: [withActions],
} satisfies Meta


export enum ChainMode {
  Render = 'Render',
  Source = 'Source',
}

const demoItems: ElementItemProps['item'][] = [
  {
    title: `ComponentName`,
  },
  {
    title: `ComponentName`,
    subtitle: 'relative/short/path',
    tags: ['Memo'],
  },
  {
    title: `ComponentName`,
    subtitle: 'relative/short/path',
    tags: ['Memo', 'Forward'],
  },
  {
    title: `div`,
  },
  {
    title: `div`,
    subtitle: 'loooooooong/relative/path/to/packages/component.tsx',
    tags: ['Memo'],
  },
  {
    title: `LoooooooooooooooongComponentName`,
    subtitle: 'loooooooong/relative/path/to/packages/component.tsx',
    tags: ['Memo'],
  },
  {
    title: `div in <Card>`,
    subtitle: 'relative/path/to/packages/component.tsx',
    tags: ['Memo'],
  },
]

export const PanelDemo: StoryFn = () => {
	const [selectedTab, setSelectedTab] = createSignal(ChainMode.Render)
  const [selectedLayer, setSelectedLayer] = createSignal(0)

  const onTabChange = action('TabChange')
  const onClickItem = action('ElementItem.onClickItem')
  const onClickEditor = action('ElementItem.onClickEditor')
  const onHoverItem = action('ElementItem.onHoverItem')
  const onLayerChange = action('LayerItem.onChange')

  function *generator(): ItemGenerator<ElementItemProps> {
    for (let i = 0; i < 100; i++) {
      const index = i + 1
      yield {
        props: {
          index,
          item: demoItems[index % demoItems.length],
          onClickItem,
          onClickEditor,
          onHoverItem,
        },
        // `h-12` in ElementItem
        height: 48,
      }
    }
  }

  const items = generator()

  return (
    <ContextPanel>
      <PanelContainer>
        <PanelHeader>
          <Tabs.Tabs
            value={selectedTab()}
            onChange={(tab) => {
              setSelectedTab(tab as ChainMode)
              onTabChange(tab)
            }}
            class={`flex flex-col flex-grow items-stretch justify-stretch h-full`}
          >
            <Tabs.List>
              <Tabs.Trigger
                value={ChainMode.Render}
              >
                Render Chain
              </Tabs.Trigger>
              <Tabs.Trigger
                value={ChainMode.Source}
              >
                Source Chain
              </Tabs.Trigger>
            </Tabs.List>

          </Tabs.Tabs>

          <div class={`w-[1px] h-5 bg-border flex-none`} />

          <IconBox
            onClick={action('Settings.onClick')}
          >
            <Settings size={16} strokeWidth={1.5} />
          </IconBox>
        </PanelHeader>

        <PanelBody>
          <Switch>
            <Match
              when={selectedTab() === ChainMode.Render}
            >
              <Layer.LayerSide
                class={`pb-1`}
              >
                <Layer.Title>
                  <Layers size={16} strokeWidth={1} />
                </Layer.Title>
                <Layer.Divider />
                  <Layer.LayerList>
                    <For each={Array.from({ length: 20 }, (_,i) => i)}>
                      {index => {
                        const isSelected = () => selectedLayer() === index
                        return (
                          <Layer.LayerItem
                            aria-selected={isSelected()}
                          >
                            <IconBox
                              class={`
                                aria-selected:text-text-0 aria-selected:bg-gray-100
                                [&:hover>*]:opacity-100 [&>*]:aria-selected:opacity-100
                              `}
                              forwardProps={{
                                'aria-selected': isSelected(),
                              }}
                              onClick={() => {
                                if (isSelected()) return
                                setSelectedLayer(index)
                                onLayerChange(index)
                              }}
                            >
                              <Layer.LayerItemText>
                                #{index}
                              </Layer.LayerItemText>
                            </IconBox>
                          </Layer.LayerItem>
                        )
                      }}
                    </For>
                    <Layer.LayerItem
                      class={`h-10`}
                    />
                </Layer.LayerList>
              </Layer.LayerSide>

              <List
                generator={items}
                ElementItem={ElementItem}
                onPointerLeave={() => onHoverItem(null)}
              />
            </Match>
          </Switch>
        </PanelBody>
      </PanelContainer>
    </ContextPanel>
  )
}

