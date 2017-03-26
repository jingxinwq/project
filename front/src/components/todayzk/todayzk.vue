<template>
	<div id="todayzk">
		<div id="header">
			<div class="inner">
				<img src="http://jp.juancdn.com/jpwebapp_v1/images_v1/head/top-logo.png?67655ac3"/>
			</div>
		</div>
		
	
		<ul id="nav">
			<li v-for="data in titleData">{{data.title}}</li>
		</ul>
		
		<swipe class="my-swipe" :showIndicators="true">
		  <swipe-item v-for="data in swipeData">
				<img :src="data"/>
		  </swipe-item>
		</swipe>
		
		<div id="category">
			<ul>
				<li v-for="data in categoriesData">
					<img :src="data.pic" />
					<span>{{data.words}}</span>
				</li>
			</ul>
		</div>
		<!------------------三图片div---------------------->
		<div id="threeimg">
			<img class="left" src="//s2.juancdn.com/bao/170322/3/0/58d23ce5ad0a490d0a8b45d7_375x456.png?iopcmd=convert&Q=88&dst=png" />
			<div class="right">
				<img src="//s2.juancdn.com/bao/170324/f/8/58d4dbb4ad0a4981738b4599_375x228.jpg?iopcmd=convert&Q=88&dst=jpg" />
				<img src="//s2.juancdn.com/bao/170324/6/3/58d4dc20ad0a49fe738b459b_375x228.jpg?iopcmd=convert&Q=88&dst=jpg" />
			</div>
			
		</div>
		
		<img id="eight" src="http://s2.juancdn.com/bao/170310/0/f/58c20db7a43d1f63427015d8_750x96.jpg?iopcmd=convert&Q=88&dst=jpg"/>

		<div id="goods">
			<ul>
				<li v-for="data in goodsData">
					<img :src="data.pic_url"/>
					<div v-if="data.coupon != undefined" >
						<div class="up">
							<span class="upl" >{{data.coupon.rules[0].aeBankInfo}}</span>
							<span class="upr">{{data.residue}}</span>
						</div>
						<span class="down">{{data.coupon.abName}}</span>
						
					</div>
					<div v-if="data.coupon == undefined" >
						<div class="up">
							<span class="upl" >{{data.sub_title}}</span>
							<span class="upr">{{data.residue}}</span>
						</div>
						<span class="down">{{data.main_title}}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
// import router from "../router" ;
import axios from "axios";
import VueResouse from 'vue-resource'

require('vue-swipe/dist/vue-swipe.css');

export default {
  name: 'home',
  data () {
    return {
    	
		titleData:[],
		swipeData:[],
		categoriesData:"",
		goodsNameData:[],
		goodsData:[]
    }
  },
  mounted(){
  	//ajax 请求
  	axios.get("http://localhost:3000/homeapi/select1_1")
      .then( response=>{	
//    	console.log(response)
          for(var i=0;i<response.data.menu_list.length;i++){
           	for(var j=0;j<response.data.menu_list[i].subtab.length;j++){
           		this.titleData.push( response.data.menu_list[i].subtab[j])
           	}
          }
      })
      .catch(function (error) {
        console.log(error);
		});
		
	this.$http.jsonp("http://ad.juanpi.com/advert/ad?unique=module_ads%2Cbanner_ads%2Ctopbanner%2Cpopup_ads&cat_name=newest_zhe&zy_id=c3_l1_18_51_5&platform=m&_=1490441007163&",
      {//请求参数
        jsonp:'callback'
      }).then(function(res){
//      console.log(res.body)
        for(var i = 0;i<res.body.banner_ads.length;i++){
        	this.swipeData.push(res.body.banner_ads[i].pic)
        }
        
        this.categoriesData = res.body.module_ads.multi_block[0].data[0].child

      },function(){
      	
      });
		
	this.$http.jsonp("https://shop.juanpi.com/gsort?key=zuixinzhekou&type=1&zhouyi_ids=p8_c3_l1_18_51_5&machining=hotcoupon&page=1&rows=10&dtype=JSONP&cm=1&cm_channel=1&",
      {//请求参数
        jsonp:'callback'
      }).then(function(res){
        console.log(res.body)
		for(var i = 0;i<res.body.list.length;i++){
			this.goodsData.push(res.body.list[i])
        }
		console.log(this.goodsData)
      },function(){
      });	
		
  },
  components:{
  		"swipe":Swipe,
  		"swipe-item":SwipeItem
  },
  methods:{
  	changePage(id){
  		router.push({ name: 'detail', params: { restaurantid: id }})
  	}
  },
  computed:{
  	
  }
}
</script>

<style scoped>
	#todayzk{
		overflow: auto;
		height: 12.53rem;
	}
	#header{
		width: 100%;
		height: 0.8rem;
		background: #fff;
		
	}
	#header .inner{
		text-align: center;

		height: 0.8rem;
	}
	#header .inner img{
		vertical-align: middle;
		height: 0.44rem;
		background: #fff;
	}
	#nav{
		width:100%;
		height: 0.7rem;
		line-height: 0.6rem;
		display: flex;
	  	font-size: 0.24rem;
	  	align-items:center;
	  	white-space:nowrap;
	  	overflow-x:auto;
	  	background: #fff;
	}
	#nav li{
		padding:0 0.12rem;
		margin: 0 0.25rem;
		text-align: center;
		background: #fff;
	}	
	#nav li:nth-child(1){
		color: #FF464E;
		border-bottom: 0.02rem solid #FF464E;
	}	
	
	.my-swipe {
		width: 100%;
	  	height: 2.9rem;
	  	color: #fff;
	  	text-align: center;
	}
	.my-swipe img{
		width: 100%;
	  	height: 2.9rem;
	}
	#category{
		
	}
	#category ul{
		display: flex;
		height: 1.63rem;
		background: #fff;
	}
	#category ul li{
		flex: 1;
		float: left;
		font-size: 0.22rem;
		text-align: center;
		padding:0.25rem 0;
		
	}
	#category ul li img{
		width: 0.73rem;
		height: 0.73rem;
		margin: 0 auto 0.16rem;	
		background: #fff;	
	}
	#category ul li span{
		display: block;
		background: #fff;
	}
	#eight{
		margin: 0.09rem 0 0 0;
		width: 100%;
		vertical-align:middle;
	}
	#threeimg{
		margin-top: 0.12rem;
	}
	#threeimg .left{
		height: 4.55rem;
		float: left;
	}
	#threeimg .right{
		float: left;
		display: flex;
		flex-direction: column;
		height: 4.55rem;
	}
	#threeimg .right img{
		height: 2.275rem;
		flex: 1;
	}
	#goods ul li{
		width: 3.68rem;
		height: 4.79rem;
		float: left;
		margin-top: 0.14rem;
		margin-right: 0.14rem;
		background: #fff;
	}
	#goods ul li:nth-child(2n){
		margin-right: 0;
	}
	#goods ul li img{
		width: 100%;
	}
	#goods ul li span{
		display: block;
		font-size:0.22rem ;
	}
	#goods ul li div{
		margin: 0 0.2rem;
	}
	#goods ul li .up{
		height: 0.3rem;
		
		display: block;
		margin: 0;
	}
	#goods ul li .up .upl{
		color: #FF464E;
		font-size: 0.26rem;
		float: left;
	}
	#goods ul li .up .upr{
		color: #ccc;
		font-size: 0.2rem;
		float: right;
	}
	#goods ul li .down{
		display: block;
		margin-top: 0.1rem;
		height: 0.3rem;
		float: left;
	}
</style>
