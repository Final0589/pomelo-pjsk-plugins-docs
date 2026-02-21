import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/pomelo-pjsk-plugins-docs/',
  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    }
  },
  title: "帮助文档",
  description: "For pomelo-pjsk-plugins",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '抓包教程', link: '/capture/ios' },
      { text: '部署教程', link: '/deploy/server.md' },
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
          { text: '部署到服务器(Linux系统)', link: '/deploy/server' },
          { text: '部署到计算机(Windows系统)', link: '/deploy/local' }
        ]
      },
      {
        text: '使用帮助',
        items: [
          { text: '绑定账号', link: '/help/bind' },
          { text: '个人信息', link: '/help/profile'},
          { text: '查询卡面', link: '/help/card'},
          { text: '查询铺面', link: '/help/chart'},
          { text: '打胶(下载纸膜)', link: '/help/dajiao'},
          { text: '查询活动', link: '/help/event'},
          { text: '查询曲目', link: '/help/music'},
          { text: 'sk榜线', link: '/help/sk'},
          { text: '表情包生成', link: '/help/stamp'},

        ]
      }
    ]

  }
})