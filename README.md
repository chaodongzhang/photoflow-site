**PhotoFlow 网站**

- 基于 `Next.js 15`（App Router）+ `React 19` + `TypeScript`
- 样式使用 `Tailwind CSS 4`（经由 `@tailwindcss/postcss`）
- 已配置 `ESLint 9`、`Vitest`（单测）、`Playwright`（E2E）与 GitHub Actions CI

重要：项目规范以 `AGENTS.md` 为唯一可信来源（代码结构、命名、测试组织、提交与 PR 规范等）。本 README 仅作为上手与操作指南。

## 快速开始

1) 安装依赖

```bash
npm ci  # 或 npm install
```

2) 启动本地开发（Turbopack）

```bash
npm run dev
```

访问 `http://localhost:3000` 查看页面。修改 `src/app/page.tsx` 将会热更新。

## 目录结构

- `src/app/`：App Router 路由代码（`layout.tsx`、`page.tsx`、`globals.css`、`favicon.ico`）
- `src/components/`：通用组件与其单测（例如 `Brand.tsx` / `Brand.test.tsx`）
- `public/`：静态资源（SVG 等）
- 配置：`next.config.ts`、`tsconfig.json`、`eslint.config.mjs`、`postcss.config.mjs`
- 测试：`vitest.config.ts`、`setupTests.ts`、`playwright.config.ts`、`e2e/`
- CI：`.github/workflows/ci.yml`

## 可用脚本

- `npm run dev`：启动开发服务（`http://localhost:3000`，Turbopack）
- `npm run build`：编译生产构建（当前使用 `--turbopack`）
- `npm run start`：启动生产构建服务
- `npm run lint`：运行 ESLint（`next/core-web-vitals` + TypeScript）
- `npm run test`：运行单元测试（Vitest）
- `npm run test:watch`：监听模式运行 Vitest
- `npm run test:e2e`：运行 Playwright E2E 测试

## 环境变量

示例见 `.env.example`：

```
NEXT_PUBLIC_SITE_NAME=PhotoFlow
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

- 本地敏感信息请放在 `.env.local`，不要提交到版本库
- 需要暴露到客户端的变量必须以 `NEXT_PUBLIC_` 前缀命名

## 技术栈概览（只读）

- Next.js 15（App Router）、React 19、TypeScript 5
- Tailwind CSS 4（PostCSS 插件 `@tailwindcss/postcss`）
- ESLint 9、Vitest、Playwright、GitHub Actions CI

## 开发规范与模板

- 规范总览：请阅读并遵循 `AGENTS.md`（规范权威来源）。
- 模块模板：`AGENTS.md` 的“模块模板”章节提供“新增路由页面（layout/page）”与“新增组件 + 单测”的示例，可直接复制使用。

## 测试

单元测试（Vitest）：

- 配置见 `vitest.config.ts`，使用 `jsdom` 环境，`setupTests.ts` 集成 `@testing-library/jest-dom/vitest`
- 示例：`src/components/Brand.test.tsx`

运行：

```bash
npm run test      # 一次性运行
npm run test:watch
```

端到端测试（Playwright）：

- 配置见 `playwright.config.ts`（自动以 `npm run dev` 启动 WebServer）
- 示例：`e2e/home.spec.ts`

运行：

```bash
npm run test:e2e
```

## CI / CD

GitHub Actions 工作流位于 `.github/workflows/ci.yml`：

- 作业一：Lint → Build → Vitest
- 作业二：安装 Playwright 浏览器 → 运行 E2E

Node 版本使用 `20`，安装依赖采用 `npm ci` 并启用缓存。

## 构建与部署

本地构建：

```bash
npm run build
npm run start
```

注意：当前生产构建脚本使用 `--turbopack`。若追求稳定性，可考虑将生产构建改为标准 `next build`（不带 Turbopack）。

部署：

- 可使用任意支持 Node.js 的平台（如 Vercel、Netlify、自托管）
- 需提供 `process.env` 环境变量（推荐使用 `.env` / 平台环境变量配置）

## 贡献与规范

- 提交信息遵循 Conventional Commits：`feat:`、`fix:`、`chore:` 等
- 在提交 PR 前确保 `npm run lint` 与 `npm run build` 均通过
- 遵循 `AGENTS.md` 中的项目结构与样式规范

## 常见问题

- 开发时端口被占用：修改 `package.json` 脚本或关闭占用进程
- E2E 无法运行：先执行 `npx playwright install --with-deps`（CI 已自动安装）
- Tailwind 未生效：确认 `postcss.config.mjs` 存在 `"@tailwindcss/postcss"` 插件，且 `globals.css` 已引入
