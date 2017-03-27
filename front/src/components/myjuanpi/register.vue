<template>
<div id="register">
    <h2>注册</h2>
    <div id="inpall">
        <span>用户名：<input type="text" id="name"  v-model="name"></span>
        <br>
        <span>密  码：<input type="text" id="password" v-model="password"></span>
    </div>
<mt-button size="large"  v-on:click="registernow()">注册</mt-button>

</div>
</template>
        <script>  
     import $ from "jquery";
     import router from "../../routerConfig"
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
     
           registernow() {
                        $.ajax({
                    url:"http://localhost/my-site/project/php/register.php",
                    data:{
                        nam:this.name,
                        psw:this.password
                    },
                    type:"post",
                    success:(res)=>{
                        console.log(res)
                    router.push("/myjuanpi/user")
                        
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