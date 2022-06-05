<template>
  <div>
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { ElForm } from 'element-plus';
import { rules } from '@/pages/login/config/account-config';
import { useStore } from 'vuex';
import { localCache } from '@/utils/storage';

export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const store = useStore();
    const account = reactive({
      name: '',
      password: ''
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          //判断是否记住密码
          if (isKeepPassword) {
            localCache.set('name', account.name);
            localCache.set('password', account.password);
          } else {
            localCache.remove('name');
            localCache.remove('password');
          }
          //登录验证
          store.dispatch('login/loginAction', {
            ...account
          });
        }
      });
    };

    return {
      account,
      loginAction,
      formRef,
      rules
    };
  }
});
</script>

<style scoped lang="less"></style>
