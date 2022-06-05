<template>
  <div class="modal-main">
    <el-dialog
      title="新建用户"
      v-model="dialogVisible"
      width="30%"
      center
      destroy-on-close
    >
      <Form v-bind="modalConfig" v-model="formData"></Form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Form from '@/base-ui/form/src/Form.vue';
import { useSystemStore } from '@/stores/modules/system';

export default defineComponent({
  name: 'PageModal',
  components: { Form },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    //控制dialog显示的参数
    const dialogVisible = ref(false);
    //表单数据集合
    const formData = ref<any>({});
    //监听表单编辑状态
    watch(
      () => props.defaultInfo,
      (newVal: any) => {
        for (const item of props.modalConfig.formItems) {
          //用item中field标识匹配newVal中每条数据行，赋值给formData，用以提交表单
          formData.value[`${item.field}`] = newVal[`${item.field}`];
        }
      }
    );
    //  点击确定按钮事件
    const useSystem = useSystemStore();
    const handleConfirmClick = () => {
      dialogVisible.value = false;
      if (Object.keys(props.defaultInfo).length) {
        //触发编辑网络请求
        useSystem.editPageDataAction({
          pageName: props.pageName,
          editData: { ...formData.value },
          id: props.defaultInfo.id
        });
      } else {
        //  触发新建网络请求
        useSystem.createPageDataAction({
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        });
      }
    };
    return {
      formData,
      dialogVisible,
      handleConfirmClick
    };
  }
});
</script>

<style scoped lang="less"></style>
