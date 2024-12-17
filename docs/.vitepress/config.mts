import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  cleanUrls:true, //开启纯净链接
  title: "丛雨文档",
  description: "丛雨文档1",
  themeConfig: {
   
   outlineTitle: "文章目录",
   outline: [2, 6],
   logo: 'icon.jpg',
   //自定义上下页名 
   docFooter: { 
   prev: '上一页', next: '下一页',
    }, 
   search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    
   
   
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家', items:[
      {text: '首页', link: '/'},
      {text: 'markdown示例', link: '/markdown-examples'}
      ] },
      { text: '示例', link: '/markdown-examples' }
    ],
    
    
    
       
    
     

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown 演示', link: '/markdown-examples' },
          { text: 'Runtime API 演示', link: '/api-examples' }
        ]
      },
     {
        text: 'Examples',
        items: [
          { text: 'Markdown 演示', link: '/markdown-examples' },
          { text: 'Runtime API 演示', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kexoub' }
    ],
    footer: {
    copyright: "版权 @2024 congyu"
    }
  
  }
})