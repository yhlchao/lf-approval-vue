<template>
  <div class="panel">
    <div v-for="item in items" :key="item.text" class="panel-item">
      <div class="shape" :class="item.type" @mousedown="startDrag(item)"></div>
      <div class="text">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
import { NODE } from '@/utils/lib/constant';

const items = [
  {
    type: 'apply',
    text: '申请',
    properties: {
      nodeType: NODE.APPLY
    }
  },
  {
    type: 'approval',
    text: '审批',
    properties: {
      nodeType: NODE.APPROVAL
    }
  },
  {
    type: 'judgement',
    text: '判断',
    properties: {
      nodeType: NODE.JUDGEMENT
    }
  },
  {
    type: 'end',
    text: '结束',
    properties: {
      nodeType: NODE.END
    }
  }
];

export default {
  name: 'Panel',
  props: {
    startDrag: Function
  },
  data() {
    return {
      items
    };
  }
};
</script>

<style scoped lang="scss">
.panel {
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  border-right: 1px rgb(221, 221, 221) solid;
  user-select: none;
  background-color: #fff;

  &-item {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  .shape {
    border: 1px #55616d solid;
    cursor: grab;
  }
  .text {
    margin-top: 6px;
    font-size: 14px;
  }
  .apply,
  .end {
    width: 40px;
    height: 40px;
    border-radius: 22px;
  }
  .approval {
    width: 42px;
    height: 36px;
    border-radius: $roundAngle;
  }
  .judgement {
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
  }
}
</style>
