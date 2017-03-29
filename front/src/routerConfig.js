import Vue from 'vue'
import VueRouter from 'vue-router'

//import Todayzk from './components/todayzk/todayzk.vue'
//import Quanqiugou from './components/quanqiugou/quanqiugou.vue'
//import List from './components/quanqiugou/list.vue'
//import Detail from './components/quanqiugou/detail.vue'
//import Gouwuche from './components/gouwuche/gouwuche.vue'
//import Myjuanpi from './components/myjuanpi/myjuanpi.vue'
//import Zhifacang from './components/zhifacang/zhifacang.vue'
const Today = resolve => require(["./components/todayzk/today.vue"], resolve)
const Todayzk = resolve => require(["./components/todayzk/todayzk.vue"], resolve)
const Quanqiugou = resolve => require(["./components/quanqiugou/quanqiugou.vue"], resolve)
const List = resolve => require(["./components/quanqiugou/list.vue"], resolve)

const Detail1 = resolve => require(["./components/todayzk/detail.vue"], resolve)
const Detail2 = resolve => require(["./components/quanqiugou/detail.vue"], resolve)

const GoodsDetail1 = resolve => require(["./components/todayzk/goodsDetail.vue"], resolve)
const GoodsDetail2 = resolve => require(["./components/quanqiugou/goodsDetail.vue"], resolve)

const Gouwuche = resolve => require(["./components/gouwuche/gouwuche.vue"], resolve)

const Myjuanpi = resolve => require(["./components/myjuanpi/myjuanpi.vue"], resolve)

const Zhifacang = resolve => require(["./components/zhifacang/zhifacang.vue"], resolve)
const User = resolve => require(["./components/myjuanpi/user.vue"], resolve)
const Login = resolve => require(["./components/myjuanpi/login.vue"], resolve)
const Register = resolve => require(["./components/myjuanpi/register.vue"], resolve)

Vue.use(VueRouter)
const routes=[
{
	path: '/today',
	component: Today,
	redirect:'/today/todayzk',
	children:[
			{
				path:'todayzk',
				component:Todayzk,
			},
			{
				path:'todayzk/detail/:Id&:goods_Id&:show_etime',
				component:Detail1,
				name: 'detail1'
			},
			{
				path:'goodsDetail/:Id&:goods_Id',
				component:GoodsDetail1,
				name: 'goodsDetail1'				
			}
		
		]
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
				component:Detail2,
				name: 'detail2'
			},
			{
				path:'goodsDetail',
				component:GoodsDetail2,
				name: 'goodsDetail2'				
			}
		
		]
},
{
	path:'/gouwuche',
    component:Gouwuche,
},
{
	path: '/myjuanpi',
	component: Myjuanpi,
	redirect:'/myjuanpi/user',
	children:[
			{
				path:'user',
				component:User,
			},
			{
				path:'register',
				component:Register,
				name:'register'
			},
			{
				path:'login',
				component:Login,
				name:'login'
			}
		
		]
},
	// {path:"/*",redirect:"/today"}
]
const router = new VueRouter({
  mode: 'history', //模式改变 (hash,history)
  routes// （缩写）相当于 routes: routes
})

export default router;