<template>
  <div class="content">
    <XtTable
      :listData="dataList"
      :listCount="dataCount"
      v-model:page="pageInfo"
      v-bind="contentTableConf"
    >
      <!--      header插槽-->
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          type="primary"
          size="default"
          @click="handleNewClick"
          >新建用户</el-button
        >
      </template>
      <!--      状态显示插槽-->
      <template #status="scope">
        <el-tag :type="scope.row.enable ? 'success' : 'danger'">{{
          scope.row.enable ? '正常' : '异常'
        }}</el-tag>
      </template>
      <!--      创建时间插槽-->
      <template #createAt="scope">
        <span>{{ $filters.formatUtcTime(scope.row.createAt) }}</span>
      </template>
      <!--      更新时间插槽-->
      <template #updateAt="scope">
        <span>{{ $filters.formatUtcTime(scope.row.updateAt) }}</span>
      </template>
      <!--      操作插槽-->
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            v-if="isUpdate"
            size="small"
            type="primary"
            plain
            @click="handleEditClick(scope.row)"
            ><el-icon><Edit /></el-icon>编辑</el-button
          >
          <el-button
            v-if="isDelete"
            size="small"
            type="danger"
            plain
            @click="handleDeleteClick(scope.row)"
            ><el-icon><DeleteFilled /></el-icon>删除</el-button
          >
        </div>
      </template>
      <!--      其他动态插槽-->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </XtTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue';
import { useSystemStore } from '@/stores/modules/system';
import XtTable from '@/base-ui/table';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'PageContent',
  components: { XtTable },
  props: {
    contentTableConf: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const systemStore = useSystemStore();
    //TODO:这里Vuex4为过渡阶段，迁移pinia时以下要抽取到hooks中
    const store = useStore();
    const usePermission = (pageName: string, handleName: string) => {
      const permissions = store.state.login.permissions;
      const verifyPermission = `system:${pageName}:${handleName}`;
      //这里!! 转布尔类型
      return !!permissions.find((item: any) => item === verifyPermission);
    };
    //以上过渡阶段

    // 获取操作的权限
    const isCreate = usePermission(props.pageName, 'create');
    const isUpdate = usePermission(props.pageName, 'update');
    const isDelete = usePermission(props.pageName, 'delete');
    const isQuery = usePermission(props.pageName, 'query');

    // 双向绑定pageInfo，用于动态改变分页信息
    const pageInfo = ref({ currentPage: 1, pageSize: 10 });
    //TODO:有严重BUG，选择20页再选择10后，无限请求数据
    // watch(pageInfo, () => getPageData());
    //网络请求数据
    const getPageData = (info: any = {}) => {
      //权限查询判断
      if (!isQuery) return;
      systemStore.getPageListsAction({
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...info
        }
      });
    };
    getPageData();

    //从仓库获取Getter中计算后的列表数据
    const dataList = computed(() => {
      return systemStore.pageListData(props.pageName);
    });
    const dataCount = computed(() => {
      return systemStore.pageCountData(props.pageName);
    });

    // 获取页面自定义动态插槽名称
    const otherPropSlots = props.contentTableConf?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false;
        if (item.slotName === 'createAt') return false;
        if (item.slotName === 'updateAt') return false;
        if (item.slotName === 'handler') return false;
        return true;
      }
    );

    //点击按钮操作
    //新建和编辑
    const handleNewClick = () => {
      emit('newBtnClick');
    };
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item);
    };
    //删除
    const handleDeleteClick = (item: any) => {
      systemStore.deletePageDataAction({
        pageName: props.pageName,
        id: item.id
      });
    };
    return {
      getPageData,
      dataList,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    };
  }
});
</script>

<style scoped lang="less">
.content {
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #fff;
}
</style>
