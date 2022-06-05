<template>
  <div class="role">
    <PageSearch
      :searchFormConf="searchFormConf"
      @resetBtnClick="handleResetClick"
      @submitBtnClick="handleSubmitClick"
    ></PageSearch>
    <PageContent
      :contentTableConf="contentTableConf"
      ref="pageContentRef"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></PageContent>
    <PageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :modalConfig="modalConf"
      pageName="role"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        ></el-tree>
      </div>
    </PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue';
import PageSearch from '@/components/page-search/src/PageSearch.vue';
import PageContent from '@/components/page-content/src/PageContent.vue';
import { searchFormConf } from '@/pages/home/system/role/config/search.config';
import { contentTableConf } from '@/pages/home/system/role/config/content.config';
import { usePageSearch } from '@/hooks/usePageSearch';
import PageModal from '@/components/page-modal/src/PageModal.vue';
import { modalConf } from '@/pages/home/system/role/config/modal.config';
import { ElTree } from 'element-plus';
import { mapMenuLeafKeys } from '@/utils/mapMenuLeaf';
import { usePageModal } from '@/hooks/usePageModal';
import { useInitRootStore } from '@/stores/modules/root';
import { storeToRefs } from 'pinia';
export default defineComponent({
  name: 'Role',
  components: { PageModal, PageContent, PageSearch },
  setup() {
    //使用hooks注册搜索按钮事件
    const { pageContentRef, handleResetClick, handleSubmitClick } =
      usePageSearch();

    //处理pageModal的hook逻辑
    type CallbackFn = () => void;
    const elTreeRef = ref<InstanceType<typeof ElTree>>();
    const editCallback = (item: any) => {
      const leafKeys = mapMenuLeafKeys(item.menuList);
      nextTick(() => {
        console.log('测试');
        elTreeRef.value?.setCheckedKeys(leafKeys, false);
      });
    };
    const { pageModalRef, defaultInfo, handleNewData, handleEditData } =
      usePageModal(undefined, editCallback);
    //网络请求获取menu数据
    const initRootStore = useInitRootStore();
    const { entireMenu: menus } = storeToRefs(initRootStore);

    //考虑其他选项信息
    const otherInfo = ref({});
    const handleCheckChange = (info1: any, info2: any) => {
      const checkedKeys = info2.checkedKeys;
      const halfCheckedKeys = info2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      console.log('很好', menuList);
      otherInfo.value = { menuList };
    };
    return {
      searchFormConf,
      contentTableConf,
      pageContentRef,
      handleResetClick,
      handleSubmitClick,
      modalConf,
      handleCheckChange,
      otherInfo,
      menus,
      elTreeRef,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData
    };
  }
});
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
