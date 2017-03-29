<template>
        <!-- 主体 -->   
    <div class="main">
        <div class="app pb20 has-bottom-menu">
            <section class="app-content">
                <header class="head" id="head">
                    <div class="fixtop">
                        <!-- 未开启“未注册下单”功能及空购物车时不显示返回按钮 -->
                        <span id="t-index">购物车</span>
                      
                    </div>
                </header>
                    <div class="quan-show bar-normal bag-show spcar">
                        <div class="quan-con">
            	            <div class="empty">
                                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png?6652b5eb">
                                <p class="empty-tips">购物车还是空荡荡的</p>
                                <p class="empty-buy-tips">快去挑选商品吧</p>
                                <p  class="go-buy"  @click="gototodayshop">今日特卖</p>
                            </div>
                            <div id="shopcar">
                                <img src="" alt="">
                                <p>title</p>
                                <p>价格</p>
                            </div>
                        </div>
        	        </div>
                
                <!--购物袋商品列表 begin-->
            <!--     <div class="customer_note" style="display:none;"><p class="cart-countdown">请在<em>(00:00)</em>内完成付款，超时订单将自动取消</p></div>
                <div class="my-bag" id="goodsList" style="display:none;">
                                </div> -->
                <!--总金额-->
                <div class="my-bag-total" id="bag-total-price" style="display:none;">
                                        ￥<span id="bagTotalPrice"></span>
                                    </div>
                <!--购物袋商品列表 over-->
                <!--优惠券 over-->
                <!--过期商品 begin-->
  <!--               <div class="decollator_box">
                    <div class="decollator_box_bg_line"></div>
                    <div class="decollator_box_con">
                        <em class="fl"></em>
                        <span class="changeshop">--以下商品已过期，需要重新加入才能购买--</span>
                        <em class="fr"></em>
                    </div>
                </div>
                <div class="old-bag">
                    <ul class="bag-list">
                        <li class="cart_shop_good_list" skuid="667681500">
            <a href="javascript:;" class="box orderlist-box clear">
                                    <div class="pic fl" onclick="window.location.href='//m.juanpi.com/shop/46090490'">
                                    <img src="//s2.juancdn.com/bao/170222/b/a/58ada4abdb01d98d558b45a1_800x800.jpg?iopcmd=thumbnail&amp;type=8&amp;width=100&amp;height=100%7Ciopcmd=convert&amp;Q=88&amp;dst=jpg">
                </div>
                <div class="ob-info">
                    <div class="obi-first">
                  <p class="title fl" onclick="window.location.href='//m.juanpi.com/shop/46090490'">金属方扣鱼嘴粗跟单鞋</p>
                   <p class="current fr">￥69</p>
                    </div>
                    <div class="obi-second">
                        <p class="type fl">
                            39【偏小一码】 黑色</p>
                        <p class="old fr">￥588</p>
                    </div>
                     <div class="obi-third">
                      <p class="num fl"><span class="join order-normal-btn">重新加入</span></p>
                    <p class="del fr"></p>
                    </div>
                </div>
            </a>
        </li>
    </ul>
                    <div class="more" id="page-loading" style="display: none;"><span>正在努力加载中<img style="height: 5px;" src="//jp.juancdn.com/jpwebapp/images/icon/goods_loading.gif?ts=89e306c5f306d46a_1490724169"></span></div>
                    <div class="more" id="page-no-next" style="display: none;"><span>亲，已经到底了</span></div>
                </div> -->
             

                <!--结算按钮 begin-->
                <input type="hidden" name="totalPrice" id="totalPrice" value="">
                <div class="bag-total" style="display:none;">
                    <div class="bag-money">
                        <p class="count">总金额<span class="p" id="myBagTotal">￥0.00</span>
                            <span class="t"></span>
                            <span class="s">(已省<em id="save">￥0</em>)</span>
                        </p>
                    </div>
                    <a href="javascript:;" class="go_pay fr" data-login="1">去结算</a>
                </div>
                <!--结算按钮 over-->
                <div style="display: none; z-index: 201;" class="alert_fullbg"></div>
                <div class="normal_alert_bg" style="display:none;">
                </div>
                <div class="normal_loading" id="loading-alert">
                    <div class="box other">
                    
                    </div>
                </div>
                <div style="display:none;" class="temai_tips">
                </div>
            </section>
    </div>


    </div>
</body>
</template>

<script>
import router from "../../routerConfig"
   export default {
     data(){
            return{

            }
        },
        methods:{
            gototodayshop(){
                router.push({path:"today/todayzk"})
            },

        }

        }
              
</script>

<style scoped>
*{
	font-size: 0.4rem;
}
#head{
	background: white;
	text-align: center;
	height:1rem;
	line-height: 1rem;
}
#t-index{
	
}
.spcar{
	background: white;
	text-align: center;
	margin-top:1rem;
	font-size:0.3rem;
	height:100%;
	overflow: auto;
}
.empty img{
	margin-top: 0.8rem

}
.empty-tips{
	font-size: 0.4rem;
	margin:0.4rem;
}
.empty-buy-tips{
	font-size: 0.3rem;
}
.go-buy{

	border:1px solid red;
	margin:0.5rem;
	margin-left:1.9rem;
	width:3.5rem;
	height:1rem;
	line-height: 1rem;

}
.changeshop{
	display: block;
	font-size: 0.3rem;
	text-align: center;
	margin-top:0.3rem;
}
</style>
 