type IFormType = 'input' | 'password' | 'select' | 'datepicker';
export interface IFormItem {
  field: string;
  type: IFormType;
  label: string;
  //以下可选属性
  placeholder?: any;
  rules?: any[];
  //select可选属性选项
  selectOptions?: any[];
  //其他选项属性
  otherOptions?: any;
  isHidden?: boolean;
}
export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemLayout?: any;
  itemStyle?: any;
}
