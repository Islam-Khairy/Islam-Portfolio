const path = require('path');

const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    serverActions: true,
  },
  webpack(config, options) {
    // Add rule to handle .spline files
    config.module.rules.push({
      test: /\.spline$/,
      type: 'asset/resource', // This will automatically handle .spline files as static assets
    });

    return config;
  },
};

module.exports = nextConfig;
