// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import MyLayout from './components/MyLayout.vue'
import notice from "./components/notice.vue"

import ArticleMetadata from "./components/ArticleMetadata.vue"

export default {
  ...DefaultTheme,
  Layout: MyLayout, 
  
  
  
};