import type { EnvConfig } from './types'
import devConfig from './env.dev'
import testConfig from './env.test'
import prodConfig from './env.prod'

// 获取当前环境
const env = import.meta.env.MODE || 'development'

// 根据当前环境返回对应的配置
const EnvConfig: Record<string, EnvConfig> = {
  development: devConfig,
  test: testConfig,
  production: prodConfig
}

export default EnvConfig[env as keyof typeof EnvConfig] 