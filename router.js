import { createRouter, createWebHistory } from "vue-router";
import index from "./pages/index.vue";
import login from "./pages/login.vue";
import register from "./pages/register.vue";

const routes = [
  { path: "/calibration", component: index },
  { path: "/login", component: login },
  { path: "/signup", component: register }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
