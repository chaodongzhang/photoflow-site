# 🧭 PRD — PhotoFlow Website v1.0（Waitlist 版）

## 1️⃣ 项目定位
**产品名称**：PhotoFlow  
**阶段目标**：展示品牌风格、验证市场兴趣、收集潜在用户邮箱  
**上线类型**：Waitlist + Showcase 模式  
**适用阶段**：MVP 开发前期（App 原型尚未可运行）

---

## 2️⃣ 产品愿景
PhotoFlow 旨在打造一款 **节点式 RAW 编辑器**，让影像创作者以“可视化流程”完成非破坏性调色。  
当前阶段，网站目标是：  
1. 讲述产品概念与美学语言。  
2. 展示光影氛围（Edward Hopper 式视觉）。  
3. 收集潜在用户邮箱，为后续 Beta 邀请打基础。  

---

## 3️⃣ 网站核心结构

| 顺序 | 模块 | 目标 | 文件/组件 |
|------|------|------|------------|
| 1 | Hero | 传达视觉风格与理念 | `/components/Hero.tsx` |
| 2 | SubscribeForm | 收集邮箱 | `/components/SubscribeForm.tsx` |
| 3 | Gallery | 展示 Hopper 风格影像样例 | `/components/Gallery.tsx` |
| 4 | Features | 简述理念与核心设计思想 | `/components/FeatureCard.tsx` |
| 5 | Footer | 品牌、社交与联系渠道 | `/components/Footer.tsx` |

---

## 4️⃣ Hero 模块
**文件**：`components/Hero.tsx`  
**设计风格**：极简、留白、光影强烈、黄昏色调。  
**背景图**：`/hero-hopper-light.webp` (≤120KB WebP)

| 语言 | Title | Subtitle | CTA |
|------|--------|-----------|------|
| 英文 | Discover light. Shape tone. | The node-based RAW editor, coming soon. | Join Waitlist → |
| 中文 | 发现光的结构，雕塑色的节奏。 | 节点式 RAW 编辑器，敬请期待。 | 加入候补名单 → |

**交互建议**：缓慢淡入、鼠标悬停按钮缩放轻微动画。  

---

## 5️⃣ SubscribeForm 模块
**目标**：用户提交邮箱 → Airtable。  
**文件**：`components/SubscribeForm.tsx`  
**API 路径**：`/api/waitlist.ts`  

```tsx
<form action="/api/waitlist" method="POST">
  <input type="email" name="email" placeholder="yourname@example.com" required />
  <button type="submit">Join Waitlist</button>
</form>
```

**逻辑**：
- 提交后按钮 → “Submitting…”  
- 成功提示 → “Check your inbox!”  
- 失败提示 → “Please try again later.”  
- 数据写入 Airtable 表：`Waitlist`（字段：`email`, `timestamp`）  

---

## 6️⃣ Gallery 模块
**目标**：用图像视觉讲述 PhotoFlow 的“光影哲学”。  
**内容结构**：
- 3 张对比图（Before / After）  
- 展示不同调色风格（Portra / Cinematic / Minimal）  

**交互**：  
使用 `react-compare-slider` 实现拖拽对比。

---

## 7️⃣ Features 模块
**目标**：展示 PhotoFlow 的理念与差异化价值（而非功能）。

| Feature | 一句话说明 | 图标建议 |
|----------|-------------|----------|
| Visual Workflow | Edit like painting — node by node. | 🎨 |
| Non-destructive | Every edit is reversible, always. | ♻️ |
| Designed for Photographers | Inspired by analog light, crafted for digital flow. | 📷 |

中文版本：
| 特点 | 说明 |
|------|------|
| 可视化工作流 | 像绘画一样调色，一步步构建画面。 |
| 非破坏性 | 所有调整都可追溯与还原。 |
| 为摄影而生 | 源自胶片光影灵感，为数字创作优化。 |

---

## 8️⃣ Footer 模块
**内容**：
- 邮箱：`contact@gophotoflow.app`  
- 社交链接：Twitter / Instagram / Product Hunt  
- 版权信息：© 2025 PhotoFlow. All rights reserved.

---

## 9️⃣ SEO / Metadata
```tsx
export const metadata = {
  title: 'PhotoFlow | Node-based RAW Editor (Waitlist)',
  description: 'Discover light. Shape tone. Join the waitlist for early access.',
  openGraph: {
    title: 'PhotoFlow - Node-based RAW Editor',
    description: 'Join the waitlist for early access to a new kind of RAW editor.',
    images: ['/og-hopper-light.jpg'],
  },
}
```

---

## 🔟 性能与体验要求

| 检查项 | 目标 |
|--------|------|
| 首屏加载 | ≤ 1.2s |
| 背景图 | ≤ 120KB |
| Lighthouse | ≥ 90 |
| 表单成功率 | 100% |
| 交互流畅度 | < 200ms |

---

## 🧠 技术实现
- **框架**：Next.js + TailwindCSS + App Router  
- **国际化**：`next-intl`（中 / 英）  
- **动画**：`framer-motion`（淡入 / 按钮反馈）  
- **后端存储**：Airtable  
- **部署**：Vercel + Cloudflare DNS（Full SSL）  

---

## ✅ 验收清单
- [ ] Hero 文案双语切换正常  
- [ ] 表单成功写入 Airtable  
- [ ] Gallery 对比滑块交互顺畅  
- [ ] Lighthouse ≥ 90  
- [ ] 页面在移动端无布局偏移  

---

## 📈 后续规划（Beta 阶段）
- 从 Airtable 导出邮箱 → 导入 Supabase，发出 Beta 邀请邮件。  
- 增加 Demo 视频（15 秒节点操作演示）。  
- 替换 CTA：从 “Join Waitlist” → “Get Beta Access”。  
