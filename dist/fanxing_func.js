"use strict";
// const demo = <T>(arg:T):T => {
//     return arg
// }
function demo(arg) {
    return arg;
}
// 显式指定数据类型
console.log(demo(111));
console.log(demo('str'));
console.log(demo(true));
// 隐式推断
console.log(demo(null));
