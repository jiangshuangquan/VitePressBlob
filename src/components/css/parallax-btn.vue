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
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0))
      rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));
    transition: box-shadow 500ms ease, transform 200ms ease;
  }
  &::after {
    display: inline-block;
    position: relative;
    font-weight: bold;
    content: attr(data-name);
    will-change: transform;
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0))
      rotateY(var(--ry, 0));
    transition: transform 200ms ease;
  }
  &:hover::before {
    box-shadow: 0 5px 15px rgba(#000, 0.3);
  }
}
</style>
