const user = () => import('@/pages/home/system/user/User.vue');
export default {
  path: '/home/system/user',
  name: 'user',
  component: user,
  children: []
};
