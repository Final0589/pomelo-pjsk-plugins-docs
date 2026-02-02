import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/pomelo-pjsk-plugins-docs/',

  title: "帮助文档",
  description: "For pomelo-pjsk-plugins",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '抓包教程', link: '/capture/ios' },
      { text: '部署教程', link: '/deploy/server' },
      { text: '使用帮助', link: '/help/bind' }
    ],

    sidebar: [
      {
        text: '抓包教程',
        items: [
          { text: 'IOS抓包教程', link: '/capture/ios' },
          { text: 'IOS模块抓包教程', link: '/capture/module' },
          { text: '安卓模拟器抓包教程', link: '/capture/simulator' }

        ]
      },
      {
        text: '部署教程',
        items: [
          { text: '部署到服务器', link: '/deploy/server' },
          { text: '部署到本地', link: '/deploy/local' }
        ]
      },
      {
        text: '使用帮助',
        items: [
          { text: '使用帮助', link: '/help/bind' }
        ]
      }
    ]

  }
})