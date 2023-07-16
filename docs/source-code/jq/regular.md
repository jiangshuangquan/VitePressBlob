## 匹配单个闭合标签

```js
/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
```

## 匹配非空白字符

```js
/[^\x20\t\r\n\f]+/g;
```

## 匹配单位

> 10%, -3.14em, 0.5rem，而不匹配的字符串包括：20px, 1.23e-4px

```js
// 整数、小数、带正负号的数值以及科学计数法表示的数值
export default ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

import pnum from "../../var/pnum.js";

//(?!px) 是一个负向前瞻断言，用于排除匹配以 "px" 结尾的情况
export default new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
```

## 自动像素属性

```js
var ralphaStart = /^[a-z]/,
  // The regex visualized:
  //
  //                         /----------\
  //                        |            |    /-------\
  //                        |  / Top  \  |   |         |
  //         /--- Border ---+-| Right  |-+---+- Width -+---\
  //        |                 | Bottom |                    |
  //        |                  \ Left /                     |
  //        |                                               |
  //        |                              /----------\     |
  //        |          /-------------\    |            |    |- END
  //        |         |               |   |  / Top  \  |    |
  //        |         |  / Margin  \  |   | | Right  | |    |
  //        |---------+-|           |-+---+-| Bottom |-+----|
  //        |            \ Padding /         \ Left /       |
  // BEGIN -|                                               |
  //        |                /---------\                    |
  //        |               |           |                   |
  //        |               |  / Min \  |    / Width  \     |
  //         \--------------+-|       |-+---|          |---/
  //                           \ Max /       \ Height /
  rautoPx =
    /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;

function isAutoPx(prop) {
  // The first test is used to ensure that:
  // 1. The prop starts with a lowercase letter (as we uppercase it for the second regex).
  // 2. The prop is not empty.
  return (
    ralphaStart.test(prop) &&
    rautoPx.test(prop[0].toUpperCase() + prop.slice(1))
  );
}

export default isAutoPx;
```

## 去除开头和结尾的空白字符

```js
export default "[\\x20\\t\\r\\n\\f]";
import whitespace from "./whitespace.js";

// (?:^|[^\\\\])：非捕获组，匹配字符串开头或者非反斜杠字符
// (?:\\\\.)*：非捕获组，匹配反斜杠后面的任意字符，并重复零次或多次
export default new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);

```

## 匹配 HTML 或 XML 标签的开始部分

```js
/<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
```

`<div class='container'>Hello</div>`，该正则表达式可以匹配到 `div`。
