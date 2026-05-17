import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mermaid from 'astro-mermaid';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://dlx.example.com',
  output: 'static',

  integrations: [
    sitemap(),
    mermaid({
      theme: 'neutral',
    }),
  ],

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  adapter: cloudflare(),
});