import request from '@/service';
import { IAccount, IDataType, ILoginResult } from '@/service/login/type';
//用枚举定义请求路径
enum LoginUrl {
  AccountLogin = '/login',
  UserInfos = '/users/',
  UserMenus = '/role/'
}
//登录请求
export function accountLoginRequest(account: IAccount) {
  return request.post<IDataType<ILoginResult>>({
    url: LoginUrl.AccountLogin,
    data: account
  });
}
//请求用户信息
export function requestUserInfos(id: number) {
  return request.get<IDataType>({
    url: LoginUrl.UserInfos + id
  });
}
//请求用户菜单
export function requestUserMenus(id: number) {
  return request.get<IDataType>({
    url: LoginUrl.UserMenus + id + '/menu'
  });
}
