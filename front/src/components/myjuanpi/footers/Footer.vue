<template>
	<div id="foot">
    <div class="foot-nav">
        <a href="//m.juanpi.com">返回首页</a>
        <span>|</span>
        <a href="javascript:void(0);" class="joa_load_app">客户端</a>
        <span>|</span>
        <a href="//www.juanpi.com/" id="pcJuanpi">电脑版</a>
    </div>
    <div class="cut-line"></div>
    <div class="foot-copyright"></div>
    <div class="foot-bottom">copyright © 武汉奇米网络科技有限公司</div><!-- 2015卷皮折扣 -->
</div>

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
#foot{
    margin-top:0.4rem; 
    background: white;
}
.foot-nav{
    text-align: center;

}
.foot-nav a{
    margin-left:0.4rem;
    direction: none;
    font-size: 0.3rem;
    color:black;
}
.foot-bottom{
    font-size: 0.3rem;
    color:#ccc;
    text-align: center;
    overflow: hidden;
}
</style>