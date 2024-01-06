import type { Preview } from 'storybook-solidjs'
import './tailwind.css'

const preview: Preview = {
  parameters: {
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
