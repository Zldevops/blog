import { defineNavbar } from 'vuepress-theme-plume'

export default defineNavbar([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: 'Golang', link: '' },
  { text: 'Linux', link: '' },
  { text: '云原生',
   items: [
    {
        text: '基础',
        items: [
            { text: 'Docker', link: '' },
            { text: 'Kubernetes', link: '' },
            { text: 'Kubesphere', link: '' },
            { text: 'CI/CD', link: '' },
        ]
    },
    {
        text: '进阶',
        items: [
            { text: '微服务架构', link: '' },
            { text: '服务网路', link: '' },
            { text: '不可变基础设施', link: '' },
            { text: '监控', link: '' },
            { text: '日志', link: '' },
        ]
    },
    
    
   

  ] 
 },
  { text: '存储', link: '' },
  { text: '网络', link: '' },
  { text: '数据库', 
      items: [
        {
            text: '关系型',
            items: [
                { text: 'MySQL', link: '' },
                { text: 'pgSQL', link: '' },
                { text: '达梦', link: '' },
            ]
        },
        {
            text: '非关系型',
            items: [
                { text: 'Redis', link: '' },
            ]
        },
 
]},
  { text: '友情链接', link: '/category/friends/' },
  { text: '关于', link: '/category/about/' },
  
  // ... more
])