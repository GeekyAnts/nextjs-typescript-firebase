const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
  withSass({
    cssModules: true,

    sassLoaderOptions: {
      includePaths: [require('path').resolve(__dirname, 'node_modules')]
    },

    webpack(config, options) {
      return config;
    }
  })
);
