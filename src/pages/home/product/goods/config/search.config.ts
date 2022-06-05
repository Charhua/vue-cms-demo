import { IForm } from '@/base-ui/form';
//高级组件配置文件
export const searchFormConf: IForm = {
  //注意labelWidth大小影响item的placeholder内容美观
  labelWidth: '90px',
  // colLayout: {
  //   span: 8
  // },
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'ID',
      placeholder: '请输入ID'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'enable',
      type: 'select',
      label: '用户状态',
      placeholder: '请选择用户状态',
      selectOptions: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    }
    //目前该UI组件有性能问题
    // {
    //   field: 'createAt',
    //   type: 'datepicker',
    //   label: '创建时间',
    //   otherOptions: {
    //     startPlaceholder: '开始时间',
    //     endPlaceholder: '结束时间',
    //     type: 'daterange'
    //   }
    // }
  ]
};
