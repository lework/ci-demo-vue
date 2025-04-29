import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig((env) => {
  // 获取vite配置
  const config = typeof viteConfig === 'function' ? viteConfig(env) : viteConfig
  
  return mergeConfig(
    config,
    {
      test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/**'],
        root: fileURLToPath(new URL('./', import.meta.url)),
      },
    }
  )
})
