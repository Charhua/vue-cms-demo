import { defineStore } from 'pinia';
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/system';
export const useSystemStore = defineStore('systemStore', {
  state: () => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    };
  },
  getters: {
    //根据pageName返回state中数据
    pageListData: (state) => {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
      };
    },
    pageCountData: (state) => {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    }
  },
  actions: {
    //获取页面数据
    async getPageListsAction(info: any) {
      //初始化参数
      const pageName = info.pageName;
      const url = `/${pageName}/list`;
      //  请求数据
      const pageResult = await getPageListData(url, info.queryInfo);
      const { list, totalCount } = pageResult.data;
      switch (pageName) {
        case 'users':
          this.usersList = list;
          this.usersCount = totalCount;
          break;
        case 'role':
          this.roleList = list;
          this.roleCount = totalCount;
          break;
        case 'goods':
          this.goodsList = list;
          this.goodsCount = totalCount;
          break;
        case 'menu':
          this.menuList = list;
          this.menuCount = totalCount;
          break;
      }
    },

    //  删除数据
    async deletePageDataAction(info: any) {
      const { pageName, id } = info;
      const url = `${pageName}/${id}`;
      //  调用网络请求接口
      await deletePageData(url);
      //  重新获取最新数据
      await this.getPageListsAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    //  新建数据
    async createPageDataAction(info: any) {
      const { pageName, newData } = info;
      const url = `/${pageName}`;
      //  调用网络请求接口
      await createPageData(url, newData);
      //  重新获取最新数据
      await this.getPageListsAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    //  修改数据
    async editPageDataAction(info: any) {
      const { pageName, id, editData } = info;
      const url = `${pageName}/${id}`;
      //  调用网络请求接口
      await editPageData(url, editData);
      //  重新获取最新数据
      await this.getPageListsAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    }
  }
});
