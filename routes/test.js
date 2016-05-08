var express = require('express');
var router = express.Router();
var _queue = require("../module/queue");

router.get('/', function(req, res, next) {
    
    next();
});

module.exports = router;
