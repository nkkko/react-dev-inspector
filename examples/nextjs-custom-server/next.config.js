// @ts-check
//
// https://nextjs.org/docs/api-reference/next.config.js/introduction

const isDev = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isDev ? '/' : '/nextjs-custom-server',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
