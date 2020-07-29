const { resolve, getComponentEntries } = require('./utils');
const public = require('./public');

module.exports = {
  // @wang 创建输出路径
  outputDir: resolve('lib'),
  configureWebpack: {
    entry: {
      // 添加多入口打包
      ...getComponentEntries('components'),
    },
    // 出口规范
    output: {
      filename: '[name]/index.js',
      libraryTarget: 'commonjs2',
      libraryExport: 'default',
      library: 'Elegance'
    },
    resolve: public.resolve,
  },
  css: {
    sourceMap: true,
    extract: {
      filename: '[name]/style.css',
    },
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/norm.scss";`
      }
    }
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
    config.plugins.delete('copy');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.plugins.delete('html');
    config.plugins.delete('hmr');
    config.entryPoints.delete('app');
    config.module
      .rule('fonts')
      .use('url-loader')
      .tap((option) => {
        option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
        return option
      })
  }
}
