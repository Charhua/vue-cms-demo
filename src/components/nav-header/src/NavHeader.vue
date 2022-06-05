<template>
  <div class="header-main">
    <el-icon class="fold-menu" :size="25" @click="changeFoldIcon">
      <Expand v-if="isFold" />
      <Fold v-if="!isFold" />
    </el-icon>
    <div class="content">
      <XtBreadcrumb :breadcrumbs="breadcrumbs" />
      <div>信息</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import XtBreadcrumb from '@/base-ui/breadcrumb';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import mapBreadcrumb from '@/utils/mapBreadCrumb';
export default defineComponent({
  name: 'NavHeader',
  components: {
    XtBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false);
    const changeFoldIcon = () => {
      isFold.value = !isFold.value;
      emit('foldChange', isFold.value);
    };
    //面包屑
    const store = useStore();
    const route = useRoute();
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus;
      const path = route.path;
      return mapBreadcrumb(userMenus, path);
    });
    return {
      isFold,
      changeFoldIcon,
      breadcrumbs
    };
  }
});
</script>

<style scoped lang="less">
.header-main {
  display: flex;
  width: 100%;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px 2px 18px;
  }
}
</style>
