# BLOG_SPEC.md

## 博客定位

这是 dlx 的个人技术博客与长期作品集，正式域名为 `https://ykernel.xyz/`。

博客不是企业官网、简历模板或纯教程站，而是一个长期数字实验室，用来记录：

1. 数字 IC、RISC-V、Verilog、FPGA、计算机体系结构、Linux、工具链与真实 Debug 过程。
2. Autumn、AI Agent、树莓派与个人自动化工作流。
3. 课程学习、基础知识、复习整理与阶段性的学习笔记。
4. 读书、学习方法与日常思考。
5. 项目、实验结果、架构图、GitHub 链接与后续真实产生的论文/发表内容。

固定页面不要写需要频繁维护的年级或具体阶段进度。阶段性进展优先放进文章、项目页或 Changelog。

## 语言与命名

- 全站以中文为主。
- `RISC-V`、`Verilog`、`Autumn`、`GitHub` 等自然的专有名词保留英文。
- 对外的个人 AI 系统统一称为 `Autumn`。底层组件名（例如 OpenClaw、Hermes）只在确有技术讨论需要时出现，不作为固定页面的项目身份。
- About 页面标题保留 `About`。

## 顶层导航

固定为：

1. 首页 `/`
2. 实验手记 `/lab`
3. 通识基础 `/study`
4. 随想录 `/mind`
5. 作品集 `/portfolio`
6. 关于 `/about`

搜索是导航动作，不增加新的顶层栏目。

## 内容分区

- `lab` — 数字 IC、RISC-V、Verilog、FPGA、Linux、工具链、Autumn、Agent、树莓派、自动化工作流与 Debug。
- `study` — 课程学习、基础知识、课堂笔记、复习整理与阶段性学习记录。
- `mind` — 读书、学习方法与日常思考。
- `project` — 项目总结和作品集关联文章。

## Frontmatter

文章 schema：

- `title`
- `date`
- `updated`（可选）
- `description`
- `draft`（默认 `true`）
- `section`
- `tags`
- `featured`（默认 `false`）— 控制首页精选
- `pinned`（默认 `false`）— 控制所属栏目列表置顶

`featured` 与 `pinned` 互不替代。多个置顶文章按日期倒序，不增加额外排序字段。

## Tags

优先使用以下 canonical tags，避免无意义地制造近义标签：

技术：
`ysyx`, `riscv`, `verilog`, `fpga`, `debug`, `toolchain`, `linux`, `digital-logic`, `logisim`

Agent：
`autumn`, `agent`, `raspberry-pi`, `openclaw`, `hermes`

课业：
`math`, `calculus`, `linear-algebra`, `english`, `course-notes`, `exam-review`

思想：
`reading`, `essay`, `anti-involution`

保留 `openclaw` / `hermes` 是为了已有或未来确实讨论底层组件的技术文章；固定站点文案默认使用 `Autumn`。

## Portfolio

- 只展示真实存在、用户允许公开的项目和证据。
- 不使用技能百分比、虚构指标、夸张成果。
- 私人项目只公开用户明确允许的高层信息。
- 一生一芯相关代码仓库不在博客中公开链接。
- Autumn 默认只公开项目名与高层简介，不默认公开源码仓库。
- MajorPath 可公开项目名与公益专业认知定位；GitHub 链接等用户明确批准后再展示。
- 课程项目不要求必须有 GitHub 仓库；有真实报告、截图或其他证据即可进入 Portfolio。
- 不显示空的“代表文章”占位。
- 未来真的有论文、会议或正式发表内容时，再增加独立的「论文与发表 / Publications」模块。

## UI

设计基线：

- Slate Blue。
- 中文阅读优先。
- 首页保留大留白、项目卡、线性文章索引和少量工程化 metadata。
- 普通文章列表使用索引式列表，卡片主要留给项目。
- Light / Dark 都必须完整可读；默认跟随系统，并允许用户手动切换。
- 正文保持约 680–720px 阅读宽度。
- 桌面正文目录放在左侧；移动端折叠。
- Markdown 代码块使用 Astro 内置 Shiki 的明暗双主题。
- 不引入 React、Vue、Svelte 或大型 UI 库。
- 不使用大量渐变、玻璃拟态、赛博朋克 Dashboard 或喧宾夺主的动画。

## 技术边界

- Astro + Markdown/MDX + Astro content collections。
- 纯静态站。
- 不使用 SSR、数据库或独立 CMS。
- 部署供应商属于运维细节，不作为长期 canonical 绑定；生产域名以 `https://ykernel.xyz/` 为准。
