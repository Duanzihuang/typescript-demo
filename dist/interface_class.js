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
// 用接口约束MySql类
var MySql = /** @class */ (function () {
    function MySql(host, dbName, user, password) {
        this.host = host;
        this.dbName = dbName;
        this.user = user;
        this.password = password;
    }
    MySql.prototype.connect = function () {
        if (this.host == '127.0.0.1'
            && this.dbName == 'test'
            && this.user == 'root'
            && this.password == 'root') {
            return true;
        }
        return false;
    };
    return MySql;
}());
var mysql = new MySql('127.0.0.1', 'test', 'root', 'root');
var result = mysql.connect();
console.log('连接数据库结果 ', result);
