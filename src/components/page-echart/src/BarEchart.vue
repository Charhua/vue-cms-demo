<template>
  <div class="bar-echart">
    <Echart :options="options"></Echart>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue';
import Echart from '@/base-ui/echart/src/Echart.vue';
import * as echarts from 'echarts';
//定义props
const props = withDefaults(
  defineProps<{
    title?: string;
    xLabels: string[];
    values: any[];
  }>(),
  {
    title: ''
  }
);
//初始化echart属性，在computed中，这样能确保数据改变的响应性
const options = computed(() => {
  return {
    xAxis: {
      data: props.xLabels,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.values
      }
    ]
  };
});
</script>

<style scoped lang="less"></style>
