# Markdown 扩展

VitePress 带有内置的 Markdown 扩展。

## 头部锚点

头部会自动获取锚点链接。可以通过 `markdown.anchor` 选项配置锚点的渲染。

### 定制锚

要为标题指定自定义锚标记而不是使用自动生成的锚标记，请向标题添加后缀：

```
# 使用自定义锚点 {#my-anchor}
```

这允许您将标题链接为`#my-anchor`，而不是默认的`#using-custom-anchors`。

## 链接

内部和外部链接都得到特殊处理。

### 内部链接

内部链接转换为路由器链接以进行 SPA 导航。 另外，每个子目录中包含的每个`index.md` 都会自动转换为 `index.html`, 并具有相应的 URL `/`.

例如，给定以下目录结构：

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

假设你在 `foo/one.md`:

```md
[Home](/) <!-- sends the user to the root index.md -->
[foo](/foo/) <!-- sends the user to index.html of directory foo -->
[foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->
[bar - three](../bar/three) <!-- you can omit extension -->
[bar - three](../bar/three.md) <!-- you can append .md -->
[bar - four](../bar/four.html) <!-- or you can append .html -->
```

### 页面后缀

默认情况下，页面和内部链接会生成带有 `.html` 的后缀.

### 外部链接

外部的链接会自动识别并生成 `target="_blank" rel="noreferrer"`的链接，如下:

- [vuejs.org](https://vuejs.org)
- [VitePress on GitHub](https://github.com/vuejs/vitepress)

## Frontmatter

[YAML frontmatter](https://jekyllrb.com/docs/front-matter/) 通过外部支持:

```yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

该数据可用于页面的其他部分，以及所有自定义和主题化组件.

## GitHub 样式的表格

**输入**

```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

**输出**

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

## Emoji :tada:

**输入**

```
:tada: :100:
```

**输出**

:tada: :100:

可用的 emoji 可以通过 [list of all emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) 了解.

## Table of Contents

**输入**

```
[[toc]]
```

**输出**

[[toc]]

可以使用 `markdown.toc` 选项配置 TOC 的渲染.

## 自定义容器

自定义容器可以通过其类型、标题和内容来定义。

### 默认标题

**输入**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**输出**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### 自定义标题

你可以通过在容器的“类型”后面添加文本来设置自定义标题

**输入**

````md
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!');
```

:::
````

**输出**

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!');
```

:::

### `raw`

这是一个特殊的容器，可以用来防止样式和路由与 VitePress 冲突。当作为组件库文档使用时，这尤其有用。

**语法**

```md
::: raw
Wraps in a <div class="vp-raw">
:::
```

`vp-raw` 类也可以直接用于元素，样式隔离目前是可选择的。:

::: details

- Install required deps with your preferred package manager:

  ```sh
  $ npm install -D postcss postcss-prefix-selector
  ```

- Create a file named `docs/.postcssrc.cjs` and add this to it:

  ```js
  module.exports = {
    plugins: {
      'postcss-prefix-selector': {
        prefix: ':not(:where(.vp-raw *))',
        includeFiles: [/vp-doc\.css/],
        transform(prefix, _selector) {
          const [selector, pseudo = ''] = _selector.split(/(:\S*)$/);
          return selector + prefix + pseudo;
        }
      }
    }
  };
  ```

:::

## 在代码块中高亮语法

VitePress 使用 [Shiki](https://shiki.matsu.io/) 的彩色文本来突出 Markdown 代码块中的语言语法。Shiki 支持多种编程语言，只需要在代码块的开头 ``` 定义对应的语言:

**输入**

````
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

````
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
````

**输出**

```js
export default {
  name: 'MyComponent'
  // ...
};
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

在 Shiki 的仓库里有对应支持的 [语言列表](https://github.com/shikijs/shiki/blob/main/docs/languages.md) .

## 代码块中定义 行高亮

**输入**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除了单行之外，还可以指定多个单行、范围或者多个一起定义:

- 行范围: 例如 `{5-8}`, `{3-10}`, `{10-17}`
- 多个单行: 例如 `{4,7,9}`
- 行范围和多个单行: 例如 `{4,7-13,16,23-27,40}`

**输入**

````
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````

**输出**

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

或者，可以使用 `// [!code hl]`注释直接在行中突出显示。

**输入**

````
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code  hl]
    }
  }
}
```
````

**输出**

```js
export default {
  data() {
    return {
      msg: 'Highlighted!' // [!code hl]
    };
  }
};
```

## 关注代码块

在一行上添加 `// [!code focus]` 注释会聚焦该行并模糊代码的其他部分。

此外，您可以使用定义多条线来聚焦 `// [!code focus:<lines>]`.

**输入**

注意， `!code`,后面只需要一个空格，这里有两个空格是为了防止处理.

