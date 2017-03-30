<template>
  <div id="list">
		<header>
			<div class="ha">
				<span class="ha1">全球购</span>
				<span class="search">
					<img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/head/btn-sign.png?20160812" /> 
				</span>
			</div>
		</header>
		<nav>
	    	<mt-swipe :auto="2000">
			  <mt-swipe-item v-for="data in swipe">
			  	<img :src="'http:'+data.pic"/>
			  </mt-swipe-item>

			</mt-swipe>
			
		</nav>
		<div id="main1">
			<div class="qq">
				<div class="q1">
					<div class="q11" v-for='data in nav'>
								<img :src="'http:'+data.data[0].child[0].pic" />
					</div>				
				</div>
				<div class="q2">
					<div class="q22" v-for='data in nav'>						
						<img :src="'http:'+data.data[0].child[1].pic" />
					</div>
				</div>
			</div>
			<div class="ww">
				<div class="w1">
					
				</div>
				<div class="w2"></div>
			</div>
  		</div>

  		<div id='main'>
  			<ul class="ee"  v-infinite-scroll="loadMore"
 							infinite-scroll-disabled="loading"
 							infinite-scroll-distance="5">
				<li class="e1" v-for='data in active' v-show="data.shop_cover!=undefined">
					<img :src="'http:'+data.shop_cover" @click="changepage(data.shop_id,data.brand_id,data.goods_id,data.show_etime)"/>
					<ul class="e11">
						<li class="e111" v-for='data in data.shop_goods'>
							<dl>
								<dt>
									<img :src="'http:'+data.pic_url" />
								</dt>
								<dd>{{"￥"+data.cprice}}</dd>
								<dd>{{data.title}}</dd>
							</dl>
						</li>
					</ul>
				</li>
  			</ul>
  			
  		</div>
  </div>
</template>

<script>
import router from "../../routerConfig";
import Vue from "vue";
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
export default {
  name: 'list',
  data () {
    return {
		swipe:[],
		nav:[],
		list1:[],
		list2:[],
		active:[],    	
		pageIndex:1,
    	loading:false
    }
  },
  
  mounted(){
  	
  	 	this.$http.jsonp('http://ad.juanpi.com/advert/ad?unique=module_ads%2Cbanner_ads&cid=310&zy_id=c3_l1_18_51_5&platform=m&_=1490405789194&callback=jsonp1').then(res=>{
//		console.log(res.body.module_ads.multi_block[0].data[0].child[0].pic)
  		this.swipe=res.body.banner_ads;
  		this.nav=res.body.module_ads.multi_block;
//		this.List=res.body.module_ads.multi_block[];
//		console.log(this.nav)
  		},errro=>{
  			
  		})
		
  },
   methods:{
   	  	loadMore() {
					
		  this.loading = true;
		  				
		    	//ajax; 		
	  	console.log(1);	
		this.getData(this.pageIndex);
		},
		getData(data){
					
  	 		this.$http.jsonp(`https://shop.juanpi.com/gsort?key=310&type=6&zhouyi_ids=p8_c3_l1_18_51_5&machining=showshopgoods&page=${data}&rows=10&callback=gsort_callback`).then(res=>{
//			  		console.log(res.body.list[0].shop_goods)
		  		this.loading=false
		  		
  				this.active=[...this.active,...res.body.list]
		  		this.pageIndex++
		  		
					},errro=>{
			
				})  
		},
  	changepage(id,id1,goods_id,show_etime){
  		console.log(id)
  			router.push({ name: 'detail2', params: { Id: id,Id1:id1,goods_Id:goods_id,show_etime:show_etime }})
  	}


  }
}
</script>

<style scoped>
/*	body,html{
		height:100%;
    font-weight: 300px;
    width:100%;
    
}*/



body,h1,h2,h3,h4,h5,h6,p,ul,li,ol,dl,dt,dd,img,a,input{padding:0; margin:0;}

