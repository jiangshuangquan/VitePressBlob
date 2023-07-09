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

可参照 CSSgram 的[官网](http://una.github.io/CSSgram/)与源码学习滤镜调制

## 悼念模式

::: tip
一行代码全站进入悼念模式，把`<html>`替换成`<html style="filter:grayscale(1)">`，简单粗暴。当然核心代码是 `filter:grayscale(1)`，意思是把当前节点及其后代节点声明为 100%的灰度模式。

`<body>`或某个主要节点中声明 filter, 可能导致某些布局排版错乱,若自身及其后代节点声明了 position:absolute/fixed，则为其创建一个新容器，使得这些定位节点其定位基准相对新容器进行。

把 filter:grayscale(1)声明到`<html>`中,因为不管如何设置定位基准，`<html>`都是最顶层的容器
:::
