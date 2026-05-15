export type ChangelogType = 'site' | 'content' | 'deploy' | 'fix';

export interface ChangelogEntry {
  date: string;
  type: ChangelogType;
  title: string;
  description: string;
}

export const changelog: ChangelogEntry[] = [
  {
    date: '2026-05-13',
    type: 'site',
    title: '博客重建为 Astro 静态站',
    description: '重建个人博客结构，确定 Home、Lab Notes、Study Notes、Mind Palace、Portfolio、About 六个核心入口。',
  },
  {
    date: '2026-05-15',
    type: 'deploy',
    title: '部署迁移到 EdgeOne Pages',
    description: '为改善国内访问体验，将博客部署到 EdgeOne Pages，并保留海外部署作为备用入口。',
  },
  {
    date: '2026-05-13',
    type: 'site',
    title: '接入 Cusdis 评论系统',
    description: '为文章页和 About 页面接入无需登录的轻量评论系统。',
  },
  {
    date: '2026-05-14',
    type: 'site',
    title: '调整栏目结构',
    description: '将原 Agent Forge 内容并入 Lab Notes，新增 Study Notes 用于记录课程笔记、学习心得和阶段成果。',
  },
];