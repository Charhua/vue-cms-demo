//网络服务统一出入口
import XTRequest from '@/service/request/request';
import { BASE_URL, TIME_OUT } from '@/service/request/config';
import { localCache } from '@/utils/storage';
//实例网络请求对象
const request = new XTRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: any) => {
      const token = localCache.get('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      console.log('局部拦截器，请求成功拦截');
      return config;
    },
    responseInterceptor: (res) => {
      console.log('局部拦截器，响应成功的拦截');
      return res;
    }
  }
});
export default request;
