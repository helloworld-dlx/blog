import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mermaid from 'astro-mermaid';

export default defineConfig({
  site: 'https://ykernel.xyz/',
  output: 'static',
  integrations: [
    sitemap(),
    mermaid({
      theme: 'neutral',
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
