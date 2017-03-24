import Vue from 'vue'
import './styles/commen.css'
import axios from 'axios'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routerConfig'
import './animate.css'




Vue.use(VueRouter)
Vue.prototype.$http = axios


const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
