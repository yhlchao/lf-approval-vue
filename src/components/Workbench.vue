<template>
  <div class="workbench" :class="{ 'show-workbench': show }">
    <h3 class="title">配置工作台</h3>
    <div class="main">
      <div class="item">
        <div class="label">节点类型：</div>
        <div class="content">{{ data.properties.nodeType + `（${data.type}）`}}</div>
      </div>
      <ApplyItem />
    </div>
  </div>
</template>

<script>
import ApplyItem from './ApplyItem.vue';
export default {
  components: { ApplyItem },
  name: 'Workbench',
  props: {
    show: Boolean,
    data: {
      type: Object,
      default: function () {
        return {
          properties: {
            nodeType: '未知'
          }
        };
      }
    }
  }
};
</script>

<style lang="scss">
.workbench {
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background-color: #fff;
  box-shadow: $boxShadowDeep;
  border-top-left-radius: $roundAngle + 4;
  border-bottom-left-radius: $roundAngle + 4;
  transform: translateX(100%);
  transition: all 0.3s cubic-bezier(0.03, 0.75, 0.38, 0.98);
  text-align: left;

  .title {
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    border-bottom: 1px $hrColor solid;
  }
  .main {
    padding: 20px;

    .item {
      margin-bottom: 10px;

      .label,
      .content {
        display: inline-block;
        padding: 2px 0 2px 6px;
      }
      .label {
        // background-color: #c1e0ff;
      }
    }
  }
}

.show-workbench {
  transform: translateX(0);
}
</style>