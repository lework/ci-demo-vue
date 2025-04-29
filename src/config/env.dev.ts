import type { EnvConfig } from './types'

const config: EnvConfig = {
  // 环境标识
  ENV: 'development',
  // 应用标题
  APP_TITLE: 'Vue3示例应用(开发环境)',
  // API基础路径
  API_BASE_URL: 'http://dev-api.example.com',
  // 是否启用调试工具
  ENABLE_DEBUG: true,
  // 是否启用日志
  ENABLE_LOGGER: true,
  // 其他开发环境特定配置
  // ...
}

export default config 