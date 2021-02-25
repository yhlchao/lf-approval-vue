<template>
  <div class="item">
    <div class="label">申请组别：</div>
    <div class="content">
      <el-select v-model="valueIndex" placeholder="请选择" ref="select">
        <el-option
          v-for="(item, index) in items"
          :key="item"
          :label="`${item.type}-${item.name}-${item.count}`"
          :value="index"
        ></el-option>
      </el-select>
    </div>
  </div>
  <el-button type="primary" @click="handleSubmit">完成</el-button>
</template>

<script>
import { userData } from '@/utils/lib/userData';

export default {
  name: 'ApplyItem',
  props: {
    selectBlur: Boolean
  },
  data() {
    return {
      items: userData.applicants,
      valueIndex: ''
    };
  },
  watch: {
    selectBlur(value) {
      if (!value) this.$refs.select.blur();
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.items[this.valueIndex]);
    }
  }
};
</script>

<style>
</style>