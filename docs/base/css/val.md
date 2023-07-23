# 变量计算组合

各种奇特的组合写法

## 条形加载条

::: details 笨写法

```html
<div class="strip-loading">
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
</div>

<style lang="scss">
  .strip-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
    p {
      border-radius: 3px;
      width: 6px;
      height: 30px;
      background-color: #f66;
      animation: beat 1s ease-in-out infinite;
      & + p {
        margin-left: 5px;
      }
      &:nth-child(2) {
        animation-delay: 200ms;
      }
      &:nth-child(3) {
        animation-delay: 400ms;
      }
      &:nth-child(4) {
        animation-delay: 600ms;
      }
      &:nth-child(5) {
        animation-delay: 800ms;
      }
      &:nth-child(6) {
        animation-delay: 1s;
      }
    }
  }
  @keyframes beat {
    0%,
    100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.5);
    }
  }
</style>
```

:::

<div class="strip-loading">
	<p></p>
	<p></p>
	<p></p>
	<p></p>
	<p></p>
	<p></p>
</div>

<style lang="scss">
.strip-loading {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 100px;
	p {
		border-radius: 3px;
		width: 6px;
		height: 30px;
		background-color: #f66;
		animation: beat 1s ease-in-out infinite;
		& + p {
			margin-left: 5px;
		}
		&:nth-child(2) {
			animation-delay: 200ms;
		}
		&:nth-child(3) {
			animation-delay: 400ms;
		}
		&:nth-child(4) {
			animation-delay: 600ms;
		}
		&:nth-child(5) {
			animation-delay: 800ms;
		}
		&:nth-child(6) {
			animation-delay: 1s;
		}
	}
}
@keyframes beat {
	0%,
	100% {
		transform: scaleY(1);
	}
	50% {
		transform: scaleY(.5);
	}
}
</style>

::: details 变量写法

```html
<div class="heart-loading">
  <ul style="--line-count: 9;">
    <li class="line-1" style="--line-index: 1;"></li>
    <li class="line-2" style="--line-index: 2;"></li>
    <li class="line-3" style="--line-index: 3;"></li>
    <li class="line-4" style="--line-index: 4;"></li>
    <li class="line-5" style="--line-index: 5;"></li>
    <li class="line-6" style="--line-index: 6;"></li>
    <li class="line-7" style="--line-index: 7;"></li>
    <li class="line-8" style="--line-index: 8;"></li>
    <li class="line-9" style="--line-index: 9;"></li>
  </ul>
</div>

<style lang="scss">
  .heart-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
    ul {
      display: flex;
      justify-content: space-between;
      width: 150px;
      height: 10px;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      --angle: calc(var(--line-index) / var(--line-count) * 0.5turn);
      --time: calc((var(--line-index) - 1) * 40ms);
      border-radius: 5px;
      width: 10px;
      height: 10px;
      background-color: #3c9;
      filter: hue-rotate(var(--angle));
      animation-duration: 1s;
      animation-delay: var(--time);
      animation-iteration-count: infinite;
      &.line-1,
      &.line-9 {
        animation-name: beat-1;
      }
      &.line-2,
      &.line-8 {
        animation-name: beat-2;
      }
      &.line-3,
      &.line-7 {
        animation-name: beat-3;
      }
      &.line-4,
      &.line-6 {
        animation-name: beat-4;
      }
      &.line-5 {
        animation-name: beat-5;
      }
    }
  }
  @keyframes beat-1 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 30px;
      transform: translate3d(0, -15px, 0);
    }
  }
  @keyframes beat-2 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 60px;
      transform: translate3d(0, -30px, 0);
    }
  }
  @keyframes beat-3 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 80px;
      transform: translate3d(0, -40px, 0);
    }
  }
  @keyframes beat-4 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 90px;
      transform: translate3d(0, -30px, 0);
    }
  }
  @keyframes beat-5 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 90px;
      transform: translate3d(0, -20px, 0);
    }
  }
</style>
```

:::

<div class="heart-loading">
	<ul style="--line-count: 9;">
		<li class="line-1" style="--line-index: 1;"></li>
		<li class="line-2" style="--line-index: 2;"></li>
		<li class="line-3" style="--line-index: 3;"></li>
		<li class="line-4" style="--line-index: 4;"></li>
		<li class="line-5" style="--line-index: 5;"></li>
		<li class="line-6" style="--line-index: 6;"></li>
		<li class="line-7" style="--line-index: 7;"></li>
		<li class="line-8" style="--line-index: 8;"></li>
		<li class="line-9" style="--line-index: 9;"></li>
	</ul>
</div>

