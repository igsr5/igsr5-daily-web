const withTM = require('next-transpile-modules')(['core']);
const CompressionPlugin = require('compression-webpack-plugin');
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};

const moduleExports = withTM({
  webpack(config) {
    const plugins = [...config.plugins, new CompressionPlugin()];
    return { ...config, plugins };
  },
  sentry: {
    hideSourceMaps: true,
  },
  ...nextConfig,
});

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
