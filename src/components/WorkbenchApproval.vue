<template>
  <div class="item">
    <div class="label">审批人：</div>
    <div class="content">
      <el-select v-model="itemIndex" placeholder="请选择" ref="select">
        <el-option
          v-for="(item, index) in items"
          :key="item"
          :label="`${item.name}-${item.level}-${item.id}`"
          :value="index"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import { mockData } from '@/utils/lib/mockData';

export default {
  name: 'WorkbenchApproval',
  props: {
    selectBlur: Boolean,
    managerIndex: Number
  },
  data() {
    return {
      items: mockData.managers,
      itemIndex: this.managerIndex
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
  methods: {}
};
</script>

<style>
</style>