import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { localCache } from '@/utils/storage';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/Home.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/pages/not-found/NotFound.vue')
  }
];
const router = createRouter({
  routes,
  history: createWebHashHistory()
});

//路由导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.get('token');
    if (!token) {
      return '/login';
    }
  }
  if (to.path.indexOf('/home') !== -1) {
    if (to.name === 'notFound') {
      to.name = 'user';
    }
  }
});
export default router;
