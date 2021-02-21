import { createRouter, createWebHistory } from "vue-router";
import index from "./pages/index.vue";
import register from "./pages/register.vue";
import main from './pages/main.vue';
import messages from './pages/messages.vue'
import gazeboard from './pages/gazeboard.vue'

const routes = [
  {path: '/index', component: index},
  { path: "/calibration", component: calibration },
  { path: "/signup", component: register },
  {path: '/main', component: main},
  {path: '/messages', component: messages},
  {path: '/gazeboard', component: gazeboard},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
