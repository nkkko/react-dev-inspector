
import type { StoryFn, Meta } from 'storybook-solidjs'
import { action } from '@storybook/addon-actions'
import {
  type ElementItemProps,
} from '#components'
import {
  InspectPanel,
} from './InspectPanel'
import {
  type ElementInfoGenerator,
} from './types'


// https://storybook.js.org/docs/react/writing-stories/introduction#component-story-format
export default {
  title: 'InspectPanel',
} satisfies Meta

const demoItems: ElementItemProps['item'][] = [
  {
    title: `ComponentName`,
    tags: [],
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
    subtitle: 'relative/short/path',
    tags: ['Memo', 'Forward', 'Lazy', 'Lazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzy'],
  },
  {
    title: '',
    subtitle: 'relative/short/path',
    tags: ['Memo', 'Forward', 'Lazy', 'Lazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzy'],
  },
  {
    title: `div`,
    subtitle: 'loooooooong/relative/path/to/packages/component.tsx',
    tags: ['Memo'],
  },
  {
    title: `LoooooooooooooooooooooooooooooooooooooooooongComponentName`,
    subtitle: 'loooooooong/relative/path/to/packages/component.tsx',
    tags: ['Memo'],
  },
  {
    title: `LoooooooooooooooooooooooooooooooooooooooooongComponentName`,
    subtitle: 'loooooooong/relative/path/to/packages/component.tsx',
    tags: [],
  },
  {
    title: `LoooooooooooooooooooooooooooooooooooooooooongComponentName`,
    subtitle: 'loooooooong/relative/path/to/packages/component.tsx',
    tags: ['Memo', 'Forward', 'Lazy', 'Lazzzzzzzzzzzzzzzzzzy'],
  },
  {
    title: `div in <Card>`,
    subtitle: 'relative/path/to/packages/component.tsx',
    tags: ['Memo'],
  },
  {
    title: `div`,
  },
  {
    title: '',
  },
  {
    title: '',
    tags: [
      {
        label: 'Tag1',
        background: 'hsl(var(--error))',
      },
      {
        label: 'Tag2',
        background: 'hsl(var(--error))',
      },
    ],
  },
]

export const _InspectPanel: StoryFn<{
  layerCount: number;
}> = (props) => {
  const onClickItem = action('ElementItem.onClickItem')
  const onClickEditor = action('ElementItem.onClickEditor')
  const onHoverItem = action('ElementItem.onHoverItem')

  function *generator(): ElementInfoGenerator {
    for (let i = 0; i < 100; i++) {
      yield demoItems[i % demoItems.length]
    }
  }

  const renderLayers = () => {
    return Array.from({ length: props.layerCount }, () => generator)
  }

  return (
    <InspectPanel
      renderLayers={renderLayers()}
      sourceLayers={[]}
      onHoverItem={onHoverItem}
      onClickItem={onClickItem}
      onClickEditor={onClickEditor}
    />
  )
}

_InspectPanel.args = {
  layerCount: 20,
}
