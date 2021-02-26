<template>
  <div class="panel">
    <div v-for="item in items" :key="item.text" class="panel-item">
      <div class="shape" :class="item.type" @mousedown="startDrag(item)"></div>
      <div class="text">{{ item.text }}</div>
    </div>
    <div class="color-tip">
      <div v-for="item in colorTips" class="item" :key="item">
        <div class="board" :style="{ backgroundColor: item.color }"></div>
        <div class="content">{{ item.text }}</div>
      </div>
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

const colorTips = [
  {
    color: '#9cafb9',
    text: '未配置'
  },
  {
    color: '#434c56',
    text: '已配置'
  }
];

export default {
  name: 'Panel',
  props: {
    startDrag: Function
  },
  data() {
    return {
      items,
      colorTips
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
  position: relative;

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
  .color-tip {
    position: absolute;
    top: 5px;
    right: -10px;
    transform: translateX(100%);
    width: 170px;
    height: 40px;
    background-color: #fff;
    box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
    border-radius: 5px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .item {
      .board,
      .content {
        display: inline-block;
      }
      .board {
        width: 10px;
        height: 10px;
      }
      .content {
        font-size: 14px;
        padding-left: 5px;
      }
    }
  }
}
</style>
