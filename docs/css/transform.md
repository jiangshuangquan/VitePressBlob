# 动画

CSS3 增加了 transform、transition 和 animation 三大交互属性

## 变换

声明 transform-style 可实现 2D 变换与 3D 变换间的切换，transform-style 在父节点中声明，即发生变换的节点的父节点。

- **flat**： 所有变换效果在平面中呈现(默认)
- **preserve-3d**： 所有变换效果在空间中呈现

## transform

包括六大函数，每个函数包括以下参数。

- **translate()**： 位移

  - 默认：XYZ 轴不声明默认是 0
  - 单位：Length 长度，可用任何长度单位，允许负值
  - 正值：沿 X 轴向右位移/沿 Y 轴向上位移/沿 Z 轴向外位移
  - 负值：沿 X 轴向左位移/沿 Y 轴向下位移/沿 Z 轴向内位移
  - 函数：
    - `translate(x,y)`：2D 位移
    - `translate3d(x,y,z)`：3D 位移
    - `translateX(x)`：X 轴位移，等同于 translate(x,0)或 translate3d(x,0,0)
    - `translateY(y)`：Y 轴位移，等同于 translate(0,y)或 translate3d(0,y,0)
    - `translateZ(z)`：Z 轴位移，等同于 translate3d(0,0,z)

- **scale()**： 缩放

  - 默认：XYZ 轴不声明默认是 1 或 100%
  - 单位：Number 数值或 Percentage 百分比，允许负值
  - 正值：0<(x,y,z)<1 沿 X 轴缩小/沿 Y 轴缩小/沿 Z 轴变厚，(x,y,z)>1 沿 X 轴放大/沿 Y 轴放大/沿 Z 轴变薄
  - 负值：-1<(x,y,z)<0 翻转沿 X 轴缩小/沿 Y 轴缩小/沿 Z 轴变厚，(x,y,z)<-1 翻转沿 X 轴放大/沿 Y 轴放大/沿 Z 轴变薄
  - 函数：
    - `scale(x,y)`：2D 缩放
    - `scale3d(x,y,z)`：3D 缩放
    - `scaleX(x)`：X 轴缩放，等同于 scale(x,1)或 scale3d(x,1,1)
    - `scaleY(y)`：Y 轴缩放，等同于 scale(1,y)或 scale3d(1,y,1)
    - `scaleZ(z)`：Z 轴缩放，等同于 scale3d(1,1,z)

- **skew()**： 扭曲

  - 默认：XY 轴不声明默认是 0
  - 单位：Angle 角度或 Turn 周
  - 正值：沿 X 轴向左扭曲/沿 Y 轴向下扭曲
  - 负值：沿 X 轴向右扭曲/沿 Y 轴向上扭曲
  - 函数：
    - `skew(x,y)`：2D 扭曲
    - `skewX(x)`：X 轴扭曲，等同于 skew(x,0)
    - `skewY(y)`：Y 轴扭曲，等同于 skew(0,y)

- **rotate()**： 所有变换效果在空间中呈现

  - 默认：XYZ 轴不声明默认是 0
  - 单位：Angle 角度或 Turn 周
  - 正值：2D 旋转时顺时针旋转
  - 负值：2D 旋转时逆时针旋转
  - 函数：
    - `rotate()`：2D 旋转
    - `rotate3d(x,y,z,a)`：3D 旋转，[x,y,z]是一个向量，数值都是 0~1
    - `rotateX(a)`：X 轴旋转，等同于 rotate(1,0,0,a)，正值时沿 X 轴向上逆时针旋转，负值时沿 X 轴向下顺时针旋转
    - `rotateX(a)`：
    - `rotateX(a)`：

- **matrix()**： 矩阵(太过复杂，可放弃)
- **matrix(a,b,c,d,e,f)**： 2D 矩阵(位移、缩放、扭曲和旋转的综合函数)
- **matrix(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)**： 3D 矩阵(位移、缩放、扭曲和旋转的综合函数)
- **perspective()**： 视距

  - 默认：0
  - 单位：Length 长度，可用任何长度单位

## 视距效果

