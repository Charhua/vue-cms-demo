export default function mapBreadcrumb(userMenus: any[], path: string): any[] {
  const breadcrumbArr: any[] = [];
  const _getRouteName = (menus: any[]): any => {
    for (const menu of menus) {
      if (menu.type === 1) {
        const menuName = _getRouteName(menu.children ?? []);
        if (menuName) {
          breadcrumbArr.push({
            name: menu.name
          });
          breadcrumbArr.push({
            name: menuName
          });
          return menuName;
        }
      } else if (menu.url.slice(5) === path.slice(5)) {
        return menu.name;
      }
    }
  };
  _getRouteName(userMenus);
  console.log(breadcrumbArr);
  return breadcrumbArr;
}
