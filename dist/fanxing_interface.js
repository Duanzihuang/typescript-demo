"use strict";
// 实现接口
var sortNumArr = function (arr, asce) {
    if (asce) { // 升序
        return arr.sort(function (a, b) { return a - b; });
    }
    else { // 降序
        return arr.sort(function (a, b) { return b - a; });
    }
};
var result1 = sortNumArr([5, 2, 3, 1], true);
console.log(result1);
// 实现接口
var users = [
    { name: 'jack ma', age: 57 },
    { name: 'robin', age: 58 },
    { name: 'pony', age: 47 }
];
var sortUserArr = function (arr, asce) {
    if (asce) { // 升序
        return arr.sort(function (a, b) { return a.age - b.age; });
    }
    else { // 降序
        return arr.sort(function (a, b) { return b.age - a.age; });
    }
};
var result2 = sortUserArr(users, false);
console.log(result2);
