import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";
//import { set_sidebar } from "./utils/auto-gen-sidebar.mjs";	// 改成自己的路径
// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: '/',
  cleanUrls:true, //开启纯净链接
  lang: 'zh-CN', //语言，可选 en-US
  title: "丛雨文档",
  description: "丛雨文档1",
  themeConfig: {
   darkModeSwitchLabel: '深浅模式',
   sidebarMenuLabel:'目录', 
   outlineTitle: "文章目录",
   outline: [2, 6],
   logo: 'icon.jpg',
     //fav图标
   head: [
    ['link',{ rel: 'icon', href: '/icon.jpg'}],
  ],
  
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
      { text: "家", items:[
      {text: "首页", link: "/"},
      {text: "markdown示例", link: "/markdown-examples"},    
      {text: "关于", link: "/gy"},
      ], },
     { text: "markdown示例", link: "/markdown-examples" },
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
    
 /*   sidebar: { 
      "/front-end/react": set_sidebar("/front-end/react"),
      "/backnd/rabbitmq": set_sidebar("/backnd/rabbitmq"),
      },*/

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kexoub' },
    ],
    footer: {
    copyright: "版权 @2024 congyu"
    }
  
  }
})