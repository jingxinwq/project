<template>
  <div id="list">
			<header>
				<div class="ha">
					<span class="ha1">全球购</span>
					<span class="ha2">
					</span>
				</div>
			</header>
  </div>
</template>

<script>
import router from "../../routerConfig";
export default {
  name: 'list',
  data () {
    return {
			
    }
  }
}
</script>

<style scoped>
	body,html{height:100%;
		font-size: 48.8125px;
    font-weight: 300px;
    width:100%;;
}

*{box-sizing:inherit;}

body,h1,h2,h3,h4,h5,h6,p,ul,li,ol,dl,dt,dd,img,a,input{padding:0; margin:0;}

ul,ol{list-style:none;}
header,footer,section,figcaption,figure,main,nav,aside,summary,details{
    display:block;}
a{text-decoration:none;}
body{font:12px/1.5 "微软雅黑";}
 #list{
 	width: 100%;
 	height: 100%;
 }
header{
	  width: 100%;
    max-width: 16rem;
    min-width: 8rem;
    overflow: inherit;
    position: relative;
    z-index: 199;
    border-bottom: 1px solid #dedede;
}
header .ha{
	    height: 88px;
	    background: #fff;
	    z-index: 999;
    position: absolute;
    width: 100%;

} 
header .ha .ha1{
	height: 88px;
	line-height: 88px;
	font-size: 36px;
	padding: 0 72px 0 72px;
	text-align: center;
    cursor: default;
    width: 84%;
    left: 5%;
    position: absolute;
    z-index: -1;
    box-sizing: border-box;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
header .ha .ha2{
	display: block;
	padding: 20px 24px 0 0;
	width: 48px;
	height: 48px;
	vertical-align: top;
	background: url(../../assets/btn-sign.png) no-repeat scroll 0 0;

	position: absolute;
	left: 85%;
	top:20px;
}
</style>
