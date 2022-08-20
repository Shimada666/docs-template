# 这是模块1

好啦，这是模块一的正文，开始使用 markdown 编写你的文档吧

## 试试代码功能
```typescript
import { defineConfig } from 'vitepress'

const nav = [
  {
    text: '文档',
    activeMatch: '/docs/',
    link: '/docs/module1'
  }
]

const sidebar = {
  '/docs/': [
    {
      text: '模块1',
      link: '/docs/module1',
      items: [
        { text: 'module1', link: '/docs/module1' },
        { text: 'xxx', link: '/docs/xx' }
      ]
    },
    {
      text: '模块2',
      link: '/docs/module2',
      items: [
        { text: 'module2', link: '/docs/module2' }
      ]
    },
  ]
}


export default defineConfig({
  title: 'docs-template',

  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Shimada666/super-stream'
      }
    ],
    nav,
    sidebar
  }
})
```