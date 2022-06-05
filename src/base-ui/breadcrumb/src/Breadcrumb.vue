<template>
  <div>
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue';
import { IBreadcrumb } from '@/base-ui/breadcrumb';

export default defineComponent({
  name: 'Breadcrumb',
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {
      ArrowRight
    };
  }
});
</script>

<style scoped lang="less"></style>
