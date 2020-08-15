import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    component: () => import("@/views/index"),
    children: []
  }
];

export default new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
});
