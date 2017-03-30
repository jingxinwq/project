<template>
  <div id="searchoutbox">
    <div id="search">
      <mt-header title="搜索商品">
        <router-link to="/today/todayzk" slot="left" style='font-size: 30px'>
          <mt-button icon="back" style='font-size: 30px;'></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

      <div class="searchbox">
        <form v-on:submit.prevent="onSubmit(msg)">
          <input type="search" v-model="msg" placeholder="搜索商品" >
          <!-- <div>{{msg}}</div> -->
          <button id="search-submit" type="submit">
              <img src="http://jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?f4e07c7d-1">
          </button>
        </form>
      </div>

      <div id="box">
        <div id="categoryleft">
          <ul>
            <li v-for="(data,index) in searchGoodsData" @click="currentIndex=index" v-bind:class="currentIndex==index?'active':'noactive'">{{data.name}}</li>
          </ul>
        </div>

        <div id="categoryright">
          <ul>
            <li v-for="data in searchlistData[currentIndex]" >
              <img :src="'http://s2.juancdn.com'+data.icon"/>
              <span>{{data.name}}</span>
              <div></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../routerConfig";
import axios from "axios";
import Vue from 'vue'
import VueResouse from 'vue-resource';


export default {
  name: 'home',
  data () {
    return {
    	searchGoodsData:[],
      currentIndex:0,
      listIndex:0,
      searchlistData:[],
      msg:""
	
    }
  },
  mounted(){
  //ajax 请求

	//获取商品
	this.$http.jsonp("http://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1490838870320&",
      {//请求参数
        jsonp:'callback'
      }).then((res)=>{
        
        this.searchGoodsData = res.body;
        // console.log(this.searchGoodsData)

        for(var i = 0;i<this.searchGoodsData.length;i++){
          this.searchlistData.push(this.searchGoodsData[i].secondCateList);
        }
        // console.log(this.searchlistData)
      },function(){
      	
      });
  },

  methods:{
    onSubmit(msg){
      router.push({ name: 'searchresult',params: { msg: msg }})
    }
  }
}
</script>

<style scoped>

  *{
    margin:0;
    padding: 0;
    background: #fff;
    box-sizing: border-box;
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
  #searchoutbox{
    overflow: auto;
    height: 12.53rem;
  }
  #search .searchbox{
    width: 7rem;
    margin: 0.32rem auto;
    /*border:0.007rem solid #bbb;*/
    overflow: hidden;
    position: relative;
  }
  #search .searchbox input{
    width: 7rem;
    height: 0.55rem;
    border: 0;
    display: block;
    padding:0 0.2rem 0 0.7rem;
    font-size: 0.28rem;
    border:0.01rem solid #bbb;
    border-radius:0.03rem;

  }
  #search .searchbox button{
    display: block;
    position: absolute;
    top: 0;
    left: 0.07rem;
    border: 0 none;
    background: none;
    cursor: pointer;
    margin-top: 0.06rem
  }
  #search .searchbox button img{
    width: 0.44rem;
    height: 0.44rem;
    border: 0;
    display: block;
  }
  #box{
    display: flex;
  }
  #categoryleft{
    /*width: 1.88rem;*/
    flex: 1.4;
    font-size: 0.24rem;
    float: left;
    overflow: hidden;
    margin-right: 0.2rem;
  }
  #categoryleft ul li{
    

  }
  .noactive{
    height: 0.825rem;
    line-height: 0.825rem;
    padding-left: 0.3rem;
    border-bottom: 0.01rem solid #ccc;
    color: #333;
    background: #f9f9f9;
  }
  .active{
    height: 0.825rem;
    line-height: 0.825rem;
    border-left: 0.03rem solid #FF464E;
    background: #fff;
    color: #FF464E;
    border-bottom: 0;   
    padding-left: 0.27rem;
  }

  #categoryright{
    /*width: 100%;*/
    flex: 4;
    float: left;
  }
  #categoryright ul{
    /*float: left;*/

  }
  #categoryright li{
    width: 33%;
    float: left;
    margin-bottom: 0.2rem;
  }
  #categoryright li img{
    display: block;
    margin:0 auto;
  }
  #categoryright li span{
    display: block;
    text-align: center;
    font-size: 0.22rem;
  }
</style>
