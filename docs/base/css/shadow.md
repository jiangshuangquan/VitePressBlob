# 阴影

## 属性

- **box-shadow**:盒子轮廓产生阴影效果
- **text-shadow**:文本轮廓产生阴影效果
- **fliter:drop-shadow()**:透明图像的非透明部分轮廓产生阴影效果

  - `OffsetX`: 水平偏移，阴影的水平位置(必选)
    - Offset：偏移，可用任何长度单位，允许负值，正值向右负值向左(默认 0)
  - `OffsetY`: 垂直偏移，阴影的垂直位置(必选)
    - Offset：偏移，可用任何长度单位，允许负值，正值向下负值向上(默认 0)
  - `Blur`: 模糊半径，阴影的清晰程度(虚色)
    - Length：长度，可用任何长度单位，值越大边缘越模糊(默认 0)
  - `Spread`:扩展距离，阴影的实体尺寸(实色)
    - Length：长度，可用任何长度单位，允许负值，正值扩大负值缩小(默认 0)
  - `Color`: 投影颜色
    - transparent：透明(默认)
    - Keyword：颜色关键字
    - HEX：十六进制色彩模式
    - RGB 或 RGBA：RGB/A 色彩模式
    - HSL 或 HSLA：HSL/A 色彩模式
  - `Position`:投影位置
    - outset：阴影显示在外部(默认)
    - inset：阴影显示在内部

::: tip
上述参数都是 box-shadow 标配的，而 text-shadow 与 drop-shadow()除了 spread 与 position，其余全部标配。三个阴影的用法都一样，无特殊区别，以下着重讲述 box-shadow 的技巧，另外两个属性也可参照该属性适当扩展场景。

```css
box-shadow: offset-x offset-y blur spread color position
text-shadow: offset-x offset-y blur color
filter: drop-shadow(offset-x, offset-y, blur, color)
```

:::

## 多重阴影

与 backgound/mask 一样可声明多重效果，使用逗号隔开。先声明的阴影层叠等级最高，会遮挡后面声明的阴影，排列方向由 position 决定。后面声明的阴影接着上一个排列下去，此时需将 blur 或 spread 增大，防止被先声明的阴影遮挡。

## 模拟边框

若希望边框只是一件附属物，不纳入盒模型的计算与布局中，可用 outline 代替 border，而 outline 的用法与参数与 border 一样，效果中无太大区别

box-shadow 也能代替 border 产生边框效果，当然也不纳入盒模型的计算与布局中。

- 阴影不影响布局，可能会覆盖其他节点及其阴影
- 阴影不触发滚动条，也不会增加滚动区域大小

blur 渲染阴影是虚色，而 spread 渲染阴影是实色，所以可将其余参数声明为 0，spread 声明为正值，形式为 box-shadow:0 0 0 10px #f66。还可结合 border-radius 让阴影变成圆角。

<div class="shadow">
  <div></div>
  <div class="borders">
  </div>
</div>

<style lang="scss">
  .shadow {
    display: flex;
    > div {
      margin-left: 30px;
      width: 200px;
      height: 200px;
      box-shadow: 0 0 0 10px #f66;
      &.borders {
        margin-left: 100px;
        box-shadow: 0 0 0 10px #f66, 0 0 0 20px #66f;
      }
    }
}
</style>

::: details

<div class="shadow">
  <div></div>
  <div class="borders">
  </div>
</div>

<style lang="scss">
  .shadow {
    display: flex;
    > div {
      margin-left: 30px;
      width: 200px;
      height: 200px;
      box-shadow: 0 0 0 10px #f66;
      &.borders {
        margin-left: 100px;
        box-shadow: 0 0 0 10px #f66, 0 0 0 20px #66f;
      }
    }
}
</style>

```html

```

:::

## 定向阴影

<ul class="aside-shadow ">
	<li class="left"></li>
	<li class="up"></li>
	<li class="left"></li>
	<li class="down"></li>
	<li class="left-up"></li>
	<li class="left-down"></li>
	<li class="right-up"></li>
	<li class="right-down"></li>
</ul>

