// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数
function log(target: Function){
    //target 是构造函数
    console.log(target === Foo) // true
    target.prototype.log = function() {
        console.log(this.bar)
    }
    // 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
}

function log2(options?:any){
    return function(target: Function) {
        //target 是构造函数
        console.log(target === Foo) // true
        target.prototype.log = function() {
            console.log(this.bar)
        }
    // 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
    }
}

// @log
@log2()
class Foo{
    // bar = '你好'
    bar = 'Hello'
}

const foo = new Foo()
// @ts-ignore
foo.log()