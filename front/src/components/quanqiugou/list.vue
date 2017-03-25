<template>
  <div id="list">
			<header>
				<div class="ha">
					<span class="ha1">全球购</span>
					<span class="ha2">
					</span>
				</div>
			</header>
			<nav>
    	<mt-swipe :auto="2000">
		  <mt-swipe-item v-for="data in swipe">
		  	<img :src="data.pic"/>
		  </mt-swipe-item>

		</mt-swipe>
				
			</nav>
			<div id="main1">
				<div class="qq">
					<div class="q1">
						<div class="q11" v-for='data in nav'>
									<img :src="data.data[0].child[0].pic" />
						</div>				
					</div>
					<div class="q2">
							<div class="q22" v-for='data in nav'>						
									<img :src="data.data[0].child[1].pic" />
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
  			<ul class="ee">
  					<li class="e1" v-for='data in active'>
  						<img :src='data.shop_cover' />
  						<ul class="e11">
  							<li class="e111" v-for='data in data.shop_goods'>
  								<dl>
  									<dt>
  										<img :src='data.pic_url' />
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
export default {
  name: 'list',
  data () {
    return {
			swipe:[],
			nav:[],
			list1:[],
			list2:[],
			active:[]
			
			
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
  			
  		}),
  	 	this.$http.jsonp('https://shop.juanpi.com/gsort?key=310&type=6&zhouyi_ids=p8_c3_l1_18_51_5&machining=showshopgoods&page=1&rows=10&callback=gsort_callback').then(res=>{
  		console.log(res.body.list[0].shop_goods)
  		this.active=res.body.list
  		},errro=>{
  			
  		})  		
  },
  
}
</script>

<style scoped>
	body,html{
		height:100%;
		font-size: 48.8125px;
    font-weight: 300px;
    width:100%;
    overflow: scroll;
}



body,h1,h2,h3,h4,h5,h6,p,ul,li,ol,dl,dt,dd,img,a,input{padding:0; margin:0;}

ul,ol{list-style:none;}
header,footer,section,figcaption,figure,main,nav,aside,summary,details{
    display:block;}
a{text-decoration:none;}
body{font:12px/1.5 "微软雅黑";}
 #list{
 	width: 100%;
 
 	overflow: auto;
 }
header{
	  width: 100%;

    overflow: inherit;
    position: relative;
    z-index: 199;
    border-bottom: 1px solid #dedede;
    height: 88px;
}
header .ha{
	    height: 88px;
	    background: #fff;
	    z-index: 999;
    position: absolute;
    width: 100%;

} 
header .ha .ha1{
	height: 88px;
	line-height:88px;
	font-size: 36px;

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
header .ha .ha2{
	display: block;
	width: 48px;
	height: 48px;
	vertical-align: top;
	background: url(../../assets/btn-sign.png) no-repeat scroll 0 0;
	position: absolute;
	left: 90%;
	top:20px;
}
nav{
	    max-width: 16rem;
	    height: 296px;
}
nav .mint-swipe .mint-swipe-indicators{
	width: 100%;
	height: 56px;
}
nav .mint-swipe .mint-swipe-indicators .mint-swipe-indicator{
	height: 12px!important;
	width: 12px!important;
	margin-top: 10px;
}
.is-active{
		height: 12px!important;
	width: 12px!important;
}
#main1{
	  width: 100%;

    height: 100%;
    overflow: auto;
}
#main1 .qq{
		display: flex;
		
}
#main1 .qq .q1{
	flex: 1;
}
#main1 .qq .q1 .q11:nth-child(2){
	border-bottom: 20px solid #eee;
}
#main1 .qq .q1 .q11:nth-child(4) img,#main1 .qq .q1 .q11:nth-child(5) img{
	width:230px;
	height: 190px;
	display: block;
	margin: 0 auto;
}
#main1 .qq .q2{
	flex: 1;
}
#main1 .qq .q2 .q22:nth-child(2){
		border-bottom: 20px solid #eee;
}
#main1 .qq .q1 .q11:nth-child(3){
	border-bottom: 20px solid #eee;
}
#main1 .qq .q2 .q22:nth-child(3){
		border-bottom: 20px solid #eee;
}
#main1 .qq .q2 .q22:nth-child(4) img,#main1 .qq .q2 .q22:nth-child(5) img{
	width:230px;
	height: 190px;
	display: block;
	margin: 0 auto;
}
#main{
	width: 100%;
	height: 100%;
	overflow: auto;
}
#main .ee .e1 img{
	width: 750px;
	height: 360px;
}
#main .ee .e1 .e11{
	height: 300px;
	padding: 0 0 40px 0;
	overflow-x: auto;
		overflow-y: hidden;
	white-space: nowrap;
}
#main .ee .e1 .e11 li{
	display: inline-block;
	
}
#main .ee .e1 .e11 .e111{
	width: 180px;
	margin-left: 10px;
	vertical-align: top;
}
#main .ee .e1 .e11 .e111 dl dt img{
	width: 180px;
	height: 180px;
}
#main .ee .e1 .e11 .e111 dl{
	padding: 0 0 .35rem;
    text-align: center;
}
#main .ee .e1 .e11 .e111 dl dd:nth-of-type(1){
	font-size: 24px;
	color: #60e;
}
#main .ee .e1 .e11 .e111 dl dd:nth-of-type(2){
	font-size: 24px;
    color: #6b6b6b;
    white-space: normal;
    word-break: break-all;
    height: 56px;
    line-height: 28px;
}
</style>
