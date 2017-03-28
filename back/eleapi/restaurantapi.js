/**
 * Created by Administrator on 2017/2/24.
 */
var spider = require("./spider1");
var express = require('express');
var router = express.Router();



router.get("/obj1",function(req,res,next){
    var id = req.query.id;
     var id1 = req.query.id1;   
    spider("/brand/"+id1+"?shop_id="+id,function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
})



module.exports = router;