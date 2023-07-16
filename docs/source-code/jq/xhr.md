# xhr 请求

`xhr` 请求源码难度不高，但是设计的比较巧妙，先定义一个柯里化的`callback`函数，做请求结束的处理函数，再通过`callback()`、`callback('error')`、`callback('abort')`的方式定义了各种状态处理，执行一次之后再置空销毁，保证 `callback` 函数只会执行一次

```js
jQuery.ajaxSettings.xhr = function () {
  return new window.XMLHttpRequest();
};

var xhrSuccessStatus = {
  // File protocol always yields status code 0, assume 200
  0: 200
};

jQuery.ajaxTransport(function (options) {
  var callback;

  return {
    send: function (headers, complete) {
      var i,
        xhr = options.xhr();

      xhr.open(
        options.type,
        options.url,
        options.async,
        options.username,
        options.password
      );

      // Apply custom fields if provided
      if (options.xhrFields) {
        for (i in options.xhrFields) {
          xhr[i] = options.xhrFields[i];
        }
      }

      // Override mime type if needed
      if (options.mimeType && xhr.overrideMimeType) {
        xhr.overrideMimeType(options.mimeType);
      }

      if (!options.crossDomain && !headers['X-Requested-With']) {
        headers['X-Requested-With'] = 'XMLHttpRequest';
      }

      // Set headers
      for (i in headers) {
        xhr.setRequestHeader(i, headers[i]);
      }

      // Callback
      callback = function (type) {
        return function () {
          if (callback) {
            callback =
              xhr.onload =
              xhr.onerror =
              xhr.onabort =
              xhr.ontimeout =
                null;

            if (type === 'abort') {
              xhr.abort();
            } else if (type === 'error') {
              complete(xhr.status, xhr.statusText);
            } else {
              complete(
                xhrSuccessStatus[xhr.status] || xhr.status,
                xhr.statusText,

                (xhr.responseType || 'text') === 'text'
                  ? { text: xhr.responseText }
                  : { binary: xhr.response },
                xhr.getAllResponseHeaders()
              );
            }
          }
        };
      };

      // Listen to events
      xhr.onload = callback();
      xhr.onabort = xhr.onerror = xhr.ontimeout = callback('error');

      // Create the abort callback
      callback = callback('abort');

      try {
        // Do send the request (this may raise an exception)
        xhr.send((options.hasContent && options.data) || null);
      } catch (e) {
        // trac-14683: Only rethrow if this hasn't been notified as an error yet
        if (callback) {
          throw e;
        }
      }
    },

    abort: function () {
      if (callback) {
        callback();
      }
    }
  };
});
```
