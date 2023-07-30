## 延迟执行

这是个很有意思的编程思想，如果拿出来做为题目，很多中高级工程师也很难短时间想明白

## 使用

```js
jQuery.fn.delay = function (time, type) {
  time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
  type = type || 'fx';

  return this.queue(type, function (next, hooks) {
    var timeout = window.setTimeout(next, time);
    hooks.stop = function () {
      window.clearTimeout(timeout);
    };
  });
};
```

当我看到这种用法的时候，我就在想，是不是我想的那个原理，果然读到下面的源码，和我的想法差不多

## 原理

```js
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},


```
