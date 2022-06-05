import { Module } from 'vuex';
import {
  accountLoginRequest,
  requestUserInfos,
  requestUserMenus
} from '@/service/login';
import { ILoginState } from '@/store/login/type';
import { IRootState } from '@/store/type';
import { IAccount } from '@/service/login/type';
import { localCache } from '@/utils/storage';
import router from '@/router';
import { mapMenuToRoute } from '@/utils/mapRoute';
import { mapMenusToPermissions } from '@/utils/routeMapMenus';

const loginStore: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    };
  },
  mutations: {
    GETTOKEN(state, token: any) {
      state.token = token;
    },
    GETUSERINFO(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    GETUSERMENUS(state, userMenus: any) {
      state.userMenus = userMenus;
      //  注册动态路由
      const routes = mapMenuToRoute(userMenus);
      routes.forEach((route) => {
        router.addRoute('home', route);
      });
      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus);
      state.permissions = permissions;
    }
  },
  actions: {
    async loginAction({ commit }, payload: IAccount) {
      //  实现登录
      const loginResult = await accountLoginRequest(payload);
      if (loginResult.code === 0) {
        const { id, token } = loginResult.data;
        commit('GETTOKEN', token);
        localCache.set('token', token);

        //请求用户信息
        const userInfoResult = await requestUserInfos(id);
        const userInfo = userInfoResult.data;
        commit('GETUSERINFO', userInfo);
        localCache.set('userInfo', userInfo);

        //  请求用户菜单
        const userMenusResult = await requestUserMenus(userInfo.role.id);
        const userMenus = userMenusResult.data;
        commit('GETUSERMENUS', userMenus);
        localCache.set('userMenus', userMenus);
        router.push('/home');
      } else {
        console.log('获取失败');
      }
    },
    loadLocalUserData({ commit }) {
      const token = localCache.get('token');
      if (token) {
        commit('GETTOKEN', token);
      }
      const userInfo = localCache.get('userInfo');
      if (userInfo) {
        commit('GETTOKEN', userInfo);
      }
      const userMenus = localCache.get('userMenus');
      if (userMenus) {
        commit('GETUSERMENUS', userMenus);
      }
    }
  }
};
export default loginStore;
