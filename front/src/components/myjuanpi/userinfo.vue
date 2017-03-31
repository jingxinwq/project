<template>
	<div class="main">
		<div class="app common" style="background:#f7f7f7;">
			<header id="head">
				<div class="fixtop">
					<a id="t-find" class="btnBack" href="javascript:window.history.go(-1)"><img src="http://jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?578e3149"></a>
					<span id="t-index">我的账户</span>
				</div>
			</header>

			<div class="bind_phone">
				<ul>
					<li>
						<div id="imginfo">
							<span class="fl">头像</span>
							<div class="fr">
								<img :src="path" class="imgsize" @click='chang'>
								<img class="arrow" src="http://jp.juancdn.com/jpwebapp_v1/images_v1/user/details.png?57f255a8">
						    </div>
						</div>
					</li>
					<li class="usernameli">
						<p class="change_name">
							<span class="fl">用户名</span>
							<img class="arrow" src="http://jp.juancdn.com/jpwebapp_v1/images_v1/user/details.png?57f255a8">
							<span class="fr">{{name}}</span>
						</p>
					</li>

					<li class="usernameli">
						<p class="change_name">
							<span class="fl">收货地址</span>
							<img class="arrow" src="http://jp.juancdn.com/jpwebapp_v1/images_v1/user/details.png?57f255a8">
							<span class="fr">{{name}}</span>
						</p>
					</li>
				</ul>
				<div class="gray-line"></div>

			</div>
			<mt-actionsheet :actions="actions" v-model="sheetVisible">
    	
  			</mt-actionsheet>
		</div>
		<!-- 加入购物车快捷入口 -->
	</div>
</template>
<script>
	import router from "../../routerConfig";
	import Vue from "vue";
	import { Actionsheet } from 'mint-ui';

	Vue.component(Actionsheet.name, Actionsheet);

	export default {
        data(){
            return{
              
                name:"",
                show:true,
                // hascookie:false
                path:'',
                sheetVisible:false,
		        actions:[{
		        	name:"拍照",method:this.test1
		        },
		        {
		        	name:"从相册中选择",method:this.test2
		        }
		        ]
            }
        },
		created(){
			  this.name=localStorage.getItem("nam"); 
			    // this.name=localStorage.getsetItem("nam")
				 	
		},


		   methods:{
		   
			changinfo(){
				router.push({ name: 'userinfo'})

			},
			chang:function(){
  				this.sheetVisible=true;
			},
			test1:function(){
  	
  				var cmr = plus.camera.getCamera();
				var res = cmr.supportedImageResolutions[0];
				var fmt = cmr.supportedImageFormats[0];
				console.log("Resolution: "+res+", Format: "+fmt);
				cmr.captureImage( ( path )=>{
					plus.io.resolveLocalFileSystemURL( path,(entry)=>{
							console.log(entry.toLocalURL());
							this.path=entry.toLocalURL();
							console.log(this.path);
						})
					},
					function( error ) {
						alert( "Capture image failed: " + error.message );
					},
					{resolution:res,format:fmt}
				);
  			},
			test2:function(){
			  	console.log(222)
			  	console.log("从相册中选择图片:");
			    plus.gallery.pick( (path)=>{
			    	this.path=path;
			    	console.log(path);
			    }, function ( e ) {
			    	console.log( "取消选择图片" );
			    }, {filter:"image"} );
			 }
		}
  	}
</script>

<style scoped>
.fl{float:left;}
.fr{
	float:right;
}
img{
	width:0.3rem;
	height:0.3rem;
}
body{
	background: rgb(247, 247, 247);
	font-size: 0.4rem;
	}
	#main{
		font-size: 0.3rem;

	}

	.fixtop{
	height: .88rem;
	line-height: .88rem;
	}
	#t-find{
		float: left;

	}
	#t-find img{
		display: block;
		margin: .15rem auto;
		width:0.6rem;
		height:0.6rem;
	}
	#t-index{
	display: block;
	/*width: 1.8rem;*/
	height: .88rem;
	line-height: .88rem;
	font-size: .36rem;
	text-align:center;
	margin:0 auto;
	padding: 0 .2rem;

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
	font-size: .35rem;
	padding: 0 .2rem;
	overflow: hidden;
	}
	.bind_phone{
		font-size: 0.3rem;

	}
	.fr img:nth-child(1){
		display: inline-block;
		margin-top: .25rem;

	}
	.fr img:nth-child(2){
		display: inline-block;
		margin-top: .1rem;
		float: right;
		margin-top:.6rem;
	}
	.imgsize{
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
	}
	.arrow{
		display: inline-block;
		float: right;
	}
	#change_name{
		margin-top: 0.2rem;
		height:.6rem; 
		line-height: .6rem;
	}
	.bind_phone ul li{
		margin-top: 0.2rem;

	}
	.bind_phone ul .usernameli{
		height: 1rem;
		
	}
	.bind_phone ul .usernameli .change_name{
		height: 1rem;
		line-height: 1rem;
		padding: 0 0.2rem;
	}
	.bind_phone ul .usernameli .change_name img{
		margin-top: 0.3rem;
	}
	.gray-line{
		background: white;
	}
	.change_name{
		background: white;
	}
	.mint-actionsheet{
		font-size: 5.2rem;
	    height: 3rem
	}

	.mint-actionsheet ul.mint-actionsheet-list{
		height:2rem!important;
	}
	.mint-actionsheet-listitem{
		line-height: 1rem!important;
		height: 1rem!important;
		font-size:0.35rem!important;
		
	}
	.mint-actionsheet-button{
		height: 1rem!important;
		font-size: 0.35rem!important;
		height: 1rem!important;
		line-height: 1rem!important;
	}
</style>