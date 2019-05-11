import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home.vue'
import Map from '../components/pages/Map.vue'
import site from '../components/pages/SiteInfor.vue'/* 站点详情 */
import Sitemap01 from '../components/pages/Sitemap01.vue'/* 站点详情里的苹果园 */
import TimeTable from '../components/pages/TimeTable.vue'/* 首末班时间 */
import SubKnowlegde from '../components/pages/SubKnowlegde.vue' /* 地铁知识 */
import Wall from '../components/pages/Wall.vue'/* 地铁文化墙 */
import Car from '../components/pages/Car.vue' /* 车辆知识 */
import Equipment from '../components/pages/Equipment.vue'/* 设备知识 */
import Intro from '../components/pages/Intro.vue'/* 世界地铁介绍 */
import News from '../components/pages/News.vue'/* 新闻 */
import Event from '../components/pages/Event.vue'/* 大事件 */
import Delay from '../components/pages/Delay.vue'/* 延误 */
/* import Login from '../components/pages/Login.vue' *//* 登录页面 */

Vue.use(Router)

export default new Router({
  /* 一个路由就是一个页面，一个页面里面可以有好几个组件 */
  routes: [
    {
      path: '/',
      name: 'Home', //组件名是字符串
      component: Home //上边引进来的组件，不是字符串
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/siteInfor',
      name: 'site',
      component: site
    },
    {
      path: '/Sitemap01',
      name: 'Sitemap01',
      component: Sitemap01
    },
    {
      path: '/TimeTable',
      name: 'TimeTable',
      component: TimeTable
    },
    {
      path: '/SubKnowlegde',
      name: 'SubKnowlegde',
      component: SubKnowlegde
    },
    {
      path: '/Wall',
      name: 'Wall',
      component: Wall
    },
    {
      path: '/Car',
      name: 'Car',
      component: Car
    },
    {
      path: '/Equipment',
      name: 'Equipment',
      component: Equipment
    },
    {
      path: '/Intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Event',
      name: 'Event',
      component: Event
    },
    {
      path: '/Delay',
      name: 'Delay',
      component: Delay
    },
    /* {
      path: '/Login',
      name: 'Login',
      component: Login
    } */
  ]
})
