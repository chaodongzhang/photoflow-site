# Repository Guidelines

##永远使用中文输出

## 环境与版本
- Node.js 20（CI 使用，建议本地一致）
- Next.js 15（App Router）、React 19、TypeScript 5
- Tailwind CSS 4（通过 `@tailwindcss/postcss`）

## Project Structure & Module Organization
- App 代码位于 `src/app/`（App Router）。每个路由目录保持自包含：`page.tsx`、`layout.tsx`、相关资源。
- 全局样式：`src/app/globals.css`；公共资源（图片、图标、robots 等）置于 `public/`。
- 配置：`next.config.ts`、`tsconfig.json`、`eslint.config.mjs`、`postcss.config.mjs`。
- 构建产物：`.next/`（已忽略），不要提交任何生成文件。
- 路径别名：`@/* -> src/*`（见 `tsconfig.json` 与 `vitest.config.ts`）。

## Build, Test, and Development Commands
- `npm run dev` — 使用 Turbopack 启动本地开发服务（`http://localhost:3000`）。
- `npm run build` — 编译生产构建（当前脚本包含 `--turbopack`）。
- `npm run start` — 以生产模式启动服务。
- `npm run lint` — 运行 ESLint（`next/core-web-vitals` + TypeScript 规则）。
- `npm run test` / `npm run test:watch` — 运行 Vitest 单测（JSDOM 环境，含 Testing Library）。
- `npm run test:e2e` — 运行 Playwright E2E（自动以 `npm run dev` 启动/复用本地服务）。

## Coding Style & Naming Conventions
- 语言：TypeScript + React 19，Next.js 15（App Router）。
- 缩进 2 空格；使用分号；引号风格保持项目内一致（单引号或双引号均可，但需统一）。
- 组件：PascalCase（如 `HeroBanner.tsx`）；函数/变量：camelCase。
- 路由遵循 Next.js 约定：`src/app/(group)/feature/page.tsx`。
- 样式使用 Tailwind CSS 4，优先使用工具类，尽量减少内联样式。
- Lint：遵循 `eslint.config.mjs` 的扩展与忽略规则；修复问题或以注释说明原因。

## 模块模板

新增路由页面（推荐结构）

- 路径：`src/app/(group)/feature/page.tsx` 与同级 `layout.tsx`
- 示例：

```tsx
// src/app/(marketing)/pricing/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing – PhotoFlow',
  description: 'Choose a plan that fits your workflow.',
};

export default function PricingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <section className="container mx-auto px-6 py-10">{children}</section>;
}
```

```tsx
// src/app/(marketing)/pricing/page.tsx
export default function PricingPage() {
  return (
    <div className="prose dark:prose-invert">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="text-neutral-600">Choose a plan that fits your workflow.</p>
    </div>
  );
}
```

新增组件（含单测）

- 路径：`src/components/ComponentName.tsx` 与 `src/components/ComponentName.test.tsx`
- 示例：

```tsx
// src/components/Callout.tsx
'use client';

type CalloutProps = {
  title: string;
  children?: React.ReactNode;
};

export default function Callout({ title, children }: CalloutProps) {
  return (
    <div className="rounded-md border border-neutral-200 dark:border-neutral-800 p-4">
      <div className="text-sm font-semibold mb-2">{title}</div>
      {children ? <div className="text-sm text-neutral-600">{children}</div> : null}
    </div>
  );
}
```

```tsx
// src/components/Callout.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Callout from './Callout';

describe('Callout', () => {
  it('renders title and optional content', () => {
    render(<Callout title="Heads up">Content</Callout>);
    expect(screen.getByText('Heads up')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
```

## Testing Guidelines
- 已配置测试：
  - 单元测试：Vitest（`jsdom` 环境），`setupTests.ts` 集成 `@testing-library/jest-dom/vitest`。
  - 端到端测试：Playwright（配置见 `playwright.config.ts`，会复用/启动本地开发服务器）。
- 测试组织：
  - 单测文件紧邻源码：`*.test.ts`、`*.test.tsx`（例如 `src/components/Button.test.tsx`）。
  - E2E 测试位于 `e2e/` 目录（例如 `e2e/home.spec.ts`）。
- 运行建议：本地首次运行 E2E 前可执行 `npx playwright install --with-deps` 安装浏览器。
- 覆盖策略：优先覆盖关键业务逻辑与核心 UI 交互。

## Commit & Pull Request Guidelines
- 提交遵循 Conventional Commits：`feat:`、`fix:`、`chore:` 等。示例：`feat: add gallery grid layout`。
- 提交尽量原子化并聚焦；需要时在提交信息正文中补充动机与说明。
- PR 需包含清晰描述、关联 Issue（如 `Closes #123`）、带有视觉改动的截图、列出破坏性更改与配置/环境变量变更。
- 在申请评审前，确保 `npm run lint` 与 `npm run build` 均通过；必要时补充/更新测试。

## Security & Configuration Tips
- 不要提交任何密钥/凭据。环境变量放置于 `.env.local`；暴露给客户端的变量必须以 `NEXT_PUBLIC_` 前缀命名。
- 验证外部输入并在渲染前清理任何用户生成内容。

## Agent-Specific Instructions
- 作用域：整个仓库。变更需最小化、聚焦需求，避免无关重构。
- 遵守本指南进行修改；不要提交构建产物或任何敏感信息。
- 构建脚本当前使用 `--turbopack`：除非需求明确涉及构建策略调整，请保持脚本一致并在文档中注明差异。
