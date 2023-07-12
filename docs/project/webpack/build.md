# 构建策略

从时间层面与体积层面入手

## 性能优化建议

- **减少打包时间**:`缩减范围`、`缓存副本`、`定向搜索`、`提前构建`、`并行构建`、`可视结构`
- **减少打包体积**:`分割代码`、`摇树优化`、`动态垫片`、`按需加载`、`作用提升`、`压缩资源`

## ⏱ 缩减范围

配置 include/exclude 缩小 Loader 对文件的搜索范围

```js
export default {
  // ...
  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: /src/,
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};
```

## ⏱ 缓存副本

配置 cache 缓存 Loader 对文件的编译副本，好处是再次编译时只编译变动的文件

很多 Loader/Plugin 都会提供一个可用编译缓存的选项，通常包括 cache 字眼。以 babel-loader 与 eslint-webpack-plugin 为例。

```js
import EslintPlugin from 'eslint-webpack-plugin';

export default {
  // ...
  module: {
    rules: [
      {
        // ...
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true }
          }
        ]
      }
    ]
  },
  plugins: [
    // ...
    new EslintPlugin({ cache: true })
  ]
};
```

## ⏱ 定向搜索

配置`resolve`提高文件的搜索速度，好处是定向指定所需文件路径。若某些第三方库以默认形式引用可能报错或希望程序自动索引指定类型文件都可通过该方式解决。

`alias`表示映射路径，`extensions`表示文件后缀，`noParse`表示过滤无依赖文件。通常配置`alias`与`extensions`就足够。

```js
export default {
  // ...
  resolve: {
    alias: {
      '#': AbsPath(''), // 根目录快捷方式
      '@': AbsPath('src'), // src文件夹快捷方式
      swiper: 'swiper/js/swiper.min.js'
    }, // 导入模块快捷方式
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'] // 导入模块省略后缀
  }
};
```

## ⏱ 提前构建

配置`DllPlugin`将第三方依赖提前打包，好处是将`DLL`与业务代码完全分离且每次只构建业务代码。这是一个古老配置，在`webpack v2`时已存在，不过现在`webpack v4+`已不推荐使用该配置，因为其版本迭代带来的性能提升足以忽略`DllPlugin`所带来的效益

::: details

```js
import { DefinePlugin, DllPlugin } from 'webpack';

export default {
  // ...
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /node_modules/
        }
      }
    }
  },
  output: {
    filename: '[name].dll.js', // 输出路径与文件名称
    library: '[name]', // 全局变量名称：其他模块会从该变量中获取内部模块
    path: AbsPath('dist/static') // 输出目录路径
  },
  plugins: [
    // ...
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development') // DLL模式下覆盖生产环境为开发环境(启动第三方依赖调试模式)
    }),
    new DllPlugin({
      name: '[name]', // 全局变量名称：减小搜索范围，与output.library结合使用
      path: AbsPath('dist/static/[name]-manifest.json') // 输出目录路径
    })
  ]
};
```

然后在 package.json 中指定 scripts，配置执行脚本且每次构建前首先执行该脚本打包出 dll 文件。

```json
{
  "scripts": {
    "dll": "webpack --config webpack.dll.js"
  }
}
```

最后链接 dll 文件并告知 webpack 可命中的 dll 文件让其自行读取。使用 html-webpack-tags-plugin 在构建时自动加入 dll 文件。

```js
import { DllReferencePlugin } from 'webpack';
import HtmlTagsPlugin from 'html-webpack-tags-plugin';

export default {
  // ...
  plugins: [
    // ...
    new DllReferencePlugin({
      manifest: AbsPath('dist/static/vendor-manifest.json') // manifest文件路径
    }),
    new HtmlTagsPlugin({
      append: false, // 在生成资源后加入
      publicPath: '/', // 使用公共路径
      tags: ['static/vendor.dll.js'] // 资源路径
    })
  ]
};
```

也可用 autodll-webpack-plugin 代替手动配置
:::

## ⏱ 并行构建

配置 Thread 将 Loader 单进程转换为多进程，好处是释放 CPU 多核并发的优势

```js
import Os from 'os';

export default {
  // ...
  module: {
    rules: [
      {
        // ...
        test: /\.js$/,
        use: [
          {
            loader: 'thread-loader',
            options: { workers: Os.cpus().length }
          },
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true }
          }
        ]
      }
    ]
  }
};
```

## ⏱ 可视结构

配置`BundleAnalyzer`分析打包文件结构，好处是找出导致体积过大的原因。通过分析原因得出优化方案减少打包时间

可用 `webpack-bundle-analyzer` 配置，有了它就能快速找出相关问题。

```js
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default {
  // ...
  plugins: [
    // ...
    BundleAnalyzerPlugin()
  ]
};
```

## 📦 分割代码

分割各个模块代码，提取相同部分代码，好处是减少重复代码的出现频率。`webpack v4+`使用`splitChunks`替代`CommonsChunksPlugin`实现代码分割

