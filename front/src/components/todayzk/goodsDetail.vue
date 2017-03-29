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
					<button  @click="addshopcar()">加入购物车</button>
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
					<div class="c1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTNBMjZCQjRFRTQ5MTFFNUIxNjhCMDc5RDAzRjg1MDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTNBMjZCQjVFRTQ5MTFFNUIxNjhCMDc5RDAzRjg1MDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxM0EyNkJCMkVFNDkxMUU1QjE2OEIwNzlEMDNGODUwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxM0EyNkJCM0VFNDkxMUU1QjE2OEIwNzlEMDNGODUwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqCUSooAAAJgSURBVHjaYmAAgv9ufq8YUBjIACj4HyCAGKGMbUxQQU8Q7xmIBRBAMDVKSOxnYLVQzgKYBEAAwQxJA1IzgZiXcdemL2Dj0axLBtnCAeUwQsVngwSdoRwduJFAFYuRtDqAaIAAglnEBqR+AvEGII4AWvYTKOYFZG8F4iVAfizYNUC8ngEPADmQBeRkoA6Yya1AKh6IpYFYDyh+Gar2BSNQkgfI+AxTjMU0kBvXMCL7F0jNATGB+CUQSwDxW6ABIiB5gABCVggyeRU49BkYXgNxDVDRLJg8E1QRKDg+A/EUqBNkQRpAnoCGCMRKlOhDdZ8SLEoYwVGPwyNQxaCg284CdTy65HQg5QM0AOSECCB+zAL1ITxgQTEBxB5ARaJgKyGxJMoCDQYYAPHvwBRBNYOicjvIjW+AjBCg5AFc0QdKbHAOLJWgKXoGS0nIAQ4yWRgUr0AsDpVLAdo0FyQPEGCMWEwBRWUnVBMDUpQyIBkAAm+BuBxmEEoGQYrFGCB+DsRRuPyGlqiWAbEkPG1DIxCUZh5AXeRIyCAcBu+HuliBCZoAQYZ5E+EqkANagHgi3IsQPd5QM1YxQqPnBVBCEk0zyAtJQJwKxHeBeBoQZwAxKFKckDIdTD0oqCRYoFlDHCjADkpNSGpA4eMBxLeh/DdouRfZMHZohL0GGVgDLbFWAHEgklf+AqloKCYEVkAjuIYRLdeDnG0DNOwekRECKmiPQGManBaRkw0og8+FJh0GaNE3G4j3woIC6jVnaLgGQNWBMmEyUM0vrAkbqfiJgmoyAWJYZgSF9xmoZcvAhToaAAC4JALRc+Sl2QAAAABJRU5ErkJggg=="><span>24小时发货</span></div>
					<div class="c1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTNBMjZCQjRFRTQ5MTFFNUIxNjhCMDc5RDAzRjg1MDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTNBMjZCQjVFRTQ5MTFFNUIxNjhCMDc5RDAzRjg1MDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxM0EyNkJCMkVFNDkxMUU1QjE2OEIwNzlEMDNGODUwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxM0EyNkJCM0VFNDkxMUU1QjE2OEIwNzlEMDNGODUwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqCUSooAAAJgSURBVHjaYmAAgv9ufq8YUBjIACj4HyCAGKGMbUxQQU8Q7xmIBRBAMDVKSOxnYLVQzgKYBEAAwQxJA1IzgZiXcdemL2Dj0axLBtnCAeUwQsVngwSdoRwduJFAFYuRtDqAaIAAglnEBqR+AvEGII4AWvYTKOYFZG8F4iVAfizYNUC8ngEPADmQBeRkoA6Yya1AKh6IpYFYDyh+Gar2BSNQkgfI+AxTjMU0kBvXMCL7F0jNATGB+CUQSwDxW6ABIiB5gABCVggyeRU49BkYXgNxDVDRLJg8E1QRKDg+A/EUqBNkQRpAnoCGCMRKlOhDdZ8SLEoYwVGPwyNQxaCg284CdTy65HQg5QM0AOSECCB+zAL1ITxgQTEBxB5ARaJgKyGxJMoCDQYYAPHvwBRBNYOicjvIjW+AjBCg5AFc0QdKbHAOLJWgKXoGS0nIAQ4yWRgUr0AsDpVLAdo0FyQPEGCMWEwBRWUnVBMDUpQyIBkAAm+BuBxmEEoGQYrFGCB+DsRRuPyGlqiWAbEkPG1DIxCUZh5AXeRIyCAcBu+HuliBCZoAQYZ5E+EqkANagHgi3IsQPd5QM1YxQqPnBVBCEk0zyAtJQJwKxHeBeBoQZwAxKFKckDIdTD0oqCRYoFlDHCjADkpNSGpA4eMBxLeh/DdouRfZMHZohL0GGVgDLbFWAHEgklf+AqloKCYEVkAjuIYRLdeDnG0DNOwekRECKmiPQGManBaRkw0og8+FJh0GaNE3G4j3woIC6jVnaLgGQNWBMmEyUM0vrAkbqfiJgmoyAWJYZgSF9xmoZcvAhToaAAC4JALRc+Sl2QAAAABJRU5ErkJggg=="><span>7天包退</span></div>	
					<div class="c1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTNBMjZCQjRFRTQ5MTFFNUIxNjhCMDc5RDAzRjg1MDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTNBMjZCQjVFRTQ5MTFFNUIxNjhCMDc5RDAzRjg1MDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxM0EyNkJCMkVFNDkxMUU1QjE2OEIwNzlEMDNGODUwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxM0EyNkJCM0VFNDkxMUU1QjE2OEIwNzlEMDNGODUwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqCUSooAAAJgSURBVHjaYmAAgv9ufq8YUBjIACj4HyCAGKGMbUxQQU8Q7xmIBRBAMDVKSOxnYLVQzgKYBEAAwQxJA1IzgZiXcdemL2Dj0axLBtnCAeUwQsVngwSdoRwduJFAFYuRtDqAaIAAglnEBqR+AvEGII4AWvYTKOYFZG8F4iVAfizYNUC8ngEPADmQBeRkoA6Yya1AKh6IpYFYDyh+Gar2BSNQkgfI+AxTjMU0kBvXMCL7F0jNATGB+CUQSwDxW6ABIiB5gABCVggyeRU49BkYXgNxDVDRLJg8E1QRKDg+A/EUqBNkQRpAnoCGCMRKlOhDdZ8SLEoYwVGPwyNQxaCg284CdTy65HQg5QM0AOSECCB+zAL1ITxgQTEBxB5ARaJgKyGxJMoCDQYYAPHvwBRBNYOicjvIjW+AjBCg5AFc0QdKbHAOLJWgKXoGS0nIAQ4yWRgUr0AsDpVLAdo0FyQPEGCMWEwBRWUnVBMDUpQyIBkAAm+BuBxmEEoGQYrFGCB+DsRRuPyGlqiWAbEkPG1DIxCUZh5AXeRIyCAcBu+HuliBCZoAQYZ5E+EqkANagHgi3IsQPd5QM1YxQqPnBVBCEk0zyAtJQJwKxHeBeBoQZwAxKFKckDIdTD0oqCRYoFlDHCjADkpNSGpA4eMBxLeh/DdouRfZMHZohL0GGVgDLbFWAHEgklf+AqloKCYEVkAjuIYRLdeDnG0DNOwekRECKmiPQGManBaRkw0og8+FJh0GaNE3G4j3woIC6jVnaLgGQNWBMmEyUM0vrAkbqfiJgmoyAWJYZgSF9xmoZcvAhToaAAC4JALRc+Sl2QAAAABJRU5ErkJggg=="><span>售后补贴</span></div>
				</a>
			</div>
			<div class="item-feature">
				<div class="seller">
					<div class="f1">
						<img :src="goodsData.sellerImg">
					</div>
					<div class="f1 desc">
						<div desc-title>{{goodsData.sellerTitle}}</div>
						<span desc-deli>{{goodsData.sellerDeli}}</span>
					</div>
				</div>
				<div class="com-list">
					<ul>
						<li>
							<div class="shop-info">
								<span class="leftinfo">发货地</span>
								<span class="rightinfo">{{goodsData.shopInfo}}</span>
							</div>
						</li>
						<li>
							<div class="shop-info">
								<span class="leftinfo">运费</span>
								<span class="rightinfo">{{goodsData.shopInfo1}}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="item-btn-box">
				<div class="btn-box">
					<a href="" class="btn">商家全部商品</a>
				</div>
			</div>

			<div class="goodsimgs">
				<ul v-for="data in goodsimgsData">
					<li>
						<img :src="data">
					</li>
				</ul>		
			</div>

			<div class="pagebottom">
				亲，已经到最底了~	
			</div>

		</div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../routerConfig";
