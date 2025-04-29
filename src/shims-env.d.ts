// 声明环境模块
declare module './config/env.dev' {
  import type { EnvConfig } from './config/types';
  const config: EnvConfig;
  export default config;
}

declare module './config/env.test' {
  import type { EnvConfig } from './config/types';
  const config: EnvConfig;
  export default config;
}

declare module './config/env.prod' {
  import type { EnvConfig } from './config/types';
  const config: EnvConfig;
  export default config;
}

declare module '@/config' {
  import type { EnvConfig } from './config/types';
  const config: EnvConfig;
  export default config;
} 