# webpack5+ts+vue3

一个使用 webpack5 配置 TypeScript + Vue3 的 web 项目样板。

## 安装

克隆这个仓库并 `npm install`。

```bash
npm install
```

## 使用

### 开发服务器

```bash
npm run serve
```

### 生产构建

```bash
npm run build
```

## 依赖项

### webpack

- [`webpack`](https://github.com/webpack/webpack) - 模块打包工具
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - 在命令行上运行 `webpack` 的工具
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - webpack 开发服务器
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - 合并 webpack 配置

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - 是 Babel 的核心库
- [`@babel/preset-env`](https://www.npmjs.com/package/@babel/preset-env) - 是一个智能预设，它可以将高版本的 JavaScript 语法转换为目标环境所兼容的语法
- [`@babel/preset-typescript`](https://www.npmjs.com/package/@babel/preset-typescript) - 是一个 TypeScript 预设，它可以将 TypeScript 转换为 JavaScript
- [`@babel/plugin-transform-runtime`](https://www.npmjs.com/package/@babel/plugin-transform-runtime) - 是一个 Babel 插件，它可以将所有 helpers 都引用 `@babel/runtime-corejs3` 模块，以避免编译输出中的重复，并且可以配置编译时按需引入模块化 polyfill，不污染全局作用域
- [`@babel/runtime-corejs3`](https://www.npmjs.com/package/@babel/runtime-corejs3) - 提供 helpers 和全局变量 (例如 `Promise`)、静态属性 (例如 `Array.from`)、实例属性 (例如 `[].includes`) 的模块化 polyfill

### Loaders

- [`babel-loader`](https://www.npmjs.com/package/babel-loader) - 可以使用 Babel 来转换 JavaScript/TypeScript 文件
- [`vue-loader`](https://www.npmjs.com/package/vue-loader) - 处理 Vue 文件
- [`sass-loader`](https://www.npmjs.com/package/sass-loader) - 处理 SASS/SCSS 文件，使用 Sass 加载并编译 SASS/SCSS 文件，并最终返回 CSS 文件
- [`postcss-loader`](https://www.npmjs.com/package/postcss-loader) - 处理 CSS 文件，使用 PostCSS 加载和编译 CSS 文件，并最终返回 CSS 文件
- [`css-loader`](https://www.npmjs.com/package/css-loader) - 处理 CSS 文件，加载和解析 CSS 文件中所引用的模块 (`@import` 和 `url()`)，并最终返回 CSS 文件
- [`style-loader`](https://www.npmjs.com/package/style-loader) - 处理 CSS 文件，加载 CSS 注入到 DOM 中

### Plugins

- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - 生成 HTML 文件
- [`fork-ts-checker-webpack-plugin`](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) - 在一个单独的进程上运行 TypeScript 类型检查器
