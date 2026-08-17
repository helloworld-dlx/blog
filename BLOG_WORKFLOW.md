# Blog Workflow

本文件定义博客操作语义。稳定的信息架构和内容模型见 `BLOG_SPEC.md`。

## 总原则

- 用户提供普通 Markdown 笔记并要求“放到博客上”时，默认创建草稿，不自动发布。
- 只修改用户指定的目标；不要顺手重构无关页面或文章。
- 只有实际修改站点文件后才需要运行 `npm run build`；只读检查不运行 build。
- 不编造经历、比赛、实习、论文、奖项、项目成果、完成状态或技能水平。
- 不把未完成项目写成已完成。
- 不提交 `.env`、token、密钥、日志、数据库、`node_modules`、`dist`、`.astro` 或隐私文件。
- 发布和 Git 推送是两个不同动作。

## 构建草稿

当用户说“把这篇 Markdown/笔记放博客上”“构建草稿”等：

1. 以用户提供的 Markdown 为内容基础，不擅自改变技术事实。
2. 可以做必要的格式整理：
   - 如果正文 H1 与 frontmatter `title` 重复，删除正文重复 H1。
   - 修复明显的 Markdown 结构问题。
   - 生成简短 `description`。
3. 新文章放到 `src/content/posts/`，文件名使用 `yyyy-mm-dd-english-slug.md`。
4. frontmatter 至少包含：
   - `title`
   - `date`
   - `description`
   - `draft: true`
   - `section`
   - `tags`
   - `featured: false`
   - `pinned: false`
5. section 与 tags 按 `BLOG_SPEC.md` 选择。
6. 不发布，不 commit，不 push。
7. 运行 `npm run build`。
8. 最后简短汇报：路径、title、section、tags、draft 状态、build 结果。

默认是“保真整理”，不是营销式润色。只有用户明确要求重写时，才重写笔记正文。

## 查找 / 列表

支持自然语言：

- “最近有哪些草稿？”
- “我写过自动微分吗？”
- “列出 FPGA 相关文章。”
- “现在有哪些 featured / pinned？”

行为：

1. 只读。
2. 可按标题、正文关键词、section、tags、draft/published、featured、pinned 与日期搜索。
3. 优先返回最相关的少量结果。
4. 不运行 build。

## 修改

1. 只修改指定文章或页面。
2. 保持 `draft` 状态不变，除非用户明确要求发布。
3. 修改文章 metadata 时保持其它字段不变。
4. 实际修改后运行 `npm run build`。
5. 不 commit，不 push。

## 置顶 / 取消置顶

- “把这篇置顶” → 指定文章 `pinned: true`。
- “取消置顶” → 指定文章 `pinned: false`。
- 置顶只控制所属栏目列表排序，不等于首页精选。
- 多篇置顶按文章日期倒序，不增加 `pinnedOrder`。
- 修改后运行 `npm run build`。
- 不 commit，不 push。

## 首页精选

- “设为精选 / featured” → 指定文章 `featured: true`。
- “取消精选” → 指定文章 `featured: false`。
- 不自动取消其它精选，除非用户明确要求。
- 修改后运行 `npm run build`。
- 不 commit，不 push。

## 检查

只读检查：

- frontmatter 是否完整。
- section / tags 是否合理。
- 是否有 TODO、占位文字、明显错别字。
- 是否有 token、密钥、私有路径、聊天记录等隐私。
- 是否夸大事实或把未完成内容写成完成。

输出“可以发布 / 暂不建议发布”和关键问题。不要修改文件，不运行 build。

## 发布

只有用户明确表达“发布”时：

1. 必须有明确文章目标。
2. 只把指定文章的 `draft` 改为 `false`。
3. 发布前执行必要检查。
4. 运行 `npm run build`。
5. **发布不等于 commit/push**。
6. 最后只汇报文章路径与 build 结果。

## Portfolio

- 可以新增/修改项目摘要、公开状态、媒体与相关文章。
- 不编造 status、成果、指标或完成度。
- 私人项目默认最小公开。
- Autumn 当前允许公开项目名与高层简介，但不默认公开源码、私有数据、内部拓扑或敏感实现。
- 未来论文/发表必须基于真实内容后再新增，不创建空占位。

## 图片

用户要求把图片加入文章或 Portfolio 时：

1. 使用现有仓库静态资源约定。
2. 添加准确、简短的 `alt`。
3. 不建立额外图片数据库或资产管理系统。
4. 实际修改后运行 `npm run build`。

## 更新日志

用户明确要求“更新日志”时：

1. 追加 `src/data/changelog.ts`。
2. date 未指定时使用当天日期。
3. type：
   - 站点结构 / 页面 / 栏目 → `site`
   - 新文章 / 内容发布 → `content`
   - 部署 / 域名 / CDN / 评论环境 → `deploy`
   - Bug / 构建 / 样式修复 → `fix`
4. 只记录真实已经发生的变更。
5. 运行 `npm run build`。
6. 不 commit，不 push。

## Git 提交与推送

只有用户明确要求“提交”“推送”“提交并推送”时才进行 Git 写操作。

1. `git status`
2. `git diff --stat` 与必要的 diff 检查
3. 确认最近一次 `npm run build` 针对当前代码成功；如果 build 后代码又变化，重新 build。
4. 检查 secrets / 隐私 / 构建产物。
5. **只 stage 本轮确认相关的文件**，不要默认 `git add .`。
6. 正常 `git commit -m "..."`。
7. 正常 push 到约定分支。
8. 禁止 `git push --force`。
9. 最后简短汇报 build、commit、push 结果。