<style lang="scss">
.heart-loading {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 100px;
	ul {
		display: flex;
		justify-content: space-between;
		width: 150px;
		height: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
	}
	li {

		--angle: calc(var(--line-index) / var(--line-count) * .5turn);
		--time: calc((var(--line-index) - 1) * 120ms);
		border-radius: 5px;
		width: 10px;
		height: 10px;
		background-color: #3c9;
		filter: hue-rotate(var(--angle));
		animation-duration: 3s;
		animation-delay: var(--time);
		animation-iteration-count: infinite;
    & + li {
      margin-top: 0px;
    }
		&.line-1,
		&.line-9 {
			animation-name: beat-1;
		}
		&.line-2,
		&.line-8 {
			animation-name: beat-2;
		}
		&.line-3,
		&.line-7 {
			animation-name: beat-3;
		}
		&.line-4,
		&.line-6 {
			animation-name: beat-4;
		}
		&.line-5 {
			animation-name: beat-5;
		}
	}
}
@keyframes beat-1 {
	0%,
	10%,
	90%,
	100% {
		height: 10px;
	}
	45%,
	55% {
		height: 30px;
		transform: translate3d(0, -15px, 0);
	}
}
@keyframes beat-2 {
	0%,
	10%,
	90%,
	100% {
		height: 10px;
	}
	45%,
	55% {
		height: 60px;
		transform: translate3d(0, -30px, 0);
	}
}
@keyframes beat-3 {
	0%,
	10%,
	90%,
	100% {
		height: 10px;
	}
	45%,
	55% {
		height: 80px;
		transform: translate3d(0, -40px, 0);
	}
}
@keyframes beat-4 {
	0%,
	10%,
	90%,
	100% {
		height: 10px;
	}
	45%,
	55% {
		height: 90px;
		transform: translate3d(0, -30px, 0);
	}
}
@keyframes beat-5 {
	0%,
	10%,
	90%,
	100% {
		height: 10px;
	}
	45%,
	55% {
		height: 90px;
		transform: translate3d(0, -20px, 0);
	}
}

</style>

## 鼠标放置变色

::: details

```html
<template>
  <div
    class="track-btn"
    @mousemove="change"
    :style="{ '--x': x, '--y': y }"
  >
    <span>妙用CSS变量，让你的CSS变得更心动</span>
  </div>
</template>

<script>
  export default {
    name: 'ChangeColor',
    data() {
      return {
        x: '0px',
        y: '0px'
      };
    },
    methods: {
      change(e) {
        this.x = `${e.offsetX}px`;
        this.y = `${e.offsetY}px`;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .track-btn {
    overflow: hidden;
    position: relative;
    border-radius: 25px;
    width: 400px;
    height: 50px;
    background-color: #66f;
    cursor: pointer;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    span {
      position: relative;
      pointer-events: none; // 不加会卡顿
    }
    &::before {
      --size: 0;
      position: absolute;
      left: var(--x);
      top: var(--y);
      width: var(--size);
      height: var(--size);
      background-image: radial-gradient(
        circle closest-side,
        #09f,
        transparent
      );
      content: '';
      transform: translate3d(-50%, -50%, 0);
      transition: width 200ms ease, height 200ms ease;
    }
    &:hover::before {
      --size: 400px;
    }
  }
</style>
```

:::

<script setup>
import ChangeColor from '../../../src/components/css/change-color.vue' 
import ParallaxBtn from '../../../src/components/css/parallax-btn.vue'
import LikeBtn from '../../../src/components/css/like-btn.vue' 

</script>

<ChangeColor />

## 悬浮视差按钮

::: details

```vue
<template>
  <div
    class="bruce flex-ct-x"
    data-title="悬浮视差按钮"
    :style="{
      '--rx': rx,
      '--ry': ry,
      '--tx': tx,
      '--ty': ty,
      '--tz': tz
    }"
    @mousemove="mousemove"
    @mouseup="mouseup"
    @mousedown="mousedown"
    @mouseleave="mouseleave"
  >
    <a
      class="parallax-btn"
      data-name="妙用CSS变量，让你的CSS变得更心动"
    ></a>
  </div>
</template>

<script>
export default {
  name: 'ParallaxBtn',
  data() {
    return {
      rx: '0deg',
      ry: '0deg',
      tx: '0',
      ty: '0',
      tz: '0px'
    };
  },
  methods: {
    mousemove(e) {
      const btn = document.getElementsByClassName('parallax-btn')[0];
      const btnRect = btn.getBoundingClientRect();
      const dx = e.offsetX - btnRect.width / 2;
      const dy = e.offsetY - btnRect.height / 2;
      this.rx = `${dy / -1}deg`;
      this.ry = `${dx / 10}deg`;
    },
    mouseup(e) {
      this.tz = '-12px';
    },
    mousedown(e) {
      this.tz = '-25px';
    },
    mouseleave(e) {
      this.rx = `0`;
      this.ry = `0`;
      this.ty = `0`;
    }
  }
};
</script>

<style lang="scss" scoped>
.bruce {
  transform: perspective(800px);
  transform-style: preserve-3d;
}
.parallax-btn {
  position: relative;
  width: 400px;
  height: 50px;
  cursor: pointer;
  user-select: none;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  &::before {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 4px;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    box-shadow: 0 2px 5px rgba(#000, 0.2);
    content: '';
    will-change: transform;
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(
        var(--ry, 0)
      ) translateZ(var(--tz, -12px));
    transition: box-shadow 500ms ease, transform 200ms ease;
  }
  &::after {
    display: inline-block;
    position: relative;
    font-weight: bold;
    content: attr(data-name);
    will-change: transform;
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));
    transition: transform 200ms ease;
  }
  &:hover::before {
    box-shadow: 0 5px 15px rgba(#000, 0.3);
  }
}
</style>
```

