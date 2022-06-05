import * as echarts from 'echarts';
import chinaMapData from '../data/china.json';
echarts.registerMap('china', chinaMapData);
export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el);
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options);
  };
  //触发echart更新视图大小
  const updateSize = () => {
    echartInstance.resize();
  };
  //  监听浏览器视口变化，实时改变echart大小
  window.addEventListener('resize', () => {
    echartInstance.resize();
  });
  return {
    echartInstance,
    setOptions,
    updateSize
  };
}
