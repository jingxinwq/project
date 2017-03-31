<template>
<div id="register">
    <h2>注册</h2>
    <div id="inpall">
        <span>用户名：<input type="text" id="name"  v-model="name"></span>
        <br>
        <span>密  码：<input type="text" id="password" v-model="password"></span>
    </div>
<mt-button size="large"  @click="registernow">注册</mt-button>

</div>
</template>
        <script>  
     import $ from "jquery";
     import router from "../../routerConfig"
     import { MessageBox } from 'mint-ui';
     import Url from '../../address2';

export default {
        data(){
            return{
              
                name:"",
                password:"",
                url:""
            }
        },
  mounted(){
},
created(){

},

    methods:{
           
           registernow() {
            this.url = Url.url;
                 $.ajax({
                    url:`${this.url}/php/register.php`,
                    data:{
                        nam:this.name,
                        psw:this.password
                    },
                    type:"post",
                    success:(res)=>{
                        console.log(res)
                        if(res==0){
                                   MessageBox.alert('此用户存在，重新注册').then(action => {
                         
                  })
                        }
                        else{
                        MessageBox.alert('注册成功').then(action => {
                         router.push({path:"/myjuanpi/login"})
                  })
                        }
                 
                      // Cookie.setCookie("nam",this.name,5)
                    
                        
                    }
                })
            }
        }

        }
              


</script>
<style scoped>
    #register{
        font-size: 0.3rem;
        background: white;
        color:#ccc;
    }
h2{
    text-align: center;
}
#inpall input{
    display: block;
    width: 100%;
    height: 0.6rem;
}
.mint-button{
    font-size: 0.5rem;
    height: 0.7rem;
}

</style>