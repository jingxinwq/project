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
                    <div class=" spcar" >
                            <div class="empty" v-if="show">
                                <img src="http://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png?6652b5eb">
                                <p class="empty-tips">购物车还是空荡荡的</p>
                                <p class="empty-buy-tips">快去挑选商品吧</p>
                                <p  class="go-buy"  @click="gototodayshop">今日特卖</p>
                            </div>
                            <ul id="shopcar" v-else>
                            <li v-for="data in datalist" class="eachli" >
                                <div id="shoptop">
                                    <div id="leftside" >
                                       <img :src="data.image">
                                    </div>
                                    <div id="rightside" >
                                        <p id="rightside-con">
                                            <span class="span1">{{data.title}}</span>
                                            <span class="span2">{{data.price}}</span>
                                        </p>
                                        <div id="addor">
                                             <p class="leftall">
                                                <span >-</span>
                                                <input type="text">
                                                <span>+</span>
                                             </p>
                                             <p class="rightall" @click="delnow"><button>删除</button></p>
                                        </div>
                                        </div>
                                </div>
                                <p class="pricenow"></p>
                                </li>
                            </ul>
                            <p class="sum" v-else>总金额：￥sum</p>
                    
                    </div>
              
            </section>
    </div>
    </div>
</body>
</template>

<script>
import router from "../../routerConfig"
import $ from "jquery"
import Url from '../../address2';
   export default {
     data(){
            return{
                datalist:[],
                 arr:[],
                 show:true ,
                    goodsData:"",
                    goodsimgsData:"",
                    url:"",
                    datalist:""

      

            }
        },
          mounted(){
            this.url = Url.url;
           // console.log(Cookie.getCookie("nam"))
            if(localStorage.getItem("nam")){
                $.post(`${this.url}/php/getShopcar.php`,{
                        username:localStorage.getItem("nam")
                      
                }).then(res=>{
                    var arr=[]
                       this.datalist=JSON.parse(res);
                     // console.log(res)
                     // console.log(JSON.parse(res))
                    for(var i=0;i<this.datalist.length;i++){
                        arr.push(JSON.parse(res)[i])
                    }
                   console.log(arr)
                   this.datalist=arr;
                   
                   console.log(this.datalist[0].title)
                   // console.log(this.datalist)
                    if(this.datalist.length){
                        this.show=false
                        
                    }else{
                        this.show=true
                    }
                    
                },error=>{
                    console.log(error)
                })
            }else{
                router.push("/myjuanpi/login")
            }
},
        computed:{
            },
        methods:{

            gototodayshop(){
                router.push({path:"today/todayzk"})
            },
            delnow(){
                 this.url = Url.url;
                    $.post(`${this.url}/php/del.php`,{
                      title:this.datalist[0].title
                       
                }).then(res=>{
                   console.log(res)     
        $.post(`${this.url}/php/getShopcar.php`,{
                        username:Cookie.localStorage.getItem("nam")
                      
                }).then(res=>{
                   console.log(res)     



                                  
                },error=>{
                    console.log(error)
                })



                },error=>{
                    console.log(error)
                })
              }
            

        }

        }
              
</script>

<style scoped>
*{
    font-size: 0.3rem;
    display: auto;
}
#head{
    background: white;
    text-align: center;
    height:1rem;
    line-height: 1rem;
}
#t-index{
    text-align: center;
    font-size: 0.4rem;
    
}
.quan-con{
    overflow: auto;
}
.app-content{
    overflow:hidden;
}
.shopli{
    height: 1rem;
    line-height: 1rem
}
.shopli img{
    display: inline-block;
    width: 1rem;
    height: 1rem;
}
#shoptop{
    display: flex;
    overflow: auto;
    text-align: center;
}

#rightside{
    flex:5;
    
}
#rightside-con{
    display: flex;
}
#rightside-con .span1{
    flex:1;
}
#rightside-con .span2{
    flex:1;
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
.fl{
    float:left;
}
.fr{
    float:right;
}
.shopli{
height: 1.5rem;
line-height: 1.5rem;


}
.leftimg{
    overflow: hidden;
    height: 1rem;
    line-height: 1rem;
   
}
.rightside{
    overflow: hidden;
   
}
.allcar{
    overflow: hidden;
}
input{
    width: 0.4rem;
    height: 0.4rem;
    display: inline-block;
}
.shopcar{
    font-size: 0.3rem;
}
.inputnow{
    width: 0.6rem;
    height: 0.6rem;
}
#addor{
    display: flex;
}
.leftall {
    flex: 1
}
.rightall{
    flex:1
}
.pricenow{
    text-align: right;
}
.sum{
    width: 100%;
    height: 0.7rem;
    line-height: 0.7rem;
    background: red;
}
#leftside img{
    display:table-cell;
    width: 1.5rem;
    height: 1.5rem;
}
#leftside{
    flex:1;
    height: 1.5rem;
    line-height: 1.5rem;

}
.eachli{
    height:1.5rem;

}
.rightside{
    height: 1.5rem;
    line-height: 1.5rem
}
</style>