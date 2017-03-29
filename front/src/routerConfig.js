import Vue from 'vue'
import VueRouter from 'vue-router'


// const Today = resolve => require(["./components/todayzk/today.vue"], resolve)
// const Todayzk = resolve => require(["./components/todayzk/todayzk.vue"], resolve)
// const Quanqiugou = resolve => require(["./components/quanqiugou/quanqiugou.vue"], resolve)
// const List = resolve => require(["./components/quanqiugou/list.vue"], resolve)

// const Detail1 = resolve => require(["./components/todayzk/detail.vue"], resolve)
// const Detail2 = resolve => require(["./components/quanqiugou/detail.vue"], resolve)

// const GoodsDetail1 = resolve => require(["./components/todayzk/goodsDetail.vue"], resolve)
// const GoodsDetail2 = resolve => require(["./components/quanqiugou/goodsDetail.vue"], resolve)

// const Gouwuche = resolve => require(["./components/gouwuche/gouwuche.vue"], resolve)

// const Myjuanpi = resolve => require(["./components/myjuanpi/myjuanpi.vue"], resolve)

// const Zhifacang = resolve => require(["./components/zhifacang/zhifacang.vue"], resolve)
// const User = resolve => require(["./components/myjuanpi/user.vue"], resolve)
// const Login = resolve => require(["./components/myjuanpi/login.vue"], resolve)
// const Register = resolve => require(["./components/myjuanpi/register.vue"], resolve)
// const Userinfo = resolve => require(["./components/myjuanpi/userinfo.vue"], resolve)
// const Aboutme = resolve => require(["./components/myjuanpi/aboutme.vue"], resolve)
// const Callcenter = resolve => require(["./components/myjuanpi/callcenter.vue"], resolve)
// const Mycollect = resolve => require(["./components/myjuanpi/mycollect.vue"], resolve)
// const Order = resolve => require(["./components/myjuanpi/order.vue"], resolve)

import Today from "./components/todayzk/today.vue"
import Todayzk from "./components/todayzk/todayzk.vue"
import Quanqiugou from"./components/quanqiugou/quanqiugou.vue"
import List from"./components/quanqiugou/list.vue"

import Detail1 from"./components/todayzk/detail.vue"
import Detail2 from"./components/quanqiugou/detail.vue"

import GoodsDetail1 from"./components/todayzk/goodsDetail.vue"
import GoodsDetail2 from"./components/quanqiugou/goodsDetail.vue"

import Gouwuche from"./components/gouwuche/gouwuche.vue"

import Myjuanpi from"./components/myjuanpi/myjuanpi.vue"

import Zhifacang from"./components/zhifacang/zhifacang.vue"
import User from"./components/myjuanpi/user.vue"
import Login from"./components/myjuanpi/login.vue"
import Register from"./components/myjuanpi/register.vue"
import Userinfo from"./components/myjuanpi/userinfo.vue"
import Aboutme from"./components/myjuanpi/aboutme.vue"
import Callcenter from"./components/myjuanpi/callcenter.vue"
import Mycollect from"./components/myjuanpi/mycollect.vue"
import Order from"./components/myjuanpi/order.vue"

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
			path:'detail/:Id&:goods_Id&:show_etime',
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
			},
			{
				path:'userinfo',
				component:Userinfo,
				name:'userinfo'
			},

			{
				path:'aboutme',
				component:Aboutme,
				name:'aboutme'
			},
			{
				path:'callcenter',
				component:Callcenter,
				name:'callcenter'
			},
			{
				path:'mycollect',
				component:Mycollect,
				name:'mycollect'
			},
			{
				path:'order',
				component:Order,
				name:'order'
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