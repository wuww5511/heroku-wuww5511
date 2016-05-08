"use strict"

var Task = require("../../../lib/task"),
    ListTask = require("./blogList"),
    BlogTask = require("./blog"),
    TaskList = require("../../../lib/spider/list");

class ZxxTask extends Task {
    constructor () {
        super();
        this.__taskList = null;
    }
    
    __onTask () {
        this.__getList();
    }
    
    __getList () {
        new ListTask()
        .run()
        .on("success", function (_list) {
            this.__onBlogList(_list.list);
        }.bind(this))
        .on("error", function () {
            this.emit("error");
        }.bind(this));
    }
    
    __onBlogList (_list) {
        var _urls = [];
        
        for(var _i = 0; _i < _list.length; _i++) {
            _urls.push(_list[_i].url);
        }
        
        this.__taskList = new TaskList({
            klass: BlogTask,
            datas: _list,
            urls: _urls
        });
        
        this.__taskList
            .on("success", function (_data) {
                this.emit("success", _data);
            }.bind(this))
            .on('error', function () {
                this.emit("error");
            }.bind(this))
            .run();
    }
}

module.exports = ZxxTask;