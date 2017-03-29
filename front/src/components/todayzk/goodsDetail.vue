<template>
  <div id="goodsDetail">
		<div id="item">
			<div class="item-good">
				

				<div class="titleimg">
					<div class="back" @click="back()">
						<div>←</div>
					</div>
					<img :src="goodsData.topImg1">
				</div>

				<div class="normal">
					<h1>{{goodsData.title}}</h1>
					<div class="list-price">
						<span class="price-1">
							<span>{{goodsData.price1}}</span>
						</span>
						<span class="del">{{goodsData.price2}}</span>
					</div>

					<div class="item-zhe">
						<span>{{goodsData.world}}</span>
					</div>

					<div class="time">
						<span class="statr-time">
							<img src="">

						</span>
					</div>
				</div>
				<!-- <div class="expand">
					<div class="show-item">
						<div class="title">促销</div>
						<div class="info">有没有优惠</div>
					</div>
					<div class="activity">
						<div class="manzeng">
							<div class="manzeng1">满赠</div>
							<div class="manzeng2">满hdiusahdihasdgayugda</div>
						</div>
					</div>
				</div> -->
			</div>

			<div class="feature">
				<a>
					<div class="c1"><img src=""><span></span></div>
					<div class="c1"><img src=""><span></span></div>	
					<div class="c1"><img src=""><span></span></div>	
					<div class="c1"><img src=""><span></span></div>		
				</a>
			</div>
			<div class="item-feature">
				<div class="seller">
					<div class="f1">
						<img src="">
					</div>
					<div class="f1 desc">
						<div desc-title>生活仓库</div>
						<span desc-deli>卷皮执法</span>
					</div>
				</div>
				<div class="com-list">
					<ul style="list-style: none;">
						<li>
							<div class="shop-info">
								<span>发货地</span>
								<strong>辽宁大连</strong>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="item-btn-box">
				<div class="btn-box">
					<a href="" class="btn">商家全部商品</a>
					<a href="" class="btn">进入生活仓库</a>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../routerConfig";
export default {
  name: 'goodsDetail',
  data () {
    return {
		id:'',
		goodsData:"",
    }
  },
  mounted(){
     axios.get('http://localhost:3000/goodsDetail/obj2',{params: {id: this.$route.params.goodsId}
		}).then(response=>{
			console.log(response)
			this.goodsData = response.data;
			console.log(this.goodsData)
		})
		.catch(function (error) {
	    	console.log(error);
	  });         
	},
	methods:{
		back(){
			router.go(-1)
		}
	}
}
</script>

