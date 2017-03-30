<template>
	<div id="todayzk">
	    <mt-loadmore :top-method="loadTop" :top-all-loaded="allLoaded" ref="loadmore" @top-status-change="handleTopChange">
	      <div slot="top" class="mint-loadmore-top">
	        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">下拉刷新</span>
	        <span v-show="topStatus === 'loading'">正在刷新数据...</span>
	      </div>
		  
	      <div id="header">
	        <div class="inner">
	          <img class="titleimg" src="http://jp.juancdn.com/jpwebapp_v1/images_v1/head/top-logo.png?67655ac3"/>
	          <span class="search" @click="handleSearch()">
	          	<img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/head/btn-sign.png?20160812" /> 
	          </span>
	        </div>
	      </div>
	      
	      <ul id="nav">
	        <li v-for="data in titleData" key="{{data.title}}">{{data.title}}</li>
	      </ul>
	      
	      <swipe class="my-swipe" :showIndicators="true">
	        <swipe-item v-for="data in swipeData" key="{{data}}">
	          <img :src="'http:'+data"/>
	        </swipe-item>
	      </swipe>
	      
	      <div id="category">
	        <ul>
	          <li v-for="data in categoriesData" key="{{data.words}}">
	            <img :src="'http:'+data.pic" />
	            <span>{{data.words}}</span>
	          </li>
	        </ul>
	      </div>

	      <!------------------三图片div---------------------->
	      <div id="threeimg">
	        <img class="left" src="https://s2.juancdn.com/bao/170322/3/0/58d23ce5ad0a490d0a8b45d7_375x456.png?iopcmd=convert&Q=88&dst=png" />
	        <div class="right">
	          <img src="https://s2.juancdn.com/bao/170324/f/8/58d4dbb4ad0a4981738b4599_375x228.jpg?iopcmd=convert&Q=88&dst=jpg" />
	          <img src="https://s2.juancdn.com/bao/170324/6/3/58d4dc20ad0a49fe738b459b_375x228.jpg?iopcmd=convert&Q=88&dst=jpg" />
	        </div>
	      </div>
	      
	      <img id="eight" src="http://s2.juancdn.com/bao/170310/0/f/58c20db7a43d1f63427015d8_750x96.jpg?iopcmd=convert&Q=88&dst=jpg"/>

	      <div id="goods">
	        <ul 
	          v-infinite-scroll="loadMore"
			  infinite-scroll-disabled="loading"
			  infinite-scroll-distance="10">
	          
	          <li v-for="data in goodsData" key="{{data.residue}}" @click="changepage(data.shop_id,data.brand_id,data.goods_id,data.show_etime)">
	            <img :src="'http:'+data.pic_url"/>
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
	    </mt-loadmore>
	</div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import router from "../../routerConfig";
// import router from "../router" ;
import axios from "axios";
import Vue from 'vue'
import VueResouse from 'vue-resource';
import Url from '../../address';

import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll)

import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

require('vue-swipe/dist/vue-swipe.css');

export default {
  name: 'home',
  data () {
    return {
    	
		titleData:[],
		swipeData:[],
		categoriesData:"",
		goodsNameData:[],
		goodsData:[],
	    topStatus:"",
	    loadmoreData:1,
	    allLoaded:false,
	    loading:false,
	    url:""
    }
  },
  mounted(){
  	//ajax 请求
  	this.url = Url.url; //服务器

  	//获取导航
  	axios.get(`${this.url}/homeapi/select1_1`)
      .then( response=>{
          for(var i=0;i<response.data.menu_list.length;i++){
           	for(var j=0;j<response.data.menu_list[i].subtab.length;j++){
           		this.titleData.push( response.data.menu_list[i].subtab[j])
           	}
          }
      })
      .catch(function (error) {
        console.log(error);
	  });

	//获取轮播
	this.$http.jsonp("http://ad.juanpi.com/advert/ad?unique=module_ads%2Cbanner_ads%2Ctopbanner%2Cpopup_ads&cat_name=newest_zhe&zy_id=c3_l1_18_51_5&platform=m&_=1490441007163&",
      {//请求参数
        jsonp:'callback'
      }).then((res)=>{
        for(var i = 0;i<res.body.banner_ads.length;i++){
        	this.swipeData.push(res.body.banner_ads[i].pic)
        }
        
        this.categoriesData = res.body.module_ads.multi_block[0].data[0].child

      },function(){
      	
      });
  },
  components:{
	"swipe":Swipe,
	"swipe-item":SwipeItem
  },
  methods:{
  	changepage(id,brand_id,goods_id,show_etime){
  		console.log(id);
  		console.log(brand_id);
  		console.log(goods_id);
  		console.log(show_etime);
  			router.push({ name: 'detail1', params: { Id: id ,brand_Id:brand_id,goods_Id:goods_id,show_etime:show_etime}})
  	},
  	handleSearch(){
  		router.push({ name: 'search'})
  	},

    loadTop() {
      //下拉刷新
      this.$http.jsonp("https://shop.juanpi.com/gsort?key=zuixinzhekou&type=1&zhouyi_ids=p8_c3_l1_18_51_5&machining=hotcoupon&page=1&rows=10&dtype=JSONP&cm=1&cm_channel=1&",
        {//请求参数
          jsonp:'callback'
        }).then(function(res){
          this.goodsData=[]
	      for(var i = 0;i<res.body.list.length;i++){
	        this.goodsData.push(res.body.list[i])
	      }
	      this.$refs.loadmore.onTopLoaded();
      // console.log(this.goodsData)
      },function(){

      }); 
    },

    handleTopChange(status) {
      this.topStatus = status;
    },
   
    loadMore() {
      // 上滑加载
      // console.log("加载")
      this.loading = true;
      
      this.$http.jsonp(`https://shop.juanpi.com/gsort?key=zuixinzhekou&type=1&zhouyi_ids=p8_c3_l1_18_51_5&machining=hotcoupon&page=${this.loadmoreData}&rows=10&dtype=JSONP&cm=1&cm_channel=1&callback=gsort_callback`,
        {//请求参数
          jsonp:'callback'
        }).then((res)=>{
          this.loading = false;
	      this.goodsData = [...this.goodsData,...res.body.list]
	      this.loadmoreData++;
	      console.log(this.goodsData)
        },function(){

        }); 
    }
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
		overflow: hidden;
	}
	#header .inner{
		text-align: center;
		height: 0.8rem;
		overflow: hidden;
		position: relative;
	}
	#header .inner .titleimg{
		vertical-align: middle;
		height: 0.44rem;
		background: #fff;
		margin: 0.2rem auto;
		display: block;
	}
	#header .inner .search{
		width: 0.44rem;
		height: 0.44rem;
		position: absolute;
		right: 0.18rem;
		top: 0rem;
		display: block;
	}
	#header .inner .search img{
		width: 0.44rem;
		height: 0.44rem;
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
	  	border-top: 0.02rem solid #eee
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
	#goods{
		height:24.25rem;
		/*height:10rem;*/
	}
	#goods ul{
		display: table;
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
	}
</style>
