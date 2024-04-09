import type { Preview } from 'storybook-solidjs'
import { withThemeByClassName } from '@storybook/addon-themes'
import './tailwind.css'
import './storybook.css'

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
  decorators: [
    // https://github.com/storybookjs/storybook/blob/next/code/addons/themes/docs/api.md#withthemebyclassname
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
        default: '',
      },
      defaultTheme: 'default',
    }),
  ],
}

export default preview
