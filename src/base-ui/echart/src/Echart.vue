<template>
  <div class="echart-main">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
//导入必须依赖
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue';
import { EChartsOption } from 'echarts';
import useEchart from '@/base-ui/echart/hooks/useEchart';
//定义props，其中withDefaults传入第一个参数defineProps函数可以定义props属性类型，第二个参数传对象给默认值
const props = withDefaults(
  defineProps<{
    options: EChartsOption;
    width?: string;
    height?: string;
  }>(),
  {
    width: '100%',
    height: '360px'
  }
);
//定义ref节点
const echartDivRef = ref<HTMLElement>();
//onMounted挂在echart节点
onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!);

  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>

<style scoped lang="less"></style>
