<template>
  <div class="user-main">
    <!--    检索输入框-->
    <PageSearch
      :searchFormConf="searchFormConf"
      @resetBtnClick="handleResetClick"
      @submitBtnClick="handleSubmitClick"
    />
    <!--    表格主体-->
    <PageContent
      :contentTableConf="contentTableConf"
      ref="pageContentRef"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <!--    编辑弹窗-->
    <PageModal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfRef"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { searchFormConf } from '@/pages/home/system/user/config/search.config';
import PageSearch from '@/components/page-search/src/PageSearch.vue';
import { contentTableConf } from '@/pages/home/system/user/config/content.config';
import PageContent from '@/components/page-content/src/PageContent.vue';
import { usePageSearch } from '@/hooks/usePageSearch';
import PageModal from '@/components/page-modal/src/PageModal.vue';
import { usePageModal } from '@/hooks/usePageModal';
import { modalConf } from '@/pages/home/system/user/config/modal.config';
import { useInitRootStore } from '@/stores/modules/root';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'User',
  components: {
    PageModal,
    PageContent,
    PageSearch
  },
  setup() {
    //使用hooks注册搜索按钮事件
    const { pageContentRef, handleResetClick, handleSubmitClick } =
      usePageSearch();

    //hook动态回调，用于特定场景是否展示密码框
    const newCallback = () => {
      const passwordItem = modalConf.formItems.find((item) => {
        return item.field === 'password';
      });
      passwordItem!.isHidden = false;
    };
    const editCallback = () => {
      const passwordItem = modalConf.formItems.find((item) => {
        return item.field === 'password';
      });
      passwordItem!.isHidden = false;
    };
    //调用hook
    const { pageModalRef, defaultInfo, handleNewData, handleEditData } =
      usePageModal(newCallback, editCallback);
    //动态的响应式添加部门和角色列表
    const initRootStore = useInitRootStore();
    const modalConfRef = computed((): any => {
      //根据配置文件匹配列表
      const departmentItem = modalConf.formItems.find(
        (item) => item.field === 'departmentId'
      );
      const roleItem = modalConf.formItems.find(
        (item) => item.field === 'roleId'
      );
      //响应式结构store中对象
      const { entireDepartment, entireRole } = storeToRefs(initRootStore);
      //赋值
      departmentItem!.selectOptions = entireDepartment.value.map(
        (item: any) => {
          return { title: item.name, value: item.id };
        }
      );
      roleItem!.selectOptions = entireRole.value.map((item: any) => {
        return { title: item.name, value: item.id };
      });
      return modalConf;
    });

    console.log('modalConfRef', modalConfRef);
    console.log('defaultInfo', defaultInfo.value);
    return {
      searchFormConf,
      contentTableConf,
      pageContentRef,
      handleResetClick,
      handleSubmitClick,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      modalConfRef
    };
  }
});
</script>

<style scoped lang="less"></style>
