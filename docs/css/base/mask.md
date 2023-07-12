# 遮罩

mask 包括八个子属性，每个子属性包括以下参数。其总体使用情况与 background 差不多。

- **mask-mode**: 模式
  - `match-source`：根据图像类型采用适合的遮罩模式(默认)
  - `alpha`：根据图像透明度采用适合的遮罩模式
  - `luminance`：根据图像亮度采用适合的遮罩模式
- **mask-image**:图像
- **mask-repeat**:图像平铺方式
- **mask-position**:图像起始位置
- **mask-size**:图像尺寸模式
- **mask-origin**:定位区域(与 background-position 结合使用)
- **mask-clip**:绘制区域
- **mask-composite**:混合模式
  - `source-over`：叠加，显示遮罩图像合并处
  - `subtract`：相减，不显示遮罩图像重合处
  - `intersect`：相交，显示遮罩图像重合处
  - `exclude`：排除，显示遮罩图像合并处但不显示重合处
