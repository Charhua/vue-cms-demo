import { defineStore } from 'pinia';
import {
  getCategoryGoodsCount,
  getAddressGoodsSale,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '@/service/analysis';
interface IDashboardState {
  categoryGoodsCount: any[];
  categoryGoodsSale: any[];
  categoryGoodsFavor: any[];
  addressGoodsSale: any[];
}
export const useAnalysisStore = defineStore('analysisStore', {
  state: (): IDashboardState => {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    };
  },
  getters: {},
  actions: {
    //获取统计数据
    async getAnalysisDataAction() {
      const categoryCountResult = await getCategoryGoodsCount();
      this.categoryGoodsCount = categoryCountResult.data;
      const categorySaleResult = await getCategoryGoodsSale();
      this.categoryGoodsSale = categorySaleResult.data;
      const categoryFavorResult = await getCategoryGoodsFavor();
      this.categoryGoodsFavor = categoryFavorResult.data;
      const addressGoodsSaleResult = await getAddressGoodsSale();
      this.addressGoodsSale = addressGoodsSaleResult.data;
    }
  }
});
