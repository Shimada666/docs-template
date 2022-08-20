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
  description: '一个 vitepress 文档模板，适用于 github 代码文档',
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Shimada666/docs-template'
      }
    ],
    editLink: {
      pattern: 'https://github.com/shimada666/docs-template/edit/master/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Shimada666'
    },
    nav,
    sidebar
  },
  vite: {
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    }
  },
  vue: {
    reactivityTransform: true
  }
})
