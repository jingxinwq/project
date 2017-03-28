/**
 * Created by Administrator on 2017/2/24.
 */
var spider = require("./spider2");
var express = require('express');
var router = express.Router();



router.get("/obj2",function(req,res,next){
    var id = req.query.id;
  	console.log(id)
    spider(id,function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})



module.exports = router;