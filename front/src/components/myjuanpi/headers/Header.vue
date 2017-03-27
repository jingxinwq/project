<template>
	<header id="head"> 
		<div class="userTop">
			 <a id="t-find" class="btnBack" href="javascript:window.history.go(-1)">
			 <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e"></a> 
			 <span id="t-index">个人中心</span> 
		 </div>
		 <div class="user-login">
			 <a href="../other/login.html">登录</a>
			 <span>|</span>
			 <a href="//m.juanpi.com/user/register">注册</a> 
		 </div>
	 </header>
</template>
<script>
		export default {
  data () {
    return {
      
    }
  },
}
</script>
<style>
*{
	font-size: 0.4rem;
}
#head{
	height: 2.5rem;
	width:100%;
	background: red;
	color:white;
	font-size: 0.5rem
}
#t-index{
	margin-left:2.5rem;
}
.user-login{
text-align: center;

}
.user-login a{
display: inline-block;
margin:0.6rem;
color:white;
}
.user-login span{
color: white;
}
</style>