@Component
class Home{

}

function Component(target:any) {
    console.log(target)

    // 属性
    target.prototype.selector = 'app-home'
    target.prototype.style = './style.css'

    // 方法
    target.prototype.init = function() {
        console.log(`${target} 初始化了`)
    }

    target.version = 'Version 1.0'
}

// const h1 = new Home()
// console.log(h1.selector)
// console.log(h1.style)
// h1.init()
// console.log(Home.version)


function Module(params:any) {
    console.log(params)

    // 必须返回一个匿名函数
    return function(target:any) {
        target.prototype.init = function() {
            console.log(`Module 装饰器中返回的init方法出发了`)
        }
        target.prototype.moduleName = params.name
    }
}

@Module({name:'router'})
class Common{

}

const c1 = new Common()
console.log('moduleName is 'c1.moduleName)
c1.init()