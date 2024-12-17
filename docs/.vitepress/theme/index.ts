// https://vitepress.dev/guide/custom-theme
import DataPanel from "./components/DataPanel.vue"
import busuanzi from 'busuanzi.pure.js'
import { inBrowser } from 'vitepress'
import xgplayer from "./components/xgplayer.vue"
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('DataPanel' , DataPanel)
    app.component('xgplayer' , xgplayer)
    // ...
  }
} satisfies Theme