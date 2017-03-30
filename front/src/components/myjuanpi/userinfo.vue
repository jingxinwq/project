<template>
	<div class="main">
		<div class="app common" style="background:#f7f7f7;">
			<header id="head">
				<div class="fixtop">
					<a id="t-find" class="btnBack" href="javascript:window.history.go(-1)"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?578e3149"></a>
					<span id="t-index">我的账户</span>
				</div>
			</header>
			<div class="bind_phone">
				<ul>
					<li>
						<div id="imginfo">
							<span class="fl">头像</span>
							<div class="fr">
								<img src="//s1.juancdn.com/face/default.jpg" class="imgsize">
								<img class="arrow" src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/details.png?57f255a8">
						    </div>
						</div>
					</li>
					<li>
						<p id="change_name">
							<span class="fl">用户名</span>
							<img class="arrow" src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/details.png?57f255a8">
							<span class="fr">{{name}}</span>
						</p>
					</li>
				</ul>
				<div class="gray-line"></div>
				<ul>
					<li>
						<p href="//m.juanpi.com/address">
							<span class="fl">收货地址</span>
							<img class="arrow" src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/details.png?57f255a8">
						</p>
					</li>
				</ul>
				<div class="gray-line"></div>
				<ul>
					<li>
					</li>
											<li>
						</li>
					
				</ul>
							</div>
		</div>
		<!-- 加入购物车快捷入口 -->
	</div>

        <!-- head js  库文件js 160918优化移动到此处-->
        <!-- 微信分享配置 -->
        
        <!-- 统计js -->
</template>
<script>
	import router from "../../routerConfig";


	export default {
        data(){
            return{
              
                name:"",
                show:true
                // hascookie:false
            }
        },
		created(){
			  this.name=Cookie.getCookie("nam");
				 	
		},


		   methods:{
		   
			changinfo(){
				router.push({ name: 'userinfo'})

			}

		}
  	
  	}
</script>
<style scoped>
.fl{float:left;}
.fr{
	float:right;
}
body{
	background: rgb(247, 247, 247);
	font-size: 0.4rem;
	}
	#main{
		font-size: 0.3rem;
	}
	#t-index{
		margin-left: 2.4rem;
	}
	#head{
		background: white;
	}
	#imginfo{
		overflow: hidden;
		height:1.5rem;
		line-height:1.5rem;
	background: white;
	border-top: 2px solid #ccc;
	}
	.bind_phone{
		font-size: 0.3rem;
	}
	.imgsize{
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
	}
	.arrow{
		display: inline-block;
	}
	.change_name{
		margin-top: 0.2rem;
	}
	.bind_phone ul li{
		margin-top: 0.3rem

	}
	.gray-line{
background: white;
	}
	#change_name{
		background: white;
	}
</style>