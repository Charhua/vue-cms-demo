import request from '@/service';
import { IDataType } from '@/service/system/types';
//获取数据接口
export function getPageListData(url: string, info: any) {
  return request.post<IDataType>({
    url: url,
    data: info
  });
}
//删除数据接口
//这里url例如：/users/id
export function deletePageData(url: string) {
  return request.delete<IDataType>({
    url: url
  });
}
//新建数据接口
export function createPageData(url: string, newData: any) {
  return request.post<IDataType>({
    url: url,
    data: newData
  });
}
//修改数据接口
export function editPageData(url: string, editData: any) {
  return request.patch<IDataType>({
    url: url,
    data: editData
  });
}
