import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/pomelo-pjsk-plugins-docs/',

  title: "帮助文档",
  description: "For pomelo-pjsk-plugins",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '抓包教程', link: '/capture' },
      { text: '部署教程', link: '/deploy' },
      { text: '使用帮助', link: '/help' }
    ],

    sidebar: [
      {
        text: '抓包教程',
        items: [
          { text: 'IOS抓包教程', link: '/capture_ios' },
          { text: 'IOS模块抓包教程', link: '/capture_module' },
          { text: '安卓模拟器抓包教程', link: '/capture_simulator' }

        ]

      }
    ]

  }
})