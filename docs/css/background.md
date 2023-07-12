## background

background: color image repeat attachment position/size

### background-color

- `transparent`：透明(默认)
- `Keyword`：颜色关键字
- `HEX`：十六进制色彩模式
- `RGB`或`RGBA`：RGB/A 色彩模式
- `HSL`或`HSLA`：HSL/A 色彩模式
- `Color1/Color2`：覆盖颜色，背景颜色可能是 Color1，若背景图像无效则使用 Color2 代替 Color1

### background-attachment 图像依附方式

- `scroll`：图像随网页滚动而移动(默认)
- `fixed`：图像不会随网页滚动而移动

### background-position 图像起始位置

- `Position`：位置，可用任何长度单位，第二个位置(Y 轴)不声明默认是 50%(默认 0% 0%)
- `Keyword`：位置关键字 left/right/top/bottom/center，可单双使用，第二个关键字不声明默认是 center

### background-size 图像尺寸模式

- `cover`：图像扩展至足够大，使其完全覆盖整个区域，图像某些部分可能无法显示在区域内
- `contain`：图像扩展至最大尺寸，使其宽度与高度完全适应整个区域
- `Size`：尺寸，可用任何长度单位，第二个尺寸(高)不声明默认是 auto

### background-origin 定位区域(与`background-position`结合使用)

- `padding-box`：图像相对填充定位(默认)
- `border-box`：图像相对边框定位
- `content-box`：图像相对内容定位

### background-clip 绘制区域

- `border-box`：图像被裁剪到边框与边距的交界处(默认)
- `padding-box`：图像被裁剪到填充与边框的的交界处
- `content-box`：图像被裁剪到内容与填充的交界处

### background-blend-mode 混合模式

- normal：正常(默认)
- color-burn：颜色加深
- color-dodge：颜色减淡
- color：颜色
- darken：变暗
- difference：差值
- exclusion：排除
- hard-light：强光
- hue：色相
- lighten：变亮
- luminosity：亮度
- multiply：正片叠底
- overlay：叠加
- saturation：饱和度
- screen：滤色
- soft-light：柔光

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

## linear-gradient() 线性渐变

沿着指定方向从起点到终点逐渐改变颜色，渐变形状是一条直线

background-image: linear-gradient(direction, color-stop)

1. **Direction：**方向

   - `Keyword`:方向关键字 to left/right/top/bottom/top left/top right/bottom left/bottom right(默认 to bottom)
   - `Angle`: 角度，以顺时针方向的垂直线与渐变线的夹角计算，超出 N 圈则计算剩余角度

2. **ColorStop：**色标

   - `Color`:颜色，可参考 background-color 取值，在指定位置产生渐变效果所使用的颜色
   - `Position`: 位置，可参考 background-position 的 Position 取值，在指定位置产生渐变效果

<div class="elem"></div>

