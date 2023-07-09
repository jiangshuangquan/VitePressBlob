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

::: tip
使用一个伪元素的边框去当作节点边框，声明 border 为 1px 并将其宽高声明成 200%，最终效果是该节点的 2 倍大小，再通过声明 transform:scale(.5)将该伪元素缩小到原来的 0.5 倍，现在与节点尺寸一样了，而 border 也通过浏览器自动计算成 0.5px 了，最终实现 0.5px 边框

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

::: tip
光标闪烁可用 border-right
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
