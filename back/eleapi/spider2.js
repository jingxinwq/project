var  https = require("https");
var cheerio = require("cheerio");
function request(path,callback){
	var options = {
		hostname: 'm.juanpi.com',
        port: 443, 
        path: path,
        method: 'GET'
    };
    var req = https.request(options,function(res){

        var html = "";
        //console.log( res.statusCode);

        res.on("data",function(chunk){
            html+=chunk;
        })

        res.on("end",function(){
          callback(ser(html))
       
        })
    })

    req.on("error",function(){

    })

    req.end();
}
function ser(html){
    var $  = cheerio.load(html);
    var obj2 ={};
    var topImg1;
    var title;
    var price1;
    var price2; 
    var world;
    var producerImg;
    var producer;

    var sellerImg;
    var sellerTitle;
     var sellerDeli ;
    var shopInfo;
    var shopInfo1; 
    var moreImg=[]
    $("#target li:first-child img").each(function(index,data){
		
		topImg1=$(data).attr("_src")

    })
    $(".normal-list h1").each(function(index,data){
		
		title = $(data).text()

    })
    $(".normal-list .list-price .price-new ").each(function(index,data){
		
		 price1 = $(data).text()
			console.log(price1)
    })
     $(".normal-list .list-price .del").each(function(index,data){
		
		 price2 = $(data).text()
		console.log(price2)
    })  
     $(".normal-list .item_zhe .sp3").each(function(index,data){
		
		 world = $(data).text()

    }) 
      $(".producer .producer-title img").each(function(index,data){
		producerImg=$(data).attr("src")
		
			
    })    
     $(" .producer .producer-title").each(function(index,data){
	
		 producer = $(data).text()
			
    })   
  
    $(" .item-feature-box .clear .fl img").each(function(index,data){
		sellerImg=$(data).attr("src")
		
			
    })  
    $(" .item-feature-box .clear .fl .seller-title").each(function(index,data){
	
		 sellerTitle = $(data).text()
			
    }) 
    $(".item-feature-box .clear .fl .seller-deli").each(function(index,data){
	
		 sellerDeli = $(data).text()
			
    })
    $(".com-list ul li:first-child .shop_info strong").each(function(index,data){
	
		 shopInfo = $(data).text()
		
    })  
   $(".com-list ul li:last-child .shop_info strong span").each(function(index,data){
	
		 shopInfo1 = $(data).text()
		
    }) 
    $("#item .item-detail-box img").each(function(index,data){
		
			moreImg.push($(data).attr("_src"))

				
    })   
  
    obj2={
        topImg1:topImg1,
        title:title,
        price1:price1,
        price2:price2,
        world:world,
        producerImg:producerImg,
        producer:producer,

        sellerImg:sellerImg,
        sellerTitle:sellerTitle,
        sellerDeli:sellerDeli,
        shopInfo:shopInfo,
        shopInfo1:shopInfo1,
        moreImg:moreImg
    }
  console.log(obj2)
  
    return obj2
}
module.exports = request;  //