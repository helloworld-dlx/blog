import { getCollection } from 'astro:content';

export async function GET() {
  const allPosts = await getCollection('posts');
  const publishedPosts = allPosts
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const siteUrl = 'https://dlx.example.com';
  const siteTitle = "dlx's Digital Lab";
  const siteDescription = '记录 IC 设计学习、一生一芯、Verilog、AI Agent 工作流和长期技术思考。';

  const items = publishedPosts.map(post => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${siteUrl}/posts/${post.id}</link>
      <guid>${siteUrl}/posts/${post.id}</guid>
      <description><![CDATA[${post.data.description}]]></description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
    </item>
  `).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteTitle}]]></title>
    <link>${siteUrl}</link>
    <description><![CDATA[${siteDescription}]]></description>
    <language>zh-CN</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}