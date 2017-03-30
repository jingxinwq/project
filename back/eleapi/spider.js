/**
 * Created by Administrator on 2017/2/12.
 */
var https = require("https"); //https 请求

function request(path,callback){
    var options = {
        hostname: 'm.juanpi.com',
        port: 443, //端口号 https默认端口 443， http默认的端口号是80
        path: path,
        method: 'GET',
        headers:{
            //伪造请求头
            "Accept":"application/json",
            "Accept-Language":"zh-CN,zh;q=0.8",
            "Connection":"keep-alive",
            "Content-Type":"application/x-www-form-urlencoded",
            "Host":"m.juanpi.com",
            "Origin":"http://m.juanpi.com",
            "Referer":"http://m.juanpi.com/",
            "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
            "X-Requested-With":"XMLHttpRequest"
        }
    };

    var req = https.request(options,function(res){

        var json = "";
        //console.log( res.statusCode);

        res.on("data",function(chunk){
            json+=chunk;
        })

        res.on("end",function(){
            callback(json);
        })
    })

    req.on("error",function(){

    })

    req.end();
}

module.exports = request;  //