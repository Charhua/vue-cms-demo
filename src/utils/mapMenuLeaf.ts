export function mapMenuLeafKeys(menuList: any[]) {
  const leafKeys: number[] = [];
  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children);
      } else {
        leafKeys.push(menu.id);
      }
    }
  };
  _recurseGetLeaf(menuList);
  return leafKeys;
}
