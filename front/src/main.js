import Vue from 'vue'
import './styles/commen.css'
import axios from 'axios'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routerConfig'
import './animate.css'
import resource from "vue-resource";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'



Vue.prototype.$http = axios
Vue.use(resource) 
Vue.use(MintUI);
Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
