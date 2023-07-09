## 多重背景

多重背景可从上到下从左到右拼接背景图像，也可叠加背景图像。

- **从左到右**

```css
background-image: url($bg-1), url($bg-2);
background-repeat: no-repeat, no-repeat;
background-position: left, right;
background-size: auto 200px, auto 200px;
```

- **从上到下**

```css
background-image: url($bg-4), url($bg-3);
background-repeat: repeat, no-repeat;
background-position: left, center;
background-size: auto 80px, auto 200px;
```

## 镂空文本

<div class="bruce flex-ct-x">
	<div class="hollow-text">Background</div>
</div>

<style lang="scss">
.hollow-text {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
  background: #000 url('/css/mountain.jpg') no-repeat center top/auto
      300px;
	text-shadow: 2px 2px 5px rgba(#000, .5);
	font-weight: bold;
	font-size: 80px;
	color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>

::: details

```html
<div class="bruce flex-ct-x">
  <div class="hollow-text">Background</div>
</div>

<style lang="scss">
  .hollow-text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background: #000 url('/css/mountain.jpg') no-repeat center top/auto
      300px;
    text-shadow: 2px 2px 5px rgba(#000, 0.5);
    font-weight: bold;
    font-size: 80px;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
</style>
```

:::

## 渐变

<div class="gradient-bg">iCSS</div>

<style lang="scss">
  .gradient-bg {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
	background: linear-gradient(135deg, #f66, #f90, #3c9, #09f, #66f) left center/400% 400%;
	font-weight: bold;
	font-size: 100px;
	color: #fff;
	animation: move 10s infinite;
}
@keyframes move {
	0%,
	100% {
		background-position-x: left;
	}
	50% {
		background-position-x: right;
	}
}

</style>

::: details

```html
<div class="gradient-bg">iCSS</div>

<style lang="scss">
  .gradient-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background: linear-gradient(135deg, #f66, #f90, #3c9, #09f, #66f) left center/400%
      400%;
    font-weight: bold;
    font-size: 100px;
    color: #fff;
    animation: move 10s infinite;
  }
  @keyframes move {
    0%,
    100% {
      background-position-x: left;
    }
    50% {
      background-position-x: right;
    }
  }
</style>
```

:::

## 渐变文本

<h1 class="gradient-text">Full Stack Developer</h1>

<style lang="scss">
.gradient-text {
	background-image: linear-gradient(90deg, #f66, #f90);
	-webkit-background-clip: text;
	background-clip: text;
	line-height: 60px;
	font-size: 60px;
	color: transparent;
	animation: hue 5s linear infinite;
}
@keyframes hue {
	from {
		filter: hue-rotate(0);
	}
	to {
		filter: hue-rotate(-1turn);
	}
}
</style>

::: details 实现原理与上述镂空文本和渐变背景一样，在声明 background-image 时由图像路径改成 linear-gradient()，再通过 filter:hue-rotate()在指定时间内改变背景色相。

```html
<h1 class="gradient-text">Full Stack Developer</h1>

<style lang="scss">
  .gradient-text {
    background-image: linear-gradient(90deg, #f66, #f90);
    -webkit-background-clip: text;
    background-clip: text;
    line-height: 60px;
    font-size: 60px;
    color: transparent;
    animation: hue 5s linear infinite;
  }
  @keyframes hue {
    from {
      filter: hue-rotate(0);
    }
    to {
      filter: hue-rotate(-1turn);
    }
  }
</style>
```

:::

## 闪烁文本

<p class="blink-text tac">🔥若对CSS技巧很感兴趣，请关注我喔</p>

<style lang="scss">
.blink-text {
	width: 100%;
	background-image: linear-gradient(-45deg, #f66 30%, #fff 50%, #f66 70%);
	background-size: 200%;
	-webkit-background-clip: text;
	background-clip: text;
	background-blend-mode: hard-light;
	font-weight: bold;
	font-size: 20px;
	color: transparent;
	animation: shine 2s infinite;
	-webkit-text-fill-color: transparent;
}
@keyframes shine {
	from {
		background-position: 100%;
	}
	to {
		background-position: 0;
	}
}
</style>

## 方格背景

<div class="square-bg"></div>

<style lang="scss">
.square-bg {
	width: 500px;
	height: 100px;
	background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%),
		linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);
	background-position: 0 0, 20px 20px;
	background-size: 40px 40px;
}
</style>

::: details 声明两个 linear-gradient()产生两个图像，声明 background-position:0 0, 20px 20px 让两个图像错位排列，声明 background-size:40px 40px 固定两个图像的大小

```html
<div class="square-bg"></div>

<style lang="scss">
  .square-bg {
    width: 500px;
    height: 100px;
    background-image: linear-gradient(
        45deg,
        #eee 25%,
        transparent 25%,
        transparent 75%,
        #eee 75%
      ), linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee
          75%);
    background-position: 0 0, 20px 20px;
    background-size: 40px 40px;
  }
</style>
```

:::

## 网格背景

<div class="grid-bg"></div>

<style lang="scss">
.grid-bg {
	width: 500px;
	height: 300px;
	background-color: #3c9;
	background-image: linear-gradient(0deg, #fff 5%, transparent 5%, transparent),
		linear-gradient(90deg, #fff 5%, transparent 5%, transparent);
	background-position: 0 0, 20px 20px;
	background-size: 20px 20px;
}
</style>

::: details

```html
<div class="grid-bg"></div>

<style lang="scss">
  .grid-bg {
    width: 500px;
    height: 100px;
    background-color: #3c9;
    background-image: linear-gradient(
        0deg,
        #fff 5%,
        transparent 5%,
        transparent
      ), linear-gradient(90deg, #fff 5%, transparent 5%, transparent);
    background-position: 0 0, 20px 20px;
    background-size: 20px 20px;
  }
</style>
```

:::

## 彩色饼图

<div class="pie-chart"></div>

<style lang="scss">
.pie-chart {
	border-radius: 100%;
	width: 300px;
	height: 300px;
	background-image: conic-gradient(#f66 0 25%, #66f 25% 30%, #f90 30% 55%, #09f 55% 70%, #3c9 70% 100%);
}
</style>

::: details conic-gradient()能产生锥形渐变

```html
<div class="pie-chart"></div>

<style lang="scss">
  .pie-chart {
    border-radius: 100%;
    width: 200px;
    height: 200px;
    background-image: conic-gradient(
      #f66 0 25%,
      #66f 25% 30%,
      #f90 30% 55%,
      #09f 55% 70%,
      #3c9 70% 100%
    );
  }
</style>
```

:::
