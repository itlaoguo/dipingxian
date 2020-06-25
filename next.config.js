const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const withImages = require('next-images');
// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {
    file;
  };
}

module.exports = withLess(
  withCss(
    withImages({
      // distDir: 'build',
      //etag 生成
      generateEtags: false,
      exportPathMap: async function (defaultPathMap) {
        console.log(defaultPathMap);
        return {
          '/': { page: '/' },
          '/news': { page: '/news' },
          '/middle': { page: '/middle' },
          '/goods': { page: '/news/new-details' },
        };
      },
      devIndicators: {
        autoPrerender: false,
      },
      // 页面内容缓存配置
      onDemandEntries: {
        // 页面在内存中缓存的时间（单位：秒）
        maxInactiveAge: 25 * 1000,
        // 同时缓存几个页面
        pagesBufferLength: 2,
      },
      compress: true,
      // 在pages目录下哪种文件后缀会被认为是页面
      pageExtensions: ['mdx', 'jsx', 'js'],
      generateBuildId: async () => {
        // 自定义发布ID
        // For example get the latest git commit hash here
        return 'v1';
      },
      // assetPrefix: '/{reponame}',
    })
  )
);

// module.exports = withLess({
//   lessLoaderOptions: {
//     javascriptEnabled: true,
//   },
// });
