//路由路径映射菜单
export default function mapMenus(userMenus: any[], path: string): void {
  let id: any = null;
  const _filterMenu = (userMenus: any[], path: string) => {
    const menuArr = userMenus.filter((item) => {
      if (item.type === 2) {
        return item.url.slice(5) == path.slice(5);
      } else {
        _filterMenu(item.children ?? [], path);
      }
    });
    if (menuArr.length !== 0) {
      return (id = menuArr[0].id.toString());
    }
  };
  _filterMenu(userMenus, path);
  return id;
}

//系统管理-菜单管理-多级菜单
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = [];

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? []);
      } else if (menu.type === 3) {
        permissions.push(menu.permission);
      }
    }
  };
  _recurseGetPermission(userMenus);

  return permissions;
}
