# typescript语法练习及所写Demo

## 准备工作

### 安装全局包

```js
使用typescript编写的代码，必须使用 tsc 工具编译成js代码，才能运行在浏览器中

安装
	npm i typescript -g

使用:
	tsc -help
	tsc --version
 
常用指令：
	tsc: 编译src目录下面的所有ts文件
  tsc --watch: 编译src目录下面的所有ts文件，并且监听ts文件变化
	
参考：
	https://www.tslang.cn/
  https://www.typescriptlang.org/play/
```

### 编译

> 通过配置文件 tsconfig 来进行编译【推荐】

```js
作用：
	编译的配置文件，简化编译过程，把要编译的文件、排除的文件，以及编译好之后存放的目录进行配置好
	
生成：
	在项目根目录运行 `tsc --init` 则可以直接生成 tsconfig.json 配置文件
	
代码：
	详见项目根目录下面的 tsconfig.json
	
运行：
	配置好 tsconfig.json 之后，直接在项目根目录运行 `tsc` 或是 `tsc --watch` 即可开始编译
```

##数据类型

> 类型

```js
ts支持跟js差不多的数据类型，比如string,number,boolean,...
```

> 显示声明类型

```js
ts可以给某个常量或是变量显示的加上类型
	let name:string = "张三";

注意点：
	一旦确定了是某个类型，那以后只能赋值对应的类型，否则会报错
```

> 比较复杂的类型【数组】

```js
数组：
	let fruits:string[] = ['apple','orange'];
	let list:Arrray<number> = [1,2,3];
```
> Tuple【元组】
```js
作用：
	数组的一种变种用法，让数组可以更加灵活，可以糅合各种数据类型

语法：
	let x:[string,number] = ['张三',18];
```
> 万金油类型【any】

```js
当我们不确定常量或是变量类型的时候，可以使用any，它可以用于常量、变量、函数参数、函数返回值等多个地方
	let goast:any = '幽灵'
	
	let list:any[] = [1,2,'张三',true];
	let list:Array<any> = [1,2,'张三',true];
```

> Void

```js
主要用于函数，当没有返回值的时候，可以把返回值写成Void
	function hello():void {
		xxx
	}
```

> 类型断言 as

```js
类型断言有两种形式。 其一是“尖括号”语法：

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

### 函数

> 和javascript的区别

```
javascript函数没有返回值

typescript函数后面可以显式的加上返回值类型，并且加上了返回值类型之后，函数体里面一定要返回对应的类型
	function greet(): void {
		console.log('hello')
	}
	
javascript函数的参数可以不用写类型

typescript函数的参数可以显式的写上类型，并且写好类型之后，一定要传递同类型的值
	function greet(user:string): string {
		return `hello ${user}`
	}
```

> 可选参数 & 默认值

```
ts 还支持可选参数与默认值
```

> 剩余参数

```
function findWork(...yaoqiu:string[]) : string{
	
}
```

### Enums【枚举】

```js
作用：
	让数字更有意义，不光光只是显示一个普通的数字
	
语法：
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
```

## 高级用法

### Class【类】

> 基本语法

```tsx
class Animal {

	// 属性[实例属性、静态属性]
  static home: string = '地球'
  name: string = ''
  age: number = 0
  
  // 构造器
  constructor(name: string,age: number) {
    this.name = name
    this.age = age
  }
  
  // 方法[静态方法，实例方法]
  eat(food: string){
     console.log(`${this.name} 吃 ${food}`)
  }
  
  static printHome(){
    console.log('所有动物的家园是 ',this.home)
  }
}
```

> 继承

```tsx
class Dog extends Animal{
  color: string

  // 重写构造器
  constructor(name: string,age: number,color: string) {
    super(name,age)

    this.color = color
  }
  
  // 重写父类的方法
  eat(food: string) {
    console.log(`冈瑟四世吃的是 ${food}`)
  }
}
```

### Interfaces【接口】

> 普通约束

```js
概念：
	就像一个合同，实现了该合同，就要按照合同来办事，还可以定义新的数据类型，你可以理解成接口就是规范

语法：
    interface Post{
        title:string,
        content?:string //?代表可选
    }

    let post:Post = {
        title: 'ONE DAY',
        // content:'愉快的一天'
    }
    
可选属性
	在变量的后面加上?
	content?:string //?代表可选
	
只读属性
	变量一旦赋值，则不允许修改
	readonly paid?:boolean;
	
函数类型
	interface可以描述函数的类型，设置函数的参数，参数类型及返回值类型
	
	interface Entity{
    	title:string
    }

    interface EntityFunction{
        (entity:Entity):string
    }

    let createPost: EntityFunction;
    createPost = function (post:Entity):string{
        return 'post has been create'
    }

    console.log(createPost({title:'test'}))
    
class实现接口
	class一旦实现某个接口，就必须实现接口中的属性和方法，否则会报错
	
