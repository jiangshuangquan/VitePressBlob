# jq 核心逻辑

判断是否是 html 标签

```js
/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
```

## access

获取和设置集合值的多功能方法

本质是调用自己定义在属性上的方法

```js
jQuery.fn.extend({
  attr: function (name, value) {
    return access(this, jQuery.attr, name, value, arguments.length > 1);
  }
});
```

在 access 中会传入 jQuery.attr，在内部会再调用这个函数

## 转驼峰

```js
var rdashAlpha = /-([a-z])/g;

function fcamelCase(_all, letter) {
  return letter.toUpperCase();
}

// Convert dashed to camelCase
function camelCase(string) {
  return string.replace(rdashAlpha, fcamelCase);
}
```

## init

根据传入的参数创建并初始化 jQuery 对象

- 如果传入的参数是空、null、undefined 或 false，返回一个空的 jQuery 对象。
- 如果传入的参数是 DOM 元素，将该元素作为唯一元素添加到 jQuery 对象中。
- 如果传入的参数是函数，将该函数作为 DOMContentLoaded 事件的处理函数，等待文档加载完成后执行。
- 如果传入的参数是字符串：
  - 如果是 HTML 字符串（以 < 开头且以 > 结尾），将解析该字符串并将生成的 DOM 元素添加到 jQuery 对象中。
  - 如果是选择器字符串，使用相应的选择器引擎在文档中查找匹配的元素，并将它们添加到 jQuery 对象中。
  - 否则，将传入的字符串作为 CSS 选择器，并使用相应的选择器引擎在文档中查找匹配的元素，并将它们添加到 jQuery 对象中。
- 如果传入的参数是 jQuery 对象，直接返回该对象。
- 其他情况，将传入的参数作为元素或元素数组添加到 jQuery 对象中。

## isAttached

检查元素是否附加到文档中

```js
jQuery.contains(elem.ownerDocument, elem) ||
  elem.getRootNode(composed) === elem.ownerDocument;
```

- `elem.ownerDocument` 元素所属的文档对象（Document 对象）
- `elem.getRootNode` 根节点
- `jQuery.contains` 用于替代原生的 `element.contains` 方法检查一个元素是否是另一个元素的后代。

```js
	contains: function( a, b ) {
		var bup = b && b.parentNode;

		return a === bup || !!( bup && bup.nodeType === 1 && (

			// Support: IE 9 - 11+
			// IE doesn't have `contains` on SVG.
			a.contains ?
				a.contains( bup ) :
				a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
		) );
	},
```

`a.contains(bup)` 是 JavaScript 中的 DOM API，用于判断元素 `a` 是否包含元素 `bup`

前面的判断条件 `a === bup` 是为了处理特殊情况，即当 `a` 和` bup` 是同一个元素时，直接返回 `true`，避免不必要的函数调用和比较操作，提高执行效率。

## parseHTML

```js
 function( data, context, keepScripts ) {
	var base, parsed, scripts;
	if ( !context ) {
    //创建一个空的 HTML 文档对象。
	  context = document.implementation.createHTMLDocument( "" );

    // 在某些情况下，相对路径的解析可能会相对于当前文档的 URL，而不是相对于所期望的基本 URL。这可能导致加载资源或执行操作时出现问题，特别是涉及相对路径的链接、图像、样式表等。

    //因此，通过设置基本 URL，可以确保解析后的元素在使用相对路径时具有正确的上下文，从而避免潜在的路径解析错误
		base = context.createElement( "base" );
		base.href = document.location.href;
		context.head.appendChild( base );
	}
  // 判断是否是单标签
	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// 单标签
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );
  // DOM 片段（DocumentFragment）中的所有子节点列表
	return jQuery.merge( [], parsed.childNodes );
};

```

内部会调用 `buildFragment`

创建一个临时的 `<div>` 元素（`tmp`）作为容器，并将 `HTML` 字符串赋值给 `tmp` 的 `innerHTML` 属性。这样会自动将 `HTML` 字符串解析为 `DOM` 元素并插入到 `tmp` 容器中。

## parseXML

```js
jQuery.parseXML = function (data) {
  return new window.DOMParser().parseFromString(data, 'text/xml');
};
```

::: details 使用示例

```js
var xmlString = '<root><name>John</name><age>30</age></root>';

var xmlDoc = jQuery.parseXML(xmlString);

// 检查是否解析成功
if (xmlDoc) {
  // 访问 XML 文档中的元素和属性
  var rootElement = xmlDoc.documentElement;
  var nameElement = rootElement.getElementsByTagName('name')[0];
  var ageElement = rootElement.getElementsByTagName('age')[0];

  var name = nameElement.textContent; // 获取文本内容
  var age = ageElement.textContent;

  console.log('Name: ' + name); // 输出: Name: John
  console.log('Age: ' + age); // 输出: Age: 30
} else {
  console.log('Invalid XML');
}
```

:::

## ready

```js
var readyList = jQuery.Deferred();

document.addEventListener('DOMContentLoaded', completed);

window.addEventListener('load', completed);
```

类似 promise 的异步执行函数，早期，没有 promise 时 jq 自己实现的异步执行方法，为了兼容旧版本逻辑较为复杂，感兴趣可以这些去看一下源码
