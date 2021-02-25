<template>
  <div class="item">
    <div class="label">申请组别：</div>
    <div class="content">
      <el-select v-model="itemIndex" placeholder="请选择" ref="select">
        <el-option
          v-for="(item, index) in items"
          :key="item"
          :label="`${item.type}-${item.name}-${item.count}`"
          :value="index"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import { mockData } from '@/utils/lib/mockData';

export default {
  name: 'WorkbenchApply',
  props: {
    selectBlur: Boolean,
    applicantIndex: Number
  },
  data() {
    return {
      items: mockData.applicants,
      itemIndex: this.applicantIndex
    };
  },
  watch: {
    selectBlur(value) {
      if (!value) this.$refs.select.blur();
    },
    itemIndex(value) {
      this.$emit('change', value);
    }
  },
};
</script>

<style>
</style>