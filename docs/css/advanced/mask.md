## mask

mask 可以接受一个与 background 语法一样的参数

## 使用 mask 进行内容裁切

<div class="linear-gradient1"></div>

<style>
.linear-gradient1 {
    margin: auto;
    position: relative;
    width: 250px;
    height: 100px;
    background: url(https://i.pinimg.com/originals/e8/ba/25/e8ba252917952f23dfc9715e942e654e.jpg) no-repeat;
    background-size: cover;
    mask: linear-gradient(90deg, transparent, #000);
    -webkit-mask: linear-gradient(90deg, transparent, #000);
}

</style>