````
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code  focus]
    }
  }
}
```
````

**输出**

```js
export default {
  data() {
    return {
      msg: 'Focused!' // [!code focus]
    };
  }
};
```

## 代码块中的彩色差异

在一行上添加 `// [!code --]` 或 `// [!code ++]` 注释将创建该行的差异，同时保留代码块的颜色.

**输入**

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```
````

**输出**

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## 代码块中的错误和警告

在一行上添加 `// [!code warning]` 或 `// [!code error]` 注释会相应地为其着色.

**输入**

````
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code  error]
      msg: 'Warning' // [!code  warning]
    }
  }
}
```
````

**输出**

```js
export default {
  data() {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    };
  }
};
```

## 行号

您可以通过配置为每个代码块启用行号:

```js
export default {
  markdown: {
    lineNumbers: true
  }
};
```

您可以在受防护的代码块中添加 `:line-numbers` / `:no-line-numbers` 标记来覆盖 config.json 中设置的值.

**输入**

````md
```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2';
const line3 = 'This is line 3';
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````

**输出**

```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2';
const line3 = 'This is line 3';
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

## 导入代码片段

你可以通过以下语法从现有文件中导入代码片段：:

```md
<<< @/filepath
```

同时也支持 [行高亮](#line-highlighting-in-code-blocks):

```md
<<< @/filepath{highlightLines}
```

**输入**

```md
<<< @/snippets/snippet.js{2}
```

**代码文件**

<<< @/snippets/snippet.js

**输出**

<<< @/snippets/snippet.js{2}

::: tip
`@` 相当于项目指定的源目录。默认情况下，它是 VitePress 项目根目录，当然也可以通过`srcDir` 配置项配置。

```md
<<< ../snippets/snippet.js
```

:::

你也可以使用 [VS 代码区域 ](https://code.visualstudio.com/docs/editor/codebasics#_folding) 来导入仅包含代码文件的相应部分。也可以在文件路径后的 `#` 后面提供自定义区域名称：

**输入**

```md
<<< @/snippets/snippet-with-region.js#snippet{1}
```

**代码文件**

<<< @/snippets/snippet-with-region.js

**输出**

<<< @/snippets/snippet-with-region.js#snippet{1}

你还可以在大括号 (`{}`) 中指定语言:

```md
<<< @/snippets/snippet.cs{c#}

<!-- with line highlighting: -->

<<< @/snippets/snippet.cs{1,2,4-6 c#}

<!-- with line numbers: -->

<<< @/snippets/snippet.cs{1,2,4-6 c#:line-numbers}
```

这在无法从文件扩展名中推断出源语言会很有用.

## 代码组

您可以像这样对多个代码块进行分组:

**输入**

````md
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from 'vitepress';

const config: UserConfig = {
  // ...
};

export default config;
```

:::
````

**输出**

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from 'vitepress';

const config: UserConfig = {
  // ...
};

export default config;
```

:::

你也可以 [import snippets](#import-code-snippets) 在代码组中:

**输入**

```md
::: code-group

<!-- filename is used as title by default -->

<<< @/snippets/snippet.js

<!-- you can provide a custom one too -->

<<< @/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]

:::
```

**输出**

::: code-group

<<< @/snippets/snippet.js

<<< @/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]

:::

## 包含其他 Markdown 文件

你可以通过下面的写法在 markdown 文件中 引入另外的 markdown 文件.

::: tip
您还可以在 Markdown 路径前添加 `@`, 前缀，它将充当源根目录。 默认为 VitePress 项目根目录，除非配置了 `srcDir` .
:::

例如，您可以使用此包含相对 Markdown 文件:

**输入**

```md
# Docs

## Basics

<!--@include: ./parts/basics.md-->
```

**部分文件** (`parts/basics.md`)

```md
Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

**等同于以下代码**

```md
# Docs

## Basics

Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

它还支持选择线路范围:

**输入**

```md
# Docs

## Basics

<!--@include: ./parts/basics.md{3,}-->
```

**部分文件** (`parts/basics.md`)

```md
Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

**等同于以下代码**

```md
# Docs

## Basics

### Configuration

Can be created using `.foorc.json`.
```

所选行范围的格式可以是: `{3,}`, `{,10}`, `{1,10}`

::: warning 警告
注意，如果文件不存在，将不会引发错误。因此，在使用此特性时，请确保按预期呈现内容。.
:::

## 高级配置

VitePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 作为 Markdown 渲染器。上面的许多扩展是通过自定义插件实现的。您可以使用 `.vitepress/config.js` 中的 `markdown` 选项进一步自定义`markdown-it` 实例:

```js
const anchor = require('markdown-it-anchor');

module.exports = {
  markdown: {
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {
      permalink: anchor.permalink.headerLink()
    },

    // options for @mdit-vue/plugin-toc
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: { level: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'));
    }
  }
};
```
