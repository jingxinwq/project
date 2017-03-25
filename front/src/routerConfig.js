
import Todayzk from './components/todayzk/todayzk.vue'
import Quanqiugou from './components/quanqiugou/quanqiugou.vue'
import List from './components/quanqiugou/list.vue'
import Detail from './components/quanqiugou/detail.vue'
import Gouwuche from './components/gouwuche/gouwuche.vue'
import Myjuanpi from './components/myjuanpi/myjuanpi.vue'
import Zhifacang from './components/zhifacang/zhifacang.vue'
export default [
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
				path:'detail',
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