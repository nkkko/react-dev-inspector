import { action } from '@storybook/addon-actions'
import { createSignal, Show, Switch, Match, For } from "solid-js"
import type { StoryFn, Meta } from 'storybook-solidjs'
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
  type ElementItemProps,
  ContextPanel,
  PanelContainer,
  PanelBody,
  PanelHeader,
} from '#components'


// https://storybook.js.org/docs/react/writing-stories/introduction#component-story-format
export default {
  title: 'InspectPanel',
} satisfies Meta
