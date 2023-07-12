# 常用属性

属性排序根据布局 → 尺寸 → 界面 → 文字 → 交互的方式顺序定义;对于未注释的属性，要么是太过基础，要么是基本不会使用

## 布局属性

- **显示：**
  display、[visibility](https://developer.mozilla.org/zh-CN/docs/Web/CSS/visibility)

- **溢出：**
  overflow、overflow-x、overflow-y、[scroll-behavior](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior)、[scroll-snap-align](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align)

- **浮动：**
  float、clear

- **定位：**
  position、left、right、top、bottom、z-index

- **列表：**
  list-style、list-style-type、list-style-position、list-style-image

- **表格：**
  [table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout)、border-collapse(边框是否分割)、border-spacing(单元格间距)、caption-side(表格标题位置)、empty-cells

- **弹性：**
  [flex-flow](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)、flex-direction(主轴)、flex-wrap(换行)、justify-content(对齐)、align-content(多轴对齐)、align-items(对齐)、align-self(单独对齐)、flex、flex-grow(放大比例)、flex-shrink(缩小比例)、flex-basis、order(排列顺序)

- **多列：**
  columns、column-width、column-count、column-gap、column-rule、column-rule-width、column-rule-style、column-rule-color、column-span、column-fill、column-break-before、column-break-after、column-break-inside

- **格栅：**
  grid-columns、grid-rows

## 尺寸属性

- **模型：**
  box-sizing

- **边距：**
  margin、margin-left、margin-right、margin-top、margin-bottom、border-\<direction\>-\<param\>

- **填充：**
  padding、padding-left、padding-right、padding-top、padding-bottom

- **边框：**
  border、border-width、border-style、border-color、border-colors

- **圆角：**
  border-radius、border-top-left-radius、border-top-right-radius、border-bottom-left-radius、border-bottom-right-radius

- **框图：**
  border-image、border-image-source、border-image-slice、border-image-width、border-image-outset、border-image-repeat

- **大小：**
  width、min-width、max-width、height、min-height、max-height

## 界面属性

- **外观：**
  appearance

- **轮廓：**
  [outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline)、outline-width、outline-style、outline-color、outline-offset、outline-radius、outline-radius-\<direction\>

- **背景：**
  background、background-color、background-image、background-repeat、background-repeat-x、background-repeat-y、background-position、background-position-x、background-position-y、background-size、background-origin、[background-clip](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)、[background-attachment](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)、background-composite(图形合成属性)

- **遮罩：**
  [mask](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask)、mask-mode、mask-image、mask-repeat、mask-repeat-x、mask-repeat-y、mask-position、mask-position-x、mask-position-y、mask-size、mask-origin、mask-clip、mask-attachment、mask-composite、mask-box-image、mask-box-image-source、mask-box-image-width、mask-box-image-outset、mask-box-image-repeat、mask-box-image-slice

- **滤镜：**
  [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)、box-reflect、backdrop-filter、mix-blend-mode、filter、opacity

- **裁剪：**
  object-fit、clip-path

- **事件：**
  [resize](https://developer.mozilla.org/zh-CN/docs/Web/CSS/resize)、zoom、cursor(光标)、[pointer-events](https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events)、touch-callout、user-select(是否可以选择文本)

## 文字属性

- **模式：**
  line-height、vertical-align

- **文本：**
  text-overflow、text-decoration(线条)、text-decoration-line、text-decoration-style、text-decoration-color、[text-decoration-skip](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-skip)、text-underline-position、[text-align](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align)、text-align-last、text-justify、text-indent(首行缩进)、[text-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)、text-transform(文本大写)

- **字体：**
  src、font、font-family、font-style、font-stretch、font-weight、font-variant、font-size、font-size-adjust(字体大小应取决于小写字母)、color

- **内容：**
  tab-size(制表符宽度)、overflow-wrap(同 word-wrap)、word-wrap、[word-break](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break)、word-spacing(空格长度)、letter-spacing(字符间距)、[white-space](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)(处理空白)、caret-color(光标颜色)、quotes(引号样式)、[content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content)、content-visibility、counter-reset、counter-increment、page、page-break-before、page-break-after、page-break-inside

## 交互属性

- **模式：**
  will-change、perspective(三维位置变换)、perspective-origin、backface-visibility(元素背面朝向观察者时是否可见)

- **变换：**
  [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)(旋转，缩放，倾斜或平移)、transform-origin、transform-style

- **过渡：**
  [transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)、transition-property、transition-duration、transition-timing-function、transition-delay

- **动画：**
  [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)、animation-name、animation-duration、animation-timing-function、animation-delay、animation-iteration-count、animation-direction、animation-play-state、animation-fill-mode
