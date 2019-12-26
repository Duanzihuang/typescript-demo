# typescript-demo
typescript语法练习及所写Demo

### 安装全局包

```
使用typescript编写的代码，必须使用 tsc 工具编译成js代码，才能运行在浏览器中

安装
	npm i typescript -g

使用:
	tsc -help
	tsc --version
```

### 编译

> 编译单个文件

```
tsc ./src/app.ts --outFile ./dist/app.js
```

> 编译整个目录

```
tsc ./src/* --ourDir ./dist
```

> 编译的同时进行文件改动监控

```
tsc ./src/* --ourDir ./dist --watch
```

### tsconfig.json

```
作用：
	编译的配置文件，简化编译过程，把要编译的文件、排除的文件，以及编译好之后存放的目录进行配置好
	
生成：
	在项目根目录运行 `tsc --init` 则可以直接生成 tsconfig.json 配置文件
	
代码：
	详见项目根目录下面的 tsconfig.json
	
运行：
	配置好 tsconfig.json 之后，直接在项目根目录运行 `tsc` 或是 `tsc --watch` 即可开始编译
```

### 数据类型

> 类型

```
ts支持跟js差不多的数据类型，比如string,number,boolean,...
```

> 显示声明类型

```
ts可以给某个常量或是变量显示的加上类型
	let name:string = "张三";

注意点：
	一旦确定了是某个类型，那以后只能赋值对应的类型，否则会报错
```

> 比较复杂的类型【数组】

```
数组：
	let fruits:string[] = ['apple','orange'];
```

> 万金油类型【any】

```
当我们不确定常量或是变量类型的时候，可以使用any
	let goast:any = '幽灵'
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

### Interfaces【接口】

```
概念：
	就像一个合同，实现了该合同，就要按照合同来办事，还可以定义新的数据类型

语法：
    interface Post{
        title:string,
        content?:string //?代表可选
    }

    let post:Post = {
        title: 'ONE DAY',
        // content:'愉快的一天'
    }
```

### Enums【枚举】

```
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

