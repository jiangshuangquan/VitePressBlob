[web 安全 MDN](https://developer.mozilla.org/zh-CN/docs/Web/Security)

## 常见的攻击手段

### 1. 任意文件上传

将恶意文件上传到服务器中并执行，从而攻击系统。攻击包括：文件系统或者数据库超载、完全接管系统、将攻击转发到后端系统或者简单的破坏。

### 2. 点击劫持

在用户观看到的网站上覆盖一层透明的恶意网站，诱导用户点击恶意网站上的按钮来触发攻击行为

### 3. XSS 攻击

将恶意脚本 JS 脚本注入到网页中的攻击方式。网站上的缺陷使这些攻击得以成功并广泛传播

### 4. SQL 注入

将恶意的 SQL 注入到数据库

### 5. Dos 攻击（拒绝服务）

通过流量轰炸服务器，导致正常的用户无法正常访问服务器

### 6. 中间人攻击或者会话劫持

拦截客户端和服务端之间的通信，从中窃取用户的密码、账号或者任何个人详细信息

## 防范手段

### 1. 严格的限制用户的输入（第一个攻击点）

- [DOMPurify](https://www.npmjs.com/package/dompurify).仅仅使用一个函数就可以过滤用户的输入。同时，也支持自定义的规则，并且支持在 HTML5、SVG、MathML 中使用。
- [secure-filters](https://www.npmjs.com/package/secure-filters). 它提供方法去过滤 HTML、JavaScript、内联 CSS 等等。当你想利用用户的输入生成 JavaScript 或者 CSS 时，这个库特别好用。

文件上传，请务必检查文件类型并且使用文件过滤功能仅允许某些文件类型上传。

### 2.注意隐藏保存浏览器内存中的数据或字段

### 3. 使用 CSP

```less
// header
content-security-policy: script-src ‘self’ https://apis.xyz.com

```

仅仅信任https://apis.xyz.com和本身域名的脚本

可以在 MDN 网站上阅读更详细 CSP 说明

### 4. 开启 XSS 保护模式

如果攻击者通过某种方式在用户输入中插入攻击代码，我们可以通过`"X-XSS-Protection": "1; mode=block"`来告诉浏览器阻止响应。
大多数现代浏览器默认情况下都启用了 XSS 保护模式，但仍建议添加 `X-XSS-Protection`。 这有助于提高不支持 CSP 的旧版浏览器的安全性。

### 5. 避免典型的 XSS 错误

考虑使用`textContent`来代替`innerHTML`，避免直接生成 HTML。如果你不生成 HTML，那就不会有 JavaScript 插入到页面

### 6. 禁用 IFrame 嵌入

禁用 iframe 可以帮助我们免受点击劫持攻击。我们应该在 header 中添加`"X-Frame-Options": "DENY"`，来禁止浏览器在页面中渲染 iframe。

我们也可以使用 CSP 指令`frame-ancestors`，它可以更好的控制我们的页面可以被哪些父页面通过 iframe 的形式来嵌套展示。

### 7. 通用的错误提示

类似"您的密码有误"这样的提示对用户很友好，同时，他对攻击者也很友好。他们可以通过服务端返回的错误信息来判断他下一步需要进行什么样的攻击。

当处理用户的账号、邮件、个人信息时，我们应该尝试使用一些模棱两可的错误提示，类似“错误的登陆信息”。

### 8. 使用验证码

在对外的公共服务（登陆、注册）上使用验证码。验证码的目的在于帮助我们区分真人和机器人，并且也可以阻止 DoS 攻击。

### 9. 设置 Referrer-Policy

当我们使用`<a>`标签或者超链接引导用户离开我们的网站时，确保你在请求 header 里面添加了`"Referrer-Policy": "no-referrer"`，或者在`<a>`标签中添加了`rel="noopener"` 或`rel="noreferrer"`属性。

当我们不设置`header`或者`rel`属性时，目标网站就可以获取到一些用户相关的数据。

`rel=noopener`保证跳转过去的网站无法通过`window.opener`窃取原来网页的信息。`rel=noreferrer`作用是防止将引用者信息传递到目标网站。上面提到的策略大家可以去 mdn 上了解一下 `MDN Referrer-Policy`、`MDN Link Type`

### 10. 限制浏览器的功能或者 API

我们可以利用 http header 中的`Feature-Policy`字段来限制使用浏览器提供的功能。

### 11. 定期审查 npm 依赖

经常跑一下`npm audit`来获取存在漏洞的`npm`包列表，升级他们避免一些安全问题。

GitHub 现在会标记出哪些存在漏洞的依赖。我们也可以使用`Snyk`来自动检查你的源码，并且自动升级版本号。

### 12. 分离你的应用

与后端一样，我们也拥有微服务架构，其中，将单一的 Web 应用转变为多个小型前端应用的聚合，每个小型前端应用可以单独运行。

### 13. 尽量避免使用第三方服务

拥有一套健全的 CSP 策略很重要。大多数第三方服务都有定义的 CSP 指令，因此请务必添加它们。

同样，如果可能的话，请确保给你的`script`标签都加上`integrity`属性。子资源完整性功能`（SRI）`可以验证脚本的`hash`值，并确保其未被篡改。

```js
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/ux..."
  crossorigin="anonymous"
></script>
```

将使用`base64`编码过后的文件哈希值写入你所引用的 `<script> `或 `<link>` 标签的 `integrity` 属性值中即可启用子资源完整性校验功能。

### 14.仔细考虑自动填充字段

存储在浏览器的自动填充里面的用户个人数据对用户和攻击者都很方便。

攻击者添加了第三方的脚本，利用浏览器的自动填充来提取用户的邮箱地址去构建追踪标识。他们可以使用这些信息建立用户浏览历史记录配置文件，然后将其出售给坏人。

我们许多人甚至都不知道他们的浏览器自动填充功能存储了哪些信息。

提示：禁止将敏感信息自动填入表单

MDN 中也有一个 web 安全相关的专题，大家有兴趣可以关注一下 MDN web security
