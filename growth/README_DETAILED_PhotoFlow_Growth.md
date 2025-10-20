# PhotoFlow Growth 团队指南（中英双语）
**版本**：v1.0  
**最后更新**：2025-10-20  

---

## 📘 1. 目录结构说明 / Directory Overview

| 子目录 | 职责 (中文) | Responsibility (English) |
|--------|-------------|---------------------------|
| `/strategy` | 品牌与冷启动战略文档，定义长期增长方向与视觉语言。 | Long-term strategy & brand positioning documents. |
| `/execution` | 每周执行计划与 SOP，用于指导社交发布、邮件活动、运营任务。 | Weekly execution plans and SOPs for content, email, and campaigns. |
| `/data` | 增长数据追踪与指标报告（Airtable, GA4, ConvertKit 等来源）。 | Growth metrics and analytics data (Airtable, GA4, ConvertKit). |
| `/content` | 社交媒体、博客与视觉素材内容，统一品牌语调与风格。 | Social media, blog, and creative materials. |
| `/automation` | 自动化脚本与同步工具（API 集成、自动发帖、邮件触发等）。 | Automation scripts for integrations and publishing. |
| `/reports` | 每月/季度复盘报告与KPI评估结果。 | Monthly & quarterly growth reviews and KPI evaluations. |

---

## 🧱 2. 文件命名与版本规则 / Naming & Versioning

| 类型 | 命名规则 | 示例 |
|------|-----------|------|
| PRD 文档 | `PRD_<项目名>_vX.Y.md` | `PRD_PhotoFlow_Website_v1.0.md` |
| 战略文档 | `<主题>_Strategy_SOP_vX.Y.md` | `PhotoFlow_ColdStart_Strategy_SOP_v1.0.md` |
| 执行计划 | `<主题>_Execution_SOP_vX.Y.md` | `PhotoFlow_ColdStart_Execution_SOP_v1.0.md` |
| 数据表 | `<用途>_Template.xlsx` | `Growth_Tracking_Template.xlsx` |
| 报告 | `<月份>-<报告类型>.md` | `2025-10-Growth-Review.md` |

**版本规则 / Versioning**
- `v1.0` → 初版草案（内部使用）  
- `v1.1` → 经评审更新（团队使用）  
- `v2.0` → 对外发布版本（公开/共享）  

---

## 🔄 3. 工作流与协作流程 / Workflow & Collaboration

### 🚀 提交流程 / Submission Flow
1. 每个新文件从 `/drafts/` 起草。  
2. 提交 PR 到对应分支（如 `growth/strategy`、`growth/execution`）。  
3. 由 Growth Lead 审核，AI Agent 自动生成 changelog。  
4. 合并入主分支后，触发自动同步与发布。

### 🧩 文件审查 / Review Criteria
- 内容清晰、格式规范、文件命名正确。  
- 中英版本保持一致（若适用）。  
- 附带更新日志（CHANGELOG.md）。

---

## 🤖 4. AI Agent 协作标准 / AI Agent Collaboration Standards

| Agent 名称 | 职责 | 输出 | 文件位置 |
|-------------|------|------|----------|
| Growth Agent | 分析增长数据、提出优化建议 | 报告与策略更新 | `/data` + `/reports` |
| Content Agent | 生成内容文案、图像或脚本 | 帖子、邮件模板 | `/content/Posts` |
| Data Agent | 同步 Airtable / GA4 数据 | 数据表与分析结果 | `/data` |
| Automation Agent | 执行自动发帖与邮件调度 | 脚本、执行日志 | `/automation` |
| Strategy Agent | 更新战略 SOP 与长线规划 | 战略文档 | `/strategy` |

---

## 📆 5. 交付节奏与模板 / Deliverables & Templates

| 时间周期 | 交付物 | 说明 |
|-----------|---------|------|
| 每周 | 执行任务表、社交内容、KPI 数据更新 | Weekly Growth Sync |
| 每月 | 月度复盘报告、流量与留存分析 | Monthly Growth Review |
| 每季度 | 战略更新、内容库审查 | Quarterly Planning |

模板路径：  
```
/growth/templates/
  ├── Weekly_Task_Template.md
  ├── Monthly_Review_Template.md
  └── KPI_Report_Template.xlsx
```

---

## 🧭 6. GitHub 协作与分支策略 / GitHub Collaboration Model

| 分支 | 用途 | 说明 |
|------|------|------|
| `main` | 稳定版文档 | 用于正式版本发布 |
| `growth/docs` | 文档维护 | 管理所有 PRD 与 SOP |
| `growth/content` | 内容发布 | 社交/营销内容更新 |
| `growth/automation` | 自动化脚本更新 | 脚本与配置 |

示例提交：
```bash
git checkout -b growth/docs
git add growth/
git commit -m "Add Growth Strategy & Execution Docs"
git push origin growth/docs
```

---

## 📈 7. KPI 指标体系 / Key Performance Indicators

| 维度 | 指标 | 目标值 | 数据来源 |
|------|------|--------|-----------|
| 流量 | 网站访问量 | ≥ 5,000/月 | GA4 |
| 转化 | Waitlist 提交数 | ≥ 1,000 | Airtable |
| 互动 | 社交参与度 | ≥ 10% CTR | X / 小红书 |
| 邮件 | 打开率 / 点击率 | ≥ 40% / ≥ 10% | ConvertKit |
| 内容 | 每周原创帖数量 | ≥ 2 | `/content/Posts` |

---

## 💡 8. 审查与更新机制 / Review & Update Policy

- 每季度由 Growth Lead + Strategy Agent 联合审查。  
- 更新历史记录存放于 `/growth/CHANGELOG.md`。  
- 所有 Markdown 文件使用统一的 Front Matter（日期、作者、版本）。

---

## ✅ 9. 文件模板标准 Front Matter Example

```yaml
---
title: "PhotoFlow 冷启动战略 SOP"
version: v1.0
author: ChaoDong Zhang
reviewed_by: Growth Agent
last_updated: 2025-10-20
status: published
---
```

---

## 🧩 10. 附录 / Appendix

**主要使用工具 / Tools**  
- 📊 Airtable — 用户邮箱与 Waitlist 管理  
- ✉️ ConvertKit — 邮件营销与自动化推送  
- 📈 GA4 — 流量与转化数据分析  
- 📅 Notion / Linear — 任务与时间线协作  
- 🤖 AI Coding Agent — 文档自动化、增长内容生成  

**核心理念 / Growth Philosophy**  
> “内容即增长，品牌即策略。”  
> Growth is not about traffic — it's about resonance and retention.
