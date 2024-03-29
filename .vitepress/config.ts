import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

const nav = [
  {
    text: '文档',
    activeMatch: '/docs/',
    link: '/docs/module1',
  },
]

export default defineConfig({
  title: 'docs-template',
  description: '一个 vitepress 文档模板，适用于 github 代码文档',
  lastUpdated: true,
  vite: {
    // @ts-expect-error autobar
    plugins: [AutoSidebar({ prefix: '.', path: '.', collapsed: true })],
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Shimada666/docs-template',
      },
    ],
    editLink: {
      pattern: 'https://github.com/shimada666/docs-template/edit/master/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Shimada666',
    },
    nav,
  },
})
