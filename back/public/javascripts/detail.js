/**
 * Created by Administrator on 2017/2/25.
 */
(function($) {
    window.onload = function(){
        //设置界面宽高
        var desW = $(window).width() * 2;
        $("meta[name=viewport]").attr("content", "height=device-height,initial-scale=" + $(window).width() / desW + ",user-scalable=no")
        $("html").css("font-size", $(window).width() / 10)

        console.log(location.search.split("=")[1]);
        var goodID = location.search.split("=")[1];

        //请求头部饭店介绍
        $.ajax({
            url:"/homeapi/restaurantdetail",
            type:"get",
            data:{
                id:goodID
            },
            success:function(result){
                var result = JSON.parse(result);
                //console.log(result);

                var imgpath;
                var imgP2 = result.image_path;
                if(imgP2.substr(-3,3 ) == "png"){
                    imgpath = "https://fuss10.elemecdn.com/"+imgP2.substr(0, 1)+"/"+ imgP2.substr(1, 2)+"/"+ imgP2.substr(3,100 )+"."+"png"
                }else if(imgP2.substr(-3,3 ) == "gif"){
                    imgpath = "https://fuss10.elemecdn.com/"+imgP2.substr(0, 1)+"/"+ imgP2.substr(1, 2)+"/"+ imgP2.substr(3,100 )+"."+"gif"
                }else {
                    imgpath = "https://fuss10.elemecdn.com/"+imgP2.substr(0, 1)+"/"+ imgP2.substr(1, 2)+"/"+ imgP2.substr(3,100 )+"."+"jpeg"
                }
                var leftimg = $("<img>").attr({ src: imgpath}).appendTo($("#header .up .left"));

                var title = $("<div>").html(result.name).appendTo($("#header .up .right")).addClass("title");
                var transport = $("<div>").html(result.order_lead_time+"分钟送达"+"&nbsp;/&nbsp;配送费￥"+result.float_delivery_fee).appendTo($("#header .up .right"));
                if(result.promotion_info.length == 0){
                    var information = $("<div>").html("本店暂无公告").appendTo($("#header .up .right")).addClass("information");
                }else{
                    var information = $("<div>").html("公告："+result.promotion_info).appendTo($("#header .up .right")).addClass("information");
                }
                if(result.activities.length == 0){

                }else{
                    var active = $("<span>").html(result.activities[0].icon_name).appendTo($("#header .down")).addClass("l")
                    var active = $("<div>").html(result.activities[0].tips).appendTo($("#header .down")).addClass("l")
                }
            }
        })

        //请求饭店商品信息
        $.ajax({
            url: "/homeapi/detail",
            type: "get",
            data: {
                id: goodID
            },
            success: function (result) {
                var result = JSON.parse(result);
                //console.log(result);
                $.each(result,function(index,data){
                    //console.log(data);

                    var list =  $("<li>").appendTo($("#goodsdetail .left")).html(data.name);


                    var thedetail = $("<div>").appendTo($("#goodsdetail .right"));
                    var detail =  $("<div>").html(data.name).addClass("title");

                    detail.appendTo(thedetail)

                    $.each(data.foods,function(index,data){
                        //console.log(data.name)
                        var goods =  $("<div>").addClass("goods");

                        var goodsimg;
                        var imgP3 = data.image_path;
                        //console.log(imgP3)
                        if(imgP3.substr(-3,3 ) == "png"){
                            goodsimg = "https://fuss10.elemecdn.com/"+imgP3.substr(0, 1)+"/"+ imgP3.substr(1, 2)+"/"+ imgP3.substr(3,100 )+"."+"png"
                        }else if(imgP3.substr(-3,3 ) == "gif"){
                            goodsimg = "https://fuss10.elemecdn.com/"+imgP3.substr(0, 1)+"/"+ imgP3.substr(1, 2)+"/"+ imgP3.substr(3,100 )+"."+"gif"
                        }else {
                            goodsimg = "https://fuss10.elemecdn.com/"+imgP3.substr(0, 1)+"/"+ imgP3.substr(1, 2)+"/"+ imgP3.substr(3,100 )+"."+"jpeg"
                        }
                        var goodsleftimg = $("<img>").attr({ src: goodsimg }).appendTo(goods);

                        var rightinfo = $("<div>").addClass("rightinfo")
                        var goodstitle = $("<div>").html(data.name).appendTo(rightinfo).addClass("rgt");
                        var goodsdescription =  $("<div>").html(data.description).appendTo(rightinfo).addClass("description");
                        var other =  $("<div>").html("月售"+data.month_sales+"份"+"&nbsp"+"好评率"+data.satisfy_rate+"%").appendTo(rightinfo).addClass("other");
                        var goodsprice =  $("<div>").html("￥"+data.specfoods[0].price).appendTo(rightinfo).addClass("goodsprice");

                        rightinfo.appendTo(goods)
                        goods.appendTo(thedetail)
                    })

                });
            }
        })
    }
})(Zepto)