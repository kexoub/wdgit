// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import xgplayer from "./components/xgplayer.vue"
import backtotop from "./components/backtotop.vue" 
import MyLayout from './components/MyLayout.vue'
import DataPanel from "./components/DataPanel.vue"
import notice from "./components/notice.vue"


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
       'layout-top': () => h(notice), 
       'doc-footer-before': () => h(backtotop),
       Layout: MyLayout, 
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('DataPanel' , DataPanel)
    app.component('xgplayer' , xgplayer)
    
    // ...
   if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  
  }
  
} satisfies Theme