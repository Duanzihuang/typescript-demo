## React中如何集成TypeScript?

参考：https://create-react-app.dev/docs/adding-typescript/

## 两种方式

### 方式1

> 先生成普通的React项目，然后再安装相关的包集成Typescript

应用场景：

```
适用于已经存在的React项目，想在里面集成typescript
```

步骤：

```
1、安装相关包
	npm install --save typescript @types/node @types/react @types/react-dom @types/jest
	# or
	yarn add typescript @types/node @types/react @types/react-dom @types/jest
	
2、把index.js、App.js 更改成 index.tsx、App.tsx 即可
```

### 方式2

> 生成React项目的时候，直接集成Typescript

应用场景：

```
适合于全新的项目，从一开始就准备使用typescript进行项目开发
```

步骤：

```
1、创建React项目的时候就集成Typescript
    npx create-react-app my-app --template typescript
    # or
    yarn create react-app my-app --template typescript
```

