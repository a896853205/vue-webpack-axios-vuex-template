// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './axiosConfig'
import {Notification} from 'element-ui'

Vue.config.productionTip = false
// axios 全局配置
Vue.prototype.$http = axios

// elementUI 配置
// 使用通知组件
Vue.component(Notification.name, Notification)
Vue.prototype.$notify = Notification

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