<style lang="scss">
  .aside-shadow {
	display: flex;
	flex-wrap: wrap;
	padding: 20px;
	width: 500px;
  list-style: none !important;
  padding: 0;
  margin: 0;
	li {
    margin-top: 0 !important;
		border: 1px solid #f66;
		width: 100px;
		height: 100px;
		&:not(:nth-child(4n-3)) {
			margin-left: 20px;
		}
		&:nth-child(n+5) {
			margin-top: 20px !important;
		}
		&.left {
			box-shadow: -10px 0 5px -5px #f66;
		}
		&.right {
			box-shadow: 10px 0 5px -5px #f66;
		}
		&.up {
			box-shadow: 0 -10px 5px -5px #f66;
		}
		&.down {
			box-shadow: 0 10px 5px -5px #f66;
		}
		&.left-up {
			box-shadow: -10px 0 5px -5px #f66, 0 -10px 5px -5px #f66;
		}
		&.left-down {
			box-shadow: -10px 0 5px -5px #f66, 0 10px 5px -5px #f66;
		}
		&.right-up {
			box-shadow: 10px 0 5px -5px #f66, 0 -10px 5px -5px #f66;
		}
		&.right-down {
			box-shadow: 10px 0 5px -5px #f66, 0 10px 5px -5px #f66;
		}
	}
}
</style>

::: details

```html
<ul class="aside-shadow ">
  <li class="left"></li>
  <li class="up"></li>
  <li class="left"></li>
  <li class="down"></li>
  <li class="left-up"></li>
  <li class="left-down"></li>
  <li class="right-up"></li>
  <li class="right-down"></li>
</ul>

<style lang="scss">
  .aside-shadow {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    width: 500px;
    list-style: none !important;
    padding: 0;
    margin: 0;
    li {
      margin-top: 0 !important;
      border: 1px solid #f66;
      width: 100px;
      height: 100px;
      &:not(:nth-child(4n-3)) {
        margin-left: 20px;
      }
      &:nth-child(n + 5) {
        margin-top: 20px !important;
      }
      &.left {
        box-shadow: -10px 0 5px -5px #f66;
      }
      &.right {
        box-shadow: 10px 0 5px -5px #f66;
      }
      &.up {
        box-shadow: 0 -10px 5px -5px #f66;
      }
      &.down {
        box-shadow: 0 10px 5px -5px #f66;
      }
      &.left-up {
        box-shadow: -10px 0 5px -5px #f66, 0 -10px 5px -5px #f66;
      }
      &.left-down {
        box-shadow: -10px 0 5px -5px #f66, 0 10px 5px -5px #f66;
      }
      &.right-up {
        box-shadow: 10px 0 5px -5px #f66, 0 -10px 5px -5px #f66;
      }
      &.right-down {
        box-shadow: 10px 0 5px -5px #f66, 0 10px 5px -5px #f66;
      }
    }
  }
</style>
```

:::

## 彩虹色带

<div class="rainbow-bar bar-1"></div>
<div class="rainbow-bar bar-2"></div>

<style lang="scss">
  $rainbow: 0 0 0 8px #f66 inset,
	0 0 0 16px #f90 inset,
	0 0 0 24px #ff3 inset,
	0 0 0 32px #3c9 inset,
	0 0 0 40px #9c3 inset,
	0 0 0 48px #09f inset,
	0 0 0 56px #66f inset;
.rainbow-bar {
	width: 250px;
	&.bar-1 {
		overflow: hidden;
		position: relative;
		height: 125px;
		&::after {
			display: block;
			border-radius: 100%;
			width: 100%;
			height: 200%;
			box-shadow: $rainbow;
			content: "";
		}
	}
	&.bar-2 {
		margin: 25px 0 0 0px;
		border-radius: 100%;
		height: 250px;
		box-shadow: $rainbow;
		clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
	}
}

</style>

::: details

```html
<div class="rainbow-bar bar-1"></div>
<div class="rainbow-bar bar-2"></div>

<style lang="scss">
  $rainbow: 0 0 0 8px #f66 inset, 0 0 0 16px #f90 inset,
    0 0 0 24px #ff3 inset, 0 0 0 32px #3c9 inset, 0 0 0 40px #9c3 inset, 0
      0 0 48px #09f inset, 0 0 0 56px #66f inset;
  .rainbow-bar {
    width: 250px;
    &.bar-1 {
      overflow: hidden;
      position: relative;
      height: 125px;
      &::after {
        display: block;
        border-radius: 100%;
        width: 100%;
        height: 200%;
        box-shadow: $rainbow;
        content: '';
      }
    }
    &.bar-2 {
      margin: 25px 0 0 0px;
      border-radius: 100%;
      height: 250px;
      box-shadow: $rainbow;
      clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    }
  }
</style>
```

:::

## 专栏头像

::: details 让视觉元素看上去更具立体感

