import Home from "../views/Home.vue";
import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? "/app/vue2" : "/",
  mode: "history",
  routes
});
export default router;
