import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/app/vue3" : "/"),
  base: window.__POWERED_BY_QIANKUN__ ? "/app/vue" : "/",
  mode: "history",
  routes,
});

export default router;