接口继承
	一个接口继承了另外一个接口，那么就拥有另外一个接口的所有内容
	
	interface Entity{
        title:string;
    }

    interface Product extends Entity{
        price:number;
    }

    let product = <Product>{
        title:'aaa',
        price:12
    };

    console.log(product)
```

> 对类的约束

```tsx
// 定义一个数据库连接的接口
interface Db{
    host: string
    dbName: string
    user: string
    password: string

    connect():boolean
}

// 用接口约束MySql类
class MySql implements Db{
    host: string
    dbName: string
    user: string
    password: string

    constructor(host: string,dbName: string, user: string, password: string) {
        this.host = host
        this.dbName = dbName
        this.user = user
        this.password = password
    }

    connect() {
        if (this.host == '127.0.0.1' 
            && this.dbName =='test' 
            && this.user == 'root' 
            && this.password == 'root') {
                return true
            }

        return false
    }
}

const mysql = new MySql('127.0.0.1','test','root','root')
const result = mysql.connect()
console.log('连接数据库结果 ',result)
```

> 对函数的约束

```tsx
主要约束函数的形参和返回值

interface Func{
    (a: number,b: number): number
}

const sum: Func = (a: number, b: number): number => {
    return a + b
}

console.log(sum(1,2))
```

### 泛型

> 基本概念

```
泛型是指在定义函数、类、接口的时候不指定具体的数据类型，在调用的时候，再指定具体类型的一种特性
使用泛型可以使函数、类、接口的功能变得灵活，从而提高代码的复用率。
```

> 泛型函数

```tsx
有个需求，该函数传入什么类型，就返回什么类型，按照传统的写法，我们需要给 string,number,boolean,...各写一个函数声明，很繁琐，没有达到复用的目的，使用泛型函数就可以解决这个问题

const demo = <T>(arg:T):T => {
    return arg
}
        
function demo<T>(arg: T):T {
    return arg
}

// 显式指定数据类型
console.log(demo<number>(111))
console.log(demo<string>('str'))
console.log(demo<boolean>(true))

// 隐式推断
console.log(demo(null))
```

> 泛型类

```tsx
interface Info{
    name: string,
    age: number,
    gender: string,
    type: string
}

class Animal<T extends Info>{
    public info: T

    // 构造器
    constructor(info: T) {
        this.info = info
    }

    sayHi():void {
        console.log(`my name is ${this.info.name}, i am a ${this.info.type}`)
    }
}

const dog = new Animal({name: '冈瑟四世', age: 5, gender: '男' ,type : 'Dog'})
const cat = new Animal({name: 'Tom', age: 3, gender: '男' ,type : 'Cat'})
dog.sayHi()
cat.sayHi()
```

> 泛型接口

```tsx
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

const result2 = sortUserArr(users,true)
console.log(result2)
```

### 装饰器

> 基本概念

```
装饰器是一种特殊的函数，可以用来修饰类、属性、方法，可以在不修改类、属性、方法的前提下拓展类、属性、方法的功能

普通装饰器：（无参）

装饰器工厂：（有参）
	灵活，日常开发中用得比较多
	内部必须返回一个匿名函数【重要】
```

> 类装饰器

```tsx
// 无参装饰器
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

const h1 = new Home()
console.log(h1.selector)
console.log(h1.style)
h1.init()
console.log(Home.version)

// 有参装饰器
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
```

> 属性装饰器

```tsx
function Input(params: any) {
    return function(target: any) {
        console.log('target is ',target)

        target.baseUrl = params.baseUrl
    }
}

class Http {
    @Input({baseUrl:'http://127.0.0.1:300/api'})
    public baseUrl: string
}

const h1 = new Http()
console.log('baseURL is ',h1.baseUrl)
```

> 方法装饰器

```tsx
function Log(params: any) {
    return function(target:any, funcName:any,descriptor: TypedPropertyDescriptor<any>) {
        const oldValue = descriptor.value

        descriptor.value = function(...rest: any[]) {
            console.log(`${params.start} ${new Date().toLocaleString()}`)

            // 执行原先的方法
            oldValue.apply(this, rest)

            console.log(`${params.end} ${new Date().toLocaleString()}`)
        }
    }
}

class Page{
    @Log({start: '开始了',end: '结束了'})
    render() {
        console.log('render 执行了~')
    }

    @Log({start: 'run 开始了',end: 'run 结束了'})
    run() {
        console.log('run 执行了~')
    }
}

const p1 = new Page()
p1.render()
console.log('---------------------------------------')
p1.run()
```

## Vue & React 中集成Typescript

### Vue中集成Typescript

参考：https://github.com/Duanzihuang/typescript-demo/tree/master/ts-vue

### React中集成Typescript

参考：https://github.com/Duanzihuang/typescript-demo/tree/master/ts-react