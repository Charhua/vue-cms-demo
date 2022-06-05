import { createStore } from 'vuex';
import { IRootState } from '@/store/type';
import login from '@/store/login';
const store = createStore<IRootState>({
  state() {
    return {
      name: 'zwh'
    };
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    login
  }
});
export function setupStore() {
  store.dispatch('login/loadLocalUserData');
}
export default store;
