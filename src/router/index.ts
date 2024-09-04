import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BaseLayout from "@/components/BaseLayout.vue";
import AnalyticalPage from "@/views/AnalyticalPage.vue";
import LoginPage from "@/views/LoginPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/analytical",
  },
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "analytical",
        name: "Analytical",
        component: AnalyticalPage,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
