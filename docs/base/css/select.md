# 选择器

## 基础选择器

| 选择器   |    别名    |      说明      | 版本 |
| -------- | :--------: | :------------: | :--: |
| `tag`    | 标签选择器 | 指定类型的标签 |  1   |
| `#id`    | ID 选择器  | 指定身份的标签 |  1   |
| `.class` |  类选择器  | 指定类名的标签 |  1   |
| `*`      | 通配选择器 | 所有类型的标签 |  2   |

## 层次选择器

| 选择器      |      别名      |        说明        | 版本 |
| ----------- | :------------: | :----------------: | :--: |
| elemP elemC |   后代选择器   |   元素的后代元素   |  1   |
| elemP>elemC |   子代选择器   |   元素的子代元素   |  2   |
| elem1+elem2 | 相邻同胞选择器 | 元素相邻的同胞元素 |  2   |
| elem1~elem2 | 通用同胞选择器 | 元素后面的同胞元素 |  3   |

## 集合选择器

| 选择器      |    别名    |      说明      | 版本 |
| ----------- | :--------: | :------------: | :--: |
| elem1,elem2 | 并集选择器 | 多个指定的元素 |  1   |
| elem.class  | 交集选择器 | 指定类名的元素 |  1   |

## 条件选择器

| 选择器      |                  别名                  | 版本 |
| ----------- | :------------------------------------: | :--: |
| :lang       |           指定标记语言的元素           |  2   |
| :dir()      |           指定编写方向的元素           |  4   |
| :has        |           包括指定元素的元素           |  4   |
| :is         |             指定条件的元素             |  4   |
| :not        |            非指定条件的元素            |  4   |
| :where      |             指定条件的元素             |  4   |
| :scope      |           指定元素作为参考点           |  4   |
| :any-link   |        所有包括 href 的链接元素        |  4   |
| :local-link | 所有包括 href 且属于绝对地址的链接元素 |  4   |

## 状态选择器

| 选择器             |              别名              | 版本 |
| ------------------ | :----------------------------: | :--: |
| :active            |         鼠标激活的元素         |  1   |
| :hover             |         鼠标悬浮的元素         |  1   |
| :link              |        未访问的链接元素        |  1   |
| :visited           |        已访问的链接元素        |  1   |
| :target            |         当前锚点的元素         |  3   |
| :focus             |       输入聚焦的表单元素       |  2   |
| :required          |       输入必填的表单元素       |  3   |
| :valid             |       输入合法的表单元素       |  3   |
| :invalid           |       输入非法的表单元素       |  3   |
| :in-range          |      输入范围内的表单元素      |  3   |
| :out-of-range      |      输入范围外的表单元素      |  3   |
| :checked           |       选项选中的表单元素       |  3   |
| :optional          |       选项可选的表单元素       |  3   |
| :enabled           |       事件启用的表单元素       |  3   |
| :disabled          |       事件禁用的表单元素       |  3   |
| :read-only         |         只读的表单元素         |  3   |
| :read-write        |       可读可写的表单元素       |  3   |
| :target-within     | 内部锚点元素处于激活状态的元素 |  4   |
| :focus-within      | 内部表单元素处于聚焦状态的元素 |  4   |
| :focus-visible     |       输入聚焦的表单元素       |  4   |
| :blank             |       输入为空的表单元素       |  4   |
| :user-invalid      |       输入合法的表单元素       |  4   |
| :indeterminate     |       选项未定的表单元素       |  4   |
| :placeholder-shown |       占位显示的表单元素       |  4   |
| :current()         |          浏览中的元素          |  4   |
| :past()            |          已浏览的元素          |  4   |
| :future()          |          未浏览的元素          |  4   |
| :playing           |       开始播放的媒体元素       |  4   |
| :paused            |       暂停播放的媒体元素       |  4   |

## 结构选择器

| 选择器               |           别名           | 版本 |
| -------------------- | :----------------------: | :--: |
| :root                |       文档的根元素       |  3   |
| :empty               |      无子元素的元素      |  3   |
| :nth-child(n)        | 元素中指定顺序索引的元素 |  3   |
| :nth-last-child(n)   | 元素中指定逆序索引的元素 |  3   |
| :first-child         |     元素中为首的元素     |  2   |
| :last-child          |     元素中为尾的元素     |  3   |
| :only-child          |  父元素仅有该元素的元素  |  3   |
| :nth-of-type(n)      | 标签中指定顺序索引的标签 |  3   |
| :nth-last-of-type(n) | 标签中指定逆序索引的标签 |  3   |
| :first-of-type       |     标签中为首的标签     |  3   |
| :last-of-type        |     标签中为尾的标签     |  3   |
| :only-of-type        |  父元素仅有该标签的标签  |  3   |

