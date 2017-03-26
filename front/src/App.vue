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

      <router-link to="/todayzk" tag="li" active-class="kerwinAcitive">
        <img class="routerimg" :src="appData[0].bg_icon" />
        <div>今日折扣</div>
      </router-link>

      <router-link to="/zhifacang" tag="li" active-class="kerwinAcitive">
        <!--<img :src="'https:'+appData[1].bg_icon" />-->
        <div>直发仓</div>
      </router-link>

      <router-link to="/quanqiugou" tag="li" active-class="kerwinAcitive">
        <!--<img :src="'https:'+appData[2].bg_icon" />-->
        <div>全球购</div>
      </router-link>

      <router-link to="/gouwuche" tag="li" active-class="kerwinAcitive">
        <!--<img :src="'https:'+appData[3].bg_icon" />-->
        <div>购物车</div>
      </router-link>

      <router-link to="/myjuanpi" tag="li" active-class="kerwinAcitive">
        <!--<img :src="'https:'+appData[4].bg_icon" />-->
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
//      console.log(response)
        this.appData = response.data.menu_list
        
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
<<<<<<< HEAD
    }
    :root{
    	background: #f2f2f2;
    	font-family: "微软雅黑";
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
</style>
