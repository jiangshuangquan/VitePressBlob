# tsconfig.json 简介

TypeScript 使用 tsconfig.json 文件作为其配置文件，当一个目录中存在 tsconfig.json 文件，则认为该目录为 TypeScript 项目的根目录。

通常 tsconfig.json 文件主要包含两部分内容：`指定待编译文件`和`定义编译选项`。

> 目前 tsconfig.json 文件有以下几个顶层属性

- compileOnSave
- compilerOptions
- exclude
- extends
- files
- include
- references
- typeAcquisition

## 编译

可以使用 tsc 命令来编译少量 TypeScript 文件：

```bash
/*
  参数介绍：
  --outFile // 编译后生成的文件名称
  --target  // 指定ECMAScript目标版本
  --module  // 指定生成哪个模块系统代码
  index.ts  // 源文件
*/
$ tsc --outFile leo.js --target es3 --module amd index.ts

```

## 指定需要编译的目录

在不指定输入文件的情况下执行 `tsc` 命令，默认从当前目录开始编译，编译所有 .ts 文件，并且从当前目录开始查找 tsconfig.json 文件，并逐级向上级目录搜索。

另外也可以为 tsc 命令指定参数 --project 或 -p 指定需要编译的目录，该目录需要包含一个 tsconfig.json 文件

```bash
/*
  文件目录：
  ├─src/
  │  ├─index.ts
  │  └─tsconfig.json
  ├─package.json
*/
$ tsc --project src


```
