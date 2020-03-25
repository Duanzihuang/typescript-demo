// const demo = <T>(arg:T):T => {
//     return arg
// }

function demo<T>(arg: T):T {
    return arg
}

// 显式指定数据类型
console.log(demo<number>(111))
console.log(demo<string>('str'))
console.log(demo<boolean>(true))

// 隐式推断
console.log(demo(null))