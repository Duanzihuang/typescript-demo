"use strict";
var Animal2 = /** @class */ (function () {
    // 构造器
    function Animal2(info) {
        this.info = info;
    }
    Animal2.prototype.sayHi = function () {
        console.log("my name is " + this.info.name + ", i am a " + this.info.type);
    };
    return Animal2;
}());
var dog = new Animal2({ name: '冈瑟四世', age: 5, gender: '男', type: 'Dog' });
var cat = new Animal2({ name: 'Tom', age: 3, gender: '男', type: 'Cat' });
dog.sayHi();
cat.sayHi();
