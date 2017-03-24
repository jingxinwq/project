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




module.exports = router;
