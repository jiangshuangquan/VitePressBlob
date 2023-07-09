# AST 是什么？

抽象语法树 (Abstract Syntax Tree)，简称 AST，它是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。

::: tip
代码中常见的字面量、标识符、表达式、语句、模块语法、class 语法等语句都有各自对应的 AST 节点类型，下面我们简单介绍下常见的节点类型。
:::

## 常见节点类型

### literal(字面量)

本身语义代表了一个值。

```js
let name = 'iceman'; // iceman ---> StringLiteral 字符串字面量
let age = 30; // 30     ---> NumberLiteral 数字字面量
const isMan = true; // true   ---> BooleanLiteral 布林字面量
const reg = /\d/; // /\d/   ---> RegExpLiteral 正则字面量
```

### Identifier(标识符)

变量名、属性名、参数名等等一系列声明和引用的名字。

```js
import { request } form 'framework';   // request              ---> Identifier
let name = 'iceman';                   // name                 ---> Identifier
const age = 30;                        // age                  ---> Identifier
function talk(name) {                  // talk, name           ---> Identifier
    console.log(name);                 // console, log, name   ---> Identifier
}
const obj = {                          // obj                  ---> Identifier
    name: 'guang'                      // name                 ---> Identifier
}

```

### Statement(语句)

代码执行的最小单位。

```js
return 'iceman'; // ReturnStatement
if (age > 35) {
} // IfStatement
throw new Error('error'); // ThrowStatement
try {
} catch (e) {} // TryStatement
for (let i = 0; i < 5; i++) {} // ForStatement
```

### Declaration(声明)

声明语句是一种特殊的 Statement。

```js
const listlen = 1; // VariableDeclaration
let listName = 'user'; // VariableDeclaration
function getInfo(info) {
  // FunctionDeclaration
  if (info.isRun) {
    return info.name;
  }
  return '';
}
class Car {
  // ClassDeclaration
  constructor() {}
  method() {}
}
```

### Expression(表达式)

expression 的特点是执行完成后会有返回值，这也是它和语句的区别

```js
[1, 2, 3]; // ArrayExpression 数组表达式
age = 1; // AssignmentExpression 赋值表达式
1 + 2; // BinaryExpression二元表达式
var obj = {
  // ObjectExpression对象表达式
  foo: 'foo',
  bar: function () {}
};
let getName = function () {}; // FunctionExpression函数表达式
const getAge = (age) => {
  // ArrowFunctionExpression箭头函数表达式
  return age;
};
```

### Import 导入模块

属于一种特殊的声明语句，有三种类型 ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier

```js
import { environment } from 'framework'; // named import
import { request as req } from 'framework'; // namespaced import
import api from 'framework'; // default import
import * as APP from 'framework'; // namespaced imort
```

### Export 导出模块

属于一种特殊的声明，有三种类型 ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration。

```js
export * from './iceman';
export default 'iceman';
export const ice = 'iceman';
```
