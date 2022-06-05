import axios, { AxiosRequestConfig } from 'axios';
import type {
  XTRequestInterceptors,
  XTRequestConfig
} from '@/service/request/type';
import type { AxiosInstance } from 'axios';
//nprogress进度条
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

//封装网络请求类
class XTRequest {
  instance: AxiosInstance;
  interceptors?: XTRequestInterceptors; //拦截器可选
  constructor(config: XTRequestConfig) {
    //  创建axios实例
    this.instance = axios.create(config);

    //拦截器配置信息
    this.interceptors = config.interceptors;
    //  可选使用局部 拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    //  全局拦截器，所有实例都会有
    this.instance.interceptors.request.use(
      (config) => {
        //nprogress停止
        nprogress.done();
        console.log('全局拦截器，请求成功拦截');
        return config;
      },
      (err) => {
        console.log('全局拦截器，请求失败拦截');
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        //nprogress停止
        nprogress.done();
        console.log('全局拦截器，响应成功拦截');
        //响应数据获取
        const data = res.data;
        if (data.returnCode === '-1001') {
          console.log('请求失败');
        } else {
          return data;
        }
      },
      (err) => {
        console.log('全局拦截器，响应失败拦截');
        return err;
      }
    );
  }
  //  定义类网络请求方法
  request<T>(config: XTRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //nprogress进度条
      nprogress.start();
      //单个请求config处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          //  返回结果
          resolve(res);
        })
        .catch((err) => {
          //执行rejuect
          reject(err);
          //返回错误
          return err;
        });
    });
  }
  //  根据request定义请求别名方法
  get<T>(config: XTRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }
  post<T>(config: XTRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }
  //  其他别名方法...
  delete<T>(config: XTRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
  patch<T>(config: XTRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}
export default XTRequest;
