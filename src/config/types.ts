export interface EnvConfig {
  // 环境标识
  ENV: 'development' | 'test' | 'production';
  // 应用标题
  APP_TITLE: string;
  // API基础路径
  API_BASE_URL: string;
  // 是否启用调试工具
  ENABLE_DEBUG: boolean;
  // 是否启用日志
  ENABLE_LOGGER: boolean;
  // 可以根据需要添加更多配置项
  [key: string]: any;
} 