<template>
  <div class="goods-main">
    <PageSearch
      :searchFormConf="searchFormConf"
      @resetBtnClick="handleResetClick"
      @submitBtnClick="handleSubmitClick"
    ></PageSearch>
    <PageContent
      :contentTableConf="contentTableConf"
      pageName="goods"
      ref="pageContentRef"
    >
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #oldPrice="scope">{{ '¥' + scope.row.oldPrice }}</template>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageContent from '@/components/page-content/src/PageContent.vue';
import PageSearch from '@/components/page-search/src/PageSearch.vue';
import { contentTableConf } from '@/pages/home/product/goods/config/content.config';
import { searchFormConf } from '@/pages/home/product/goods/config/search.config';
import { usePageSearch } from '@/hooks/usePageSearch';
export default defineComponent({
  name: 'Goods',
  components: { PageSearch, PageContent },
  setup() {
    //使用hooks注册搜索按钮事件
    const { pageContentRef, handleResetClick, handleSubmitClick } =
      usePageSearch();
    return {
      searchFormConf,
      contentTableConf,
      pageContentRef,
      handleResetClick,
      handleSubmitClick
    };
  }
});
</script>

<style scoped lang="less"></style>
