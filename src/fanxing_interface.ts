// 定义泛型函数接口
interface Arr<T>{
    (arr: T[],asce:boolean):T[]
}

// 实现接口
const sortNumArr: Arr<number> = function(arr: number[],asce: boolean) {
    if (asce) { // 升序
        return arr.sort((a, b) => a - b)
    } else { // 降序
        return arr.sort((a, b) => b - a)
    }
}

const result1 = sortNumArr([5,2,3,1],true)
console.log(result1)

// 实现接口
const users = [
    {name: 'jack ma',age: 57},
    {name: 'robin',age: 58},
    {name: 'pony',age: 47}
]

const sortUserArr : Arr<{name: string, age: number}> = function(arr: {name: string,age: number}[],asce: boolean) {
    if (asce) { // 升序
        return arr.sort((a,b) => a.age - b.age)
    } else { // 降序
        return arr.sort((a,b) => b.age - a.age)
    }
}

const result2 = sortUserArr(users,false)
console.log(result2)