```html
<div class="article-avatar">
  <p class="left">Jiangsq</p>
  <p class="right">学前端</p>
</div>

<style lang="scss">
  .article-avatar {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 250px;
    height: 250px;
    background-color: #f66;
    box-shadow: 0 0 50px 5px rgba(#000, 0.2) inset;
    line-height: 50px;
    text-shadow: 5px 5px 10px rgba(#000, 0.5);
    font-weight: bold;
    font-size: 30px;
    color: #fff;
    .left {
      border-top: 3px solid #fff;
      text-indent: -1em;
    }
    .right {
      text-indent: 2em;
      font-size: 40px;
    }
  }
</style>
```

:::

<div class="article-avatar">
	<p class="left">Jiangsq</p>
	<p class="right">学前端</p>
</div>

<style lang="scss">
  .article-avatar {
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	width: 250px;
	height: 250px;
	background-color: #f66;
	box-shadow: 0 0 50px 5px rgba(#000, .2) inset;
	line-height: 50px;
	text-shadow: 5px 5px 10px rgba(#000, .5);
	font-weight: bold;
	font-size: 30px;
	color: #fff;
	.left {
		border-top: 3px solid #fff;
		text-indent: -1em;
	}
	.right {
		text-indent: 2em;
		font-size: 40px;
	}
}

</style>

## 聚焦区域

::: details 将 spread 延长到 9999px 足以覆盖整个网站

```html
<div class="img-cliper">
  <img src="/css/mountain.jpg" />
  <i></i>
</div>

<style lang="scss">
  .img-cliper {
    overflow: hidden;
    position: relative;
    img {
      width: 400px;
    }
    i {
      position: absolute;
      left: 50px;
      top: 30px;
      border-radius: 100%;
      width: 100px;
      height: 50px;
      box-shadow: 0 0 0 9999px rgba(#000, 0.5);
    }
  }
</style>
```

:::

<div class="img-cliper">
	<img src="/css/mountain.jpg">
	<i></i>
</div>

<style lang="scss">
  .img-cliper {
	overflow: hidden;
	position: relative;
	img {
		width: 400px;
	}
	i {
		position: absolute;
		left: 50px;
		top: 30px;
		border-radius: 100%;
		width: 100px;
		height: 50px;
		box-shadow: 0 0 0 9999px rgba(#000, .5);
	}
}
</style>

## 滤镜 filter

- **blur()**: 模糊
  - `Length`: 长度，可用任何长度单位，值为 0 显示原图，值越大越模糊
- **brightness()**: 亮度
  - `Percentage`: 百分比，可用 0~1 代替，值为 0 显示全黑，值为 100%显示原图
- **contrast**: 对比度
  - `Percentage`: 百分比，可用 0~1 代替，值为 0 显示全黑，值为 100%显示原图
- **drop-shadow**: 阴影
  - 参考上述阴影
- **grayscale()**: 灰度
  - `Percentage`: 百分比，可用 0~1 代替，值为 0 显示原图，值为 100%显示全灰
- **hue-rotate()**: 色相旋转
  - `Angle`: 角度，值为 0 显示原图，值为 0~360deg 减弱原图色彩，值超过 360deg 则相当绕 N 圈再计算剩余的值
- **invert()**: 反相
  - `Percentage`: 百分比，可用 0~1 代替，值为 0 显示原图，值为 100%完全反转原图色彩
- **opacity()**: 透明度
  - `Percentage`: 百分比，可用 0~1 代替，值为 0 显示透明，值为 100%显示原图
- **saturate()**: 饱和度
  - `Percentage`: 百分比，可用 0~1 代替，值为 0 完全不饱和原图，值为 100%显示原图
- **sepia()**: 褐色
  - `Percentage`: 百分比，可用 0~1 代替，值为 0 显示原图，值为 100%显示褐

可参照 CSSgram 的[官网](http://una.github.io/CSSgram/)与源码学习滤镜调制

## 悼念模式

::: tip
一行代码全站进入悼念模式，把`<html>`替换成`<html style="filter:grayscale(1)">`，简单粗暴。当然核心代码是 `filter:grayscale(1)`，意思是把当前节点及其后代节点声明为 100%的灰度模式。

`<body>`或某个主要节点中声明 filter, 可能导致某些布局排版错乱,若自身及其后代节点声明了 position:absolute/fixed，则为其创建一个新容器，使得这些定位节点其定位基准相对新容器进行。

把 filter:grayscale(1)声明到`<html>`中,因为不管如何设置定位基准，`<html>`都是最顶层的容器
:::
