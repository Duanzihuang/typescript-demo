"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数
function log(target) {
    //target 是构造函数
    console.log(target === Foo); // true
    target.prototype.log = function () {
        console.log(this.bar);
    };
    // 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
}
function log2(options) {
    return function (target) {
        //target 是构造函数
        console.log(target === Foo); // true
        target.prototype.log = function () {
            console.log(this.bar);
        };
        // 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
    };
}
// @log
var Foo = /** @class */ (function () {
    function Foo() {
        // bar = '你好'
        this.bar = 'Hello';
    }
    Foo = __decorate([
        log2()
    ], Foo);
    return Foo;
}());
var foo = new Foo();
// @ts-ignore
foo.log();
