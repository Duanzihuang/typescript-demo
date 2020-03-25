"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    Animal.prototype.eat = function (food) {
        console.log(this.name + " \u5403 " + food);
    };
    Animal.printHome = function () {
        console.log('所有动物的家园是 ', this.home);
    };
    Animal.home = '地球';
    return Animal;
}());
console.log(Animal.home);
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // 重写构造器
    function Dog(name, age, color) {
        var _this = _super.call(this, name, age) || this;
        _this.color = color;
        return _this;
    }
    // 重写父类的方法
    Dog.prototype.eat = function (food) {
        console.log("\u5188\u745F\u56DB\u4E16\u5403\u7684\u662F " + food);
    };
    return Dog;
}(Animal));