ul,ol{list-style:none;}
header,footer,section,figcaption,figure,main,nav,aside,summary,details{
    display:block;}
a{text-decoration:none;}
body{font:12px/1.5 "微软雅黑";}
 #list{
 	overflow: auto;
	height: 12.53rem;
	background: #fff;
 }
header{
    width: 100%;
    position: relative;
    z-index: 199;
    border-bottom: .01rem solid #dedede;
    height: .88rem;
    background: #fff;
}
header .ha{
    height: .88rem;
    background: #fff;
    z-index: 999;
    position: absolute;
    width: 100%;

} 
header .ha .ha1{
	height: .88rem;
	line-height:.88rem;
	font-size: .36rem;

	text-align: center;
    cursor: default;
    width: 84%;
    left: 8%;
    position: absolute;
    z-index: -1;
    box-sizing: border-box;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.search{
		width: 0.44rem;
		height: 0.44rem;
		position: absolute;
		right: 0.18rem;
		top: 0.2rem;
		display: block;
	}
.search img{
		width: 0.44rem;
		height: 0.44rem;
	}
nav{
    max-width: 16rem;
    height: 2.96rem;
}
.mint-swipe-items-wrap {
	width: 100%;
  	height: 2.9rem;
  	color: #fff;
  	text-align: center;

}

.mint-swipe-items-wrap img{
	width: 100%;
  	height: 100%;
}
nav .mint-swipe .mint-swipe-indicators{
	width: 100%;
	height: .56rem;
}
nav .mint-swipe .mint-swipe-indicators .mint-swipe-indicator{
	height: .12rem!important;
	width: .12rem!important;
	margin-top: .1rem;
}

#main1{
	width: 100%;
    background: #fff;
}
#main1 .qq{
	display: flex;
}
#main1 .qq .q1{
	flex: 1;
}
#main1 .qq .q1 .q11 img{
	width: 100%;
}
#main1 .qq .q2 .q22 img{
	width: 100%;
}
#main1 .qq .q1 .q11:nth-child(2){
	border-bottom: .2rem solid #eee;
}
#main1 .qq .q1 .q11:nth-child(4) img,#main1 .qq .q1 .q11:nth-child(5) img{
	width:100%;
	height: 1.9rem;
	display: block;
	margin: 0 auto;
}
#main1 .qq .q2{
	flex: 1;
}
#main1 .qq .q2 .q22:nth-child(2){
		border-bottom: .2rem solid #eee;
}
#main1 .qq .q1 .q11:nth-child(3){
	border-bottom: .2rem solid #eee;
}
#main1 .qq .q2 .q22:nth-child(3){
		border-bottom: .2rem solid #eee;
}
#main1 .qq .q2 .q22:nth-child(4) img,#main1 .qq .q2 .q22:nth-child(5) img{
	width:100%;
	height: 1.9rem;
	display: block;
	margin: 0 auto;
}
#main{
	width: 100%;
	height: 20rem;
	background: #fff;

}
#main .ee{
	width: 100%;
	
}
#main .ee .e1 img{
	height: 3.6rem;
}
#main .ee .e1 .e11{

	padding: 0 0 .04rem 0;
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
}
#main .ee .e1 .e11 li{
	display: inline-block;
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
}
#main .ee .e1 .e11 .e111{
	width: 1.8rem;
	margin-left: .1rem;
	vertical-align: top;
}
#main .ee .e1 .e11 .e111 dl dt img{
	width: 1.8rem;
	height: 1.8rem;
}
#main .ee .e1 .e11 .e111 dl{
	padding: 0 0 .35rem;
    text-align: center;
}
#main .ee .e1 .e11 .e111 dl dd:nth-of-type(1){
	font-size: .24rem;
	color: #60e;
}
#main .ee .e1 .e11 .e111 dl dd:nth-of-type(2){
	font-size: .24rem;
    color: #6b6b6b;
    white-space: normal;
    word-break: break-all;
    height: .56rem;
    line-height: .28rem;
}
</style>
