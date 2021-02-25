<template>
  <div class="workbench" :class="{ 'show-workbench': show }">
    <h3 class="title">配置工作台</h3>
    <div class="main">
      <div class="item">
        <div class="label">节点类型：</div>
        <div class="content">
          {{ nodeData.properties?.nodeType + `（${nodeData.type}）` }}
        </div>
      </div>
      <WorkbenchApply
        v-if="nodeData.type === 'apply'"
        :selectBlur="show"
        :applicantIndex="nodeData.properties.applicantIndex"
        @change="handleChange"
      />
      <WorkbenchApproval
        v-if="nodeData.type === 'approval'"
        :selectBlur="show"
        :managerIndex="nodeData.properties.managerIndex"
        @change="handleChange"
      />
      <el-button type="primary" @click="handleSubmit">完成</el-button>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
import { mapState } from 'vuex';
import WorkbenchApply from './WorkbenchApply.vue';
import WorkbenchApproval from './WorkbenchApproval.vue';
import { mockData } from '@/utils/lib/mockData';

export default {
  components: { WorkbenchApply, WorkbenchApproval },
  name: 'Workbench',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    nodeData: Object
  },
  data() {
    return {
      mockDataIndex: -1
    };
  },
  computed: mapState(['lf']),
  methods: {
    handleChange($event) {
      this.mockDataIndex = $event;
    },
    handleSubmit() {
      if (this.mockDataIndex < 0) ElMessage.warning('请选择一组申请示例！');
      let newProperties;
      if (this.nodeData.type === 'apply') {
        newProperties = {
          ...mockData.applicants[this.mockDataIndex]
        };
      } else if (this.nodeData.type === 'approval') {
        newProperties = {
          ...mockData.managers[this.mockDataIndex]
        };
      }
      this.lf.setProperties(this.nodeData.id, {
        configured: true,
        ...this.nodeData.properties,
        ...newProperties
      });
      ElMessage.success('配置成功！');
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
    }
  }
}

.show-workbench {
  transform: translateX(0);
}
</style>