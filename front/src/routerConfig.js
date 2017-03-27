import Vue from 'vue'
import VueRouter from 'vue-router'

//import Todayzk from './components/todayzk/todayzk.vue'
//import Quanqiugou from './components/quanqiugou/quanqiugou.vue'
//import List from './components/quanqiugou/list.vue'
//import Detail from './components/quanqiugou/detail.vue'
//import Gouwuche from './components/gouwuche/gouwuche.vue'
//import Myjuanpi from './components/myjuanpi/myjuanpi.vue'
//import Zhifacang from './components/zhifacang/zhifacang.vue'
const Todayzk = resolve => require(["./components/todayzk/todayzk.vue"], resolve)
const Quanqiugou = resolve => require(["./components/quanqiugou/quanqiugou.vue"], resolve)
const List = resolve => require(["./components/quanqiugou/list.vue"], resolve)
const Detail = resolve => require(["./components/quanqiugou/detail.vue"], resolve)
const Gouwuche = resolve => require(["./components/gouwuche/gouwuche.vue"], resolve)

const Myjuanpi = resolve => require(["./components/myjuanpi/myjuanpi.vue"], resolve)

const Zhifacang = resolve => require(["./components/zhifacang/zhifacang.vue"], resolve)

Vue.use(VueRouter)
const routes=[
{
	path: '/todayzk',
	component: Todayzk
},
{
	path: '/zhifacang',
	component: Zhifacang
},
{
	path: '/quanqiugou',
	component: Quanqiugou,
	redirect:'/quanqiugou/list',
	children:[
			{
				path:'list',
				component:List,
			},
			{
				path:'detail/:Id',
				component:Detail,
				name: 'detail'
			}
		
		]
},
{
	path:'/gouwuche',
    component:Gouwuche,
},
{
	path: '/myjuanpi',
	component: Myjuanpi
}
]
const router = new VueRouter({
  mode: 'history', //模式改变 (hash,history)
  routes// （缩写）相当于 routes: routes
})

export default router;