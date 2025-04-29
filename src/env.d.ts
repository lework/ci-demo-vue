/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: string;
  readonly VITE_APP_TITLE: string;
  // 添加更多环境变量
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 