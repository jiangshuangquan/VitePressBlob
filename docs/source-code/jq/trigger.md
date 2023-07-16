# 事件触发器

这个函数比较复杂，不了解场景直接生读还是有些吃力

```js
var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
  stopPropagationCallback = function (e) {
    e.stopPropagation();
  };

jQuery.extend(jQuery.event, {
  trigger: function (event, data, elem, onlyHandlers) {
    if (rfocusMorph.test(type + jQuery.event.triggered)) {
      return;
    }

    event = event[jQuery.expando]
      ? event
      : new jQuery.Event(type, typeof event === 'object' && event);

    event.result = undefined;

    special = jQuery.event.special[type] || {};
    if (
      !onlyHandlers &&
      special.trigger &&
      special.trigger.apply(elem, data) === false
    ) {
      return;
    }

    if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
      bubbleType = special.delegateType || type;
      if (!rfocusMorph.test(bubbleType + type)) {
        cur = cur.parentNode;
      }
      for (; cur; cur = cur.parentNode) {
        eventPath.push(cur);
        tmp = cur;
      }

      if (tmp === (elem.ownerDocument || document)) {
        eventPath.push(tmp.defaultView || tmp.parentWindow || window);
      }
    }

    i = 0;
    while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
      lastElement = cur;
      event.type = i > 1 ? bubbleType : special.bindType || type;

      handle =
        (dataPriv.get(cur, 'events') || Object.create(null))[event.type] &&
        dataPriv.get(cur, 'handle');
      if (handle) {
        handle.apply(cur, data);
      }

      handle = ontype && cur[ontype];
      if (handle && handle.apply && acceptData(cur)) {
        event.result = handle.apply(cur, data);
        if (event.result === false) {
          event.preventDefault();
        }
      }
    }
    event.type = type;

    if (!onlyHandlers && !event.isDefaultPrevented()) {
      if (
        (!special._default ||
          special._default.apply(eventPath.pop(), data) === false) &&
        acceptData(elem)
      ) {
        if (
          ontype &&
          typeof elem[type] === 'function' &&
          !isWindow(elem)
        ) {
          tmp = elem[ontype];

          if (tmp) {
            elem[ontype] = null;
          }

          jQuery.event.triggered = type;

          if (event.isPropagationStopped()) {
            lastElement.addEventListener(type, stopPropagationCallback);
          }

          elem[type]();

          if (event.isPropagationStopped()) {
            lastElement.removeEventListener(type, stopPropagationCallback);
          }

          jQuery.event.triggered = undefined;

          if (tmp) {
            elem[ontype] = tmp;
          }
        }
      }
    }

    return event.result;
  }
});

jQuery.fn.extend({
  trigger: function (type, data) {
    return this.each(function () {
      jQuery.event.trigger(type, data, this);
    });
  },
  triggerHandler: function (type, data) {
    var elem = this[0];
    if (elem) {
      return jQuery.event.trigger(type, data, elem, true);
    }
  }
});
```

- 1.`jQuery.event.special[ type ]`: 判断此事件有没有特殊处理
- 2. `!onlyHandlers && !special.noBubble && !isWindow( elem ) ` 判断是否阻止冒泡，只执行一次，在窗口中，没有就把所有触发节点放到 `eventPath`中

- 3.遍历执行 eventPath 中的事件
  - `dataPriv.get( cur, "events" )`,判断是否是在缓存中绑定事件
  - `ontype && cur[ ontype ]`: 判断是否通过`onclick`绑定在原生上的事件
- 4.触发通过`addEventListener`监听的事件
  - `elem[ ontype ] = null;`: 把绑定的 onclick 事件缓存下来，避免重复触发
  - `jQuery.event.triggered = type;` 告诉触发器，正在触发这个函数，不要在重复触发
  ```js
  if (rfocusMorph.test(type + jQuery.event.triggered)) {
    return;
  }
  ```
  - `elem[ type ]();` 触发事件
  - `	jQuery.event.triggered = undefined;`
  - `elem[ ontype ] = tmp;`
