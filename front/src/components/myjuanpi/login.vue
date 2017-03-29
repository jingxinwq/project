<template>
<div id="login">
	<div class="fixtop">
						<a id="t-find" href="javascript:history.go(-1);" ><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e"></a>
						<span id="t-index">登录</span>
						<span id="t-user" class="free-reg" rel="nofollow" target="_parent"  @click="changenow">注册</span>
					</div>  
		<div id="inpall">
        <span>用户名：<input type="text" id="name"  v-model="name"></span>
        <br>
        <span>密<span id="space"></span>码：<input type="text" id="password" v-model="password"></span>
    </div>
<mt-button size="large"  @click="loginnow" class="loginnow">登录</mt-button>


</div>
</template>
<script>
import $ from "jquery";
     import router from "../../routerConfig"
     import { MessageBox } from 'mint-ui';
		export default {
     data(){
            return{
              
                name:"",
                password:""
            }
        },
  mounted(){
},
    methods:{
     		changenow(){
     			  router.push({path:"/myjuanpi/register"})
     		},

           loginnow() {
                 $.ajax({
                    url:"http://localhost/mysite---1/project/php/login.php",
                    data:{
                        nam:this.name,
                        psw:this.password
                    },
                    type:"post",
                    success:(res)=>{
                        if(res==0){
                                 MessageBox.alert('登录失败，请重新登录').then(action => {
                          // router.push({path:"/myjuanpi/user"})
                  }); 
                        }
                        else{
                           Cookie.setCookie("nam",this.name,5)
                                  MessageBox.alert('登录成功').then(action => {
                                      router.push({path:"/myjuanpi/user"})
                  })
                        }
              
                    },
                      error:function(error){
                console.log(error);
            }
                })
            }
        }

        }
              
</script>
<style scoped>
*{
	font-size: 0.4rem
}
	.fixtop{
		width: 100%;
		background: red;
		color:white;


	}
	#space{
		display: inline-block;
		width: 0.4rem;
	}
	#t-index{
		margin-left: 30%;

	}
	#t-user{
		float:right;
		margin-right: 0.3rem;
	}
	.mint-button{
    font-size: 0.5rem;
    height: 0.7rem;
}
#inpall span{
  display: inline-block;
  margin-top: 0.3rem
};
.loginnow{
  margin-top: 0.2rem;
}
</style>
