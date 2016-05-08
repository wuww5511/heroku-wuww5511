"use strict"

var Spider = require('../../../lib/spider/spider'),
    _cheerio = require("cheerio");

class ZxxSpider extends Spider {
    
    __getData (_html) {
        var _$ = _cheerio.load(_html);
        var _body = _$("#content .entry");
        _body.find(".link").remove();
        _body.find("script").remove();
        _body.find(".alipay_support").remove();
        _body.find(".similarity").remove();
        
        
        
        return {
            content: _body.html()
        };
    }
    
}

module.exports = ZxxSpider;