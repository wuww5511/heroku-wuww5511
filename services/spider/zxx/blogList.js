"use strict"

var Spider = require('../../../lib/spider/spider'),
    _cheerio = require("cheerio");

class ZxxSpider extends Spider {
    constructor () {
        super({
            url: "http://www.zhangxinxu.com/wordpress/"
        });
    }
    
    __getData (_html) {
        var _$ = _cheerio.load(_html);
        var _list = _$(".post .entry-title");
        var _result = [];
        
        _list.each(function (_index, _ele) {
            var _info = {};
            _info.url = _$(this).attr("href");
            _info.title = _$(this).attr("title");
            
            _result.push(_info);
        });
        
        return {
            list: _result
        };
    }
    
}

module.exports = ZxxSpider;