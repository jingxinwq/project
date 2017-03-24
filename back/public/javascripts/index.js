/**
 * Created by Administrator on 2017/2/24.
 */
(function($) {
    //设置界面宽高
    var desW = $(window).width() * 2;
    $("meta[name=viewport]").attr("content", "height=device-height,initial-scale=" + $(window).width() / desW + ",user-scalable=no")
    $("html").css("font-size", $(window).width() / 10)


    //fetch动态获取-城市-数据
    fetch("/homeapi/city").then(function(res){
        return res.json(); //json格式
        //return res.text();  //普通的字符串
    }).then(function(result){
        //console.log(result);
        var city = $("<div>").appendTo($("#header .information .left")).html(result.name).addClass("l").addClass("city");
    },function(error){

    })

    //fetch动态获取-天气-数据
    fetch("/homeapi/weather").then(function(res){
        return res.json(); //json格式
        //return res.text();  //普通的字符串
    }).then(function(result){
        //console.log(result);
        var imgP = result.image_hash
        var weatheraddress = "https://fuss10.elemecdn.com/"+imgP.substr(0, 1)+"/"+ imgP.substr(1, 2)+"/"+ imgP.substr(3,100 )+"."+"png";
        //console.log(weatheraddress)
        var temperature = $("<div>").appendTo($("#header .information .right .textbox")).html(result.temperature+"°");
        var description = $("<div>").appendTo($("#header .information .right .textbox")).html(result.description);
        var weatherimg = $("<img>").appendTo($("#header .information .right")).attr({ src: weatheraddress}).addClass("r");
    },function(error){

    })

    //fetch动态获取-热搜-数据
    fetch("/homeapi/hotsearch").then(function(res){
        return res.json(); //json格式
        //return res.text();  //普通的字符串
    }).then(function(result){
        //console.log(result);
        $.each(result,function(index,data){
            //console.log(data.word)
            var hotlist = $("<a>").appendTo($("#header .hot")).html(data.word).addClass("l");
        });
    },function(error){

    })

    //fetch动态获取-index_entry-数据
    fetch("/homeapi/index_entry").then(function(res){
        return res.json(); //json格式
        //return res.text();  //普通的字符串
    }).then(function(result){
        console.log(result);
        for(var i=0;i<8;i++){
            var entryimg = "https://fuss10.elemecdn.com"+result[i].image_url;
            var firstpage = $("<a>");
            var entryimages = $("<img>").attr({ src: entryimg});
            var entrytitles = $("<span>").html(result[i].title);
            firstpage.append(entryimages).append(entrytitles);
            firstpage.appendTo($("#index_entry .page1"));
        }

        for(var i=8;i<result.length;i++){
            var entryimg = "https://fuss10.elemecdn.com"+result[i].image_url;
            var firstpage = $("<a>");
            var entryimages = $("<img>").attr({ src: entryimg});
            var entrytitles = $("<span>").html(result[i].title);
            firstpage.append(entryimages).append(entrytitles);
            firstpage.appendTo($("#index_entry .page2"));
        }

    },function(error){
        console.log(error)
    })

    fetch("/homeapi/restaurant").then(function(res){
        return res.json(); //json格式
        //return res.text();  //普通的字符串
    }).then(function(result){
        console.log(result);
        $.each(result,function(index,data){
            var imgpath
            var imgP2 = data.image_path;
            if(imgP2.substr(-3,3 ) == "png"){
                imgpath = "https://fuss10.elemecdn.com/"+imgP2.substr(0, 1)+"/"+ imgP2.substr(1, 2)+"/"+ imgP2.substr(3,100 )+"."+"png"
            }else if(imgP2.substr(-3,3 ) == "gif"){
                imgpath = "https://fuss10.elemecdn.com/"+imgP2.substr(0, 1)+"/"+ imgP2.substr(1, 2)+"/"+ imgP2.substr(3,100 )+"."+"gif"
            }else {
                imgpath = "https://fuss10.elemecdn.com/"+imgP2.substr(0, 1)+"/"+ imgP2.substr(1, 2)+"/"+ imgP2.substr(3,100 )+"."+"jpeg"
            }

            var restaurant = $("<div>").addClass("restaurant");
            restaurant.click(function(){
                location.href="detail.html?GoodsId="+data.id;
            })

            //left
            var left = $("<div>").addClass("left").addClass("l");
            var leftimg = $("<img>").attr({ src: imgpath})
            left.appendTo(restaurant);
            leftimg.appendTo(left);

            //right
            var right = $("<div>").addClass("right").addClass("l");

            //title
            var title = $("<div>").html(data.name);
            title.appendTo(right);

            //sale
            var sale = $("<div>").addClass("sale");
            var rating = $("<div>").addClass("rating").addClass("l").html("评分:"+data.rating+"&nbsp;&nbsp;");
            var saleall = $("<div>").addClass("saleall").addClass("l").html("月售"+data.recent_order_num+"单");
            var method = $("<div>").addClass("method")

            if(data.delivery_mode == undefined){

            }else{
                var bird = $("<div>").addClass("bird").addClass("r").html(data.delivery_mode.text);
                bird.appendTo(method);
            }

            if(data.supports.length == 0){

            }else{
                if(data.supports[data.supports.length-1].name == "准时达"){
                    var ontime = $("<div>").addClass("ontime").addClass("r").html(data.supports[data.supports.length-1].name);
                    ontime.appendTo(method);
                }else{

                }
            }
            method.appendTo(sale);
            rating.appendTo(sale);
            saleall.appendTo(sale);
            sale.appendTo(right);

            //transport
            var transport = $("<div>").addClass("transport");
            var price = $("<div>").addClass("price").addClass("l").html("￥"+data.float_minimum_order_amount+"起送"+"/"+"配送费￥"+data.float_delivery_fee);
            var time = $("<div>").addClass("time").addClass("r").html(data.distance+"m/"+data.order_lead_time+"分钟");
            price.appendTo(transport);
            time.appendTo(transport);
            transport.appendTo(right);

            right.appendTo(restaurant);
            restaurant.appendTo($("#main"))
        });
    },function(error){

    })

})(Zepto)