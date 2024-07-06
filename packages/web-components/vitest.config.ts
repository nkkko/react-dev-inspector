import { defineConfig } from 'vitest/config'

export default defineConfig({
  // https://vitest.dev/config
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
