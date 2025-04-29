import type { EnvConfig } from './types'

const config: EnvConfig = {
  // 环境标识
  ENV: 'production',
  // 应用标题
  APP_TITLE: 'Vue3示例应用',
  // API基础路径
  API_BASE_URL: 'https://api.example.com',
  // 是否启用调试工具
  ENABLE_DEBUG: false,
  // 是否启用日志
  ENABLE_LOGGER: false,
  // 其他生产环境特定配置
  // ...
}

export default config 