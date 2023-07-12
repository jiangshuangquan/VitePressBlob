# 常用函数

## rgb()

## rgba()

## attr()

```html
<h1 class="Hello" data-name=" JowayYoung"></h1>

<style lang="scss">
  h1 {
    &::before {
      content: attr(class);
    }
    &::after {
      content: attr(data-name);
    }
  }
</style>
```

<h1 class="Hello" data-name=" JowayYoung"></h1>

<style lang="scss">
h1 {
	&::before {
		content: attr(class);
	}
	&::after {
		content: attr(data-name);
	}
}
</style>

::: details

```html
<div
  class="hover-tipss btn-1"
  href="https://www.baidu.com"
  data-msg="Hello World"
>
  提示框
</div>
<div class="hover-tipss btn-2" href="https://www.baidu.com"></div>

<style lang="scss">
  .hover-tipss {
    position: relative;
    padding: 0 20px;
    border-radius: 10px;
    height: 40px;
    width: 200px;
    background-color: #66f;
    line-height: 40px;
    color: #fff;
    & + .hover-tipss {
      margin-top: 10px;
    }
    &.btn-1 {
      width: 100px;
      &::after {
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        background-color: rgba(#000, 0.5);
        opacity: 0;
        text-align: center;
        font-size: 12px;
        content: attr(data-msg);
        transition: all 300ms;
      }
      &:hover::after {
        left: calc(100% + 20px);
        opacity: 1;
      }
    }
    &.btn-2:empty::after {
      content: attr(href);
    }
  }
</style>
```

:::

<div class="hover-tipss btn-1" href="https://www.baidu.com" data-msg="Hello World">提示框</div>
<div class="hover-tipss btn-2" href="https://www.baidu.com"></div>

