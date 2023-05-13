// @ts-check
//
// https://nextjs.org/docs/api-reference/next.config.js/introduction

const isDev = process.env.NODE_ENV !== 'production'
const isStackBlitz = process.env.SHELL === '/bin/jsh'
const publicPath = isDev ? '/' : '/nextjs-custom-server/'

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  assetPrefix: publicPath,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // use swc for dev, only use babel for build prod online demo
    forceSwcTransforms: (isDev && !isStackBlitz),
  },
}
