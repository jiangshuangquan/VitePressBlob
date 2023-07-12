# Npm 镜像

```bash
npm config set registry https://registry.npmmirror.com/
```

## 管理镜像

`nrm`，它是一个可随时随地自由切换 Npm 镜像的管理工具。打开 CMD 工具，执行`npm i -g nrm`安装`nrm`，再执行`nrm -V`，输出版本表示安装成功。

| 命令                   |     功能     |
| ---------------------- | :----------: |
| `nrm add <name> <url>` |   新增镜像   |
| `nrm del <name> `      |   删除镜像   |
| `nrm test <name> `     |   测试镜像   |
| `nrm use <name>  `     |   切换镜像   |
| `nrm current  `        |   查看镜像   |
| `nrm ls`               | 查看镜像列表 |

## node-gyp

安装的`Npm`模块依赖了`C++`模块。在安装时会隐式安装`node-gyp`，`node-gyp`可编译这些依赖`C++`模块的`Npm`模块,`node-gyp`在首次编译时会依赖`Node`源码

::: tip
npm config 提供一个参数 disturl，它可设置 Node 镜像地址，当然还是将其指向国内的淘宝镜像。这样又能愉快地安装这些依赖 C++模块的 Npm 模块了

```bash
npm config set disturl https://npm.taobao.org/mirrors/node/

```

:::

## node-sass

安装`node-sass`时，在`install`阶段会从`Github Releases`中下载一个叫`binding.node`的文件，而`Github Releases`中的文件都托管在`s3.amazonaws.com`中，该网址又安装不了

::: tip

从`node-sass`的官方文档中可找到一个叫`sass_binary_site`的参数，它可设置`Sass`镜像地址，毫无疑问还是将其指向国内的淘宝镜像。这样又能愉快地安装`node-sass`了。

```bash
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/

```

::: details 源码部分

```js
function getBinaryUrl() {
  const site =
    getArgument('--sass-binary-site') ||
    process.env.SASS_BINARY_SITE ||
    process.env.npm_config_sass_binary_site ||
    (pkg.nodeSassConfig && pkg.nodeSassConfig.binarySite) ||
    'https://github.com/sass/node-sass/releases/download';
  const result = [site, 'v' + pkg.version, getBinaryName()].join('/');
  return result;
}
```

:::
::: warning
执行 npm i 安装依赖前请确保当前的 node-sass 版本与 Node 版本已兼容。
:::

## 配置镜像地址

`npm config set <name> <url>`

```bash
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
npm config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/
npm config set puppeteer_download_host https://npm.taobao.org/mirrors/
npm config set python_mirror https://npm.taobao.org/mirrors/python/
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm config set sentrycli_cdnurl https://npm.taobao.org/mirrors/sentry-cli/
npm config set sharp_binary_host https://npm.taobao.org/mirrors/sharp/
npm config set sharp_dist_base_url https://npm.taobao.org/mirrors/sharp-libvips/
npm config set sharp_libvips_binary_host https://npm.taobao.org/mirrors/sharp-libvips/
npm config set sqlite3_binary_site https://npm.taobao.org/mirrors/sqlite3/

```

## Npm 缓存

```bash
npm cache clean -f
```

## 使用 rimraf

卸载 node_modules 文件夹

```bash
npm i -g rimraf

```
