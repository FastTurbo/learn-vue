/**
 * Created by 502742374 on 2017/5/18.
 */
import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router/dist/vue-router.common'
import Vuex from 'vuex/dist/vuex'
import App from './components/app.vue'
import Index from './components/index/index.vue'
import Family from  './components/family/family.vue'
import Education from './components/education/education.vue'
import style from './css/style.css'
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment (state) {
      state.count++
    }
  }
})

const routes = [
  {path:'/index',component:Index},
  {path:'/family',component:Family},
  {path:'/education/:user',component:Education}
]

const router = new VueRouter({routes})


new Vue({
  router,
  store,
  render:h => h(App)
}).$mount('#app')