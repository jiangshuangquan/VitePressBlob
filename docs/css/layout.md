# 布局

> 有八种布局方式

- **普通布局**：display:block/inline
- **浮动布局**：float:left/right
- **定位布局**：position:relative/absolute/fixed、left/right/top/bottom/z-index
- **表格布局**：table 系列属性
- **弹性布局**：display:flex/inline-flex、flex 系列属性
- **多列布局**：column 系列属性
- **格栅布局**：display:grid/inline-grid、grid 系列属性
- **响应式布局**：em/rem/vw/vh/vmin/vmax、媒体查询

> 清除浮动

```css
.clearfix::after {
  display: block;
  visibility: hidden;
  clear: both;
  height: 0;
  font-size: 0;
  content: '';
}
```

> 水平居中

- position + left/right + transform:translateX(-50%)：应用于全部元素

> 垂直居中

- display:table + display:table-cell + vertical-align:middle：应用于全部元素

  父节点声明 display:table

  子节点声明 display:table-cell 与 vertical-align:middle

## 水平垂直居中

::: details 让下面元素水平垂直居中

```html
<div class="center-layout">
  <div></div>
</div>

<style lang="scss">
  .center-layout {
    width: 100px;
    height: 100px;
    background-color: #f66;
    div {
      width: 50px;
      height: 50px;
      background-color: #66f;
    }
  }
</style>
```

:::

<div class="center-layout">
  <div></div>
</div>

<style lang="scss">
  .center-layout {
    width: 100px;
    height: 100px;
    background-color: #f66;
    div {
      width: 50px;
      height: 50px;
      background-color: #66f;
    }
  }
</style>

::: details display:table-cell

```html
<div class="center-layout table-cell">
  <div></div>
</div>

<style lang="scss">
  .table-cell {
    line-height: 100px;
    text-align: center;
    font-size: 0;
    div {
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>
```

:::

<div class="center-layout table-cell">
  <div></div>
</div>

<style lang="scss">
  .table-cell {
    line-height: 100px;
    text-align: center;
    font-size: 0;
    div {
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>

## 文本环绕

::: details 浮动

```html
<div class="text-wrapping">
	<img src="/public/css/thor.jpg">
	很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字
</div>

<style lang="scss">
.text-wrapping {
	overflow: hidden;
	width: 400px;
	height: 300px;
	font-size: 20px;
	color: #f66;
	word-break: break-all;
	img {
		float: left;
		margin: 10px;
	  width: 100px;
	}
}
```

:::

<div class="text-wrapping">
	<img src="/public/css/thor.jpg">
	很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字
</div>

<style lang="scss">
.text-wrapping {
	overflow: hidden;
	width: 400px;
	height: 200px;
	font-size: 20px;
	color: #f66;
	word-break: break-all;
	img {
		float: left;
		margin: 10px;
	  width: 100px;
	}
}
</style>

## 文字溢出

::: details 单行文字溢出：overflow + text-overflow

```html
<style lang="scss">
  .ellipsis-text {
    &.sl-ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
```

:::

::: details 多行文字溢出：flex + overflow + text-overflow

```html
<style lang="scss">
  .ellipsis-text {
    &.ml-ellipsis {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }
</style>
```

:::

::: details 使用伪元素::after 模拟多行文字溢出

```html
<style lang="scss">
  .ellipsis-text {
    &.mls-ellipsis {
      overflow: hidden;
      position: relative;
      max-height: 90px;
      &::after {
        position: absolute;
        right: 0;
        bottom: 0;
        padding-left: 40px;
        background: linear-gradient(to right, transparent, #fff 50%);
        content: '...';
      }
    }
  }
</style>
```

:::

<div class="bruce flex-ct-y" data-title="使用text-overflow控制溢出文本">
	<p class="ellipsis-text s-line sl-ellipsis">CSS非常有趣与搞怪，可做一些JS也能做的事情</p>
	<p class="ellipsis-text m-line ml-ellipsis">
		层叠样式表(CSS)是一种用于表现HTML(标准通用标记语言的一个应用)或XML(标准通用标记语言的一个子集)等文件样式的计算机语言。CSS不仅可静态地修饰网页，还可配合各种脚本语言动态地对网页各元素进行格式化。</p>
	<p class="ellipsis-text m-line mls-ellipsis">
		层叠样式表(CSS)是一种用于表现HTML(标准通用标记语言的一个应用)或XML(标准通用标记语言的一个子集)等文件样式的计算机语言。CSS不仅可静态地修饰网页，还可配合各种脚本语言动态地对网页各元素进行格式化。</p>
</div>

<style lang="scss">
.ellipsis-text {
	line-height: 30px;
	font-size: 20px;
	&.s-line {
		width: 200px;
	}
	&.m-line {
		margin-top: 10px;
		width: 400px;
		text-align: justify;
	}
	&.sl-ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	&.ml-ellipsis {
		display: -webkit-box; /* stylelint-disable-line */
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}
	&.mls-ellipsis {
		overflow: hidden;
		position: relative;
		max-height: 87px;
		&::after {
			position: absolute;
			right: 0;
			bottom: 0;
			padding-left: 40px;
			background: linear-gradient(to right, transparent, #fff 50%);
			content: "...";
		}
	}
}
</style>
