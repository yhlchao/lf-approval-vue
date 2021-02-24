<template>
  <div
    class="hover-card"
    :class="{ 'show-hover-card': hoverData.show }"
    :style="{ top: hoverData.top + 'px', left: hoverData.left + 'px' }"
  >
    <div class="title">进度详情</div>
    <div class="main">
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoverCard',
  props: {
    hoverData: {
      type: Object,
      default: function () {
        return {
          show: false,
          top: 0,
          left: 0,
          data: {}
        };
      }
    }
  }
};
</script>

<style scoped lang='scss'>
.hover-card {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  width: 260px;
  height: 200px;
  background-color: #fff;
  transform: translateX(-50%);
  border-radius: 8px;
  box-shadow: $boxShadowShallow;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.03, 0.75, 0.38, 0.98);

  .title {
    height: 40px;
    width: 100%;
    line-height: 40px;
    border-bottom: 1px rgb(221, 221, 221) solid;
  }
  .main {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
}

.show-hover-card {
  visibility: visible;
}
</style>