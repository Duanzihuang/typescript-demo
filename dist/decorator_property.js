"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Input(params) {
    return function (target) {
        console.log('target is ', target);
        target.baseUrl = params.baseUrl;
    };
}
var Http = /** @class */ (function () {
    function Http() {
    }
    __decorate([
        Input({ baseUrl: 'http://127.0.0.1:300/api' })
    ], Http.prototype, "baseUrl", void 0);
    return Http;
}());
var h1 = new Http();
console.log('baseURL is ', h1.baseUrl);
