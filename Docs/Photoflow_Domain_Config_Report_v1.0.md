# Photoflow 域名部署与跳转配置报告 v1.0
**生成日期：** 2025-10-19 18:02:14

---

## 一、域名结构与目标

| 域名 | 用途 | 托管 | 状态 |
|------|------|------|------|
| **gophotoflow.app** | 主站 (Vercel) | Vercel + Cloudflare | ✅ 正常 |
| **gophotoflow.com** | 重定向到 .app | Cloudflare | ✅ 正常 |
| **www.gophotoflow.com** | 重定向到 .app | Cloudflare | ✅ 正常 |

目标：统一访问入口 → `https://gophotoflow.app`

---

## 二、Cloudflare DNS 配置

| 类型 | 名称 | 内容 | 代理状态 | TTL |
|------|------|------|----------|-----|
| A | gophotoflow.com | 216.198.79.1 | 已代理 | 自动 |
| CNAME | www | gophotoflow.app | 已代理 | 自动 |

---

## 三、Redirect Rules 配置

### ✅ 当前规则（建议状态）

| 序号 | 匹配主机名 | 动作 | 说明 |
|------|--------------|------|------|
| #1 | `Hostname equals "www.gophotoflow.com"` | Static Redirect → `https://gophotoflow.app` | 将 www 域整体跳转至主域 |
| #2 | `Hostname equals "gophotoflow.com"` | Static Redirect → `https://gophotoflow.app/$1` | 主域保留路径跳转 |

**验证命令：**
```bash
curl -I https://gophotoflow.com
curl -I https://www.gophotoflow.com
```
**预期输出：**
```
HTTP/2 301
location: https://gophotoflow.app
server: cloudflare
```

---

## 四、Vercel 绑定说明

在 Vercel Dashboard → **Settings → Domains** 中：
- 主域：`gophotoflow.app`
- 附加域：`gophotoflow.com`, `www.gophotoflow.com`
- 均设置为 **Redirect domains**。

---

## 五、安全与 SEO 建议

| 项目 | 建议 | 说明 |
|------|------|------|
| HTTPS | ✅ Always Use HTTPS | Cloudflare 自动重定向 |
| 自动修复 | ✅ Automatic HTTPS Rewrites | 避免混合内容警告 |
| HSTS | ✅ 启用（max-age=31536000） | 强制 HTTPS |
| Canonical | `<link rel="canonical" href="https://gophotoflow.app/">` | 防止重复收录 |
| 301 永久重定向 | ✅ | 传递 SEO 权重 |

---

## 六、测试 Checklist

| 项目 | 命令 | 期望结果 |
|------|------|-----------|
| 主域 | `curl -I https://gophotoflow.app` | HTTP/2 200 OK |
| 根域 | `curl -I https://gophotoflow.com` | HTTP/2 301 → app |
| www 域 | `curl -I https://www.gophotoflow.com` | HTTP/2 301 → app |
| SSL | 浏览器访问 | 🔒 安全证书有效 |
| SEO | Google/Bing 索引 | ✅ 仅 `.app` 域收录 |

---

**维护建议：**
- 不定期检查 Cloudflare → SSL/TLS → Edge Certificates。
- 若更换 Vercel 域名或服务器，请同步更新 CNAME。
- Cloudflare “Page Rules” 已弃用，后续迁移到 “Redirect Rules”。

---

© Photoflow Project — Domain Configuration Report v1.0
