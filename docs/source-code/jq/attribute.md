# 获取新增删除

::: tip
其中的原理都比较简单，但是 hooks 是一个比较有意思的处理方式

> hooks = jQuery.attrHooks[ name.toLowerCase() ];

> hooks = jQuery.propHooks[ name ];

> hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

当进行一个操作时，判断操作是否是 hooks 中的一个属性，这样既能外部做特殊处理，又能内部配置

:::

## attr

> elem.nodeType 判断节点类型

- 1： 元素节点，是我们能操作的节点
- 其他节点

> elem.getAttribute 判断是否有 getAttribute 属性， 没有就走

```js
jQuery.prop(elem, name, value);
```

- `jQuery.removeAttr` 本质是 `elem.removeAttribute( name )`

- `jQuery.attr` 本质是 `elem.setAttribute`、`elem.getAttribute`

## class

毕竟是十年前的代码，这一段写的不太好

## prop

本质是 `elem[ name ]`

## val

本质是 `elem.value`、`elem.value = val`
