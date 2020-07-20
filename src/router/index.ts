import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/details/:id",
    name: "showDetails",
    component: () => import("@/views/Detailpage.vue"),
  },
  {
    path: "/random",
    name: "randomizedShows",
    component: () => import("@/views/Random.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
