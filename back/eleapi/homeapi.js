/**
 * Created by Administrator on 2017/2/24.
 */
var spider = require("./spider");
var express = require('express');
var router = express.Router();

router.get("/weather",function(req,res,next){
    //回调函数
    spider("/bgs/weather/current?latitude=31.230416&longitude=121.473701",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})

router.get("/hotsearch",function(req,res,next){
    //回调函数
    spider("/shopping/v3/hot_search_words?latitude=31.230416&longitude=121.473701",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})

router.get("/index_entry",function(req,res,next){
    //回调函数
    spider("/v2/index_entry?geohash=wtw3sjq6q7s2&group_type=1&flags[]=F",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})

router.get("/city",function(req,res,next){
    //回调函数
    spider("/v2/pois/wtw3sjq6n6um",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})

router.get("/restaurant",function(req,res,next){
    //回调函数
    spider("/shopping/restaurants?latitude=31.23037&longitude=121.473701&offset=0&limit=20&extras[]=activities&terminal=h5",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})


router.get("/restaurantdetail",function(req,res,next){
    //回调函数
    var id = req.query.id

    spider("/shopping/restaurant/"+id+"?extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics&latitude=31.23037&longitude=121.473701",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})

router.get("/detail",function(req,res,next){
    //回调函数
    var id = req.query.id
    spider("/shopping/v2/menu?restaurant_id="+id,function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})


module.exports = router;
