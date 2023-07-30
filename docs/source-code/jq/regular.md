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

## attributes 匹配 属性值匹配

```js
///表示空白字符的模式，包括空格、制表符、回车符、换行符和换页符
var whitespace = '[\\x20\\t\\r\\n\\f]';

//表示 CSS 标识符的模式，包括转义序列、非回车换行符、字母数字字符、连字符以及不在 Basic Latin 范围内的字符
var identifier =
  '(?:\\\\[\\da-fA-F]{1,6}' +
  whitespace +
  '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+';

// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
//匹配属性选择器的各种形式，包括属性名称、运算符、属性值（CSS 标识符或字符串）等
var attributeSelectorPattern =
  '\\[' +
  whitespace +
  '*(' +
  identifier +
  ')(?:' +
  whitespace +
  // Operator (capture 2)
  '*([*^$|!~]?=)' +
  whitespace +
  // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
  '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
  identifier +
  '))|)' +
  whitespace +
  '*\\]';

const regex = new RegExp(attributeSelectorPattern);
```

## identifier 匹配 css 中的转义字符

```js
var whitespace = '[\\x20\\t\\r\\n\\f]';

export default '(?:\\\\[\\da-fA-F]{1,6}' +
  whitespace +
  '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+';
```

## pseudos 解析 CSS 选择器

```js
var whitespace = '[\\x20\\t\\r\\n\\f]';

// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
const identifier =
  '(?:\\\\[\\da-fA-F]{1,6}' +
  whitespace +
  '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+';

// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
const attributes =
  '\\[' +
  whitespace +
  '*(' +
  identifier +
  ')(?:' +
  whitespace +
  // Operator (capture 2)
  '*([*^$|!~]?=)' +
  whitespace +
  // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
  '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
  identifier +
  '))|)' +
  whitespace +
  '*\\]';

export default ':(' +
  identifier +
  ')(?:\\((' +
  // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
  // 1. quoted (capture 3; capture 4 or capture 5)
  '(\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|' +
  // 2. simple (capture 6)
  '((?:\\\\.|[^\\\\()[\\]]|' +
  attributes +
  ')*)|' +
  // 3. anything else (capture 2)
  '.*' +
  ')\\)|)';
```

## 匹配以逗号分隔的 CSS 选择器

```js
new RegExp('^' + whitespace + '*,' + whitespace + '*');
```

## 匹配空白字符或大于符号 (>)

```js
new RegExp(whitespace + '|>');
```

## 匹配以符号 +、>、~ 或空白字符开头的字符串

```js
new RegExp(
  '^' + whitespace + '*([>+~]|' + whitespace + ')' + whitespace + '*'
);
```

## filterMatchExpr

```js
var filterMatchExpr = {
  ID: new RegExp('^#(' + identifier + ')'),
  CLASS: new RegExp('^\\.(' + identifier + ')'),
  TAG: new RegExp('^(' + identifier + '|[*])'),
  ATTR: new RegExp('^' + attributes),
  PSEUDO: new RegExp('^' + pseudos), // 伪类选择器
  CHILD: new RegExp( // 子元素选择器
    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
      whitespace +
      '*(even|odd|(([+-]|)(\\d*)n|)' +
      whitespace +
      '*(?:([+-]|)' +
      whitespace +
      '*(\\d+)|))' +
      whitespace +
      '*\\)|)',
    'i'
  )
};
```
