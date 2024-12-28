// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Theme from 'awesome-vitepress-theme'
import './style.css'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import xgplayer from "./components/xgplayer.vue"
import backtotop from "./components/backtotop.vue" 
import DataPanel from "./components/DataPanel.vue"
import notice from "./components/notice.vue"
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import ArticleMetadata from "./components/ArticleMetadata.vue"




export default {
  extends: DefaultTheme,
  
  setup() {
  
  const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: 'kexoub/wdgit', //仓库
      repoId: 'R_kgDONerqOg', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDONerqOs4ClS2m', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
    },
  
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
  
  /*
  build: {
    target: 'esnext' // 确保构建目标为现代浏览器
  }
}
  */
 
  
  
}  satisfies Theme;


  
  
    