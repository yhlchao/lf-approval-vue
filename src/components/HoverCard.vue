<template>
  <div
    class="hover-card"
    :class="{ 'show-hover-card': showCard }"
    :style="{
      transform: `translate(${x - 130}px, ${y + 60}px)`
    }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div class="title">配置详情</div>
    <div class="main">
      <HoverCardApply
        v-if="hoverNodeData?.type === 'apply'"
        :nodeData="hoverNodeData"
      />
      <HoverCardApproval
        v-if="hoverNodeData?.type === 'approval'"
        :nodeData="hoverNodeData"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HoverCardApply from './HoverCardApply.vue';
import HoverCardApproval from './HoverCardApproval.vue';

export default {
  components: { HoverCardApply, HoverCardApproval },
  name: 'HoverCard',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      hover: false
    };
  },
  computed: {
    ...mapState(['hoverNodeData']),
    showCard() {
      if (this.show) return true;
      else if (this.hover) return true;
      return false;
    }
  }
};
</script>

<style lang='scss'>
.hover-card {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  width: 260px;
  height: 200px;
  background-color: #fff;
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
    text-align: left;
    padding: 15px;

    .item {
      margin-bottom: 6px;

      .label,
      .content {
        display: inline-block;
      }
      .count {
        font-weight: bold;
      }
    }
    .item:last-child {
      margin-bottom: 0;
    }
  }
}

.show-hover-card {
  visibility: visible;
}
</style>