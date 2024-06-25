const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const strapiUrl = process.env.NEXT_PUBLIC_URL_STRAPI
const url = new URL(strapiUrl)
const imageDomain = url.hostname

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: imageDomain,
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    },
    {
      test: /\.(glsl|frag|vert)$/,
        use: 'raw-loader',
    })
    return config
  },
})
