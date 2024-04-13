
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

export const _InspectPanel: StoryFn<{
  layerCount: number;
}> = (props) => {
  const onClickItem = action('ElementItem.onClickItem')
  const onClickEditor = action('ElementItem.onClickEditor')
  const onHoverItem = action('ElementItem.onHoverItem')

  function *generator(): ElementInfoGenerator {
    for (let i = 0; i < 100; i++) {
      const index = i + 1
      yield demoItems[index % demoItems.length]
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
