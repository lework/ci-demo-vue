import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    // 根据环境变量配置 - 只暴露必要的环境变量
    define: {
      // 只暴露必要的环境变量，而不是整个env对象
      'import.meta.env.MODE': JSON.stringify(mode),
      'import.meta.env.PROD': mode === 'production',
      'import.meta.env.DEV': mode !== 'production',
      'import.meta.env.SSR': false,
      // 可以添加其他需要的环境变量
      ...(env.VITE_APP_TITLE ? { 'import.meta.env.VITE_APP_TITLE': JSON.stringify(env.VITE_APP_TITLE) } : {})
    },
    // 服务器配置
    server: {
      port: mode === 'development' ? 3000 : undefined,
      host: true,
      open: true
    },
    // 构建配置
    build: {
      // 根据不同环境配置不同的输出目录
      outDir: mode === 'test' ? 'dist-test' : 'dist',
      // 生产环境移除console
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production'
        }
      }
    }
  }
})
