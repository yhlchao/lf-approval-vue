<template>
  <div
    class="workbench"
    :class="{
      'show-workbench':
        show && workbenchNodeData?.properties?.needConfig !== false
    }"
  >
    <h3 class="title">配置工作台</h3>
    <div class="main">
      <div class="item">
        <div class="label">节点类型：</div>
        <div class="content">
          {{
            workbenchNodeData?.properties?.nodeType +
            `（${workbenchNodeData?.type}）`
          }}
        </div>
      </div>
      <WorkbenchApply
        v-if="workbenchNodeData?.type === 'apply'"
        :selectBlur="show"
        :applicantIndex="workbenchNodeData?.properties?.applicantIndex"
        @change="handleChange"
      />
      <WorkbenchApproval
        v-if="workbenchNodeData?.type === 'approval'"
        :selectBlur="show"
        :managerIndex="workbenchNodeData?.properties?.managerIndex"
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
    }
  },
  data() {
    return {
      applicantIndex: -1,
      managerIndex: -1
    };
  },
  computed: mapState(['lf', 'workbenchNodeData']),
  methods: {
    handleChange($event) {
      switch (this.workbenchNodeData.type) {
        case 'apply':
          this.applicantIndex = $event;
          break;
        case 'approval':
          this.managerIndex = $event;
          break;
        default:
          break;
      }
      this.applicantIndex = $event;
    },
    handleSubmit() {
      let newProperties;
      if (this.workbenchNodeData.type === 'apply' && this.applicantIndex >= 0) {
        newProperties = {
          ...mockData.applicants[this.applicantIndex]
        };
      } else if (
        this.workbenchNodeData.type === 'approval' &&
        this.managerIndex >= 0
      ) {
        newProperties = {
          ...mockData.managers[this.managerIndex]
        };
      } else {
        ElMessage.warning('请选择一组申请示例！');
        return;
      }
      this.lf.setProperties(this.workbenchNodeData.id, {
        configured: true,
        ...this.workbenchNodeData.properties,
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