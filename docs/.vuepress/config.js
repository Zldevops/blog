import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
import navbar from './navbar'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  base: '/blog/',
  lang: 'zh-CN',
  title: ' TechSpectrum ',
  description: '这是我的第一个 VuePress 站点',
  
  theme: plumeTheme({
    logo:'/images/博客.png',
    
    //导航栏单独配置
    navbar:navbar,
    profile: {
        avatar: '/blog/avatar.jpg',
        name: '',
        description: '此处无银三百两，隔壁王二不曾偷',
        circle: true,
        location: '陕西，中国',
      },
      social: [
        { icon: 'github', link: 'https://github.com/Zldevops' },
        { icon: 'gitlab', link: 'https://github.com/zhangsan' },
        { icon: 'twitter', link: 'https://github.com/zhangsan' },
        { icon: 'qq', link: 'https://github.com/zhangsan' },
        { icon: 'weibo', link: 'https://github.com/zhangsan' },
        { icon: 'bilibili', link: 'https://github.com/zhangsan' }
      ],
      //仅允许github出现在导航栏，其他社交在博客页面
      navbarSocialInclude:['github'],
      footer:  { message: "Released under the MIT License,Copyright © 2024-present chizhang977"}
  }),
  bundler: viteBundler(),
})