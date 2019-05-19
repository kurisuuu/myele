// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import './assets/styles/iconfont/iconfont.css'

import axios from 'axios'
Vue.prototype.$axios = axios


import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  preload:1.3,
  loading:"./assets/img/t.jpg"
})

import 'styles/reset.css'
import 'styles/base.scss'
import 'styles/border.css'
// import VueLazyload from 'vue-lazyload';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
