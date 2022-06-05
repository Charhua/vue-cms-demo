import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store';
import router from '@/router';
//获取全局本地缓存数据
import { setupStore } from '@/store';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
//添加事件管理者'passive'，来阻止'touchstart'事件，让页面更加流畅
// import 'default-passive-events';
//导入全局注册属性
import globalRegister from '@/global';

//导入pinia管理库
import stores from '@/stores';
import { useInitRootStore } from '@/stores/modules/root';

export const app = createApp(App);
app.use(store);
//全局数据，必须在router注册前执行，否则动态路由会有加载错误
setupStore(); //vuex
//注册pinia
app.use(stores);
const initRootStore = useInitRootStore(); //pinia
initRootStore.getInitDataAction();
//注册路由
app.use(router);
//全局注册属性
app.use(globalRegister);

//注册element-Icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount('#app');
