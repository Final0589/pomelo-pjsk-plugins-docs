// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css' // 确保这里引入了我们刚才写的 CSS

export default {
  extends: DefaultTheme, // 必须继承默认主题
  enhanceApp({ app, router, siteData }) {
    // 如果有插件在这里注册
  }
}