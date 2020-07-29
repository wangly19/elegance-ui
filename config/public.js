const { resolve } = require('./utils')
module.exports = {
  resolve: {
      extensions: ['.js', 'ts', '.vue', '.json'],
      alias: {
          // 设置路径代理
          '@': resolve('src'),
          'components': resolve('components'),
          'elegance-ui': resolve('components/index.ts')
      }
  }
}
