import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 【关键】必须添加 base 配置，否则部署后 CSS/JS 会报 404
  base: '/pomelo-pjsk-plugins-docs/',

  title: "帮助文档",
  description: "For pomelo-pjsk-plugins",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // 【修改】首页链接通常设为 '/'，VitePress 会自动结合上面的 base 路径
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '快速入门',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'API 示例', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YourUsername/pomelo-pjsk-plugins-docs' }
    ]
  }
})