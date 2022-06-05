const department = () =>
  import('@/pages/home/system/department/Department.vue');
export default {
  path: '/home/system/department',
  name: 'department',
  component: department,
  children: []
};