<style lang="scss">
.elem {
	width: 400px;
	height: 100px;
	background-image: linear-gradient(to bottom, #f66, #66f);
	/* 等价于 */
	background-image: linear-gradient(to bottom, #f66 0, #66f 100%);
}

</style>

::: details

```html
<div class="elem"></div>

<style lang="scss">
  .elem {
    width: 400px;
    height: 100px;
    background-image: linear-gradient(to bottom, #f66, #66f);
    /* 等价于 */
    background-image: linear-gradient(to bottom, #f66 0, #66f 100%);
  }
</style>
```

:::

::: tip
color-stop()在指定位置使用指定颜色，可用多个色标，其连写方式如下。第一个值为 Color，第二个值为 Position，形式为#f66 30%，若第二个值不声明则浏览器会自动分配位置。

<div class="elems"></div>

<style lang="scss">
  .elems {
    width: 400px;
    height: 100px;
background-image: linear-gradient(to bottom, #f66 0, #66f 20%, #f90, 40%, #09f 60%, #9c3 80%, #3c9 100%);
  }
</style>

```css
.elem {
  background-image: linear-gradient(
    to bottom,
    #f66 0,
    #66f 20%,
    #f90,
    40%,
    #09f 60%,
    #9c3 80%,
    #3c9 100%
  );
}
```

:::

::: warning
可能使用方向关键字更易理解，to xxx 就知道是什么意思了。千万不要使用单独的方向关键字，例如 left、right、top、bottom 等，因为 Sarafi 相对其他浏览器对这些单独的方向关键字的解释可能会不同。
:::

**若以角度声明方向**

- 0deg：to top
- 90deg：to right
- 180deg：to bottom
- 270deg：to left

## radial-gradient() 径向渐变

沿着任意方向从圆心往外面逐渐改变颜色，渐变形状是一个圆形或椭圆形

**background-image: radial-gradient(shape size at position, color-stop)**

- **Shape**:

  - `ellipse`: 椭圆形(默认)
  - `circle`: 圆形

- **Size**:
  - `farthest-corner`:从圆心到离圆心最远的角为半径(默认)
  - `farthest-side`:从圆心到离圆心最远的边为半径
  - `closest-corner`:从圆心到离圆心最近的角为半径
  - `closest-side`:从圆心到离圆心最近的边为半径
  - `Size`:尺寸，可用任何长度单位，宽与高必须同时声明
- **Position**:
  - `Keyword`:位置关键字 left/right/top/bottom/center(默认 center)
  - `Position`:位置，可用任何长度单位
- **ColorStop**:
  - `Color`:颜色，可参考 background-color 取值，在指定位置产生渐变效果所使用的颜色
  - `Position`:位置，可参考 background-position 的 Position 取值，在指定位置产生渐变效果

<div class="radial-elem"></div>

<style lang="scss">
  .radial-elem {
	width: 400px;
	height: 200px;
	background-image: radial-gradient(100px 100px, #f66, #66f);
	/* 等价于 */
	background-image: radial-gradient(ellipse 100px 100px at center, #f66, #66f);
}

</style>

::: details

```html
<div class="radial-elem"></div>

<style lang="scss">
  .radial-elem {
    width: 400px;
    height: 200px;
    background-image: radial-gradient(100px 100px, #f66, #66f);
    /* 等价于 */
    background-image: radial-gradient(
      ellipse 100px 100px at center,
      #f66,
      #66f
    );
  }
</style>
```

:::

## conic-gradient() 锥形渐变

沿着顺时针方向从圆心往外面逐渐改变颜色，渐变形状是一个圆锥体

锥形渐变比其他两个渐变效果更新潮，，以圆锥体的方式向顺时针方向扩散，产生的渐变效果就像俯视圆锥体的顶部。因为兼容性较差也无实际应用

**background-image: conic-gradient(color-stop)**

<div class="conic-elem"></div>

<style lang="scss">
  .conic-elem {
	  width: 400px;
	  height: 200px;
	  background-image: conic-gradient(#f66, #66f);
	  /* 等价于 */
	  background-image: conic-gradient(#f66 0, #66f 100%);
  }
</style>

::: details

```html
<div class="conic-elem"></div>

<style lang="scss">
  .conic-elem {
    width: 400px;
    height: 200px;
    background-image: conic-gradient(#f66, #66f);
    /* 等价于 */
    background-image: conic-gradient(#f66 0, #66f 100%);
  }
</style>
```

:::

## 渐变背景

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

## 三角形

<div class="triangle"></div>

<style>
.triangle {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #f00 0%, #f00 50%, transparent 50%, transparent 100%);
}
</style>

::: details

```html
<div class="triangle"></div>

<style>
  .triangle {
    width: 50px;
    height: 50px;
    background: linear-gradient(
      45deg,
      #f00 0%,
      #f00 50%,
      transparent 50%,
      transparent 100%
    );
  }
</style>
```

:::

## 渐变叠加多层

<div class="notching"></div>

<style lang="scss">
  .notching { 
    width: 200px; 
    height: 120px; 
    background: 
        linear-gradient(135deg, transparent 15px, deeppink 0), 
        linear-gradient(-135deg, transparent 15px, deeppink 0), 
        linear-gradient(-45deg, transparent 15px, deeppink 0), 
        linear-gradient(45deg, transparent 15px, deeppink 0); 
    background-size: 50% 50%, 50% 50%, 50% 50%, 50% 50%; 
    background-position: top left, top right, bottom right, bottom left;
    background-repeat: no-repeat; 
}
</style>

::: details

```html
<div class="notching"></div>

<style lang="scss">
  .notching {
    width: 200px;
    height: 120px;
    background: linear-gradient(135deg, transparent 15px, deeppink 0),
      linear-gradient(-135deg, transparent 15px, deeppink 0),
      linear-gradient(-45deg, transparent 15px, deeppink 0),
      linear-gradient(45deg, transparent 15px, deeppink 0);
    background-size: 50% 50%, 50% 50%, 50% 50%, 50% 50%;
    background-position: top left, top right, bottom right, bottom left;
    background-repeat: no-repeat;
  }
</style>
```

:::

## 利用 repeating-linear-gradient 节省代码

<div class="repeating"></div>

<style lang="scss">
.repeating{
  width: 400px;
  height: 100px;
  background: 
    repeating-linear-gradient(
        45deg, 
        #f06a0e, 
        #f06a0e 11px, 
        transparent 11px, 
        transparent 20px
    );
}
</style>

::: details

```html
<div class="repeating"></div>

<style lang="scss">
  .repeating {
    width: 400px;
    height: 100px;
    background: repeating-linear-gradient(
      45deg,
      #f06a0e,
      #f06a0e 11px,
      transparent 11px,
      transparent 20px
    );
  }
</style>
```

:::
