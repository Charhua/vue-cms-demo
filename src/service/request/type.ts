import type { AxiosRequestConfig, AxiosResponse } from 'axios';
//定义拦截器接口类型
export interface XTRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}
//定义请求配置接口类型
export interface XTRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: XTRequestInterceptors<T>;
}
