<template>
  <div class="dashboard-main">
    <el-row :gutter="12" class="content-fisrt-row">
      <el-col :span="7">
        <Card title="分类商品数量（饼图）">
          <PieEchart :pieData="categoryGoodsCount"></PieEchart>
        </Card>
      </el-col>
      <el-col :span="10">
        <Card title="不同城市商品数量">
          <MapEchart :mapData="addressGoodsSale"></MapEchart>
        </Card>
      </el-col>
      <el-col :span="7">
        <Card title="分类商品数量（玫瑰图）">
          <RoseEchart :roseData="categoryGoodsCount"></RoseEchart>
        </Card>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="12">
        <Card title="分类商品的销量">
          <LineEchart v-bind="categoryGoodsSale"></LineEchart>
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="分类商品的收藏">
          <BarEchart v-bind="categoryGoodsFavor"></BarEchart>
        </Card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Card from '@/base-ui/card/src/Card.vue';
import PieEchart from '@/components/page-echart/src/PieEchart.vue';
import LineEchart from '@/components/page-echart/src/LineEchart.vue';
import MapEchart from '@/components/page-echart/src/MapEchart.vue';
import RoseEchart from '@/components/page-echart/src/RoseEchart.vue';
import BarEchart from '@/components/page-echart/src/BarEchart.vue';
import { useAnalysisStore } from '@/stores/modules/analysis';
import { storeToRefs } from 'pinia';
export default defineComponent({
  name: 'Dashboard',
  components: { BarEchart, RoseEchart, MapEchart, LineEchart, PieEchart, Card },
  setup() {
    //初始化仓库
    const analysisStore = useAnalysisStore();
    //请求数据
    analysisStore.getAnalysisDataAction();
    // const {
    //   categoryGoodsCount,
    //   categoryGoodsSale,
    //   categoryGoodsFavor,
    //   addressGoodsSale
    // } = storeToRefs(analysisStore);
    // console.log(
    //   categoryGoodsCount,
    //   categoryGoodsSale,
    //   categoryGoodsFavor,
    //   addressGoodsSale
    // );
    // 此页获取数据;
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];
      const { categoryGoodsFavor } = storeToRefs(analysisStore);
      for (const item of categoryGoodsFavor.value) {
        xLabels.push(item.name);
        values.push(item.goodsFavor);
      }
      return { xLabels, values };
    });

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];
      const { categoryGoodsSale } = storeToRefs(analysisStore);
      for (const item of categoryGoodsSale.value) {
        xLabels.push(item.name);
        values.push(item.goodsCount);
      }
      return { xLabels, values };
    });
    const addressGoodsSale = computed(() => {
      const { addressGoodsSale } = storeToRefs(analysisStore);
      return addressGoodsSale.value.map((item: any) => {
        return { name: item.address, value: item.count };
      });
    });
    // const { categoryGoodsCount } = storeToRefs(analysisStore);
    // console.log('测试', categoryGoodsCount.value);
    const categoryGoodsCount = computed(() => {
      const { categoryGoodsCount } = storeToRefs(analysisStore);
      console.log('测试', categoryGoodsCount.value);
      return categoryGoodsCount.value.map((item: any) => {
        return { name: item.name, value: item.goodsCount };
      });
    });
    console.log({
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    });
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    };
  }
});
</script>

<style scoped lang="less">
.content-fisrt-row {
  margin-bottom: 20px;
}
</style>
