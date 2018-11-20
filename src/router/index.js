import Vue from 'vue'
import Router from 'vue-router'

import preindex from '@/components/preindex'
import home from '@/components/home/home'
import menu from '@/components/home/menu'
import play from '@/components/home/play'
import displaychoose from '@/components/home/displaychoose'
import foot from '@/components/home/foot'
import listall from '@/components/content/listall'
import about from '@/components/content/about'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'preindex',
      component: preindex
    },

    //首页
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        //菜单导航栏
        {
          path:'menu',
          name:'menu',
          component:menu
        },
        //轮播图
        {
          path:'play',
          name:'play',
          component:play
        },
        //精选
        {
          path:'displaychoose',
          name: 'displaychoose',
          component:displaychoose
        },
        //页脚
        {
          path:'foot',
          name:'foot',
          component:foot
        }
      ]
    },
    
    //列表
    {
      path:'/listall',
      name:'listall',
      component:listall
    },

    //关于
    {
      path:'/about',
      name:'about',
      component:about
    },
    {
      path:'/',
      redirect:'/'
    }
  ]
})
