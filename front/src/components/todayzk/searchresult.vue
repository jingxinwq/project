<template>
  <div id="searchoutbox">
    <div id="search">
      <mt-header title="搜索结果">
        <router-link to="/today/todayzk" slot="left" style='font-size: 30px'>
          <mt-button icon="back" style='font-size: 30px;'></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

      <div class="searchbox">
        <form v-on:submit.prevent="onSubmit(msg)">
          <input type="search" v-model="msg" placeholder="搜索商品" >
          <button id="search-submit" type="submit">
              <img src="http://jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?f4e07c7d-1">
          </button>
        </form>
      </div>
      
      <div id="main">
        <ul class="goods">
          <li v-for='(data,index) in goodsData' @click="changepage(data.targetUrl)">
            <dl>
              <dt><img :src="'http:'+data.picurl"/></dt>
              <dd class="up">
                <span class="left">{{"￥"+data.cprice}}</span>
                <span class="right" v-html='data.residue'></span>
              </dd>
              <dd class="down">{{data.title}}</dd>
            </dl>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import router from "../../routerConfig";
import axios from "axios";
import VueResouse from 'vue-resource';
import Url from '../../address';

export default {
  name: 'searchresult',
  data () {
    return {
      
      msg:"",
      goodsData:"",
      url:""
  
    }
  },
  mounted(){
    //ajax 请求
    this.url = Url.url;

    //获取商品
   axios.get(`${this.url}/homeapi/search`,
      {params: {msg: this.$route.params.msg}

    }).then(response=>{
      console.log(response.data.data)
      for(var i = 0 ;i<response.data.data.length;i++){
        response.data.data[i].targetUrl = response.data.data[i].targetUrl.split("//m.juanpi.com")[1];
      }
      this.goodsData = response.data.data;
      console.log(this.goodsData)   

    })
    .catch(function (error) {
      console.log(error);
    });  

  },

  methods:{
    onSubmit(msg){
      this.goodsData="";
      axios.get(`${this.url}/homeapi/search`,
        {params: {msg: msg}

      }).then(response=>{
        // console.log(response.data.data)
        for(var i = 0 ;i<response.data.data.length;i++){
          response.data.data[i].targetUrl = response.data.data[i].targetUrl.split("//m.juanpi.com")[1];
        }
        this.goodsData = response.data.data;
        // console.log(this.goodsData)   

      })
      .catch(function (error) {
        console.log(error);
      }); 
    },
    changepage(id){
      console.log(id);
      router.push({name: 'goodsDetail1', params: { goodsId: id}})
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

  #main{
    width: 100%;
    background: #fff;
  }
  #main ul{
    display: table;
    background: #f7f7f7;
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
</style>
