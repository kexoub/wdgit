// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import backtotop from "./components/backtotop.vue" 
import MyLayout from './components/MyLayout.vue'
import DataPanel from "./components/DataPanel.vue"
import { inBrowser } from 'vitepress'
import bsz from "./components/bsz.vue"
import busuanzi from 'busuanzi.pure.js'
import xgplayer from "./components/xgplayer.vue"


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(bsz), //不蒜子layout-bottom插槽
       Layout: MyLayout, 
       Layout: bsz, 
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