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
