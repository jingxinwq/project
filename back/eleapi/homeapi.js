/**
 * Created by Administrator on 2017/2/24.
 */
var spider = require("./spider");
var express = require('express');
var router = express.Router();

router.get("/select1_1",function(req,res,next){
    //回调函数
    spider("/index/getMenu?select=1_1",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})

router.get("/select2_1",function(req,res,next){
    //回调函数
    spider("/index/getMenu?select=2_1",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})

router.get("/select3_1",function(req,res,next){
    //回调函数
    spider("/index/getMenu?select=3_1",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})

router.get("/select4_1",function(req,res,next){
    //回调函数
    spider("/index/getMenu?select=4_1",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})

router.get("/select5_1",function(req,res,next){
    //回调函数
    spider("/index/getMenu?select=5_1",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})

router.get("/goodsShop",function(req,res,next){
    var id = req.query.id;
    var id1 = req.query.id1;
    spider("/brand/"+id1+"?shop_id="+id+"&&user_groupids=p8_c3_a1_l1_222&page=1&is_ajax=1&order=&sort=&isstock=0",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})

router.get("/goodsShop_1",function(req,res,next){
    var id = req.query.id;
    var brand_id = req.query.brand_id;
    spider("/brand/"+brand_id+"?shop_id="+id+"&&user_groupids=p8_c3_a1_l1_222&page=1&is_ajax=1&order=&sort=&isstock=0",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})

router.get("/saleInfo",function(req,res,next){
    var goods_id = req.query.goods_id;
    spider("/brand/getBrandActInfo?zhouyi_ids=c3&gid="+goods_id,function (result) {
        console.log(goods_id)
        res.send(result); // 如果渲染模板 res.render("")
    });
})

router.get("/search",function(req,res,next){
    var msg = req.query.msg;
    // URLDecoder.decode(msg , "utf-8")
    console.log(msg)
    spider("/search?keyword="+encodeURIComponent(msg)+"&&user_groupids=p8_c3_a1_l4_222&page=1&is_ajax=1&order=&sort=&isstock=0",function (result) {
        
        res.send(result); // 如果渲染模板 res.render("")
    });
})

module.exports = router;
