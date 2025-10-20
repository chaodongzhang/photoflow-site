# 🧭 PRD — PhotoFlow Website v1.0

## 1️⃣ 项目概述
**产品名称**：PhotoFlow  
**站点类型**：营销型 Landing Page  
**核心目标**：  
- 展示产品概念与视觉风格  
- 收集早期用户邮箱  
- 引导 Beta/预售转化  

**上线平台**：Vercel  
**域名**：`https://gophotoflow.app`  
**架构**：Next.js (App Router) + TailwindCSS + TypeScript  
**国际化**：中 / 英 双语切换（基于 `next-intl`）  
**部署策略**：主域名（app），子域名可用于文档或后续博客扩展  

---

## 2️⃣ 整体结构与模块顺序
| 顺序 | 模块 | 目标 | 文件/组件 |
|------|------|------|------------|
| 1 | Hero | 品牌识别 + 首屏吸引 | `/components/Hero.tsx` |
| 2 | SubscribeForm | 首屏转化 | `/components/SubscribeForm.tsx` |
| 3 | Gallery | 展示调色能力 | `/components/Gallery.tsx` |
| 4 | Features | 说明核心功能差异 | `/components/FeatureCard.tsx` |
| 5 | Pricing | 预售引导 | `/components/Pricing.tsx` |
| 6 | Footer | 品牌与社交链接 | `/components/Footer.tsx` |

---

## 3️⃣ Hero 模块
**文件**：`components/Hero.tsx`  
**风格关键词**：Edward Hopper 式光影、极简、宁静  
**交互**：缓慢淡入，按钮轻微缩放反馈  

**内容规范**：
| 语言 | Title | Subtitle | CTA |
|------|--------|-----------|------|
| 英文 | Discover light. Shape tone. | The node-based RAW editor that makes your workflow invisible. | Join Beta → |
| 中文 | 发现光的结构，雕塑色的节奏。 | 节点式 RAW 编辑，让创作流动如光。 | 加入 Beta → |

**背景**：
- 图像：`/hero-hopper-light.webp`  
- 尺寸：2400×1350，≤120KB  
- 样式：低角度日落光线，暖橙与冷灰对比  

---

## 4️⃣ SubscribeForm 模块
**目标**：收集潜在用户邮箱  
**文件**：`components/SubscribeForm.tsx`  
**API 路径**：`/api/waitlist.ts` → Airtable / Supabase  
**表单字段**：
| 字段 | 类型 | 验证 |
|------|------|------|
| email | string | 必填，RFC2822 格式 |

**交互逻辑**：
1. 提交后按钮切换为“Submitting…”  
2. 成功后提示 “Check your email!”  
3. 若失败，提示 “Try again later.”

**表单示例**：
```tsx
<form action="/api/waitlist" method="POST">
  <input type="email" name="email" placeholder="yourname@example.com" required />
  <button type="submit">Get Free LUT + Beta Access</button>
</form>
```

---

## 5️⃣ Gallery 模块
**目标**：展示调色品质与节点编辑结果  
**文件**：`components/Gallery.tsx`  
**内容**：3 组 Before / After 滑块对比  

| 图像编号 | 描述 | 来源 | 文件名 |
|-----------|------|------|---------|
| #1 | Portra Film Look | 自拍 RAW → LUT 模拟 | `/gallery/portra.webp` |
| #2 | Cinematic Contrast | Fujifilm 模拟风格 | `/gallery/cine.webp` |
| #3 | Minimal Tone Curve | 自制节点 Demo | `/gallery/tonecurve.webp` |

**交互**：
- 使用 `react-compare-slider`  
- 鼠标拖动前后对比  

---

## 6️⃣ Features 模块
**目标**：以 3 个功能点明确 PhotoFlow 的差异化价值。  
**文件**：`components/FeatureCard.tsx`  
**布局**：3 列卡片，每个卡片含图标 + 标题 + 一句话说明。  

| Feature | 一句话说明 | 图标建议 |
|----------|-------------|----------|
| Node Editing | Drag, connect, and compose your workflow visually. | 🔗 |
| Non-destructive Workflow | Every edit is reversible — nothing lost, ever. | ♻️ |
| Film-grade Output | Built with GPU precision for cinematic looks. | 🎞️ |

**中文版本**：
| 功能 | 说明 |
|------|------|
| 节点编辑 | 拖拽与连接，让调色过程可视化。 |
| 非破坏流程 | 每一次调整都可回溯，永不丢失。 |
| 电影级输出 | GPU 精度处理，呈现电影质感。 |

---

## 7️⃣ Pricing 模块
**文件**：`components/Pricing.tsx`  
**目标**：引导预售转化，制造稀缺性。  

| 版本 | 价格 | 说明 |
|------|------|------|
| Early Access | $29 | 限前 1000 名，含终身 License |
| Regular | $59 | 正式版定价 |

CTA 按钮文案：  
> “Pre-order Now → Gumroad”

**注意**：
- 链接 Gumroad 预购页面（未来更新正式版时替换）
- 使用 `target="_blank"` 打开新标签  

---

## 8️⃣ Footer 模块
**文件**：`components/Footer.tsx`  
**内容**：
- 邮箱：`contact@gophotoflow.app`
- 社交：Twitter / Instagram / X / Product Hunt 链接  
- 版权：© 2025 PhotoFlow. All rights reserved.  

样式建议：  
灰底浅文字 + 极简网格布局。

---

## 9️⃣ SEO / Metadata
```tsx
export const metadata = {
  title: 'PhotoFlow | Node-based RAW Editor for macOS',
  description: 'Discover light. Shape tone. Drag, drop, film look in 3 seconds.',
  openGraph: {
    title: 'PhotoFlow - Node-based RAW Editor',
    description: 'Edward Hopper inspired visual editing.',
    images: ['/og-hopper-light.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@photoflow_app',
  },
}
```

---

## 🔟 性能与验证要求
| 检查项 | 目标 |
|--------|------|
| 首屏渲染时间 | ≤ 1.2s |
| Hero 背景图 | ≤ 120KB WebP |
| Lighthouse | ≥ 90（Desktop / Mobile） |
| 表单提交成功率 | 100% |
| 中英切换延迟 | < 300ms |

---

## 🔧 技术实现摘要
- **国际化**：`next-intl` + App Router segment（`/en` `/zh`）  
- **动画**：`framer-motion`  
- **SEO**：`next-seo`  
- **分析**：`Plausible`（轻隐私）  
- **部署**：Vercel + Cloudflare（Full Strict SSL）  
- **API 存储**：Airtable / Supabase  

---

## ✅ 验收清单
- [ ] 英文 / 中文两版 Hero 文案显示正确  
- [ ] 表单提交成功写入数据库  
- [ ] Before/After 滑块运行流畅  
- [ ] Pricing 按钮跳转 Gumroad  
- [ ] Lighthouse ≥ 90  
- [ ] Cloudflare 重定向 `.com → .app` 正常  
