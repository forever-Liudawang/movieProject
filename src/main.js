import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Loading from '@/components/loading'
import axios from 'axios'
import scroll from '@/components/scroll'
import 'swiper/dist/css/swiper.css';
Vue.config.productionTip = false
Vue.prototype.axios=axios;        //全局使用axios
Vue.use(elementUi)
Vue.component('Loading',Loading)  //全局组件
Vue.component('scroll',scroll)
Vue.filter('setWH',(url,arg)=>{   //全局过滤器
  return url.replace(/w\.h/,arg)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
