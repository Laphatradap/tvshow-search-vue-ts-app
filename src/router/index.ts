import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: "/details/:id",
    name: "showDetails",
    component: () => import(/* webpackChunkName: "details" */ "@/views/Detailpage.vue"),
  },
  {
    path: "/random",
    name: "randomizedShows",
    component: () => import(/* webpackChunkName: "random" */ "@/views/Random.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
