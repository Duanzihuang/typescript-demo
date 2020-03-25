"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Home = /** @class */ (function () {
    function Home() {
    }
    Home = __decorate([
        Component
    ], Home);
    return Home;
}());
function Component(target) {
    console.log(target);
    // 属性
    target.prototype.selector = 'app-home';
    target.prototype.style = './style.css';
    // 方法
    target.prototype.init = function () {
        console.log(target + " \u521D\u59CB\u5316\u4E86");
    };
    target.version = 'Version 1.0';
}
// const h1 = new Home()
// console.log(h1.selector)
// console.log(h1.style)
// h1.init()
// console.log(Home.version)
function Module(params) {
    console.log(params);
    // 必须返回一个匿名函数
    return function (target) {
        target.prototype.init = function () {
            console.log("Module \u88C5\u9970\u5668\u4E2D\u8FD4\u56DE\u7684init\u65B9\u6CD5\u51FA\u53D1\u4E86");
        };
        target.prototype.moduleName = params.name;
    };
}
var Common = /** @class */ (function () {
    function Common() {
    }
    Common = __decorate([
        Module({ name: 'router' })
    ], Common);
    return Common;
}());
var c1 = new Common();
console.log('moduleName is ', c1.moduleName);
c1.init();
