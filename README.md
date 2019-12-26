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

