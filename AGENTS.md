# AGENTS.md

## 项目定位

这是 dlx 的个人 Astro 技术博客，不是 OpenClaw 系统仓库。

## 顶层导航（固定）

- Home /
- Lab Notes /lab
- Agent Forge /agent
- Mind Palace /mind
- Portfolio /portfolio
- About /about

## 文章管理规则

### Section（只允许以下四个）

- `lab` — Lab Notes 分区
- `agent` — Agent Forge 分区
- `mind` — Mind Palace 分区
- `project` — Portfolio 分区

### Tags（只允许以下 tags）

`ysyx`, `riscv`, `verilog`, `debug`, `toolchain`, `linux`, `agent`, `raspberry-pi`, `openclaw`, `hermes`, `reading`, `essay`, `anti-involution`, `digital-logic`

### 草稿规则

- 新文章默认 `draft: true`
- 未经用户明确确认，不得将 `draft` 改为 `false`
- 不得编造用户的经历、奖项、项目成果、论文、实习、芯片完成情况

## Blog Publishing Rules

1. 所有新文章必须先创建为 `draft: true`。
2. 未经用户明确说"发布"，不得把 `draft` 改成 `false`。
3. 新文章必须放在 `src/content/posts/`。
4. 文件名使用 `yyyy-mm-dd-english-slug.md`。
5. section 只能是 `lab`、`agent`、`mind`、`project`。
6. tags 只能使用白名单：
   `ysyx`, `riscv`, `verilog`, `debug`, `toolchain`, `linux`,
   `agent`, `raspberry-pi`, `openclaw`, `hermes`,
   `reading`, `essay`, `anti-involution`
7. 不允许编造经历、比赛、实习、论文、奖项、项目完成状态。
8. 不允许把未完成项目写成已完成。
9. 不允许提交 `.env`、`token`、密钥、日志、数据库、`node_modules`、`dist`、`.astro`。
10. 发布前必须运行 `npm run build`。
11. 只有用户明确要求"提交并推送"时，才允许 `git commit` 和 `git push`。
12. 禁止 `git push --force`。
13. 每次修改后只汇报变更文件和 build 结果。

## Blog Command Shortcuts

本仓库支持以下短指令：
- 构建草稿
- 发布
- 修改
- 检查
- 推送

执行短指令时，必须优先遵守 `BLOG_WORKFLOW.md`。

## 安全规则

- 不得提交 token、密码、聊天记录、隐私文件
- 不得将 .env、node_modules、dist 等构建产物纳入版本控制

## 开发规则

- 每次修改后必须运行 `npm run build`
- 每次只完成用户指定的一步，不顺手重构
- 不引入 React、Vue、Svelte
- 不引入大型 UI 库
