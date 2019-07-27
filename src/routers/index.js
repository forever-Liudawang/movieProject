import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    {
      path:'/*',
      redirect:'/movie'
    }
  ],
  scrollBehavior(to,from,savePosition){
    return {x:0,y:0}
  } //页面请求数据刷新之后回到页面顶部
})
