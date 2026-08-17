# AGENTS.md

## Repository

这是 dlx 的个人 Astro 技术博客 `ykernel.xyz`，不是 Autumn/OpenClaw 系统仓库。

开始博客任务前：

1. 阅读本文件。
2. 涉及栏目、tags、UI、Portfolio 或内容模型时阅读 `BLOG_SPEC.md`。
3. 涉及草稿、修改、置顶、精选、发布、检查、推送或 Changelog 时阅读 `BLOG_WORKFLOW.md`。

如果规则冲突，以更严格的安全边界为准，并向用户指出冲突。

## Hard boundaries

- 新文章默认 `draft: true`。
- 只有用户明确说“发布”时，才允许把指定文章改为 `draft: false`。
- 发布不自动 commit / push。
- 只有用户明确要求 Git 提交或推送时，才允许 commit / push。
- 禁止 `git push --force`。
- 不得编造用户经历、比赛、实习、论文、奖项、项目成果、完成状态或技能水平。
- 不得把未完成项目写成已完成。
- 不得提交 token、密码、`.env`、日志、数据库、聊天记录、私有数据、`node_modules`、`dist`、`.astro`。
- Git stage 只包含当前确认任务的文件；不要默认 `git add .`。

## Development

- 实际修改博客代码或内容后运行 `npm run build`。
- 只读检查不运行 build。
- 采用 Minimum Sufficient Engineering：解决真实问题所需的最小正确实现。
- 不顺手进行无关的大规模重构。
- 不引入 React、Vue、Svelte 或大型 UI 库。
- 不为简单博客操作新增数据库、CMS、manifest、SHA256 审计层或独立后端。

## Public naming

- 全站中文为主。
- 对外的个人 AI 系统统一称为 `Autumn`。
- OpenClaw、Hermes 等底层组件名只在确有技术内容需要时使用，不作为固定页面的项目身份。
- `RISC-V`、`Verilog`、`Autumn`、`GitHub` 等专有名词自然保留英文。

## Response style

日常成功操作只汇报必要结果，例如：

- 修改 / 新建文件
- draft / pinned / featured 状态
- build 结果
- 是否 commit / push

失败或需要用户裁决时再展开。
