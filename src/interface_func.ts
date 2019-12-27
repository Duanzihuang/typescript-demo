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