:::
<ParallaxBtn />

## 心型按钮

::: details

```vue
<template>
  <div class="bruce flex-ct-x" data-title="点赞按钮">
    <button class="like-btn">
      <div class="like-wrapper">
        <div class="like-ripple"></div>
        <svg class="like-heart" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
          ></path>
        </svg>
        <div class="like-particle" style="--line-count: 6">
          <div class="like-particle-item" style="--line-index: 1"></div>
          <div class="like-particle-item" style="--line-index: 2"></div>
          <div class="like-particle-item" style="--line-index: 3"></div>
          <div class="like-particle-item" style="--line-index: 4"></div>
          <div class="like-particle-item" style="--line-index: 5"></div>
          <div class="like-particle-item" style="--line-index: 6"></div>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LikeBtn'
};
</script>

<style lang="scss" scoped>
$heart-color: #f66;
$easing: cubic-bezier(0.7, 0, 0.3, 1);
$duration: 500ms;
.like-btn {
  position: relative;
  z-index: 1;
  border: none;
  border-radius: 100%;
  width: 1em;
  height: 1em;
  appearance: none;
  background-color: #fff;
  cursor: pointer;
  font-size: 200px;
  transition: all $duration $easing;
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    box-shadow: 0 0.3em 0.6em rgba(#000, 0.3);
    content: '';
    transition: inherit;
  }
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    background-color: #fff;
    content: '';
  }
  &:active {
    &::before {
      animation: depress-shadow $duration $easing both;
    }
  }
  &:focus::after {
    animation: depress $duration $easing both;
  }
}
.like-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  > * {
    grid-area: 1/1;
    margin: auto;
  }
}
.like-ripple {
  overflow: hidden;
  position: relative;
  border-radius: 100%;
  width: 1em;
  height: 1em;
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    border: 0.4em solid $heart-color;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    content: '';
    transform: scale(0);
  }
  .like-btn:focus & {
    &::before {
      animation: ripple-out $duration $easing;
    }
  }
}
.like-heart {
  display: block;
  width: 0.5em;
  height: 0.5em;
  transform-origin: center 80%;
  path {
    transition: all $duration $easing;
    stroke: $heart-color;
    stroke-width: 2;
    fill: transparent;
    .like-btn:focus & {
      fill: $heart-color;
    }
  }
  .like-btn:focus & {
    animation: heart-bounce $duration $easing;
  }
}
.like-particle {
  position: relative;
  width: 1px;
  height: 1px;
}
.like-particle-item {
  --angle: calc(var(--line-index) / var(--line-count) * 1turn);
  $color-list: #f66 #66f #f90 #09f #9c3 #3c9;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 0.05em;
  width: 0.1em;
  height: 0.1em;
  transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) scaleY(
      0
    );
  transition: all $duration $easing;
  @each $v in $color-list {
    $index: index($color-list, $v);
    &:nth-child(#{$index}) {
      background-color: $v;
    }
  }
  .like-btn:focus & {
    animation: particle-out calc(#{$duration} * 1.2) $easing forwards;
  }
}
.like-btn:focus {
  cursor: normal;
  pointer-events: none;
}
@keyframes depress {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: translateY(5%) scale(0.9);
  }
}
@keyframes depress-shadow {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale(0.5);
  }
}
@keyframes heart-bounce {
  0%,
  80%,
  100% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.7);
  }
}
@keyframes particle-out {
  50% {
    height: 0.3em;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0.8em)
      scale(1);
  }
  60% {
    height: 0.2em;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0.8em)
      scale(1);
  }
  100% {
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(1em) scale(
        0
      );
  }
}
@keyframes ripple-out {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(5);
  }
}
</style>
```

:::

<LikeBtn />
