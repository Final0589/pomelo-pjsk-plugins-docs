import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/pomelo-pjsk-plugins-docs/',

  title: "帮助文档",
  description: "For pomelo-pjsk-plugins",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '部署教程', link: '/deploy' },
      { text: '使用帮助', link: '/help' }
    ],

    sidebar: [
      {
        text: '快速入门',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'API 示例', link: '/api-examples' }
        ]
      }
    ]

  }
})