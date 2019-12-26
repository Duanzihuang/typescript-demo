enum PostStatus {
    Unpublish,
    Publish,
    Draft
}

interface Post{
    title:string,
    content?:string, //?代表可选
    status:number // 文章的类型，不要用数字，用枚举更有意义
}

let post:Post = {
    title: 'ONE DAY',
    // content:'愉快的一天'
    status: PostStatus.Publish
}

console.log(post)
console.log(PostStatus[2])