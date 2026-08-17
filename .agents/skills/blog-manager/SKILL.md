---
name: blog-manager
description: "Manage the ykernel Astro blog: create Markdown drafts, find/edit/pin/feature posts, publish safely, update portfolio/changelog, and guard Git pushes."
compatibility: OpenClaw, Codex, OpenCode
---

# Blog Manager

Operate the current `ykernel.xyz` Astro repository as a careful blog editor and maintainer.

## Canonical rules first

Before writing:

1. Read repository `AGENTS.md`.
2. Read `BLOG_SPEC.md` for information architecture, public naming, tags, Portfolio and UI rules.
3. Read `BLOG_WORKFLOW.md` for draft/edit/pin/feature/publish/check/push semantics.
4. If this Skill conflicts with repository canonical docs, follow the repository docs and report the conflict.

Do not copy stable repository rules into new parallel rule files.

## Intent routing

Interpret natural language; do not require exact slash commands.

### Markdown / note → blog draft

When the user gives a Markdown note and says “放到博客上”, “建成博客文章”, “构建草稿”, or equivalent:

- Preserve technical facts and the author’s intent.
- Create a new post under `src/content/posts/`.
- New posts must be `draft: true`.
- Add valid frontmatter, including `featured: false` and `pinned: false`.
- Remove only a duplicate body H1 when it repeats the frontmatter title.
- Choose the most conservative reasonable section/tags from `BLOG_SPEC.md`.
- Run the repository build after the write.
- Do not publish, commit, or push.

### Find / list

For requests such as “写过 XXX 吗”, “最近的草稿”, “有哪些置顶/精选文章”:

- Search title, body, tags and metadata.
- Return the most relevant results.
- Stay read-only unless the user separately asks for an edit.

### Edit

- Modify only the explicit target.
- Preserve `draft` unless the user explicitly asks to publish.
- Preserve unrelated metadata.
- Build after actual edits.

### Pin / feature

- “置顶” controls `pinned`.
- “精选” controls `featured`.
- They are independent.
- Do not invent extra ordering fields unless the repository spec changes.

### Publish

Only an explicit publish request may change the target post to `draft: false`.

Publishing does not authorize a Git commit or push.

### Portfolio

- Only publish real projects and evidence.
- Do not invent status, metrics, awards, completion or papers.
- Private projects use minimum public disclosure.
- Private projects use minimum public disclosure; change fixed Portfolio copy only with explicit user approval.

### Git write

Only an explicit commit/push request authorizes Git writes.

Before pushing:

- inspect status/diff;
- ensure the current code passed the repository build;
- stage only current-task paths;
- exclude secrets, private data and build artifacts;
- never force-push.

## Fact boundary

Never infer or silently update time-sensitive personal facts such as grade, current YSYX/FPGA phase, awards, papers, internships, project completion, research results or skill level.

If fixed site copy looks stale, do not rewrite it unless the user explicitly approves a content update. Mark it for confirmation instead.

## Engineering style

Use the repository’s existing Astro + Markdown + CSS architecture.

Prefer direct, small changes. Do not add a CMS, database, backend service, UI framework, complex validator, manifest, checksum layer or audit subsystem unless a concrete repository problem requires it.

## Completion report

Successful routine operations should be short, e.g.:

> 已创建草稿 `src/content/posts/2026-08-17-autograd-notes.md`  
> section: `study`  
> tags: `course-notes`  
> draft: `true`  
> build: PASS  
> 未发布、未 commit、未 push。
