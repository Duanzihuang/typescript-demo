"use strict";
var Post2 = /** @class */ (function () {
    function Post2(title) {
        this.title = title;
    }
    Post2.prototype.log = function () {
        console.log('hello ', this.title);
    };
    return Post2;
}());
var p = new Post2('小明');
p.log();
