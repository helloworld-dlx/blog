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
   - lab
   - agent
   - mind
   - project
6. tags 只能从白名单选择：
   - ysyx
   - riscv
   - verilog
   - debug
   - toolchain
   - linux
   - agent
   - raspberry-pi
   - openclaw
   - hermes
   - reading
   - essay
   - anti-involution
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
8. build 通过后，执行安全提交和推送。
9. 禁止 `git push --force`。
10. 最后只汇报文章路径、build 结果、commit hash、push 结果。

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
