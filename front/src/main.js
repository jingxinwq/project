import Vue from 'vue'
import './styles/commen.css'
import axios from 'axios'
import App from './App.vue'
import router from './routerConfig'
import './animate.css'
import resource from "vue-resource";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


Vue.prototype.$http = axios
Vue.use(resource) 
Vue.use(MintUI);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
