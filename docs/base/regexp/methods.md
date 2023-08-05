# 正则方法

正则表达式在 js 中的方法

## test

测试字符串是否与正则表达式匹配，返回布尔值

> 正则表达式不带 g

```js
var regex = /\d+/;
var str = 'abc123def';
var isMatch = regex.test(str);
console.log(isMatch); // true
```

> 带 g

如果在带有全局标志 "g" 的情况下使用 test() 方法，它将在每次匹配后继续从字符串的下一个位置开始，直到没有更多的匹配为止

```js
var regex = /\d+/g;
var str = 'abc123def';

console.log(regex.test(str)); // true (第一次匹配 "123" 后继续)
console.log(regex.test(str)); // false (没有更多匹配，返回 false)
```

可在每次测试之前先重置正则表达式的 lastIndex 属性，以确保从字符串的起始位置开始匹配

```js
var regex = /\d+/g;
var str = 'abc123def';

console.log(regex.test(str)); // true (第一次匹配 "123" 后继续)
regex.lastIndex = 0; // 重置正则表达式的 lastIndex 属性
console.log(regex.test(str)); // true (从头开始匹配)
```

## exec

它返回一个数组，包含匹配到的结果信息。如果没有找到匹配，则返回 null

```js
var regex = /\d+/;
var str = 'abc123def';

var result = regex.exec(str);
console.log(result); // ["123", index: 3, input: "abc123def"]

result = regex.exec(str);
console.log(result); // ["123", index: 3, input: "abc123def"] (如果没有全局标志 "g"，从头开始匹配)
```

> 在带有全局标志 "g" 的情况下，exec() 方法将从正则表达式的 lastIndex 属性指定的位置开始匹配.如果找到匹配，lastIndex 将更新为下一个匹配的起始位置。如果没有找到匹配，lastIndex 将被重置为 0。

```js
var regex = /\d+/g;
var str = 'abc123def';

var result = regex.exec(str);
console.log(result); // ["123", index: 3, input: "abc123def"]

result = regex.exec(str);
console.log(result); // null (如果没有更多匹配)

result = regex.exec(str);
console.log(result); // ["123", index: 3, input: "abc123def"]
```