<style lang="scss">
.hover-tipss {
	position: relative;
	padding: 0 20px;
	border-radius: 10px;
	height: 40px;
  width: 200px;
	background-color: #66f;
	line-height: 40px;
	color: #fff;
	& + .hover-tipss {
		margin-top: 10px;
	}
	&.btn-1 {
    width: 100px;
		&::after {
			position: absolute;
			left: 0;
			top: 0;
			border-radius: 5px;
			width: 100%;
			height: 100%;
			background-color: rgba(#000, .5);
			opacity: 0;
			text-align: center;
			font-size: 12px;
			content: attr(data-msg);
			transition: all 300ms;
		}
		&:hover::after {
			left: calc(100% + 20px);
			opacity: 1;
		}
	}
	&.btn-2:empty::after {
		content: attr(href);
	}
}

</style>

## calc()

`calc(exp)`用于动态计算单位，`数值`、`长度`、`角度`、`时间`和`百分比`都能作为参数。因为执行数学表达式返回运算后的计算值，可减少大量人工计算甚至无需人工计算，是最有用的函数之一。

- `数值：` 整数、浮点数
- `长度：` px、em、rem、vw、vh 等
- `角度: ` deg、turn
- `时间：` s、ms
- `百分比：` %

::: tip

单页面应用中有遇到因为有滚动条或无滚动条而导致网页路由在跳转时发生向左或向右的抖动吗？这让强迫症患者很不舒服，此时可用 calc()巧妙解决该问题

```css
.elem {
  padding-right: calc(100vw - 100%);
}
```

:::

### 与 clamp()/max()/min() 结合使用

```css
.elem {
  width: calc(min(1200px, 100%) / 5);
}
```

## clamp

`clamp(min, val, max)`用于返回区间范围值。`val`在`min~max`则返回`val`，`val`小于`min`则返回`min`，`val`大于`max`则返回`max`

```css
.elem {
  width: clamp(100px, 25vw, 300px);
}
```

## 图形函数

`clip-path` 用于创建一个只有节点的部分区域可显示的剪切区域。裁剪完毕，内部区域显示，外部区域隐藏。一般应用在 SVG 中，但也可当作裁剪效果用于节点中。当节点使用 `clip-path` 声明裁剪路径时，可用这五个图形函数裁剪区域，除了 path()其他四个函数的兼容性还不错。

::: details 以下使用`circle()`、`ellipse()`和`polygon()`绘制一些常见图形。

```html
<ul class="figure-box" style="--count: 12;">
  <li class="star" style="--index: 0;"></li>
  <li class="ellipse" style="--index: 1;"></li>
  <li class="circle" style="--index: 2;"></li>
  <li class="triangle" style="--index: 3;"></li>
  <li class="rhombus" style="--index: 4;"></li>
  <li class="trapezoid" style="--index: 5;"></li>
  <li class="parallelogram" style="--index: 6;"></li>
  <li class="pentagon" style="--index: 7;"></li>
  <li class="left-arrow" style="--index: 8;"></li>
  <li class="right-arrow" style="--index: 9;"></li>
  <li class="close" style="--index: 10;"></li>
  <li class="message" style="--index: 11;"></li>
</ul>

<style lang="scss">
  .figure-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 720px;
    li {
      --angle: calc(var(--index) / var(--count) * 1turn);
      margin: 10px;
      width: 100px;
      height: 100px;
      background-color: #3c9;
      filter: hue-rotate(var(--angle));
      &.star {
        clip-path: polygon(
          50% 0%,
          61% 35%,
          98% 35%,
          68% 57%,
          79% 91%,
          50% 70%,
          21% 91%,
          32% 57%,
          2% 35%,
          39% 35%
        );
      }
      &.ellipse {
        clip-path: ellipse(40% 50% at 50% 50%);
      }
      &.circle {
        clip-path: circle(50% at 50% 50%);
      }
      &.triangle {
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      }
      &.rhombus {
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      }
      &.trapezoid {
        clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
      }
      &.parallelogram {
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
      }
      &.pentagon {
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
      }
      &.left-arrow {
        clip-path: polygon(
          40% 0%,
          40% 20%,
          100% 20%,
          100% 80%,
          40% 80%,
          40% 100%,
          0% 50%
        );
      }
      &.right-arrow {
        clip-path: polygon(
          0% 20%,
          60% 20%,
          60% 0%,
          100% 50%,
          60% 100%,
          60% 80%,
          0% 80%
        );
      }
      &.close {
        clip-path: polygon(
          20% 0%,
          0% 20%,
          30% 50%,
          0% 80%,
          20% 100%,
          50% 70%,
          80% 100%,
          100% 80%,
          70% 50%,
          100% 20%,
          80% 0%,
          50% 30%
        );
      }
      &.message {
        clip-path: polygon(
          0% 0%,
          100% 0%,
          100% 75%,
          75% 75%,
          75% 100%,
          50% 75%,
          0% 75%
        );
      }
    }
  }
</style>
```

:::

<ul class="figure-box" style="--count: 12;">
	<li class="star" style="--index: 0;"></li>
	<li class="ellipse" style="--index: 1;"></li>
	<li class="circle" style="--index: 2;"></li>
	<li class="triangle" style="--index: 3;"></li>
	<li class="rhombus" style="--index: 4;"></li>
	<li class="trapezoid" style="--index: 5;"></li>
	<li class="parallelogram" style="--index: 6;"></li>
	<li class="pentagon" style="--index: 7;"></li>
	<li class="left-arrow" style="--index: 8;"></li>
	<li class="right-arrow" style="--index: 9;"></li>
	<li class="close" style="--index: 10;"></li>
	<li class="message" style="--index: 11;"></li>
</ul>

<style lang="scss">
  .figure-box {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 720px;
	li {
		--angle: calc(var(--index) / var(--count) * 1turn);
		margin: 10px;
		width: 100px;
		height: 100px;
		background-color: #3c9;
		filter: hue-rotate(var(--angle));
		&.star {
			clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
		}
		&.ellipse {
			clip-path: ellipse(40% 50% at 50% 50%);
		}
		&.circle {
			clip-path: circle(50% at 50% 50%);
		}
		&.triangle {
			clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
		}
		&.rhombus {
			clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
		}
		&.trapezoid {
			clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
		}
		&.parallelogram {
			clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
		}
		&.pentagon {
			clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
		}
		&.left-arrow {
			clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
		}
		&.right-arrow {
			clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
		}
		&.close {
			clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
		}
		&.message {
			clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
		}
	}
}

</style>

推荐一个裁剪路径的网站[Clippy](https://bennettfeely.com/clippy/)

## var()

::: details 由自定义属性`--var`与函数`var()`组成，`var()`用于引用自定义属性

```css
/* 不使用变量 */
.title {
  background-color: red;
}
.desc {
  background-color: red;
}

/* 使用变量 */
:root {
  --bg-color: red;
}
.title {
  background-color: var(--bg-color);
}
.desc {
  background-color: var(--bg-color);
}
```

:::

- **var(--变量名, 默认值)**
- **只能用作`属性值`不能用作`属性名`**
- **与字符串拼接，"Hello, "var(--name)**
- **使用 calc()与数值单位连用，var(--width) \* 10px**
