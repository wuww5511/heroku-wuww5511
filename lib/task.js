"use strict"

var Event = require("events");

class Task extends Event {
    constructor () {
        super();
    }
    
    run () {
        this.__onTask();
        return this;
    }
    
    __onTask () {
        
    }
}

module.exports = Task;