可使用 transform:perspective()代替 perspective，在开启 3D 变换后最好声明视距，否则有些 3D 变换效果可能无法得到更好的展现。

- 值越小，用户与空间 Z 轴距离越近，视觉效果越强
- 值越大，用户与空间 Z 轴距离越远，视觉效果越弱

> perspective/perspective()区别

- `perspective`与`transform:perspective()`的作用相同
- `perspective`在舞台节点(变换节点的父节点)中使用，`transform:perspective()`在当前变换节点中使用，也可与其他变换函数一起使用

## GPU 硬件加速模式

为节点声明 transform:translate3d()或 transform:translateZ()，它们都能开启 GPU 硬件加速模式，以让浏览器在渲染动画时从 CPU 转向 GPU，实现硬件加速

::: warning 在使用该方案时可能会出现诡异的缺陷。当多个绝对定位的节点声明 transform:translate3d()开启 GPU 硬件加速模式后会有几个节点凭空消失，是不是很诡异。这种现象不能完全解决，只能尽量避免。

- 尽量不要对节点及其父节点声明 position:absolute/fixed，当然这很难避免
- 减少声明 transform:translate3d()的节点数量，减少至六个以下
- 使用 will-change 代替 transform:translate3d()

:::

## 像素边框

<div class="onepx-border normal">1px</div>
<div class="onepx-border thin">0.5px</div>

<style lang="scss" scoped>
.onepx-border {
	width: 200px;
	height: 80px;
	cursor: pointer;
	line-height: 80px;
	text-align: center;
	font-weight: bold;
	font-size: 50px;
	color: #f66;
	& + .onepx-border {
		margin-top: 10px;
	}
	&.normal {
		border: 1px solid #f66;
	}
	&.thin {
		position: relative;
		&::after {
			position: absolute;
			left: 0;
			top: 0;
			border: 1px solid #f66;
			width: 200%;
			height: 200%;
			content: "";
			transform: scale(.5);
			transform-origin: left top;
		}
	}
}

</style>

::: tip 使用一个伪元素的边框去当作节点边框，声明 border 为 1px 并将其宽高声明成 200%，最终效果是该节点的 2 倍大小，再通过声明 transform:scale(.5)将该伪元素缩小到原来的 0.5 倍，现在与节点尺寸一样了，而 border 也通过浏览器自动计算成 0.5px 了，最终实现 0.5px 边框

::: details

```html
<div class="onepx-border normal">1px</div>
<div class="onepx-border thin">0.5px</div>

<style lang="scss" scoped>
  .onepx-border {
    width: 200px;
    height: 80px;
    cursor: pointer;
    line-height: 80px;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    color: #f66;
    & + .onepx-border {
      margin-top: 10px;
    }
    &.normal {
      border: 1px solid #f66;
    }
    &.thin {
      position: relative;
      &::after {
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid #f66;
        width: 200%;
        height: 200%;
        content: '';
        transform: scale(0.5);
        transform-origin: left top;
      }
    }
  }
</style>
```

:::

## 内容翻转

<ul class="flip-content">
	<li>正常文本</li>
	<li class="x-axis">水平翻转</li>
	<li class="y-axis">垂直翻转</li>
	<li class="reverse">倒序翻转</li>
</ul>

<style lang="scss" scoped>
.flip-content {
	li {
		position: relative;
		width: 121px;
		height: 51px;
		line-height: 51px;
		text-align: center;
		font-weight: bold;
		font-size: 30px;
		color: #f66;
		&::before,
		&::after {
			position: absolute;
			background-color: #66f;
			content: "";
		}
		& + li {
			margin-top: 10px;
		}
		&.x-axis {
			transform: scale(1, -1);
			&::after {
				left: 0;
				top: 25px;
				width: 100%;
				height: 1px;
			}
		}
		&.y-axis {
			transform: scale(-1, 1);
			&::after {
				left: 60px;
				top: 0;
				width: 1px;
				height: 100%;
			}
		}
		&.reverse {
			transform: scale(-1, -1);
			&::before {
				left: 0;
				top: 25px;
				width: 100%;
				height: 1px;
			}
			&::after {
				left: 60px;
				top: 0;
				width: 1px;
				height: 100%;
			}
		}
	}
}

