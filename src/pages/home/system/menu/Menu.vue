<template>
  <div class="menu-main">
    <PageContent
      :contentTableConf="contentTableConf"
      pageName="menu"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageContent from '@/components/page-content/src/PageContent.vue';
import { contentTableConf } from '@/pages/home/system/menu/content.config';

export default defineComponent({
  name: 'Menu',
  components: { PageContent },
  setup() {
    return {
      contentTableConf
    };
  }
});
</script>

<style scoped lang="less"></style>
