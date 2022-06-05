<template>
  <div class="login-main">
    <LoginPanel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginPanel from '@/pages/login/componments/LoginPanel.vue';

export default defineComponent({
  name: 'Login',
  components: { LoginPanel }
});
</script>

<style scoped lang="less">
.login-main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
