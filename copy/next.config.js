const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {
    file;
  };
}

module.exports = withLess(
  withCss({
    distDir: 'build',
    generateEtags: false,
    exportPathMap: async function (defaultPathMap) {
      console.log(defaultPathMap);
      return {
        '/': { page: '/' },
        '/news': { page: '/news' },
        '/middle': { page: '/middle' },
      };
    },
    generateBuildId: async () => {
      // For example get the latest git commit hash here
      return 'v1';
    },
  })
);

// module.exports = withLess({
//   lessLoaderOptions: {
//     javascriptEnabled: true,
//   },
// });
