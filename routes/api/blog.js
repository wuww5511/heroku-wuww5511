var express = require('express');
var router = express.Router();
var ZxxTask = require("../../services/spider/zxx/task");

router.get('/zxx', function(req, res, next) {
    
    new ZxxTask()
        .run()
        .on("success", function (_result) {
            //res.setHeader("Content-Type", "text/json;charset=utf-8");
            //res.end(JSON.stringify(_result));
           res.render("blog", {blogs:_result});
        })
        .on("error", function () {
            next();
        });
    
});

module.exports = router;
