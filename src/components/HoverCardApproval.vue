<template>
  <div class="item">
    <div class="label">审批人：</div>
    <div class="content">{{ nodeData.properties?.name }}</div>
  </div>
  <div class="item">
    <div class="label">工号：</div>
    <div class="content">{{ nodeData.properties?.id }}</div>
  </div>
</template>

<script>
export default {
  name: 'HoverCardApply',
  props: {
    nodeData: {
      type: Object,
      default: function () {
        return {
          properties: {
            name: '',
            id: ''
          }
        };
      }
    }
  }
};
</script>