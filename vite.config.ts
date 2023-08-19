import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // 导入时想要省略的扩展名列表
  },
  // optimizeDeps: {
  //   force: false // 强制进行依赖预构建
  // },
  css: {
    // CSS 预处理器
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('src/assets/styles/global.less')}";`,
        },
      },
    },
  },
  plugins: [vue()],
})
