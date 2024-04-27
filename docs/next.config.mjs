import nextra from 'nextra'

const isDev = process.env.NODE_ENV !== 'production'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
})

export default withNextra({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  distDir: 'dist',
  images: {
    /**
     * Error: Image Optimization using Next.js' default loader is not compatible with `next export`.
     * https://nextjs.org/docs/messages/export-image-api
     */
    unoptimized: true,
  },
  webpack(config) {
    const allowedSvgRegex = /components\/icons\/.+\.svg$/

    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test('.svg'),
    )
    fileLoaderRule.exclude = allowedSvgRegex

    config.module.rules.push({
      test: allowedSvgRegex,
      use: ['@svgr/webpack'],
    })
    return config
  },
  experimental: {
    // use swc for dev, only use babel for build prod online demo
    forceSwcTransforms: isDev,
  },
})

export const runtime = 'nodejs'
