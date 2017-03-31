<template>
	<div id="zfc">

			<header id="head" class="head">
                    <div class="fixtop">
                        <span id="t-index">生活仓库</span>
                        <span id="user">
                          <a href="//m.juanpi.com/cate/index" class="btn btn-right btn-sign"></a>
                        </span>
                    </div>
            </header>
			
			<div style="height: .79rem">
				<div class="cate-menu type1" style="height: .79rem">  
				<div class="cate-menu-scroll" style="height: .79rem">
				<div class="cate-menu-box" style="height: .79rem">
				<nav class="colgt5">
					<a class="" data-type="6" data-key="490" href="javascript:void(0);">精选</a>
					<a data-type="6" data-key="491" href="javascript:void(0);" class="">日用</a>
					<a data-type="6" data-key="492" href="javascript:void(0);" class="active">餐厨</a>
					<a data-type="6" data-key="493" href="javascript:void(0);" class="">清洁收纳</a>
					<a data-type="6" data-key="494" href="javascript:void(0);" class="">数码家电</a>
					<a data-type="6" data-key="494" href="javascript:void(0);" class="">起居</a>
				</nav>
				</div>
				</div>
				</div>

			</div>
			
			<div id="ad">
				<div class="ad0">
					<div class="ad1">
						<a href="javascript:void(0);">						
							<img src="http://s2.juancdn.com/bao/170322/5/f/58d225b5ad0a490b0b8b45cb_375x240.png?iopcmd=convert&Q=88&dst=png" />
						</a>
					</div>
					<div class="ad1">
						<a href="javascript:void(0);">						
							<img src="http://s2.juancdn.com/bao/170321/b/0/58d084d3a43d1f0c681ba47b_375x240.png?iopcmd=convert&Q=88&dst=png" />
						</a>
					</div>
				</div>
				<div class="ad2">
					<div class="ad3">
						<a href="javascript:void(0);">
							<img  src="http://s2.juancdn.com/bao/170324/a/c/58d49614a43d1f4508506aea_250x288.png?iopcmd=convert&Q=88&dst=png" style="width: 100%" />
						</a>
					</div>
					<div class="ad3">
						<a href="javascript:void(0);">
							<img  src="http://s2.juancdn.com/bao/170324/a/0/58d4961aa43d1f416c0e7ac0_250x288.png?iopcmd=convert&Q=88&dst=png" style="width: 100%" />
						</a>
					</div>
					<div class="ad3">
						<a href="javascript:void(0);">
							<img  src="http://s2.juancdn.com/bao/170324/3/6/58d4961fad0a495d0e8b45df_250x288.png?iopcmd=convert&Q=88&dst=png" style="width: 100%" />
						</a>
					</div>
				</div>
			</div>
			
			<div id="Dressup">
				<div class="du1" style="width:100%">
					<a href="" style="width: 100%">
						<img src="http://s2.juancdn.com/bao/170324/b/2/58d4c3bfa43d1f66f515ad16_750x90.png?iopcmd=convert&Q=88&dst=png" style="width:100%" />
					</a>
				</div>
				<div class="du2" style="width:100%">
					<a href="" style="width:100%">
						<img src="http://s2.juancdn.com/bao/170314/2/0/58c7b457a43d1f3953579400_750x250.png?iopcmd=convert&Q=88&dst=png" style="width:100%"/>
					</a>
				</div>
				<div class="du3" style="width:100%">
					<a href="" style="width:100%">
						<img src="http://s2.juancdn.com/bao/170310/0/f/58c20db7a43d1f63427015d8_750x96.jpg?iopcmd=convert&Q=88&dst=jpg" style="width: 100%" />
					</a>
				</div>
			</div>
			
			<ul class="goods-list" id="goods">
				<li v-for="data in goodsData">
					<a style="display: :block;position: relative;">
						<div class="placeholder">
						 	<img :src="'http:'+data.pic_url"/>
						</div>
					</a>
					<a href="javascript:void(0);" v-if="data.coupon != undefined" >
						<div class="price" >
							<span class="coupon">{{data.coupon.rules[0].aeBankInfo}}</span>
							 <span class="only-time">{{data.residue}}</span>
						</div>
						<h3>{{data.title}}</h3>
					</a>

					<a href="javascript:void(0);" v-if="data.coupon || data.oprice != undefined" >
						<div class="price" >
							<span class="coupon">￥{{data.cprice}}</span>
							<i class="del">{{data.oprice}}</i>
							<span class="only-time">{{data.residue}}</span>
						</div>
						<h3><span>{{data.title}}</span></h3>
					</a>

					<a href="javascript:void(0);" v-if="data.coupon == undefined" >
						<div class="price" >
							<span class="coupon">{{data.main_title}}</span>
							<span class="only-time">{{data.residue}}</span>
						</div>
						<h3><span>{{data.sub_title}}</span></h3>
					</a>
					
				</li>

			</ul>
			
		
	</div>
</template>

<script>
	import router from "../../routerConfig";
	// import router from "../router" ;
	import axios from "axios";
	import Vue from 'vue'
	import VueResouse from 'vue-resource';
