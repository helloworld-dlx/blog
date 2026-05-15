# AGENTS.md

## 项目定位

这是 dlx 的个人 Astro 技术博客，不是 OpenClaw 系统仓库。

## 顶层导航（固定）

- Home /
- Lab Notes /lab
- 通识基础 /study
- 随想录 /mind
- Portfolio /portfolio
- About /about

## 栏目定位

### Lab Notes（/lab）

放一生一芯、计算机体系结构、Verilog、Linux、工具链、Bug 标本馆，以及 OpenClaw、Hermes、树莓派、飞书机器人、本地模型和自动化工作流。

### 通识基础（/study）

放高数、线代、英语、大学课程笔记、课堂心得、阶段成果、复习总结。

### 随想录（/mind）

放读书、技术哲学、反卷决策、学习方法和个人思考。

### Portfolio（/portfolio）

放项目总结和作品集关联文章。

## 文章管理规则

### Section（只允许以下四个）

- `lab` — Lab Notes 分区
- `study` — 通识基础 分区
- `mind` — 随想录 分区
- `project` — Portfolio 分区

### Tags（只允许以下 tags）

技术标签：`ysyx`, `riscv`, `verilog`, `debug`, `toolchain`, `linux`, `agent`, `raspberry-pi`, `openclaw`, `hermes`, `digital-logic`

课业标签：`math`, `calculus`, `linear-algebra`, `english`, `course-notes`, `exam-review`

思想标签：`reading`, `essay`, `anti-involution`

### 草稿规则

- 新文章默认 `draft: true`
- 未经用户明确确认，不得将 `draft` 改为 `false`
- 不得编造用户的经历、奖项、项目成果、论文、实习、芯片完成情况

## Blog Publishing Rules

1. 所有新文章必须先创建为 `draft: true`。
2. 未经用户明确说"发布"，不得把 `draft` 改成 `false`。
3. 新文章必须放在 `src/content/posts/`。
4. 文件名使用 `yyyy-mm-dd-english-slug.md`。
5. section 只能是 `lab`、`study`、`mind`、`project`。
6. tags 只能使用白名单：
   `ysyx`, `riscv`, `verilog`, `debug`, `toolchain`, `linux`,
   `agent`, `raspberry-pi`, `openclaw`, `hermes`, `digital-logic`,
   `math`, `calculus`, `linear-algebra`, `english`, `course-notes`, `exam-review`,
   `reading`, `essay`, `anti-involution`
7. 不允许编造经历、比赛、实习、论文、奖项、项目完成状态。
8. 不允许把未完成项目写成已完成。
9. 不允许提交 `.env`、`token`、密钥、日志、数据库、`node_modules`、`dist`、`.astro`。
10. 发布前必须运行 `npm run build`。
11. 只有用户明确要求"提交并推送"时，才允许 `git commit` 和 `git push`。
12. 每次 `git commit` 必须使用 `-m "简短描述本次提交内容"`，不得使用无 message 的空 commit。
13. 禁止 `git push --force`。
14. 每次修改后只汇报变更文件和 build 结果。

## Blog Command Shortcuts

本仓库支持以下短指令：
- 构建草稿
- 发布
- 修改
- 检查
- 推送
- 更新日志

执行短指令时，必须优先遵守 `BLOG_WORKFLOW.md`。

## 安全规则

- 不得提交 token、密码、聊天记录、隐私文件
- 不得将 .env、node_modules、dist 等构建产物纳入版本控制

## 开发规则

- 每次修改后必须运行 `npm run build`
- 每次只完成用户指定的一步，不顺手重构
- 不引入 React、Vue、Svelte
- 不引入大型 UI 库

# Blog Workflow

## 固定短指令

### 用户发送"构建草稿"时

1. 将用户提供的原始内容整理为一篇 Astro 博客草稿。
2. 新文章放到 `src/content/posts/`。
3. 文件名使用 `yyyy-mm-dd-english-slug.md`。
4. frontmatter 必须包含：
   - title
   - date
   - description
   - draft: true
   - section
   - tags
   - featured: false
5. section 只能是：
   - lab — 技术实验、OpenClaw、Hermes、树莓派、飞书机器人、本地模型、自动化工作流
   - study — 通识基础：高数、线代、英语、大学课程笔记、课堂心得、阶段成果、复习总结
   - mind — 读书、技术哲学、反卷决策、学习方法、个人思考
   - project — 项目总结、作品集关联文章
6. tags 只能从白名单选择：
   - ysyx, riscv, verilog, debug, toolchain, linux
   - agent, raspberry-pi, openclaw, hermes, digital-logic
   - math, calculus, linear-algebra, english, course-notes, exam-review
   - reading, essay, anti-involution
7. 保留用户真实语气，可以润色结构，但不得编造事实。
8. 技术细节不确定时写 TODO，不要硬编。
9. 不要发布，不要 commit，不要 push。
10. 修改后运行 `npm run build`。
11. 最后只汇报草稿路径、section、tags、build 结果。

### 用户发送"发布"时

1. 只发布用户指定的那一篇草稿。
2. 将 draft 改为 false。
3. 检查 frontmatter 完整性。
4. 检查是否还有 TODO、隐私、token、密钥、路径泄露。
5. 不要修改其他文章。
6. 不要编造事实。
7. 运行 `npm run build`。
8. **不要 commit，不要 push**。
9. 最后只汇报文章路径、build 结果。

### 用户发送"修改"时

1. 只修改用户指定的文章或页面。
2. 保持 draft 状态不变，除非用户明确要求发布。
3. 不要修改其他文件。
4. 不要 commit，不要 push。
5. 修改后运行 `npm run build`。
6. 最后只汇报修改内容和 build 结果。

### 用户发送"检查"时

1. 只检查，不修改文件。
2. 检查 frontmatter、section、tags、TODO、错别字、隐私泄露、是否夸大事实。
3. 最后给出"可以发布 / 暂不建议发布"和问题清单。

### 用户发送"推送"时

1. 执行 `git status`。
2. 执行 `git diff --stat`。
3. 运行 `npm run build`。
4. 检查不能提交：
   - .env
   - token
   - 密钥
   - 日志
   - 数据库
   - node_modules
   - dist
   - .astro
5. 如果检查失败，停止并汇报。
6. 如果检查通过，`git add .`，`git commit`，`git push origin main`。
7. 禁止 `git push --force`。
8. 最后只汇报 build、commit、push 结果。

### 用户发送"更新日志"时

1. 从用户内容中提取 date、type、title、description。
2. 如果用户没有指定 date，使用当天日期（格式 YYYY-MM-DD）。
3. 如果用户没有指定 type，根据内容自动选择：
   - 站点结构、页面、栏目变化 → `site`
   - 新文章、文章整理、内容发布 → `content`
   - 部署、域名、CDN、评论系统环境变量 → `deploy`
   - Bug 修复、构建错误、样式问题 → `fix`
4. 只追加 `src/data/changelog.ts`，不要修改其他页面。
5. 不要 commit，不要 push。
6. 修改后运行 `npm run build`。
7. 最后只汇报新增的 changelog 条目和 build 结果。

## 默认文章结构

如果用户没有指定结构，新文章默认按这个结构整理：

1. 背景
2. 遇到的问题
3. 排查或思考过程
4. 当前结论
5. 后续 TODO

## 事实边界

1. 不允许编造经历、比赛、实习、论文、奖项、项目完成状态。
2. 不允许把未完成项目写成已完成。
3. 不允许泄露 token、密钥、真实路径、私密聊天记录。
4. 不允许把用户的草稿直接发布，除非用户明确说"发布"。
