var express = require('express');
var router = express.Router();
var ZxxSpider = require("../../services/spider/zxx");

router.get('/zxx', function(req, res, next) {
    res.setHeader("Content-Type", "text/json;charset=utf-8");
    new ZxxSpider()
        .run()
        .on("success", function (_result) {
            res.end(JSON.stringify(_result));
        })
        .on("error", function () {
            next();
        });
});

module.exports = router;
