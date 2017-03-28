<template>
  <div id="app">
   
      <!-- 路由匹配到的组件将渲染在这里 -->
      <transition name="list" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <ul class="footer">

      <router-link to="/today" tag="li" active-class="kerwinAcitive">
        <span class="icon-todayzk"></span>        
        <div>今日折扣</div>
      </router-link>

      <router-link to="/zhifacang" tag="li" active-class="kerwinAcitive">
        <span class="icon-zhifacang"></span>
        <div>直发仓</div>
      </router-link>

      <router-link to="/quanqiugou" tag="li" active-class="kerwinAcitive">
        <span class="icon-quanqiugou"></span>
        <div>全球购</div>
      </router-link>

      <router-link to="/gouwuche" tag="li" active-class="kerwinAcitive">
        <span class="icon-gouwuche"></span>
        <div>购物车</div>
      </router-link>

      <router-link to="/myjuanpi" tag="li" active-class="kerwinAcitive">
        <span class="icon-myjuanpi"></span>
        <div>我的卷皮</div>
      </router-link>

    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'app',
  data () {
    return {
      appData:""
    }
  },
  mounted(){
    //ajax 请求

    axios.get("http://localhost:3000/homeapi/select1_1")
      .then( response=>{  
     // console.log(response)
        this.appData = response.data.menu_list
        // console.log(this.appData)
      })
      .catch(function (error) {
        console.log(error);
  });

  },
}
</script>

<style>

    *{
      margin:0px;
      padding:0px;
    }
    :root{
    	background: #f2f2f2;
    	font-family: "微软雅黑";
    }
a{
  text-decoration:none;
}
    li{
      list-style: none;
    }
    html,body{
      height: 100%;
      overflow: hidden;
      font-size: 100px;
      overflow: auto;
    }

    .footer{
      display: flex;
      position: fixed;
      height: 0.89rem;
      font-size: 0.2rem;
      bottom: 0px;
      width: 100%;
      left:0px;
      bottom: -2px;
    }
    .footer li{
      flex-direction: column;
      flex:1;
      text-align: center;
      background: #fff;
    }       
    .footer li .routerimg{
    	width: 0.44rem;
    }
    .icon-todayzk {
      background: url('http://s2.juancdn.com/bao/160823/6/4/57bbb0bb151ad170288b45ad_72x72.png');
      display: block;
      width: 0.43rem;
      height: 0.43rem;
      background-size: 100% 100%;
      margin: 0.07rem auto;
    }
    .icon-zhifacang {
      background: url('http://s2.juancdn.com/bao/170223/2/8/58aebd7adb01d956348b45d1_72x72.png');
      display: block;
      width: 0.43rem;
      height: 0.43rem;
      background-size: 100% 100%;
      margin: 0.07rem auto;
    }
     .icon-quanqiugou {
      background: url('http://s2.juancdn.com/bao/160914/9/b/57d8ca80151ad15b618b4584_72x72.png');
      display: block;
      width: 0.43rem;
      height: 0.43rem;
      background-size: 100% 100%;
      margin: 0.07rem auto;
    }
    .icon-gouwuche {
      background: url('http://s2.juancdn.com/bao/160823/0/3/57bbb0f0151ad15a2a8b458f_72x72.png');
      display: block;
      width: 0.43rem;
      height: 0.43rem;
      background-size: 100% 100%;
      margin: 0.07rem auto;
    }
     .icon-myjuanpi {
      background: url('http://s2.juancdn.com/bao/160914/0/d/57d8ca99151ad109618b4584_72x72.png');
      display: block;
      width: 0.43rem;
      height: 0.43rem;
      background-size: 100% 100%;
      margin: 0.07rem auto;
    }
    .kerwinAcitive .icon-todayzk {
      background: url('http://s2.juancdn.com/bao/160823/9/a/57bbb0be151ad154148b45f7_72x72.png');
      background-size: 100% 100%;
    }
    .kerwinAcitive .icon-zhifacang {
      background: url('http://s2.juancdn.com/bao/170223/f/7/58aebd7d151ad103118b4582_72x72.png');
      background-size: 100% 100%;
    }
    .kerwinAcitive .icon-quanqiugou {
      background: url('http://s2.juancdn.com/bao/160914/4/a/57d8ca82151ad142628b458f_72x72.png');
      background-size: 100% 100%;
    }
    .kerwinAcitive .icon-gouwuche {
      background: url('http://s2.juancdn.com/bao/160823/7/3/57bbb0f3151ad13b318b458a_72x72.png');
      background-size: 100% 100%;
    }

    .kerwinAcitive .icon-myjuanpi {
      background: url('http://s2.juancdn.com/bao/160823/2/3/57bbb103151ad16c278b45b5_72x72.png');
      background-size: 100% 100%;
    }
    .kerwinAcitive{
       color:#FF464E;
    }
    .mint-swipe-indicator{
			width:0.14rem !important;
			height: 0.14rem !important;
			margin: 0 0.06rem !important;
		}
		.is-active{
			background: #fff !important;
			opacity:0.8!important;
		}
		.footer img{
			margin-top: 0.07rem;
		}
    .mint-loadmore{
      overflow:visible !important;
      
    }

     .mint-loadmore-top{
      overflow: hidden;
      height:1rem !important;
      line-height: 1rem !important;
      margin-top: -1rem !important;
    }
    
    .mint-loadmore-top span{

      font-size: 0.3rem !important;
      position: relative;
      top:.2rem;
    }
    .mintui {
      font-size: 0.36rem !important;
    }
</style>
