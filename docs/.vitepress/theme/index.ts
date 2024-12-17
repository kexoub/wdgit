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
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import ArticleMetadata from "./components/ArticleMetadata.vue"



export default {
  extends: DefaultTheme,
  Layout: MyLayout, 
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
       'doc-footer-before': () => h(backtotop),
       'layout-top': () => h(notice),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      
      
      
    })
    
    
    
  },
  enhanceApp({ app, router, siteData }) {
    app.component('ArticleMetadata' , ArticleMetadata)
    app.component('DataPanel' , DataPanel)
    app.component('xgplayer' , xgplayer)
   
    
    
    // ...
   if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
        
      }
      
    }
  
  }
  
  build: {
    target: 'esnext' // 确保构建目标为现代浏览器
  }
}
  
 
  
  
} satisfies Theme


  
  
    