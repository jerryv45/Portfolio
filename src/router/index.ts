<<<<<<< HEAD
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
=======
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
>>>>>>> 1efc785 (Rebuild Github Pages)
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
<<<<<<< HEAD
    {
      path: "index.html",
      redirect: "/"
    },
=======
>>>>>>> 1efc785 (Rebuild Github Pages)
  ],
});

export default router;
