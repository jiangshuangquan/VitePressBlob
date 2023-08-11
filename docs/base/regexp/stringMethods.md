## replace

`replace`有两种使用形式，这是因为它的第二个参数，可以是字符串，也可以是函数。

当第二个参数是字符串时，如下的字符有特殊的含义：

- `$1`,`$2`,...,`$99` 匹配第 1~99 个分组里捕获的文本
- `$&` 匹配到的子串文本
- `$\`` 匹配到的子串的左边文本
- `$'` 匹配到的子串的右边文本
- `?` 美元符号

把"2,3,5"，变成"5=2+3"：

```js
var result = '2,3,5'.replace(/(\d+),(\d+),(\d+)/, '$3=$1+$2');
console.log(result);
// => "5=2+3"
```

把"2,3,5"，变成"222,333,555":

```js
var result = '2,3,5'.replace(/(\d+)/g, '$&$&$&');
console.log(result);
// => "222,333,555"
```

把"2+3=5"，变成"2+3=2+3=5=5":

```js
var result = '2+3=5'.replace(/=/, "$&$`$&$'$&");
console.log(result);
// => "2+3=2+3=5=5"
```

第二个参数是函数时

```js
'1234 2345 3456'.replace(
  /(\d)\d{2}(\d)/g,
  function (match, $1, $2, index, input) {
    console.log([match, $1, $2, index, input]);
  }
);
// => ["1234", "1", "4", 0, "1234 2345 3456"]
// => ["2345", "2", "5", 5, "1234 2345 3456"]
// => ["3456", "3", "6", 10, "1234 2345 3456"]
```