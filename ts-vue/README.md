# ts-vue

## Vue中如何集成TypeScript?
参考：https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-typescript/README.md

## 两种方式

### 方式1

> 先生成一个普通的vue项目，然后再使用 @vue/cli-plugin-typescript 插件，让vue项目集成typescript

应用场景：

```
适用于已经存在的vue项目，想在里面集成typescript
```

步骤：

```
1、vue create vue-project
	这一步的时候，选择默认的 default(babel、eslint)

2、等上一步做完之后,在项目根目录运行代码安装 @vue/typescript
	vue add @vue/typescript
	
4、执行上一步之后，会弹出一个提示，根据需要进行选择
	Use class-style component syntax? 选择Y
	Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? 选择Y
	Convert all .js files to .ts? 选择Y
	Allow .js files to be compiled? 选择Y
	
4、观察之前的vue项目，会多出或是更改一些内容
```

### 方式2

> 生成Vue项目的时候，直接选择 Manually select features 然后进去勾选上Typescript即可

应用场景：

```
适合于全新的项目，从一开始就准备使用typescript进行项目开发
```

步骤：

```
1、vue create vue-project
	这一步的时候，选择 Manually select features
	
2、按上下键，切换到Typescript，然后按住空格键选中Typescript这一项

3、按回车，会有一些提示，根据实际情况选择即可
	Use class-style component syntax? 选择Y
	Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? 选择Y
	Convert all .js files to .ts? 选择Y
	Allow .js files to be compiled? 选择Y
```

