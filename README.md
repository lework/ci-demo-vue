# Vue 3 多环境配置示例

这是一个 Vue 3 + TypeScript + Vite 项目，展示了如何实现多环境配置（开发环境、测试环境和生产环境）。

## 环境配置

项目支持三种环境：

- **开发环境 (development)**: 本地开发使用
- **测试环境 (test)**: 用于测试服务器部署
- **生产环境 (production)**: 用于生产服务器部署

## 项目设置

```sh
# 安装依赖
npm install

# 启动开发环境服务器
npm run dev

# 启动测试环境服务器
npm run dev:test

# 启动生产环境服务器
npm run dev:prod

# 构建开发环境版本
npm run build:dev

# 构建测试环境版本
npm run build:test

# 构建生产环境版本
npm run build
# 或
npm run build:prod
```

## 环境配置使用方法

在代码中，您可以通过导入配置模块来访问当前环境的配置：

```typescript
import config from '@/config'

// 使用配置
console.log(config.API_BASE_URL) // 当前环境的API基础路径
console.log(config.APP_TITLE) // 当前环境的应用标题
```

## 环境配置文件

环境配置文件位于 `src/config` 目录下：

- `env.dev.ts`: 开发环境配置
- `env.test.ts`: 测试环境配置
- `env.prod.ts`: 生产环境配置
- `index.ts`: 配置入口文件，根据当前环境导出对应配置
- `types.ts`: 配置类型定义

## 添加新的配置项

如需添加新的配置项，按照以下步骤操作：

1. 在 `types.ts` 中更新 `EnvConfig` 接口
2. 在各环境配置文件中添加对应的配置项

## Vite 配置

多环境配置在 `vite.config.ts` 中实现，使用 Vite 的 `defineConfig` 和 `loadEnv` 功能。

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
