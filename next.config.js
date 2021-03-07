const isProd = process.env.NODE_ENV === 'production';
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  basePath: '',
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pageExtensions: ['tsx', 'ts', 'js', 'jsx', 'md', 'mdx'],
        pwa: {
          register: true,
          disable: !isProd,
          dest: 'public',
          runtimeCaching,
        },
      },
    ],
  ],
  nextConfig
);
