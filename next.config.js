const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/services-health',
        permanent: false,
      },
    ]
  },
  compiler: { styledComponents: true },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-components': path.resolve('./node_modules/styled-components/'),
    }

    return config
  },
}

module.exports = nextConfig
