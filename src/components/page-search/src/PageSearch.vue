<template>
  <div class="page-search-main">
    <XtForm v-bind="searchFormConf" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleReset">重置</el-button>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
        </div>
      </template>
    </XtForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import XtForm from '@/base-ui/form';
import form from '@/base-ui/form';
export default defineComponent({
  name: 'PageSearch',
  props: {
    searchFormConf: {
      type: Object,
      reuqired: true
    }
  },
  components: {
    XtForm
  },
  emits: ['resetBtnClick', 'submitBtnClick'],
  setup(props, { emit }) {
    //formData由config动态生成
    const formItems = props.searchFormConf?.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.field] = '';
    }
    const formData = ref(formOriginData);
    //    点击重置
    const handleReset = () => {
      emit('resetBtnClick', formData.value);
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key];
      }
    };
    //点击搜索
    const handleSearch = () => {
      console.log('搜索');
      emit('submitBtnClick', formData.value);
    };
    return {
      formData,
      handleReset,
      handleSearch
    };
  }
});
</script>

<style scoped lang="less">
.header {
  color: #000;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
