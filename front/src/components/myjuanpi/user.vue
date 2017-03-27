<template>
<div id="all">
	<header id="head"> 
		<div class="userTop">
			 <a id="t-find" class="btnBack" href="javascript:window.history.go(-1)">
			 <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e"></a> 
			 <span id="t-index">个人中心</span> 
		 </div>
		 <div class="user-login">
			 <a  @click="changepage()">登录</a>
			 <span>|</span>
			 <a  @click="changepage()">注册</a> 
		 </div>
	 </header>
	
	<div class="userBox">
<div id="bgc1">
	<a href="//m.juanpi.com/order" class="myorder-enter">
					<span class="mydingdan">我的订单</span>
					<div class="arrow"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/details.png?57f255a8">
					<span class="tipsInfo">查看全部订单</span>
					</div>
				</a>

				<!-- 新增我的订单入口 -->
				
				<div class="userItdiv">
					<!-- 新增横菜单 -->
					<a href="//m.juanpi.com/order/index/t/1">
						<div class="icon"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/payfor.png?38667c00"></div><span>待付款</span>					</a>
					<a href="//m.juanpi.com/order/index/t/10">
						<div class="icon"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/backOrder.png?addb3ce"></div><span>待发货</span>					</a>
					<a href="//m.juanpi.com/order/index/t/4">
						<div class="icon"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/express.png?bde85c21"></div><span>待收货</span>					</a>
					<a href="javascript:;" id="saleafter">
						<div class="icon"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/afterSales.png?5ba3ac12"></div><span>退款/售后</span>
					</a>
				</div>
</div>
				<div class="userItdivs">
					<a href="//m.juanpi.com/myfavorite">
						<div class="icon"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/favor.png?a8102f3b"></div>
						<span>我的收藏</span>
						<div class="arrow"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/details.png?57f255a8"></div>
					</a>
					<a href="//m.juanpi.com/coupon">
						<div class="icon"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/coupons.png?ff1a2b73"></div>
						<span>我的优惠券</span>
						<div class="arrow"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/details.png?57f255a8"></div>
					</a>
				</div>
				<div class="userItdivs">
					<a href="//m.juanpi.com/service/index">
						<div class="icon"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/help.png?952bde3b"></div>
						<span>客服中心</span>
						<div class="arrow"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/details.png?57f255a8"></div>
					</a>
					<a href="//m.juanpi.com/about/juanpi">
						<div class="icon"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/about.png?9f10d5da"></div>
						<span>关于卷皮</span>
						<div class="arrow"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/details.png?57f255a8"></div>
					</a>
				</div>
				<input type="hidden" id="isBoxShow" name="isBoxShow" value="0">
				<input type="hidden" id="fromLoginUrl" name="fromLoginUrl" value="">
</div>
	
</div>
</template>
<script>
import router from "../../routerConfig";

	export default {
		   methods:{
  	changepage(id){
  		console.log(id)
  			router.push({ name: 'login'})
  			router.push({ name: 'register'})
  	}

  }
}
</script>
<style scoped>
*{
	font-size: 0.3rem;
}
#all{
	height: 100%;
}
#head{
	height: 2.5rem;
	width:100%;
	background: red;
	color:white;
	font-size: 0.5rem
}
#t-index{
	margin-left:2.5rem;
	font-size: 0.4rem;
}
.user-login{
text-align: center;

}
.user-login a{
display: inline-block;
margin:0.6rem;
color:white;
}
.user-login span{
color: white;
}
.userBox a{
	text-decoration: none;
	background: white;

}
.userBox span{
	color:black;
}

.myorder-enter{
	display: block;
	height:0.9rem;
	line-height: 0.9rem;
	padding-bottom: 0.5rem
}

.bgc1{
	padding:0.3rem;
	background: white;
	width: 100%;
}
.mydingdan{

	float:left;
	display: inline-block;
}
.tipsInfo{
	float:right;
	display: inline-block;
}

.userItdiv{
	display: flex;
	text-align: center;
	font-size: 0.5rem
}
.userItdiv a{
	flex:1;
}

.userItdivs{
	margin-top: 0.3rem
}
.userItdivs a{
	display: flex;
}
.userItdivs a .icon {
	flex:1;
}
.userItdivs a img {
	flex:1;
}
.userItdivs a span {
	flex:8;
}


#foot{
    margin-top:0.4rem; 
    background: white;
}
.foot-nav{
    text-align: center;

}
.foot-nav a{
    margin-left:0.4rem;
    direction: none;
    font-size: 0.3rem;
    color:black;
}
.foot-bottom{
    font-size: 0.3rem;
    color:#ccc;
    text-align: center;
    overflow: hidden;
}
</style>
