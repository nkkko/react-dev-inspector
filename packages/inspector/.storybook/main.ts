import type { StorybookConfig } from '@storybook/react-vite'
import type { Plugin } from 'vite'
import { inspectorServer } from '@react-dev-inspector/vite-plugin'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config, _options) {
    const plugin = inspectorServer() as Plugin
    config.plugins?.unshift(plugin)
    return config
  },
}
export default config
