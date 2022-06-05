<template>
  <div class="rose-echart">
    <Echart :options="options"></Echart>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import Echart from '@/base-ui/echart/src/Echart.vue';
import { IDataType } from '@/components/page-echart/types';
//定义props，不用默认值
const props = defineProps<{
  roseData: IDataType[];
}>();
//初始化echart属性，其他属性可从echart官网查阅
const options = computed(() => {
  return {
    // legend: {
    //   top: 'bottom'
    // },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '类别数据',
        type: 'pie',
        radius: [10, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  };
});
</script>

<style scoped lang="less"></style>