`splitChunks`配置较多，可查看[webpack-optimizationsplitchunks](https://webpack.docschina.org/configuration/optimization/#optimizationsplitchunks)。

```js
export default {
  // ...
  optimization: {
    runtimeChunk: { name: 'manifest' }, // 抽离WebpackRuntime函数
    splitChunks: {
      cacheGroups: {
        common: {
          minChunks: 2, // 代码块出现最少次数
          name: 'common', // 代码块名称
          priority: 5, // 优先级别
          reuseExistingChunk: true, // 重用已存在代码块
          test: AbsPath('src')
        },
        vendor: {
          chunks: 'initial', // 代码分割类型
          name: 'vendor',
          priority: 10,
          test: /node_modules/
        }
      }, // 缓存组
      chunks: 'all' // 代码分割类型：all全部模块，async异步模块，initial入口模块
    } // 代码块分割
  }
};
```

## 📦 摇树优化

删除项目中未被引用代码，

::: warning 摇树优化只对 ESM 生效，对其他模块规范失效。摇树优化针对静态结构分析，只有 import/export 才能提供静态的导入/导出功能，因此在编写业务代码时必须使用 ESM 才能让摇树优化删除重复代码与未使用代码。
:::

::: tip
在 webpack 中只需将打包环境设置为生产环境就能让摇树优化生效，同时业务代码使用 ESM 编写，使用 import 导入模块，使用 export 导出模块。
:::

## 📦 动态垫片

通过垫片服务根据 UA 返回当前浏览器代码垫片

`@babel/preset-env提供的useBuiltIns可按需导入Polyfill。`

- `false`：无视 target.browsers 将所有 Polyfill 加载进来
- `entry`：根据 target.browsers 将部分 Polyfill 加载进来(仅引入有浏览器不支持的 Polyfill，需在入口文件 import "core-js/stable")
- `usage`：根据 target.browsers 与检测代码中 ES6 的使用情况将部分 Polyfill 加载进来(无需在入口文件 import "core-js/stable")

也可以使用`html-webpack-tags-plugin`在打包时自动加入动态垫片，同时注释掉`@babel/preset-env`相关配置。

```js
import HtmlTagsPlugin from 'html-webpack-tags-plugin';

export default {
  // ...
  plugins: [
    // ...
    new HtmlTagsPlugin({
      append: false, // 在生成资源后加入
      publicPath: false, // 使用公共路径
      tags: ['https://polyfill.alicdn.com/polyfill.min.js'] // 资源路径
    })
  ]
};
```

## 📦 按需加载

将路由页面/触发性功能单独打包为一个文件，使用时才加载，好处是减轻首屏渲染的负担

`webpack v4+`提供魔术注解命名切割模块，若无注解则切割出来的模块无法分辨出属于哪个业务模块，所以一般都是一个业务模块共用一个切割模块的注解名称。若使用`webpack v5`则无需魔术注解。

```js
const Login = () =>
  import(/* webpackChunkName: "login" */ '../../views/login');
const Logon = () =>
  import(/* webpackChunkName: "logon" */ '../../views/logon');
```

## 📦 作用提升

分析模块间依赖关系，把打包好的模块合并到一个函数中

在 webpack 中只需将打包环境设置为生产环境就能让作用提升生效，或显式设置`concatenateModules`。

## 📦 压缩资源

压缩 HTML/CSS/JS 代码，压缩字体/图像/音频/视频，好处是更有效减少打包体积。极致地优化代码都有可能不及优化一个资源文件的体积更有效。

针对`HTML`代码，使用`html-webpack-plugin`开启压缩功能。

```js
import HtmlPlugin from 'html-webpack-plugin';

export default {
  // ...
  plugins: [
    // ...
    HtmlPlugin({
      // ...
      minify: {
        collapseWhitespace: true,
        removeComments: true
      } // 压缩HTML
    })
  ]
};
```

> CSS/JS 代码

- optimize-css-assets-webpack-plugin：压缩 CSS 代码，在 webpack v5 中请使用 css-minimizer-webpack-plugin 代替
- uglifyjs-webpack-plugin：压缩 ES5 版本的 JS 代码
- terser-webpack-plugin：压缩 ES6 版本的 JS 代码

::: details

```js
// import CssMinimizerWebpackPlugin from "css-minimizer-webpack-plugin"; // webpack v5
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import UglifyjsPlugin from 'uglifyjs-webpack-plugin';

const compressOpts = (type) => ({
  cache: true, // 缓存文件
  parallel: true, // 并行处理
  [`${type}Options`]: {
    beautify: false,
    compress: { drop_console: true }
  } // 压缩配置
});
const compressCss = new OptimizeCssAssetsPlugin({
  cssProcessorOptions: {
    autoprefixer: { remove: false }, // 设置autoprefixer保留过时样式
    safe: true // 避免cssnano重新计算z-index
  }
});
// const compressCss = CssMinimizerWebpackPlugin(); // webpack v5
const compressJs = USE_ES6
  ? new TerserPlugin(compressOpts('terser'))
  : new UglifyjsPlugin(compressOpts('uglify'));

export default {
  // ...
  optimization: {
    // ...
    minimizer: [compressCss, compressJs] // 代码压缩
  }
};
```

:::

![梳理](/project/webpack.png)