export default {
  name: 'home',
  data () {
    return {
    	
		goodsData:[]
    }
  },
  mounted(){
  	//ajax 请求

  	//获取导航
  	// axios.get("http://localhost:3000/homeapi/select1_1")
   //    .then( response=>{
   //        for(var i=0;i<response.data.menu_list.length;i++){
   //         	for(var j=0;j<response.data.menu_list[i].subtab.length;j++){
   //         		this.titleData.push( response.data.menu_list[i].subtab[j])
   //         	}
   //        }
   //    })
   //    .catch(function (error) {
   //      console.log(error);
	  // });



      //下拉刷新
		this.$http.jsonp("https://shop.juanpi.com/gsort?key=490&type=6&zhouyi_ids=p8_c3_l1_18_51_5&machining=hotcoupon&page=1&rows=10&dtype=JSONP&cm=1&cm_cate=490&",
		{//请求参数
		  jsonp:'callback'
		}).then((res)=>{
		  this.goodsData=[]
		  for(var i = 0;i<res.body.list.length;i++){
		    this.goodsData.push(res.body.list[i])
		  }
	  		console.log(this.goodsData.coupon)
		},function(){

		}); 
    }
}

</script>

<style scoped>
	#head{width: 100%;
    overflow: inherit;
    position: relative;
    z-index: 199;
    border-bottom: 1px solid #dedede;
	height: 0.56rem;

	background: #fff;}
.fixtop{z-index: 999;
    position: absolute;
    width: 100%;
	display: block;
	}

#t-index{
	text-align: center;
    cursor: default;
    width: 90%;
    left: 5%;
    position: absolute;
	z-index:-1;
	box-sizing: border-box;
	overflow: hidden;
	font-size:0.29rem;
	height:0.51rem;
	padding-top: 0.051rem;
}
#user{float: right;
	padding-top: .102rem;
	padding-right: .018rem;
	display: block;
	}
#user a{height: .31rem;
	width: .31rem;
	display: block}
.btn-sign{background-size: contain}
.cate-menu{width: 100%;
   /* max-width: 16rem;
    min-width: 8rem;*/
    background: #fff;
    line-height: 1;
    border-bottom: 1px solid #e7e7e7;
    position: relative;
	width:100%;
	height:.52rem;}
.cate-menu-scroll{line-height: 1;
	width:100%;}
.cate-menu-box{height:.51rem;
	width:100%;
	overflow: auto;
	overflow-x: auto;
	overflow-y: hidden;
	background: #fff;
	top:0;
	z-index:400;}
.colgt5{
		display:flex ;
		height: 0.788rem;
		line-height: 0.788rem;
		/*height: */
	}
.colgt5 a{
	flex:1;
	margin-right: .2rem;
		margin-left: .17rem;
		padding-right: .06rem;
		padding-left: .06rem;
		border-bottom-width: .026rem;
		font-size: .245rem;
		height: 0.788rem;
		line-height: 0.788rem;
		text-align: center;
		color:#4a4a4a;
		display: inline-block;
		white-space:nowrap;
		text-decoration: none;
		width: 8%;
		display: block;
		}
#ad{display: block;
	width:100%}
#ad .ad0{width:100%;
		overflow: hidden;}
#ad .ad1{float: left;
    position: relative;
    width:50%}
 #ad .ad1 img{vertical-align: middle;
    width: 100%;
    box-sizing: border-box;} 	
#ad .ad2{width:100%;
		overflow: hidden;}
#ad .ad3{float: left;
	position: relativel;
	width: 33.3%;
	padding-left: .191rem;
	box-sizing: border-box;
	background: #fff;
	}
 #ad .ad1 img{vertical-align: middle;
    width: 100%;
    box-sizing: border-box;
    text-align: center;} 	
.goods-list{width:100%;
	list-style: none;}
#goods li{width:50%;
		height:4.7rem;
		float: left;
		position: relative;
		background: #fff;
		/*margin-right:.255rem;
		margin-top:.255rem;*/
		list-style: none;
		box-sizing: border-box;}
#goods li a{display: block;
			position: relative;}
#goods .placeholder{padding-bottom:100%}

#goods a img{opacity: 1;
						position: absolute;
						top: 0;
						left: 0;
						width:100%;
						height:100%;
						transition:opacity .5s linear;}	
#goods li .price{height: .31rem;
				line-height: .31rem;
				margin-top: .131rem;
				width:92%;
				position: relative;
				margin-left: 4%;
				margin-right: 4%;
				bottom:0;
				font-size:.31rem}
#goods li .price .coupon{font-size: .292rem;
						position: absolute;
						bottom: 0;
						color: #ff464e;
						width:72%;
						display: inline-block;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;}
#goods li .price .del{color: #bbb;
					    text-decoration: line-through;
					    position: relative;
					    left: .93rem;
					    vertical-align: baseline;
					    font-size:.2rem;}
#goods li .price .only-time{position:absolute;
							color: #bbb;
							text-align: center;
							right: 0;
							line-height: 1.1;
							font-size:.22rem;}
#goods li h3{line-height: .31rem;
            height: .31rem;
			font-size: .15rem;
			margin-top: .1rem;
			font-weight: 300;
			color: #6b6b6b;
			background: hsla(0,0%,100%,.8);
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			margin-left: 4%;
			font-size: .2rem}
.bottom{position: fixed;
		width: 100%;
		line-height: 1;
		background-color: #fff;
		bottom:0;
		z-index:400;
		background-size:100% 100%;
		border-top:1px solid #e7e7e7}
.bottom a{height:.766rem;
		text-align: center;
		float: left;
		color:#4a4a4a;
		display: block;
		position: relative;}		
.bottom .col5 .tyep3 img{margin-top: .063rem;
						margin-left: 25%;
						width:40%;
						display: block;
						}
.bottom .col5 .tyep3 span{font-size:.153rem;
						position: absolute;
						bottom:0;
						left:25%}
</style>
