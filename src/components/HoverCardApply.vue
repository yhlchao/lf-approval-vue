<template>
  <div class="item">
    <div class="label">申请人：</div>
    <div class="content">{{ nodeData.properties?.name }}</div>
  </div>
  <div class="item">
    <div class="label">工号：</div>
    <div class="content">{{ nodeData.properties?.id }}</div>
  </div>
  <div class="item">
    <div class="label">报销类型：</div>
    <div class="content">{{ nodeData.properties?.type }}</div>
  </div>
  <div class="item">
    <div class="label">金额：</div>
    <div class="content count">{{ nodeData.properties?.count }}</div>
  </div>
  <div class="item">
    <div class="label">申请时间：</div>
    <div class="content">{{ nodeData.properties?.time }}</div>
  </div>
</template>

<script>
export default {
  name: 'HoverCardApply',
  props: {
    nodeData: Object
  }
};
</script>