const path = require('path')
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')

const isDev = process.env.NODE_ENV !== 'production'

const nextOfflineConfig = {
  transformManifest: manifest => ['/'].concat(manifest),
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  }
}

const nextConfig = {
  webpack(config, options) {
    config.resolve.alias['~'] = path.join(__dirname, '/')
    config.node = {
      fs: "empty"
    }
    return config
  }
}

if (!isDev) {
  module.exports = withPlugins([
    [withCSS, withOffline(nextOfflineConfig)]
  ], nextConfig)
} else {
  module.exports = withPlugins([
    [withCSS]
  ], nextConfig)
}

