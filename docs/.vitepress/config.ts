import { defineConfig } from 'vitepress';
import { github, createSocialLinks, createAlgolia } from './configs/setting.js';
// import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
// import vueJsx from '@vitejs/plugin-vue-jsx'

import nav from './configs/nav'
import sidebar from './configs/sidebar'

export default defineConfig({
  outDir: '../dist',
  base: '/VitePressBlob/',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }
    ]
  ],
  lastUpdated: true,
  useWebFonts: false,
  cleanUrls: true,
  title: 'jsq Blog',
  description: '前端知识存储栈',
  lang: 'zh-CN',
  markdown: {
    lineNumbers: true,
    // config: (md) => {
    //   md.use(demoblockPlugin, {
    //     customClass: 'demoblock-custom'
    //   })
    // }
  },
  themeConfig: {
    outline: 'deep',
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最近更新时间',
    editLink: {
      pattern: `${github}/blob/main/docs/:path`,
      text: '在 GitHub 上编辑此页面'
    },
    footer: {
      message: `jsq 的前端博客，欢迎 <a target="_blank" style="color: var(--vp-c-brand)" href="${github}">star ⭐</a> 让更多人发现`,
      copyright: `<a target="_blank" href="${github}/blob/main/LICENSE">MIT License jsq </a> | 版权所有 © 2023-${new Date().getFullYear()}`
    },
    socialLinks: createSocialLinks(),
    algolia: createAlgolia(),

    nav,
    sidebar
  },
  vite: {
    // plugins: [demoblockVitePlugin(), vueJsx()],
    server: {
      port: 8000
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  }
});




