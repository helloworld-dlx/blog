# Blog Workflow

## 固定短指令

### 用户发送"构建草稿"时

1. 将用户提供的原始内容整理为一篇 Astro 博客草稿。
2. 新文章放到 `src/content/posts/`。
3. frontmatter 必须包含：title, date, description, draft: true, section, tags, featured: false
4. section 只能是：
   - `lab` — 技术实验、OpenClaw、Hermes、树莓派、飞书机器人、本地模型、自动化工作流
   - `study` — 高数、线代、英语、大学课程笔记、课堂心得、阶段成果、复习总结
   - `mind` — 读书、技术哲学、反卷决策、学习方法、个人思考
   - `project` — 项目总结、作品集关联文章
5. tags 只能从白名单选择：
   - `ysyx`, `riscv`, `verilog`, `debug`, `toolchain`, `linux`
   - `agent`, `raspberry-pi`, `openclaw`, `hermes`, `digital-logic`
   - `math`, `calculus`, `linear-algebra`, `english`, `course-notes`, `exam-review`
   - `reading`, `essay`, `anti-involution`
6. 不要发布，不要 commit，不要 push。
7. 修改后运行 `npm run build`。
8. 最后只汇报草稿路径、section、tags、build 结果。

### 用户发送"发布"时

1. 只发布用户指定的那一篇草稿。
2. 将 draft 改为 false。
3. 检查 frontmatter 完整性。
4. 运行 `npm run build`。
5. **不要 commit，不要 push**。
6. 最后只汇报文章路径、build 结果。

### 用户发送"修改"时

1. 只修改用户指定的文章或页面。
2. 保持 draft 状态不变，除非用户明确要求发布。
3. 不要修改其他文件。
4. 不要 commit，不要 push。
5. 修改后运行 `npm run build`。
6. 最后只汇报修改内容和 build 结果。

### 用户发送"检查"时

1. 只检查，不修改文件。
2. 检查 frontmatter、section、tags、TODO、错别字、隐私泄露。
3. 最后给出"可以发布 / 暂不建议发布"和问题清单。

### 用户发送"推送"时

1. 执行 `git status` 和 `git diff --stat`。
2. 运行 `npm run build`。
3. 检查不能提交：.env, token, 密钥, 日志, 数据库, node_modules, dist, .astro
4. 如果检查通过，`git add . && git commit && git push origin main`。
5. 禁止 `git push --force`。
6. 最后只汇报 build、commit、push 结果。

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
