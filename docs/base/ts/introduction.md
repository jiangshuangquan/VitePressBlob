# ts 介绍

## 开发环境搭建

```js
npm i typescript -g
tsc --init
npm init -y
```

编写测试代码，`./src/index.ts`

```js
const hello = 'hello, typescript!';
console.log(hello);
```

编译

```js
tsc ./src/index.ts
```

工程化，安装 `webpack`, `webpack-cli`, `webpack-dev-server`

```js
npm i webpack webpack-cli webpack-dev-server ts-loader typescript html-webpack-plugin -D
```

配置文件：`build/webpack.config.js`

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
```

> 别忘了在 public 文件夹下面添加 index.html 文件

添加开发脚本

```js
"scripts": {
  "dev": "webpack-dev-server --config ./build/webpack.config.js"
}
```

现在运行 npm run dev 就能看到打印了
