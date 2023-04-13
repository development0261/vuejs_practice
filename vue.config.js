const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api/Product_Saved_page': {
        target: 'http://localhost:8080/',
        ws: true,
        changeOrigin: true
      },
    }
  }
})