<style scoped>
	#goodsDetail{
		overflow: auto;
		height: 12.53rem;
	}
	#item{
		
	}	

	#item .item-good .titleimg{
		position: relative;
	}
	#item .item-good .titleimg img{
		width: 100%;
		height: 100%;
	}
	.item-good .titleimg .back{
		color: #fff;
		width:0.55rem ;
		height: 0.55rem;
		font-size: 0.3rem;
		font-weight:900;
		line-height: 0.55rem;
		text-align: center;
		border-radius: 50%;
		background: #000;
		opacity: 0.7;
		position: absolute;
		left: 0.2rem;
		top: 0.2rem;
	}
	.item-good{
		position: relative;
		background: #fff;
		height:100%;
		overflow: hidden;
	}
	.menu-more{
		right:.102rem;
		top:.1rem;
		width:.383rem;
		position: absolute;
		z-index: 2
	}
	.normal{
		width: 100%;
		height: 1.4rem;
		margin-left: .2rem;
		float: left;
	}
	.normal h1{
		padding-top: .179rem;
		font-size: .32rem;
		text-align: left;
		font-weight: 400;
		width:95%;
		color: #4a4a4a;
		padding: 2% 2% 0 0;
	}
	.normal .list-price{
		margin-right:.064rem;
		line-height: .064rem;
		width: auto;
		margin-top: .006rem;
		position: relative;
		bottom: 0;
		margin-left: 4%;
		float: left; 
	}
	.normal .list-price	.price-1{
		color: #ff464e;
		vertical-align: middle;
		white-space: nowrap;
		margin-right: .063rem;
		line-height: .542rem;
	}
	.normal .list-price	.price-1 span{
		font-size: .36rem
	}
	.normal .list-price	.del{
		text-decoration: line-through;
		font-size: .2rem;
		font-style: normal;
		color: #ababab;
		margin-left: .01rem;
		margin-top: .04rem;
	}
	.normal .item-zhe{
		font-size: .2rem;
		margin-top: .2rem;
		margin-left: 0.05rem;
		color: #ff464e;
		float: left;
	}
	.normal .item-zhe span{
		padding:0.04rem;
		margin-top: 0.01rem;
		line-height: .192rem;
		background: #ff464e;
		text-align: center;
		color: #fff;
		float: left;
		width: auto;
	}
	.normal .time{
		margin-left: .179rem;
		line-height: .128rem;
		clear: both;
	}	
	.normal .time .start-time{
		font-size: .128rem;
		color: #9b9b9b;
		vertical-align: middle;
		clear: both;
		line-height: .128rem
	}
	.expand{
		width: 100%;
		margin-left: .153rem;
		margin-right: .153rem;
		padding-bottom: .191rem;
		padding-top: .191rem;
		border-top: 1px solid #e7e7e7;
		overflow: hidden;
	}
	.expand .show-item{
		line-height: .192rem;
		padding-right: .153rem;
		display: flex;
	}
	.expand .show-item .title{
		padding-right: .09rem;
		font-size: .18rem;
		color: #4a4a4a;
		white-space: nowrap;
	}
	.expand .show-item .info{
		font-size: .134rem;
		color: #4a4a4a;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.expand .activity{
		padding-left: .434rem;
	}	
	.expand .manzeng{
		border-bottom: none;
		padding-bottom: .102rem;
		padding-top: .102rem;
		display: flex;
	}
	.expand .manzeng .manzeng1{
		font-size: .14rem;
		margin-right: .09rem;
		padding-right: .063rem;
		padding-left: .063rem;
		height:.166rem;
		line-height: .166rem;
		color: #ff464e;
		border:1px solid #ff464e;
		float: left;
	}	
	.expand .manzeng .manzeng2{
		margin-left: .51rem;
		line-height: .153rem;
		font-size: .151rem;
		color: #4a4a4a;
		white-space: normal;
	}
	.feature{
		background: #fff;
		overflow: hidden;
		height: 0.87rem;
	}
	.feature a{
		font-size: .14rem;
		margin-left: .142rem;
		line-height: .142rem;
		padding-bottom: .223rem;
		padding-top: .223rem;
		display: block;
		border-top:1px solid #e7e7e7;
		text-decoration: none;
		}
	.feature a .c1{
		display: inline-block;
		width: 24%
	}
	.feature a .c1 img{
		margin-right: .063rem;
		width: .126rem;
		float: left;
	}
	.feature a .c1 span{
		color: #4a4a4a;
		font-size: .14rem;
		line-height: .153rem;
	}
	.item-feature{
		margin-top: .128rem;
		padding: .153rem;
		background: #fff;
		overflow: hidden;
	}
	.item-feature .seller{
		margin-bottom: .026rem;
	}
	.item-feature .seller .f1{
		float: left;
	}	
	.item-feature .seller .f1 img{
		width:1.15rem;
		border:1px solid #e7e7e7;
	}
	.item-feature .seller .desc{
		font-size: .153rem;
		margin-left: .063rem;
		color: #4a4a4a;
	}
	.item-feature .seller .desc .desc-title{
		height:.332rem;
		font-size: .179rem; 
	}
	.item-feature .seller .desc .desc-deli{
		padding-right: .064rem;
		padding-left: .064rem;
		height: .192rem;
		line-height: .192rem;
		background: #f70;
		color: #fff;
		display: inline-block;
	}
	.item-feature .com-list li{
		padding-bottom: .128rem;
		line-height: .166rem;
		margin:0;
	}
	.item-feature .com-list li .shop-info{
		font-size: .153rem;
		line-height: 1.2;
	}
	.item-feature .com-list li .shop-info span{
		width: 1.09rem;
		float: left;
		color: #9b9b9b;
	}
	.item-feature .com-list li .shop-info strong{
		width:70%;
		float: left;
		font-weight: 400;
		color: #6b6b6b;
	}
	.item-btn-box .btn-box{
		padding-bottom: .16rem;
		background: #fff;
		text-align: center;
	}
	.item-btn-box .btn-box .btn{
		margin-right: .204rem;
		font-size: .153rem;
		width: 1.33rem;
		line-height: .36rem;
		height: .36rem;
		text-align: center;
		border:1px solid #4a4a4a;
		display: inline-block;
	}
</style>
