## mask

mask 可以接受一个与 background 语法一样的参数

::: warning 此属性兼容性不好
:::

## 使用 mask 进行内容裁切

<div class="linear-gradient1"></div>

<style>
.linear-gradient1 {
    margin: auto;
    position: relative;
    width: 250px;
    height: 100px;
    background: url(/css/4oaTAO.jpg) no-repeat;
    background-size: cover;
    mask: linear-gradient(90deg, transparent, #000);
    -webkit-mask: linear-gradient(90deg, transparent, #000);
}

</style>

## 使用 mask 实现图片切角效果

<div class="notching"></div>

<style>
.notching{
    width: 200px;
    height: 120px;
    background:deeppink;
    -webkit-mask:linear-gradient(135deg, transparent 15px, #fff 0)
        top left,linear-gradient(-135deg, transparent 15px, #fff 0)
        top right,linear-gradient(-45deg, transparent 15px, #fff 0)
        bottom right,linear-gradient(45deg, transparent 15px, #fff 0)
        bottom left;
    -webkit-mask-size: 50% 50%;
    -webkit-mask-repeat: no-repeat;
}

</style>

```html
<div class="notching"></div>

<style>
  .notching {
    width: 200px;
    height: 120px;
    background: deeppink;
    -webkit-mask: linear-gradient(135deg, transparent 15px, #fff 0) top left,
      linear-gradient(-135deg, transparent 15px, #fff 0) top right,
      linear-gradient(-45deg, transparent 15px, #fff 0) bottom right, linear-gradient(
          45deg,
          transparent 15px,
          #fff 0
        ) bottom left;
    -webkit-mask-size: 50% 50%;
    -webkit-mask-repeat: no-repeat;
  }
</style>
```

## 使用 mask 实现内切圆角图形

<div class="mask-inset-circle"></div>

<style>

  .mask-inset-circle {
    width: 200px;
    height: 60px;
    background: linear-gradient(45deg, #2179f5, #e91e63);
    -webkit-mask: radial-gradient(
            circle at 100% 100%,
            transparent 0,
            transparent 12px,#2179f5 13px
        ),radial-gradient(
            circle at 0 0,
            transparent 0,
            transparent 12px,#2179f5 13px
        ),radial-gradient(
            circle at 100% 0,
            transparent 0,
            transparent 12px,#2179f5 13px
        ),radial-gradient(
            circle at 0 100%,
            transparent 0,
            transparent 12px,#2179f5 13px
        );
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: right bottom, left top, right top, left bottom;
    -webkit-mask-size: 70% 70%;
}
</style>

## 巧用 mask 实现融合效果

<div class="all-mask">
  <div></div>
  <div class="mix"></div>
  <div class="mix rotate"></div>
</div>

<style lang="scss">
  @property --per {
    syntax: '<angle>';
    inherits: false;
    initial-value: 135deg;
  }
  .all-mask{
    display: flex;
 

    div {
        position: relative;
        margin: auto;
        width: 200px;
        height: 200px;
        background: url(/css/4oaTAO.jpg) no-repeat;
        background-size: cover;
    }

    .mix::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: url(/css/4oUAiQ.png) no-repeat;
        background-size: cover;
        -webkit-mask: linear-gradient(var(--per), #000 10%, transparent 70%, transparent);
    }

    .rotate::after {
        transition: --per 1000ms linear;
        cursor: pointer;
        // animation: rotate 10s infinite linear;
    }
    .rotate:hover::after {
        --per: 65deg;
    }

    @keyframes rotate {
        0% {
            --per: 0;
        }
        100% {
            --per: 360deg;
        }
    }
  }
</style>

::: details

```html
<div class="all-mask">
  <div></div>
  <div class="mix"></div>
  <div class="mix rotate"></div>
</div>

<style lang="scss">
  @property --per {
    syntax: '<angle>';
    inherits: false;
    initial-value: 135deg;
  }
  .all-mask {
    display: flex;

    div {
      position: relative;
      margin: auto;
      width: 200px;
      height: 200px;
      background: url(/css/4oaTAO.jpg) no-repeat;
      background-size: cover;
    }

    .mix::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: url(/css/4oUAiQ.png) no-repeat;
      background-size: cover;
      -webkit-mask: linear-gradient(
        var(--per),
        #000 10%,
        transparent 70%,
        transparent
      );
    }

    .rotate::after {
      transition: --per 1000ms linear;
      cursor: pointer;
      // animation: rotate 10s infinite linear;
    }
    .rotate:hover::after {
      --per: 65deg;
    }

    @keyframes rotate {
      0% {
        --per: 0;
      }
      100% {
        --per: 360deg;
      }
    }
  }
</style>
```

:::

## mask 实现内容切换效果

<div class="g-outer">
    <div class="g-inner"></div>
</div>

<style lang="scss">
.g-outer {
    height: 200px;
    background-image: url(/css/o_21081614180122.png);
}
.g-inner {
    height: 200px;
    background: url(/css/o_21081614175811.png);
    -webkit-mask: linear-gradient(90deg, #fff 0%, #fff 50%, transparent 50%, transparent 100%);
    -webkit-mask-size: 200% 100%;
    animation: maskChange 2s infinite alternate linear;
}
@keyframes maskChange {
    0% {
        -webkit-mask-position: -100% 0;
    }
    100% {
        -webkit-mask-position: 0 0;
    }
}

</style>

::: details

```html
<div class="g-outer">
  <div class="g-inner"></div>
</div>

<style lang="scss">
  .g-outer {
    height: 200px;
    background-image: url(/css/o_21081614180122.png);
  }
  .g-inner {
    height: 200px;
    background: url(/css/o_21081614175811.png);
    -webkit-mask: linear-gradient(
      90deg,
      #fff 0%,
      #fff 50%,
      transparent 50%,
      transparent 100%
    );
    -webkit-mask-size: 200% 100%;
    animation: maskChange 2s infinite alternate linear;
  }
  @keyframes maskChange {
    0% {
      -webkit-mask-position: -100% 0;
    }
    100% {
      -webkit-mask-position: 0 0;
    }
  }
</style>
```

:::