</style>

::: details

```html
<ul class="flip-content">
  <li>正常文本</li>
  <li class="x-axis">水平翻转</li>
  <li class="y-axis">垂直翻转</li>
  <li class="reverse">倒序翻转</li>
</ul>

<style lang="scss" scoped>
  .flip-content {
    li {
      position: relative;
      width: 121px;
      height: 51px;
      line-height: 51px;
      text-align: center;
      font-weight: bold;
      font-size: 30px;
      color: #f66;
      &::before,
      &::after {
        position: absolute;
        background-color: #66f;
        content: '';
      }
      & + li {
        margin-top: 10px;
      }
      &.x-axis {
        transform: scale(1, -1);
        &::after {
          left: 0;
          top: 25px;
          width: 100%;
          height: 1px;
        }
      }
      &.y-axis {
        transform: scale(-1, 1);
        &::after {
          left: 60px;
          top: 0;
          width: 1px;
          height: 100%;
        }
      }
      &.reverse {
        transform: scale(-1, -1);
        &::before {
          left: 0;
          top: 25px;
          width: 100%;
          height: 1px;
        }
        &::after {
          left: 60px;
          top: 0;
          width: 1px;
          height: 100%;
        }
      }
    }
  }
</style>
```

:::

## 过渡 transition

有时在不同状态间切换属性会显得很生硬，此时 transition 就派上用场了，它能让状态间的切换变得更丝滑

- **transition-property**：属性

  - `all`: 全部属性过渡(默认)
  - `none`: 无属性过渡
  - `String`: 某个属性过渡

- **transition-duration**：持续时间
  - `Time`: 秒或毫秒(默认 0)
- **transition-timing-function**：缓动函数

  - `ease`: 逐渐变慢，等同于 cubic-bezier(.25,.1,.25,1)(默认)
  - `linear`: 匀速，等同于 cubic-bezier(0,0,1,1)
  - `ease-in`: 加速，等同于 cubic-bezier(.42,0,1,1)
  - `ease-out`: 减速，等同于 cubic-bezier(0,0,.58,1)
  - `ease-in-out`: 先加速后减速，等同于 cubic-bezier(.42,0,.58,1)
  - `cubic-bezier`: 贝塞尔曲线，(x1,y1,x2,y2)四个值指定曲线中的点 P1 与 P2，所有值需在[0,1]区域内

- **transition-delay**：等待时间
  - `Time`: 秒或毫秒(默认 0)

::: warning `transition`延缓某些属性的变更过程，若通过鼠标事件给某个节点属性赋值，会导致属性在变更时发生卡顿。

:::

::: tip 因为`duration`与`delay`的取值都是时间，所以可能会发生混淆。

- `duration`与`delay`作用于所有节点，包括自身的`::before`与`::after`
- `transition`中出现两个时间值时，第一个解析为`duration`，第二个解析为`delay`
- `transition`中出现一个时间值时，解析为`duration`

:::

