## getStyles

```js
var view = elem.ownerDocument.defaultView;
return view.getComputedStyle(elem);
```

## swap ( elem, options, callback )

在修改元素的样式属性时，临时改变样式属性的值，并在回调函数执行后恢复原来的样式属性值

## adjustCSS

它会修改元素的样式属性，并返回调整后的属性值

```js
	currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
```

> 在使用动画时，`jQuery.css(elem, prop, "")` 获取的属性值可能存在一些误差

因为动画是通过逐步改变属性值来实现平滑过渡的，而不是立即跳变到目标值。这种逐步改变的过程可能导致在获取属性值时存在一定的误差

`tween.cur()`，用于获取当前动画的属性值

```js
while (maxIterations--) {
  // Evaluate and update our best guess (doubling guesses that zero out).
  // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
  jQuery.style(elem, prop, initialInUnit + unit);
  if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
    maxIterations = 0;
  }
  initialInUnit = initialInUnit / scale;
}
```

通过循环赋值的方式，做出属性改变的动画效果，判断很多，写的很绕，难读，读懂了收获也不大

## reliableTrDimensionsVal

可靠尺寸计算

```js
var reliableTrDimensionsVal,
  div = document.createElement('div');
var table, tr, trStyle;
if (reliableTrDimensionsVal == null) {
  table = document.createElement('table');
  tr = document.createElement('tr');

  table.style.cssText =
    'position:absolute;left:-11111px;border-collapse:separate';
  tr.style.cssText = 'box-sizing:content-box;border:1px solid';

  tr.style.height = '1px';
  div.style.height = '9px';
  div.style.display = 'block';

  documentElement.appendChild(table).appendChild(tr).appendChild(div);

  trStyle = window.getComputedStyle(tr);
  reliableTrDimensionsVal =
    parseInt(trStyle.height, 10) +
      parseInt(trStyle.borderTopWidth, 10) +
      parseInt(trStyle.borderBottomWidth, 10) ===
    tr.offsetHeight;

  documentElement.removeChild(table);
}
return reliableTrDimensionsVal;
```

代码通过创建一个 `<table>` 元素和一个 `<tr>` 元素，并设置它们的样式，来进行尺寸计算的测试

::: tip
在浏览器中，对于表格行` <tr>` 元素，其尺寸的计算可能存在一些浏览器差异性。特别是在某些浏览器中，使用 getComputedStyle 获取的计算样式与实际尺寸可能不一致，尤其涉及到边框的计算。
:::

## data

内部的数据管理，会把缓存对象挂载到 dom 对象上
