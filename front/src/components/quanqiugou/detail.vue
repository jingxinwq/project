<template>
  <div id="detail">
		<mt-header title="进口食品专场特卖折扣专场，全场1折限时抢-卷皮折扣">
		  <router-link to="/quanqiugou/list" slot="left" style='font-size: 30px'>
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

			<div class="rr2">
				<div class="r2"><span>满赠</span>
					<p>满1元即赠69元优惠券，限赠一次，数量有限，赠完即止</p>
				</div>
				<div class="r3"><span>满件减</span>
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
		<div class="oo">
			
		</div>
		<div id="main">
			<ul class="dd">
				<li class="dd1" v-for='data in list1'>
							<dl>
								<dt><img :src="data.picurl"/></dt>
								<dd>
									<span>{{"￥"+data.cprice}}</span>
									<span v-html='data.residue'></span>
								</dd>
								<dd>{{ "全球购 "+data.title}}</dd>
							</dl>
				</li>
			</ul>
		</div>
		<div class="cc">
			亲，已经到底了
		</div>
		<div class="ff"></div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../routerConfig";
export default {
  name: 'detail',
  data () {
    return {
			list1:[]
    }
  },
  mounted(){

  	axios.get('http://localhost:3000/homeapi/goodsShop',{params: {id: this.$route.params.Id}
						}).then(response=>{
  							console.log(response)
  							
								this.list1=response.data.data
								
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
	    height: .88rem!important;
    max-width: 16rem;

    overflow: inherit;
    position: relative;
    z-index: 199;
    border-bottom: .01rem solid #dedede;
 font-size: .36rem!important;
 background: #fff;
 color: #000000;
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
#nav .rr2{
	height: 1rem;
	font-size: .24rem;
}
#nav .rr2 div{
	line-height: .5rem;
}
#nav .rr2 span{
	display: inline-block;
	width: .9rem;
	padding-left: .3rem;
}
#nav .rr2 p{
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
.oo{
	width: 100%;
	height: .6rem;
	background: #f7f7f7;

}
#main{
	width: 100%;
		background: #fff;
}
#main ul{
	  display: flex;
    flex-direction: row;
    flex-wrap: wrap;

}
#main ul li{
	    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        height: 4rem;
           box-sizing: border-box;

}
#main ul li:nth-child(odd){
	border-right:0.08rem solid #f7f7f7;
	border-bottom: 0.16rem solid #f7f7f7;
}
#main ul li:nth-child(even){
	border-right:0.08rem solid #f7f7f7;
	border-bottom: 0.16rem solid #f7f7f7;
}
#main ul li dl dt{
	height: 3.1rem;
	width: 100%;
	
}
#main ul li dl dt img{
	width: 100%;
	height: 100%;
}
#main ul li dl dd{
	    margin-left: 4%;
    margin-right: 4%;
    margin-top: 0.02rem;
    line-height: .4rem;
    height: .4rem;
    font-size:.24rem;
    white-space: nowrap;
    overflow: hidden;
}
.cc{
	width: 100%;
	height: 1rem;
	background: #f7f7f7;
	font-size: .3rem;
	color: #000000;
	line-height: 1rem;
	text-align: center;
	
}
.ff{
		width: 100%;
	height: 1rem;
}
</style>
