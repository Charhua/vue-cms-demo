import { RouteRecordRaw } from 'vue-router';
export function mapMenuToRoute(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  //生成路由表
  const routeInfo: RouteRecordRaw[] = [];
  const routeFiles = require.context('../router/home', true, /\.ts/);
  routeFiles.keys().forEach((key) => {
    const route = require('../router/home' + key.split('.')[1]);
    routeInfo.push(route.default);
  });
  //根据用户菜单映射路由信息
  //其中 type==1时，有children继续遍历,当type==2时，即可映射url，由于菜单url与实际路由路径存在差异，故需要修改字符处理
  const _getRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = routeInfo.find((key: any) => {
          //字符选择性匹配
          return key.path.slice(5) == menu.url.slice(5);
        });
        if (route) routes.push(route);
      } else {
        _getRoute(menu.children);
      }
    }
  };
  _getRoute(userMenus);
  return routes;
}
