interface Entity{
    title:string
}

interface EntityFunction{
    // 函数类型
    (entity:Entity):string
}

let createPost: EntityFunction;
createPost = function (post:Entity):string{
    return 'post has been create'
}

console.log(createPost({title:'test'}))

interface CompareFunc{
    (first:number,second:number): boolean;
}

const myFunc:CompareFunc = (a,b) => {
    return a > b
}

interface Func{
    (a: number,b: number): number
}

const sum: Func = (a: number, b: number): number => {
    return a + b
}

console.log(sum(1,2))