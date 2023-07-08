# 盒模型

## 格式化上下文

格式化上下文指决定渲染区域内节点的排版、关系和互相作用的渲染规则

- **块：**

  根节点：html

  非溢出可见节点：overflow:!visible

  浮动节点：float:left/right

  绝对定位节点：position:absolute/fixed

  被定义为块级的非块级节点：
  display:inline-block/table-cell/table-caption/flex/inline-flex/grid/inline-grid

- **行：**
  若加入块元素则会产生相应个数的匿名块并互相隔离

- **弹性：**
  display 为 flex 或 inline-flex

- **格栅：**
  display 为 grid 或 inline-grid 时

## 文档流常见缺陷

- **空白折叠：**
  换行编写行内元素，排版会出现 5px 空隙
- **高矮不齐：**
  行内元素统一以底边垂直对齐
- **自动换行：**
  排版若一行无法完成则换行接着排版

## 样式特性

- **就近原则：**
  后出现的样式其优先级别比先出现的样式更高
- **继承样式：**
  优先级别最低
- **!important 样式：**
  优先级别最高，若冲突则重新计算
- **引入权重：**
  内联样式 > 内嵌样式 > 外部样式 > 导入样式

- **直观权重：**

  10000：!important

  1000：内联样式

  100：ID 选择器

  10：类选择器、伪类选择器、属性选择器

  1：标签选择器、伪元素选择器

  0：通配选择器、兄弟选择器、后代选择器

## 长度单位

![梳理](/css/length.png)
