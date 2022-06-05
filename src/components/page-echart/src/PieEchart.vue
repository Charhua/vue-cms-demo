<template>
  <div class="pie-echart">
    <Echart :options="options"></Echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import Echart from '@/base-ui/echart/src/Echart.vue';
import { IDataType } from '@/components/page-echart/types';
//定义props，这里不用默认值
const props = defineProps<{
  pieData: IDataType[];
}>();
//初始化echart属性
const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
});
</script>

<style scoped lang="less"></style>
