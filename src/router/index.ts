import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name:"contact",
      component:() => import("../views/ContactView.vue"),
    },
    {
      path: "index.html",
      redirect: "/"
    },
  ],
});

export default router;
