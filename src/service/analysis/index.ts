import request from '@/service';
//枚举请求路径
enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}
export function getCategoryGoodsCount(): any {
  return request.get({
    url: DashboardAPI.categoryGoodsCount
  });
}
export function getCategoryGoodsSale(): any {
  return request.get({
    url: DashboardAPI.categoryGoodsSale
  });
}

export function getCategoryGoodsFavor(): any {
  return request.get({
    url: DashboardAPI.categoryGoodsFavor
  });
}

export function getAddressGoodsSale(): any {
  return request.get({
    url: DashboardAPI.addressGoodsSale
  });
}
