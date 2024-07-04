const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi-app-x7qnw.ondigitalocean.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'outstafford.nyc3.digitaloceanspaces.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'outstafford.com',
        pathname: '/**',
      }
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
