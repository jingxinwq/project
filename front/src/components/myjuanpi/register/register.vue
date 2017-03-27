<template>
	<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
        <!-- 主体 -->
        
	<iframe src="https://user.juanpi.com/muser/register" id="iframepage" name="iframepage" frameborder="0" scrolling="no" width="100%" height="1500px" onload="iFrameHeight()"></iframe>

        <!-- head js  库文件js 160918优化移动到此处-->
        <script type="text/javascript" src="//jp.juancdn.com/common/js/Images.js?ts=be05c46378eb638e_1490413691"></script>
        
        <script type="text/javascript">
            var versionNumber="ts=be05c46378eb638e_1490413691";
            var utm_hashfollow = [106788,106787,106786,106785,106784,106783,106782,106781,106780,106779,106665,106789,106895,106894,106893,106892,106891,106890,106889,106888,106887,106886,106885,106884,106883,106882,106881,107615,107812,107813,107814,107815,107816,107817,107818,107819,107820,107821];
            var is_utm_hidden = 0;
        </script>
        <!-- 业务js -->
        
	<script type="text/javascript">
		/*由于是iframe 必须设置高度
				这段js不能放在子级里面，因为跨域了，暂时就放在单个页面里面了
				*/
		function iFrameHeight() {
			var heightOne = document.documentElement.clientHeight;
			var heightTwo = window.innerHeight;
			var Theight = heightOne <= heightTwo ? heightOne : heightTwo;
			var iframepage = document.getElementById('iframepage');
			iframepage.height = Theight;
		}
	</script>

        <!-- 微信分享配置 -->
        
        <!-- 统计js -->
        
        <script type="text/javascript">
            function getCookie(cookieName) {
                var cookiePattern = new RegExp('(^|;)[ ]*' + cookieName + '=([^;]*)'),
                        cookieMatch = cookiePattern.exec(document.cookie);

                return cookieMatch ? cookieMatch[2] : '';
            }
            //CPS渠道M站落地页移除APP下载链接(特殊处理)
            if(utm_hashfollow && utm_hashfollow.length>0){
                var utm=getCookie("hashfollow");
                for(var i=0;i<utm_hashfollow.length;i++){
                    if(utm==utm_hashfollow[i]){
                        is_utm_hidden = 1;
                        //顶部广告
                        var topAd=document.querySelector(".go-app-new");
                        if(topAd){
                            topAd.style.display="none";
                        }
                        //底部
                        var footer=document.querySelector("#foot");
                        if(footer){
                            footer.style.display="none";
                        }

                        //商详右上角 品详右上角
                        var menumore=document.querySelector(".menu-more");
                        if(menumore){
                            var menuitem=menumore.querySelector(".menu-item");
                            var height=parseInt(window.getComputedStyle(menuitem,null)['height'].replace(/px/ig,''));
                            menuitem.style.height=(height-height/3)+"px";
                            menuitem.querySelectorAll("ul li")[0].style.display="none";
                        }

                        //购物车空态 今日特卖
                        var gobuy=document.querySelector(".empty .go-buy");
                        if(gobuy){
                            gobuy.style.display="none";
                        }
                        setTimeout(function(){
                            //收藏空态 去逛逛
                            var gobtn=document.querySelector(".empty .go-btn");
                            if(gobtn){
                                gobtn.style.display="none";
                            }
                            var pressbtn=document.querySelector(".advance .press_btn");
                            if(pressbtn){
                                pressbtn.style.display="none";
                            }

                            //universal-link
                            var universallink=document.querySelector(".universal-link");
                            if(universallink){
                                universallink.style.display="none";
                            }
                        },4000);
                    }
                }
            }
        </script>
</body>
</html>
</template>