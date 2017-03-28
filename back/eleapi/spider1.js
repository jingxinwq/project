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
           
           callback(ser(html));
        })
    })

    req.on("error",function(){

    })

    req.end();
}
function ser(html){
    var $  = cheerio.load(html);
    var obj1 ={};
    var title;
    var img;
    var name;
    var shop;
    $("#t-index").each(function(index,data){

        title=$(data).text()

    })
    $(".brand_logo img ").each(function(index,data){

         img=$(data).attr("src")
    })
    $(".brand_name ").each(function(index,data){

         name = $(data).text()

    })
    $(".brand_del ").each(function(index,data){

         shop = $(data).text()
    })
    obj1={
        title:title,
        img:img,
        name:name,
        shop:shop
    }
    // console.log(obj1)
    return obj1
}
module.exports = request;  //