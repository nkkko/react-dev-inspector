import type { Preview } from '@storybook/react'
import './tailwind.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    // https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
}

export default preview
