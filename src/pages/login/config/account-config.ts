// 编写好规则
export const rules = {
  name: [
    {
      required: true,
      message: '请填写用户名',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,14}$/,
      message: '用户名必须是6~15个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请填写密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: '密码必须是6位以上的字母或数字',
      trigger: 'blur'
    }
  ]
};
