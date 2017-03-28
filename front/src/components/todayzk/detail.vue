<template>
  <div id="detail">
		<mt-header title="进口食品专场特卖折扣专场，全场1折限时抢-卷皮折扣">
		  <router-link to="/today/todayzk" slot="left" style='font-size: 30px'>
		    <mt-button icon="back" style='font-size: 30px;'></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div id="nav">
			<div class="rr">
				<div class="r1">
					<img src="../../assets/58aea677151ad13a4f8b45c3_180x90.png"/>
				</div>
				<div class="r2">
					<p>全球零食小店</p>
					<p>店铺发货</p>
				</div>
			</div>

			<div class="sale">
				<div class="saleup">
					<span>满赠</span>
					<p>满1元即赠69元优惠券，限赠一次，数量有限，赠完即止</p>
				</div>
				<div class="saledown">
					<span>满件优惠</span>
					<p>满2件减3元，满3件减8元</p>
				</div>
			</div>
		</div>
		<div id="hq">
			<ul>
				<li>综合</li>
				<li>销量</li>
				<li>价格</li>
				<li>仅看有货</li>
			</ul>
		</div>
		<div class="time">
			<div class="endtimetitle">距离结束还剩</div>
		</div>

		<div id="main">
			<ul class="goods">
				<li v-for='data in list1'>
					<dl>
						<dt><img :src="data.picurl"/></dt>
						<dd class="up">
							<span class="left">{{"￥"+data.cprice}}</span>
							<span class="right" v-html='data.residue'></span>
						</dd>
						<dd class="down">{{data.title}}</dd>
					</dl>
				</li>
			</ul>
		</div>

		<div class="bottom">
			亲，已经到底了
		</div>
		<!-- <div class="empty"></div> -->
  </div>
</template>

<script>
import axios from "axios";
import router from "../../routerConfig";
export default {
  name: 'detail',
  data () {
    return {
			list1:[],
			list2:""
    }
  },
  mounted(){

  	axios.get('http://localhost:3000/homeapi/goodsShop_1',
  		{params: {id: this.$route.params.Id,brand_id:this.$route.params.brand_Id}

		}).then(response=>{
			console.log(response)	
			this.list1=response.data.data	
		})
		.catch(function (error) {
	    console.log(error);
	  });  

	axios.get('http://localhost:3000/homeapi/saleInfo',
  		{params: {goods_id: this.$route.params.goods_Id}

		}).then(response=>{
			console.log(response)	
			this.list2=response.data
		})
		.catch(function (error) {
	    console.log(error);
	  });  



	}


}
</script>

<style scoped>
#detail{
	width: 100%;
	height: 100%;
	background: #fff;
}
.mint-header{
    width: 100%;
    height: 0.88rem !important;
    line-height: 0.88rem !important;
    max-width: 16rem;
	padding: 0 0.16rem;
    overflow: inherit;
    position: relative;
    z-index: 199;
    border-bottom: 0.01rem solid #dedede;
	font-size: .36rem!important;
	background: #fff;
	color: #000;
}
.mint-button-icon{
	vertical-align: baseline;
}
.mint-header-button > a{
	height: 0.8rem;
	line-height:0.8rem;
}
.mint-header-button > a button{
	height: 0.8rem;
	line-height:0.8rem;
}


#nav .rr{
	height: 1.42rem;
	display: flex;
		background: #fff;

}
#nav .rr .r1{
	flex: 2;
}
#nav .rr .r1 img{
	display: block;
	margin: .2rem auto;
}
#nav .rr .r2{
	flex: 3;
	font-size: .28rem;
	line-height:.6rem;
	
}

/*03.28 10:56fixed*/
#nav .sale{
	height: 1rem;
	font-size: .24rem;
}
#nav .sale div{
	/*line-height: .5rem;*/
	margin-top: 0.1rem
}
#nav .sale span{
	display: inline-block;
	/*width: .9rem;*/
	text-align: center;
	padding: 0 0.05rem;
	border: 1px solid #ff464e;
	color: #ff464e;
	margin: 0 0.1rem 0 0.2rem;
}
#nav .sale p{
	display: inline-block
}
#hq{
	padding: .01rem 0;
	font-size: .28rem;
	border-bottom: 0.01rem solid #e7e7d7;
	height: .8rem;
	line-height:.8rem;
	text-align: center;
	width: 100%;	
	background: #fff;
}
#hq ul{
		display: flex;
}
#hq ul li{
	display: inline-block;
	flex: 1;
}
.time{
	width: 100%;
	height: 0.9rem;
	background: #f7f7f7;

}
.time .endtimetitle{
	text-align: center;
	font-size: 0.2rem;
	color: #bbb;
}

/*03.28 09:44fixed*/
#main{
	width: 100%;
		background: #fff;
}
#main ul{
	/*display: table;*/

}
#main ul li{
	width: 3.68rem;
	height: 4.79rem;
	float: left;
	margin-top: 0.14rem;
	margin-right: 0.14rem;
	background: #fff;
}

#main ul li:nth-child(2n){
	margin-right: 0;
}

#main ul li dl dt{
	width: 100%;
	
}
#main ul li dl dt img{
	width: 100%;
	display: block;
	overflow: hidden;
}
#main ul li dl dd{
	margin-left: 6%;
    margin-right: 6%;
    margin-top: 0.1rem;
    line-height: .4rem;
    height: .4rem;
    font-size:.24rem;
    white-space: nowrap;
    overflow: hidden;
}
#main ul li dl dd .left{
	float: left;
	color: #ff464e;
	font-size:0.28rem;
}
#main ul li dl dd .right{
	float: right;
	font-size: 0.2rem;
	color: #bbb;
}
#main ul li dl dd.down{
	font-size: 0.22rem;
	color: #6b6b6b;
	margin-top: 0.03rem;
}
.bottom{
	width: 100%;
	height: 1rem;
	background: #f7f7f7;
	font-size: .3rem;
	color: #000000;
	line-height: 1rem;
	text-align: center;
	
}
.empty{
	width: 100%;
	height: 1rem;
}
</style>
