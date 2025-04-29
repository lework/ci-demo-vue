import type { EnvConfig } from './types'

const config: EnvConfig = {
  // 环境标识
  ENV: 'test',
  // 应用标题
  APP_TITLE: 'Vue3示例应用(测试环境)',
  // API基础路径
  API_BASE_URL: 'http://test-api.example.com',
  // 是否启用调试工具
  ENABLE_DEBUG: true,
  // 是否启用日志
  ENABLE_LOGGER: true,
  // 其他测试环境特定配置
  // ...
}

export default config 