设置缓动函数形状的网站[CubicBezier](https://cubic-bezier.com/#.17,.67,.83,.67)

## 动画

`transform` 能让节点拥有更多形态，而 `animation` 能让节点拥有更多状态

`animation`可声明的两种动画，每种动画各有自身特性。

- **关键帧动画**：在时间轴的关键帧中绘制关键状态并使之有效过渡组成动画
- **逐帧动画**：在时间轴的每帧中绘制不同内容并使之连续播放组成动画

::: tip `关键帧动画`可看作是一个连续的动画片段，`逐帧动画`可看作是一个断续的动画片段，两种动画都是通过时间流逝将多个动画片段串联在一起。浏览器可将关键帧动画的关键帧自动过渡为片段，而将逐帧动画的每帧根据顺序播放为片段，可认为逐帧动画是一个`GIF`。

:::

- **animation-name**：名称
  - `none`: 无动画(默认)
  - `String`: 动画名称
- **animation-duration**：持续时间
  - `Time`: 秒或毫秒(默认 0)
- **animation-timing-function**：缓动函数

  - `ease`: 逐渐变慢，等同于 cubic-bezier(.25,.1,.25,1)(默认)
  - `linear`: 匀速，等同于 cubic-bezier(0,0,1,1)
  - `ease-in`: 加速，等同于 cubic-bezier(.42,0,1,1)
  - `ease-out`: 减速，等同于 cubic-bezier(0,0,.58,1)
  - `ease-in-out`: 先加速后减速，等同于 cubic-bezier(.42,0,.58,1)
  - `cubic-bezier`: 贝塞尔曲线，(x1,y1,x2,y2)四个值指定曲线中的点 P1 与 P2，所有值需在[0,1]区域内
  - `steps([,[start|end]]?)`: 把动画平均划分成 n 等分，直到平均走完该动画
  - `step-start`: 等同于`steps(1,start)`，把动画分成一步，动画执行时以左侧端点 0%为开始
  - `step-end`: 等同于 steps(1,end)，把动画分成一步，动画执行时以右侧端点 100%为开始

- **animation-delay**：等待时间

  - `Time`: 秒或毫秒(默认 0)

- **animation-iteration-count**：播放次数

  - `Number`: 数值(默认 1)
  - `infinite`: 无限次

- **animation-direction**：轮流反向播放(播放次数为一次则该属性无效果)

  - `normal`: 正常播放(默认)
  - `alternate`: 轮流反向播放，奇数次数正常播放，偶数次数反向播放

- **animation-play-state**：播放状态

  - `running`: 正在播放(默认)
  - `paused`: 暂停播放

- **animation-fill-mode**：播放前后其效果是否可见

  - `none`: 不改变默认行为(默认)
  - `backwards`: 在等待时间内或在动画开始前应用开始属性(在第一个关键帧中定义)
  - `forwards`: 在动画结束后保持最后一个属性(在最后一个关键帧中定义)
  - `both`: 向前与向后填充模式都被应用

::: tip 关键帧动画必须通过`animation`与`@keyframes`声明，逐帧动画只能通过`animation-timing-function:steps()`声明。
:::

> 关键帧动画声明步骤

- 在@keyframes 中声明动画名称与动画每个关键帧的状态
- 动画名称不能重复否则会被覆盖，关键帧通过百分比分割出每个关键帧并声明相应状态
- 在指定节点中声明 animation 调用动画

> 逐帧动画声明步骤

- 准备一张逐帧长图，该图像包括动画效果的每帧且每帧宽高必须一样
- 在 steps()中声明逐帧长图及其展示方式
- 在指定节点中声明 animation 调用动画

> 关键帧动画的声明通过`@keyframes`完成，形式如下。

```css
@keyframes animation-name {
  from {
  }
  to {
  }
}
/* 或 */
@keyframes animation-name {
  p1 {
  }
  p2 {
  }
  p3 {
  }
}
```

::: tip
关键帧的取值必须是 from、to 或 Percentage。from 可用 0%代替，to 可用 100%代替，若开始或结束的关键帧无相应状态，无需声明 from 或 to。0%的%不能省略，否则关键帧解析会失效。

后面声明的关键帧状态会覆盖前面声明的关键帧状态，动画结束后会回到 animation-fill-mode 声明的状态。

:::

## 自动打字器

<div class="auto-typing">Do You Want To Know More About CSS Development Skill</div>

<style lang="scss" scoped>
@mixin typing($count: 0, $duration: 0, $delay: 0) {
	overflow: hidden;
	border-right: 1px solid transparent;
	width: #{$count + 1}ch;
	font-family: Consolas, Monaco, monospace;
	white-space: nowrap;
	animation: typing #{$duration}s steps($count + 1) #{$delay}s infinite backwards,
		caret 500ms steps(1) #{$delay}s infinite forwards;
}
.auto-typing {
	font-weight: bold;
	font-size: 30px;
	color: #09f;
	@include typing(52, 5);
}
@keyframes caret {
	50% {
		border-right-color: currentcolor;
	}
}
@keyframes typing {
	from {
		width: 0;
	}
}

</style>

::: tip 光标闪烁可用 border-right

::: details

```html
<div class="auto-typing">
  Do You Want To Know More About CSS Development Skill
</div>

<style lang="scss" scoped>
  @mixin typing($count: 0, $duration: 0, $delay: 0) {
    overflow: hidden;
    border-right: 1px solid transparent;
    width: #{$count + 1}ch;
    font-family: Consolas, Monaco, monospace;
    white-space: nowrap;
    animation: typing #{$duration}s steps($count + 1) #{$delay}s infinite backwards,
      caret 500ms steps(1) #{$delay}s infinite forwards;
  }
  .auto-typing {
    font-weight: bold;
    font-size: 30px;
    color: #09f;
    @include typing(52, 5);
  }
  @keyframes caret {
    50% {
      border-right-color: currentcolor;
    }
  }
  @keyframes typing {
    from {
      width: 0;
    }
  }
</style>
```

:::

## 折叠面板

<div class="accordion">
	<input id="collapse1" type="checkbox" hidden>
	<input id="collapse2" type="checkbox" hidden>
	<input id="collapse3" type="checkbox" hidden>
	<article>
		<label for="collapse1">列表1</label>
		<p>内容1<br>内容2<br>内容3<br>内容4</p>
	</article>
	<article>
		<label for="collapse2">列表2</label>
		<p>内容1<br>内容2<br>内容3<br>内容4</p>
	</article>
	<article>
		<label for="collapse3">列表3</label>
		<p>内容1<br>内容2<br>内容3<br>内容4</p>
	</article>
</div>

<style lang="scss" scoped>
.accordion {
	width: 300px;
	article {
		cursor: pointer;
		& + article {
			margin-top: 5px;
		}
	}
	input {
		&:nth-child(1):checked ~ article:nth-of-type(1) p,
		&:nth-child(2):checked ~ article:nth-of-type(2) p,
		&:nth-child(3):checked ~ article:nth-of-type(3) p {
			border-bottom-width: 1px;
			max-height: 600px;
		}
	}
	label {
		display: block;
		padding: 0 20px;
		height: 40px;
		background-color: #f66;
		cursor: pointer;
		line-height: 40px;
		font-size: 16px;
		color: #fff;
	}
	p {
		overflow: hidden;
		padding: 0 20px;
		border: 1px solid #f66;
		border-top: none;
		border-bottom-width: 0;
		max-height: 0;
		line-height: 30px;
		transition: all 500ms;
    margin: 0;
	}
}

</style>

::: details

```html
<div class="accordion">
  <input id="collapse1" type="checkbox" hidden />
  <input id="collapse2" type="checkbox" hidden />
  <input id="collapse3" type="checkbox" hidden />
  <article>
    <label for="collapse1">列表1</label>
    <p>内容1<br />内容2<br />内容3<br />内容4</p>
  </article>
  <article>
    <label for="collapse2">列表2</label>
    <p>内容1<br />内容2<br />内容3<br />内容4</p>
  </article>
  <article>
    <label for="collapse3">列表3</label>
    <p>内容1<br />内容2<br />内容3<br />内容4</p>
  </article>
</div>

<style lang="scss" scoped>
  .accordion {
    width: 300px;
    article {
      cursor: pointer;
      & + article {
        margin-top: 5px;
      }
    }
    input {
      &:nth-child(1):checked ~ article:nth-of-type(1) p,
      &:nth-child(2):checked ~ article:nth-of-type(2) p,
      &:nth-child(3):checked ~ article:nth-of-type(3) p {
        border-bottom-width: 1px;
        max-height: 600px;
      }
    }
    label {
      display: block;
      padding: 0 20px;
      height: 40px;
      background-color: #f66;
      cursor: pointer;
      line-height: 40px;
      font-size: 16px;
      color: #fff;
    }
    p {
      overflow: hidden;
      padding: 0 20px;
      border: 1px solid #f66;
      border-top: none;
      border-bottom-width: 0;
      max-height: 0;
      line-height: 30px;
      transition: all 500ms;
      margin: 0;
    }
  }
</style>
```

:::

## 没有 js 的 from 表单

<script setup>
import Form from '../../src/components/css/form.vue' 
import BruceFlex from '../../src/components/css/bruce-flex.vue' 


</script>

<Form/>

## 放大镜

<BruceFlex/>