import { MessageBox } from 'mint-ui';
export default {
  name: 'goodsDetail',
  data () {
    return {
		id:'',
		goodsData:"",
		goodsimgsData:""
    }
  },
  mounted(){
     axios.get('http://localhost:3000/goodsDetail/obj2',{params: {id: this.$route.params.goodsId}
		}).then(response=>{
			// console.log(response)
			this.goodsData = response.data;
			this.goodsimgsData = response.data.moreImg
			console.log(this.goodsimgsData)
		})
		.catch(function (error) {
	    	console.log(error);
	  });         
	},
	methods:{
		back(){
			router.go(-1)
		},
		addshopcar(){
			 	if(Cookie.getCookie("nam")){
					 // router.push({path:"/gouwuche"})
					console.log(111)
					              MessageBox.alert('成功添加到购物车').then(action => {
                                   
                  })
				 	}else{
                            router.push({path:"/myjuanpi/login"})
                            console.log(222)

				 	}

		}
	}
}
</script>

<style scoped>
	#goodsDetail{
		overflow: auto;
		height: 12.53rem;
	}
	button{
		width:1.8rem;
		height: 0.6rem;
		line-height: 0.6rem;
		text-align: center;
		font-size: 0.3rem;
		border:0;
		border-radius: 0.07rem;
		background: #ff464e;
		color: #fff;
		float: right;
		margin-right: 1rem;
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
		margin-left: .2rem;
		line-height: .2rem;
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
		width: .18rem;
		line-height: .2rem;
		float: left;
	}
	.feature a .c1 span{
		color: #4a4a4a;
		font-size: .2rem;
		line-height: .19rem;
		float: left;
		margin-left: 0.03rem;
	}
	.item-feature{
		margin-top: .128rem;
		padding: .153rem;
		background: #fff;
		overflow: hidden;
	}
	.item-feature .seller{
		font-size: 0.22rem;
		height: 0.94rem;
		margin-bottom: .026rem;
	}
	.item-feature .seller .f1{
		font-size: 0.24rem;
		float: left;
	}	
	.item-feature .seller .f1 img{
		width:1.64rem;
		border:1px solid #c6c6c6;
	}
	.item-feature .seller .desc{
		margin-left: .2rem;
	}
	.item-feature .seller .desc div{
		margin-top: 0.05rem;
	}
	.item-feature .seller .desc span{
		font-size: 0.21rem;
		width: 1.055rem;
		height: 0.272rem;
		margin-top: 0.1rem;
		text-align: center;
		line-height: 0.272rem;
		color: #fff;
		background: #f70;
		display: block;
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
	.item-feature .com-list{
		margin-top: 0.2rem;
	}
	.item-feature .com-list li{
		height: 0.261rem;
		margin-bottom: 0.1rem;
		/*padding-bottom: .128rem;*/
		line-height: 0.261rem;
	}
	.item-feature .com-list li .shop-info{
		font-size: .153rem;
		line-height: 1.2;
	}
	.item-feature .com-list li .shop-info .leftinfo{
		width: 1.55rem;
		font-size: 0.24rem;
		float: left;
		color: #9b9b9b;
	}
	.item-feature .com-list li .shop-info .rightinfo{
		font-size: 0.24rem;
		float: left;
		color: #6b6b6b;
	}
	.item-btn-box .btn-box{
		padding-bottom: .16rem;
		background: #fff;
		text-align: center;
	}
	.item-btn-box .btn-box .btn{
		margin: 0 auto;
		font-size: 0.22rem;
		width: 1.9rem;
		line-height: .52rem;
		height: .52rem;
		text-align: center;
		border:1px solid #4a4a4a;
		display: inline-block;
	}
	.goodsimgs {
		margin-top: 0.15rem;
	}
	.goodsimgs img{
		width: 100%;
		height: 100%;
		display: block;
	}
	.pagebottom{
		text-align: center;
		font-size: 0.26rem;
		height: 1rem;
		line-height: 1rem;
	}
</style>
