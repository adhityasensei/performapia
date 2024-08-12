import { useAuthStore } from '@/store/auth';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import Dashboard from '@/views/Dashboard.vue';
import NotFound from '@/views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/landingpage', // Redirect to the dashboard page by default
  },
  {
    path: '/landingpage',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/:catchAll(.*)', // Catch-all route for 404 Not Found
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});





export default router;
