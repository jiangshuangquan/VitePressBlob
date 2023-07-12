# 背景渐变

## radial-gradient 径向渐变

在使用渐变生成不同颜色的直接过渡时，非常容易就会产生锯齿效果。

<div class="radial-gradient1"></div>

<style lang="scss">
.radial-gradient1 {
    width: 100px;
    height: 100px;
    background: radial-gradient(#9c27b0 0%, #9c27b0 47%, #ffeb3b 47%, #ffeb3b 100%);
}
</style>

```css
.radial-gradient1 {
  width: 100px;
  height: 100px;
  background: radial-gradient(
    #9c27b0 0%,
    #9c27b0 47%,
    #ffeb3b 47%,
    #ffeb3b 100%
  );
}
```

仔细看看衔接处，会发现有非常明显的锯齿效果。

> 在衔接处，适当留出一些渐变空间

<div class="radial-gradient2"></div>

<style lang="scss">
.radial-gradient2 {
    width: 100px;
    height: 100px;
    background: radial-gradient(#9c27b0 0%, #9c27b0 47%, #ffeb3b 47.3%, #ffeb3b 100%);
}
</style>

```css
background: radial-gradient(
  #9c27b0 0%,
  #9c27b0 47%,
  #ffeb3b 47.3%,
  #ffeb3b 100%
);
```

不一定是 0.3，还要根据实际情况调整

## 利用多层渐变组合图形

<div class="coupon">50</div>
<div class="wave">50</div>

<style lang="scss">
.coupon {
    position: relative;
    width: 400px;
    height: 160px;
    margin: 20px auto;
    background-image: 
        radial-gradient(circle at 1px 8px, transparent 6px, #f49714 6px, #f49714 0px),
        radial-gradient(circle at 199px 8px, transparent 6px, #f49714 6px, #f49714 0px);
    background-size: 200px 18px;
    background-position: 0 0, 200px 0;
    background-repeat-x: no-repeat;
    
    
    font-size: 100px;
    color: #fff;
    font-weight: bold;
    line-height: 160px;
    padding-left: 60px;
    box-sizing: border-box;
    cursor: pointer;
    
    &::before {
        position: absolute;
        content: "";
        left: 240px;
        top: 0;
        bottom : 0;
        width: 0;
        border-left: 1px dashed #fff;
    }
    
    &::after {
        position: absolute;
        content: "立即领取";
        font-size: 30px;
        width: 70px;
        top: 50%;
        right: 2%;
        transform: translate(-50%, -50%);
        line-height: 40px;
        letter-spacing: 5px;
    }
}

.wave {
    position: relative;
    width: 400px;
    height: 160px;
    margin: 20px auto;
    background: linear-gradient(90deg, #945700 0%, #f49714 100%);
    filter: drop-shadow(-7px 4px 3px #333);
    font-size: 100px;
    color: #fff;
    font-weight: bold;
    line-height: 160px;
    padding-left: 60px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;
    text-shadow: -2px -2px 2px #333;
    
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        // left: 0;
        right: 0;
        bottom :0;
    }
    
    &::before {
        width: 10px;
        background-image: radial-gradient(circle at -5px 10px, transparent 12px, #fff 13px, #fff 0px);
        background-size: 20px 20px;
        background-position: 0 15px;
    }
    
    &::after {
        width: 15px;
        background-image: radial-gradient(circle at 15px 10px, #fff 12px, transparent 13px, transparent 0px);
        background-size: 20px 40px;
        background-position: 0 15px;
    }
}

</style>

::: details

```html
<div class="coupon">50</div>
<div class="wave">50</div>

<style lang="scss">
  .coupon {
    position: relative;
    width: 400px;
    height: 160px;
    margin: 20px auto;
    background-image: radial-gradient(
        circle at 1px 8px,
        transparent 6px,
        #f49714 6px,
        #f49714 0px
      ), radial-gradient(circle at 199px 8px, transparent 6px, #f49714 6px, #f49714
          0px);
    background-size: 200px 18px;
    background-position: 0 0, 200px 0;
    background-repeat-x: no-repeat;

    font-size: 100px;
    color: #fff;
    font-weight: bold;
    line-height: 160px;
    padding-left: 60px;
    box-sizing: border-box;
    cursor: pointer;

    &::before {
      position: absolute;
      content: '';
      left: 240px;
      top: 0;
      bottom: 0;
      width: 0;
      border-left: 1px dashed #fff;
    }

    &::after {
      position: absolute;
      content: '立即领取';
      font-size: 30px;
      width: 70px;
      top: 50%;
      right: 2%;
      transform: translate(-50%, -50%);
      line-height: 40px;
      letter-spacing: 5px;
    }
  }

  .wave {
    position: relative;
    width: 400px;
    height: 160px;
    margin: 20px auto;
    background: linear-gradient(90deg, #945700 0%, #f49714 100%);
    filter: drop-shadow(-7px 4px 3px #333);
    font-size: 100px;
    color: #fff;
    font-weight: bold;
    line-height: 160px;
    padding-left: 60px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;
    text-shadow: -2px -2px 2px #333;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      // left: 0;
      right: 0;
      bottom: 0;
    }

    &::before {
      width: 10px;
      background-image: radial-gradient(
        circle at -5px 10px,
        transparent 12px,
        #fff 13px,
        #fff 0px
      );
      background-size: 20px 20px;
      background-position: 0 15px;
    }

    &::after {
      width: 15px;
      background-image: radial-gradient(
        circle at 15px 10px,
        #fff 12px,
        transparent 13px,
        transparent 0px
      );
      background-size: 20px 40px;
      background-position: 0 15px;
    }
  }
</style>
```

:::

<p class="flow-wave">Hover Me</p>

<style lang="scss">
  .flow-wave {
    width:200px;
    font-size: 18px;
    text-decoration: none;
    background: radial-gradient(circle at 10px -7px, transparent 8px, currentColor 8px, currentColor 9px, transparent 9px) repeat-x,
        radial-gradient(circle at 10px 27px, transparent 8px, currentColor 8px, currentColor 9px, transparent 9px) repeat-x;
    background-size: 20px 20px;
    background-position: -10px calc(100% + 16px), 0 calc(100% - 4px);
}

.flow-wave {
    padding: 5px 0;
}
.flow-wave:hover,
.flow-wave:focus {
    background: radial-gradient(circle at 10px -7px, transparent 8px, currentColor 8px, currentColor 9px, transparent 9px) repeat-x,
        radial-gradient(circle at 10px 27px, transparent 8px, currentColor 8px, currentColor 9px, transparent 9px) repeat-x;
    background-size: 20px 20px;
    background-position: -10px calc(100% + 16px), 0 calc(100% - 4px);
    animation: waveFlow 1s infinite linear;
}

@keyframes waveFlow {
    from { background-position-x: -10px, 0; }
    to { background-position-x: -30px, -20px; }
}
</style>

## conic-gradient 实现颜色表盘

<div class="conic-gradient1"></div>

<style lang="scss">
  .conic-gradient1{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: conic-gradient(red, orange, yellow, green, teal, blue, purple);
}
</style>

```css
background: conic-gradient(red, orange, yellow, green, teal, blue, purple);
```

一是颜色不够丰富不够明亮，二是起始处与结尾处衔接不够自然

除了 `rgb()` 颜色表示法之外，还有 `hsl()` 表示法

> `hsl()` 被定义为色相-饱和度-明度（Hue-Saturation-Lightness）。

<div class="conic-gradient2"></div>

<style lang="scss">
  $colors: ();
$totalStops:20;

@for $i from 0 through $totalStops{
    $colors: append($colors, hsl($i * calc(360deg / $totalStops), 100%, 50%), comma);
}
  .conic-gradient2{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: conic-gradient($colors);
    border-radius: 50%;
}
</style>

```css
$colors: ();
$totalStops: 20;

@for $i from 0 through $totalStops {
  $colors: append(
    $colors,
    hsl($i * calc(360deg / $totalStops), 100%, 50%),
    comma
  );
}
.conic-gradient2 {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: conic-gradient($colors);
  border-radius: 50%;
}
```

## 角向渐变配合 background-size 使用

<div class="basis"></div>
<div class="wallpaper"></div>

<style lang="scss">
.basis {
    width: 250px;
    height: 250px;
    margin: 50px auto;
    background: conic-gradient(#000 12.5%, #fff 0 37.5%, #000 0 62.5%, #fff 0 87.5%, #000 0);
    border: 5px solid #999;
}

.wallpaper {
    width: 250px;
    height: 250px;
    margin: 50px auto;
    background: conic-gradient(#000 12.5%, #fff 0 37.5%, #000 0 62.5%, #fff 0 87.5%, #000 0);
    background-size: 50px 50px;
    border: 5px solid #999;
}
</style>

```css
background: conic-gradient(
  #000 12.5%,
  #fff 0 37.5%,
  #000 0 62.5%,
  #fff 0 87.5%,
  #000 0
);
background: conic-gradient(
  #000 12.5%,
  #fff 0 37.5%,
  #000 0 62.5%,
  #fff 0 87.5%,
  #000 0
);
background-size: 50px 50px;
```

## 重复角向渐变 repeating-conic-gradient

<div class="repeating-basis"></div>

<style lang="scss">
.repeating-basis {
    width: 200px;
    height: 200px;
    margin: 50px auto;
    background: repeating-conic-gradient(deeppink 0 15deg, yellowgreen 0 30deg);
    border: 1px solid #000;
}
</style>

```css
background: repeating-conic-gradient(
  deeppink 0 15deg,
  yellowgreen 0 30deg
);
```

## 利用角向渐变 repeat 配合 position 完成特殊图案

<div class="repeat-position"></div>

<style lang="scss">
.repeat-position {
    margin: auto;
    width: 100px;
    height: 100px;
    background: conic-gradient(from 270deg at 40px 40px, #fff 0, #fff 90deg, transparent 90deg, transparent 360deg) #000;
    background-position: -20px -20px;
}
</style>

```css
background: conic-gradient(
    from 270deg at 40px 40px,
    #fff 0,
    #fff 90deg,
    transparent 90deg,
    transparent 360deg
  ) #000;
background-position: -20px -20px;
```

## 利用小单位实现造型迥异的图案

<div class="repeat-gradient1"></div>

<style lang="scss">
.repeat-gradient1 {
    width: 100px;
    height: 100px;
    background: repeating-conic-gradient(#fff, #000, #fff 30deg);
}
</style>

```cs
    background: repeating-conic-gradient(#fff, #000, #fff 30deg);

```

用一个非常小的值去替换上述代码中的 30deg

<div class="repeat-gradient2"></div>

<style lang="scss">
.repeat-gradient2 {
    width: 100px;
    height: 100px;
    background: repeating-conic-gradient(#fff, #000, #fff 0.1deg);
}
</style>

```css
background: repeating-conic-gradient(#fff, #000, #fff 0.1deg);
```

<div class="all-repeating">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>

<style lang="scss">
@property --length {
  syntax: '<length>';
  inherits: false;
  initial-value: 0.0003px;
}
.all-repeating {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  >div {
  width: 120px;
  height: 120px;
  margin: 10px;
  }


  div:nth-child(1) {
      background-image: repeating-radial-gradient(
          circle at center center,
          rgb(241, 43, 239),
          rgb(239, 246, 244) 3px
      );
  }

  div:nth-child(2) {
      background-image: repeating-radial-gradient(
          circle at 15% 30%,
          rgb(4, 4, 0),
          rgb(52, 72, 197),
          rgb(115, 252, 224),
          rgb(116, 71, 5),
          rgb(223, 46, 169),
          rgb(0, 160, 56),
          rgb(234, 255, 0) 2px
      );
  }

  div:nth-child(3) {
      background-image: repeating-radial-gradient(
          circle at center center,
          rgb(81, 9, 72),
          rgb(72, 90, 223),
          rgb(80, 0, 34),
          rgb(34, 134, 255),
          rgb(65, 217, 176),
          rgb(241, 15, 15),
          rgb(148, 213, 118) 0.1px
      );
  }

  div:nth-child(4) {
      background-image: repeating-radial-gradient(
          circle at center center,
          rgb(38, 21, 217) 0px,
          rgb(38, 21, 217) 2px,
          rgba(8, 254, 5, 0.83) 2px,
          rgba(8, 254, 5, 0.83) 3px
      );
      background-size: 69px 69px;
  }

  div:nth-child(5) {
      background-image: repeating-radial-gradient(
          ellipse at center center,
          rgb(75, 154, 242),
          rgb(64, 135, 228),
          rgb(54, 117, 214),
          rgb(43, 98, 200),
          rgb(33, 79, 185),
          rgb(22, 60, 171),
          rgb(12, 42, 157),
          rgb(1, 23, 143) 0.01px
      );
  }

  div:nth-child(6) {
      background-image: repeating-radial-gradient(
          circle at 17% 32%,
          rgb(4, 4, 0),
          rgb(52, 72, 197),
          rgb(115, 252, 224),
          rgb(116, 71, 5),
          rgb(223, 46, 169),
          rgb(0, 160, 56),
          rgb(234, 255, 0) var(--length)
      );
      transition: 4s --length;
      cursor: pointer;
      
      &:hover {
          --length: 4px;
      }
  }
}

</style>

## 通过滤镜 hue-rotate 实现渐变动画

`hue-rotate`：为色相旋转滤镜，默认的值为 `0deg`，当旋转 `360deg` 后，相当于回到了本身的颜色值。

<div class="hue-rotate"></div>

<style lang="scss">
.hue-rotate {
    width: 300px;
    height: 100px;
    margin: auto;
    background: linear-gradient(45deg, #5fddcc, #ff004d);
    animation: hueRotate 10s infinite alternate;
}

@keyframes hueRotate {
    100% {
        filter: hue-rotate(360deg);
    }
}
</style>

```css
.hue-rotate {
  width: 300px;
  height: 100px;
  margin: auto;
  background: linear-gradient(45deg, #5fddcc, #ff004d);
  animation: hueRotate 10s infinite alternate;
}

@keyframes hueRotate {
  100% {
    filter: hue-rotate(360deg);
  }
}
```

## CSS @property

[@property CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@property) at-rule 是 CSS Houdini API 的一部分，它允许开发者显式地定义他们的 CSS 自定义属性，允许进行属性类型检查、设定默认值以及定义该自定义属性是否可以被继承

- `@property --property-name` 中的 --property-name 就是自定义属性的名称，定义后可在 CSS 中通过 var(--property-name) 进行引用。
- `syntax`：该自定义属性的语法规则，也可以理解为表示定义的自定义属性的类型。
- `inherits`：是否允许继承。
- `initial-value`：初始值。

<div class="property">
<div class="A"></div>
<div class="B"></div>
</div>

<style lang="scss">

@property --colorA {
  syntax: '<color>';
  inherits: false;
  initial-value: fuchsia;
}

@property --colorB {
  syntax: '<color>';
  inherits: false;
  initial-value: teal;
}

@property --colorC {
  syntax: '<color>';
  inherits: false;
  initial-value: #f79188;
}

@property --colorD {
  syntax: '<color>';
  inherits: false;
  initial-value: yellow;
}

@property --colorE {
  syntax: '<color>';
  inherits: false;
  initial-value: orange;
}

@property --colorF {
  syntax: '<color>';
  inherits: false;
  initial-value: red;
}

.property {
  display:flex;
  div {
      width: 100px;
      height: 100px;
      border: 1px solid #ccc;
      margin: auto;
      cursor: pointer;
  }
  .A {
    background: linear-gradient(45deg,
        var(--colorA),
        var(--colorB),
        var(--colorC),
        var(--colorD),
        var(--colorE),
        var(--colorF));
    transition: 
        --colorA 5000ms,
        --colorB 5000ms,
        --colorC 5000ms,
        --colorD 5000ms,
        --colorE 5000ms,
        --colorF 5000ms;
    
    &:hover {
        --colorA: red;
        --colorB: orange;
        --colorC: yellow;
        --colorD: green;
        --colorE: teal;
        --colorF: fuchsia;
    }
  }

  .B {
    background: linear-gradient(45deg,
        var(--colorA),
        var(--colorC),
        var(--colorF));
    animation: change 10s infinite linear;
  }
}

@keyframes change {
    20% {
        --colorA: red;
        --colorC: #a93ee0;
        --colorF: fuchsia;
    }
    40% {
        --colorA: #ff3c41;
        --colorC: #e228a0;
        --colorF: #2e4c96;
    }
    60% {
        --colorA: orange;
        --colorC: green;
        --colorF: teal;
    }
    80% {
        --colorA: #ae63e4;
        --colorC: #0ebeff;
        --colorF: #efc371;
    }
}

</style>

::: details

```html
<div class="property">
  <div class="A"></div>
  <div class="B"></div>
</div>

<style lang="scss">
  @property --colorA {
    syntax: '<color>';
    inherits: false;
    initial-value: fuchsia;
  }

  @property --colorB {
    syntax: '<color>';
    inherits: false;
    initial-value: teal;
  }

  @property --colorC {
    syntax: '<color>';
    inherits: false;
    initial-value: #f79188;
  }

  @property --colorD {
    syntax: '<color>';
    inherits: false;
    initial-value: yellow;
  }

  @property --colorE {
    syntax: '<color>';
    inherits: false;
    initial-value: orange;
  }

  @property --colorF {
    syntax: '<color>';
    inherits: false;
    initial-value: red;
  }

  .property {
    display: flex;
    div {
      width: 100px;
      height: 100px;
      border: 1px solid #ccc;
      margin: auto;
      cursor: pointer;
    }
    .A {
      background: linear-gradient(
        45deg,
        var(--colorA),
        var(--colorB),
        var(--colorC),
        var(--colorD),
        var(--colorE),
        var(--colorF)
      );
      transition: --colorA 5000ms, --colorB 5000ms, --colorC 5000ms, --colorD
          5000ms, --colorE 5000ms, --colorF 5000ms;

      &:hover {
        --colorA: red;
        --colorB: orange;
        --colorC: yellow;
        --colorD: green;
        --colorE: teal;
        --colorF: fuchsia;
      }
    }

    .B {
      background: linear-gradient(
        45deg,
        var(--colorA),
        var(--colorC),
        var(--colorF)
      );
      animation: change 10s infinite linear;
    }
  }

  @keyframes change {
    20% {
      --colorA: red;
      --colorC: #a93ee0;
      --colorF: fuchsia;
    }
    40% {
      --colorA: #ff3c41;
      --colorC: #e228a0;
      --colorF: #2e4c96;
    }
    60% {
      --colorA: orange;
      --colorC: green;
      --colorF: teal;
    }
    80% {
      --colorA: #ae63e4;
      --colorC: #0ebeff;
      --colorF: #efc371;
    }
  }
</style>
```

:::

## 文字 hover 动效

<p class="hover-a">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a>Mollitia nostrum placeat consequatur deserunt velit ducimus possimus commodi temporibus debitis quam</a>, molestiae laboriosam sit repellendus sed sapiente quidem quod accusantium vero.</p>

<style lang="scss">
.hover-a{
  a {
    background: linear-gradient(90deg, #ff3c41, #fc0, #0ebeff);
    background-size: 0 3px;
    background-repeat: no-repeat;
    background-position: 0 100%;
    transition: 1s all;
    color: #0cc;
  }
  a:hover {
      background-size: 100% 3px;
      color: #000;
  }
}
</style>

```html
<p class="hover-a">
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  <a
    >Mollitia nostrum placeat consequatur deserunt velit ducimus possimus
    commodi temporibus debitis quam</a
  >, molestiae laboriosam sit repellendus sed sapiente quidem quod
  accusantium vero.
</p>

<style lang="scss">
  .hover-a {
    a {
      background: linear-gradient(90deg, #ff3c41, #fc0, #0ebeff);
      background-size: 0 3px;
      background-repeat: no-repeat;
      background-position: 0 100%;
      transition: 1s all;
      color: #0cc;
    }
    a:hover {
      background-size: 100% 3px;
      color: #000;
    }
  }
</style>
```
