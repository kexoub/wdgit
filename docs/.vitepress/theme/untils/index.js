// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import MyLayout from './components/MyLayout.vue'
import notice from "./components/notice.vue"
import giscusTalk from 'vitepress-plugin-comment-with-giscus'; 
import { useData, useRoute } from 'vitepress';
import ArticleMetadata from "./components/ArticleMetadata.vue"
//import { useLive2d } from 'vitepress-theme-website'



export default {
  ...DefaultTheme,
  Layout: MyLayout, 
  
  
  
  
  
  
  
 // useWaline({ serverURL: 'https://waline.xn--whqu88o.us.kg' }),
  
  
  
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
  
};

