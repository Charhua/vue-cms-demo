import { defineStore } from 'pinia';
import { useSystemStore } from '@/stores/modules/system';
import { getPageListData } from '@/service/system';

export const useInitRootStore = defineStore('initRootStore', {
  state: () => {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    };
  },
  getters: {},
  actions: {
    async getInitDataAction() {
      //触发systemStore中网络请求，获取部门数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 500
      });
      const { list: departmentList } = departmentResult.data;
      this.entireDepartment = departmentList;

      //触发systemStore中网络请求，获取角色数据
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 500
      });
      const { list: roleList } = roleResult.data;
      this.entireRole = roleList;

      //触发systemStore中网络请求，获取菜单数据
      const menuResult = await getPageListData('/menu/list', {});
      const { list: menuList } = menuResult.data;
      this.entireMenu = menuList;
    }
  }
});
