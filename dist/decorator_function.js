"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(params) {
    return function (target, funcName, descriptor) {
        var oldValue = descriptor.value;
        descriptor.value = function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i] = arguments[_i];
            }
            console.log(params.start + " " + new Date().toLocaleString());
            // 执行原先的方法
            oldValue.apply(this, rest);
            console.log(params.end + " " + new Date().toLocaleString());
        };
    };
}
var Page = /** @class */ (function () {
    function Page() {
    }
    Page.prototype.render = function () {
        console.log('render 执行了~');
    };
    Page.prototype.run = function () {
        console.log('run 执行了~');
    };
    __decorate([
        Log({ start: '开始了', end: '结束了' })
    ], Page.prototype, "render", null);
    __decorate([
        Log({ start: 'run 开始了', end: 'run 结束了' })
    ], Page.prototype, "run", null);
    return Page;
}());
var p1 = new Page();
p1.render();
console.log('---------------------------------------');
p1.run();
