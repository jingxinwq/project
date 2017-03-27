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
				<li class="dd1">
							<dl>
								<dt><img src="../../assets/579f0f98151ad16c308b461f_800x800.jpg"/></dt>
								<dd>
									<span>￥65</span>
									<span>剩3天</span>
								</dd>
								<dd> 全球购 | 德运高钙全脂奶粉(1kg)</dd>
							</dl>
				</li>
				<li class="dd1">
							<dl>
								<dt><img src="../../assets/579f0f98151ad16c308b461f_800x800.jpg"/></dt>
								<dd>
									<span>￥65</span>
									<span>剩3天</span>
								</dd>
								<dd> 全球购 | 德运高钙全脂奶粉(1kg)</dd>
							</dl>
				</li>
				<li class="dd1">
							<dl>
								<dt><img src="../../assets/579f0f98151ad16c308b461f_800x800.jpg"/></dt>
								<dd>
									<span>￥65</span>
									<span>剩3天</span>
								</dd>
								<dd> 全球购 | 德运高钙全脂奶粉(1kg)</dd>
							</dl>
				</li>
				<li class="dd1">
							<dl>
								<dt><img src="../../assets/579f0f98151ad16c308b461f_800x800.jpg"/></dt>
								<dd>
									<span>￥65</span>
									<span>剩3天</span>
								</dd>
								<dd> 全球购 | 德运高钙全脂奶粉(1kg)</dd>
							</dl>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>

export default {
  name: 'detail',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
#detail{
	width: 100%;
	height: 100%;
}
.mint-header{
	    width: 100%;
	    height: 88px!important;
    max-width: 16rem;
    min-width: 8rem;
    overflow: inherit;
    position: relative;
    z-index: 199;
    border-bottom: 1px solid #dedede;
 font-size: 36px!important;
}
.mint-header .mint-header-title{
	    font-size: 36px!important;
	   box-sizing: border-box;
    color: #4a4a4a;
        text-align: center;
    cursor: default;
    width: 90%;
    left: 5%;
    position: absolute;
    height: 88px;
    line-height: 88px;
}
.mint-header .mint-button{
    background-color: transparent;
    border: 0;
    box-shadow: none;
    color: inherit;
    display: inline-block;
    padding: 0;	
}
.mint-header-button .mint-button-icon{
	display: block;
	height: 48px;
	width:49px;
	font-size: 30px!important;
	    vertical-align: middle;
    display: inline-block
}
.mint-header-button .mint-button-icon .mintui{

	font-size: 30px!important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
}
.mintui-back{
	font-size: 30px!important;
}
.mintui{
		font-size: 30px!important;
}
#nav .rr{
	height: 142px;
	display: flex;

}
#nav .rr .r1{
	flex: 2;
}
#nav .rr .r1 img{
display: block;
margin: 20px auto;
}
#nav .rr .r2{
	flex: 3;
		font-size: 28px;
		line-height:60px ;
	
}
#nav .rr2{
	height: 100px;
	font-size: 24px;
}
#nav .rr2 div{
	line-height: 50px;
}
#nav .rr2 span{
	display: inline-block;
	width: 90px;
	padding-left: 30px;
}
#nav .rr2 p{
	display: inline-block
}
#hq{
	padding: 10px 0;
	font-size: 28px;
	border-bottom: 1px solid #e7e7d7;
	height: 80px;
	line-height: 80px;
	text-align: center;
width: 100%;

	
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
	height: 60px;
	background: #f7f7f7;
}
#main{
	width: 100%;
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
        height: 400px;

}
#main ul li dl dt{
	height: 310px;
	width: 100%;
	
}
#main ul li dl dt img{
	width: 100%;
	height: 100%;
}
#main ul li dl dd{
	    margin-left: 4%;
    margin-right: 4%;
    margin-top: 2px;
    line-height: 40px;
    height: 40px;
    font-size: 24px;
    white-space: nowrap;
    overflow: hidden;
}
</style>