## 属性选择器

| 选择器        |                    别名                    | 版本 |
| ------------- | :----------------------------------------: | :--: |
| `[attr]`      |               指定属性的元素               |  2   |
| `[attr=val]`  |            属性等于指定值的元素            |  2   |
| `[attr*=val]` |            属性包括指定值的元素            |  3   |
| `[attr^=val]	` |           属性以指定值开头的元素           |  3   |
| `[attr$=val]	` |           属性以指定值结尾的元素           |  3   |
| `[attr~=val]` | 属性包括指定值(完整单词)的元素(不推荐使用) |  2   |

## 伪元素

| 选择器         |        别名        | 版本 |
| -------------- | :----------------: | :--: |
| ::before       | 在元素前加入的内容 |  2   |
| ::after        | 在元素后加入的内容 |  2   |
| ::first-letter |    元素的首字母    |  1   |
| ::first-line   |     元素的首行     |  1   |
| ::selection    |   鼠标选中的元素   |  3   |
| ::backdrop     |   全屏模式的元素   |  4   |
| ::placeholder  |   表单元素的占位   |  4   |

<script setup>
import Hover from '../../../src/components/css/hover.vue' 
import validation from '../../../src/components/css/validation.vue' 
import TabNavbar from '../../../src/components/css/tab-navbar.vue' 
import Before from '../../../src/components/css/before.vue' 

</script>

## hover

::: tip
`:hover `作用于鼠标悬浮的节点，是一个很好用的选择器。在指定场景可代替 `mouseenter` 与 `mouseleave` 两个鼠标事件，加上 `transtion` 让节点的动画更丝滑。

- 给节点标记一个用户属性`data-*`
- 当鼠标悬浮在该节点中触发`:hover`
- 通过`attr()`获取`data-*`的内容
- 将`data-*`的内容赋值到伪元素的`content`中

::: details 详细代码

```vue
<template>
  <ul class="hover-tips">
    <li data-name="姨妈红"></li>
    <li data-name="基佬紫"></li>
    <li data-name="箩底橙"></li>
    <li data-name="姣婆蓝"></li>
    <li data-name="大粪青"></li>
    <li data-name="原谅绿"></li>
  </ul>
</template>

<script>
export default {
  name: 'Hover'
};
</script>

<style lang="scss" scoped>
$color-list: #f66 #66f #f90 #09f #9c3 #3c9;
.hover-tips {
  display: flex;
  justify-content: space-between;
  width: 200px;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin-top: 0 !important;
    position: relative;
    padding: 2px;
    border: 2px solid transparent;
    border-radius: 100%;
    width: 24px;
    height: 24px;
    background-clip: content-box;
    cursor: pointer;
    transition: all 300ms;
    &::before,
    &::after {
      position: absolute;
      left: 50%;
      bottom: 100%;
      opacity: 0;
      transform: translate3d(0, -30px, 0);
      transition: all 300ms;
    }
    &::before {
      margin: 0 0 12px -35px;
      border-radius: 5px;
      width: 70px;
      height: 30px;
      background-color: rgba(#000, 0.5);
      line-height: 30px;
      text-align: center;
      color: #fff;
      content: attr(data-name);
    }
    &::after {
      margin-left: -6px;
      border: 6px solid transparent;
      border-top-color: rgba(#000, 0.5);
      width: 0;
      height: 0;
      content: '';
    }
    @each $color in $color-list {
      $index: index($color-list, $color);
      &:nth-child(#{$index}) {
        background-color: $color;
        &:hover {
          border-color: $color;
        }
      }
    }
    &:hover {
      &::before,
      &::after {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }
}
</style>
```

:::

<Hover/>

## :valid 与:invalid

::: tip
完成一个完整的表单验证，需以下 HTML 属性与选择器搭配

- **placeholder：**占位，在未输入内容时显示提示文本
- **pattern：**正则，在输入内容时触发正则验证
- **:valid：**作用于输入合法的表单节点
- **:invalid：**作用于输入非法的表单节点

::: details 详细代码

```vue
<template>
  <form class="form-validation">
    <div>
      <label>名字</label>
      <input
        type="text"
        placeholder="请输入你的名字(1到10个中文)"
        pattern="^[\u4e00-\u9fa5]{1,10}$"
        required
      />
    </div>
    <div>
      <label>手机</label>
      <input
        type="text"
        placeholder="请输入你的手机"
        pattern="^1[3456789]\d{9}$"
        required
      />
    </div>
    <div>
      <label>简介</label>
      <textarea required></textarea>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Validation'
};
</script>

<style lang="scss" scoped>
.form-validation {
  width: 500px;
  div + div {
    margin-top: 10px;
  }
  label {
    display: block;
    padding-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
  }
  input,
  textarea {
    display: block;
    padding: 0 20px;
    border: 1px solid #ccc;
    width: 100%;
    height: 40px;
    outline: none;
    caret-color: #09f;
    transition: all 300ms;
    &:valid {
      border-color: #3c9;
    }
    &:invalid {
      border-color: #f66;
    }
  }
  textarea {
    height: 122px;
    resize: none;
    line-height: 30px;
    font-size: 16px;
  }
}
</style>
```

:::

<validation/>

## checked

::: tip

模拟鼠标点击事件
`<input>`使用 id 与`<label>`使用 for 关联起来

::: details 详细代码

```vue
<template>
  <div class="bruce flex-ct-x" data-title="标签导航">
    <div class="tab-navbar">
      <input id="tab1" type="radio" name="tabs" hidden checked />
      <input id="tab2" type="radio" name="tabs" hidden />
      <input id="tab3" type="radio" name="tabs" hidden />
      <input id="tab4" type="radio" name="tabs" hidden />
      <nav>
        <label for="tab1">标题1</label>
        <label for="tab2">标题2</label>
        <label for="tab3">标题3</label>
        <label for="tab4">标题4</label>
      </nav>
      <main>
        <ul>
          <li>内容1</li>
          <li>内容2</li>
          <li>内容3</li>
          <li>内容4</li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabNavbar'
};
</script>

<style lang="scss" scoped>
.active {
  background-color: #3c9;
  color: #fff;
}
.tab-navbar {
  display: flex;
  overflow: hidden;
  flex-direction: column-reverse;
  border-radius: 10px;
  width: 300px;
  height: 400px;
  input {
    &:nth-child(1):checked {
      & ~ nav label:nth-child(1) {
        @extend .active;
      }
      & ~ main ul {
        background-color: #f66;
        transform: translate3d(0, 0, 0);
      }
    }
    &:nth-child(2):checked {
      & ~ nav label:nth-child(2) {
        @extend .active;
      }
      & ~ main ul {
        background-color: #66f;
        transform: translate3d(-25%, 0, 0);
      }
    }
    &:nth-child(3):checked {
      & ~ nav label:nth-child(3) {
        @extend .active;
      }
      & ~ main ul {
        background-color: #f90;
        transform: translate3d(-50%, 0, 0);
      }
    }
    &:nth-child(4):checked {
      & ~ nav label:nth-child(4) {
        @extend .active;
      }
      & ~ main ul {
        background-color: #09f;
        transform: translate3d(-75%, 0, 0);
      }
    }
  }
  nav {
    display: flex;
    height: 40px;
    background-color: #f0f0f0;
    line-height: 40px;
    text-align: center;
    label {
      flex: 1;
      cursor: pointer;
      transition: all 300ms;
    }
  }
  main {
    flex: 1;
    ul {
      display: flex;
      flex-wrap: nowrap;
      width: 400%;
      height: 100%;
      transition: all 300ms;
      margin: 0 !important;
    }
    li {
      margin-top: 0 !important;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-weight: bold;
      font-size: 20px;
      color: #fff;
    }
  }
}
</style>
```

:::

<TabNavbar/>

## focus-within

## :empty

## ::before 与::after

::: tip

气泡小尾巴

::: details 详细代码

```vue
<template>
  <div>
    <div class="bubble-box">iCSS</div>
    <div class="bubble-empty-box">iCSS</div>
  </div>
</template>

<script>
export default {
  name: 'Before'
};
</script>

<style lang="scss" scoped>
.bubble-box {
  position: relative;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  background-color: #f90;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  &::after {
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -5px;
    border: 5px solid transparent;
    border-left-color: #f90;
    content: '';
  }
}
.bubble-empty-box {
  position: relative;
  margin-top: 10px;
  border: 2px solid #f90;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  line-height: 46px;
  text-align: center;
  font-size: 20px;
  color: #f90;
  &::before {
    position: absolute;
    left: 100%;
    top: 50%;
    margin: -5px 0 0 2px;
    border: 5px solid transparent;
    border-left-color: #f90;
    content: '';
  }
  &::after {
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -4px;
    border: 4px solid transparent;
    border-left-color: #fff;
    content: '';
  }
}
</style>
```

:::

<Before/>
