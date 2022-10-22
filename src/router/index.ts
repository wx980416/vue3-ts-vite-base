import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import Home from "@/view/home/index.vue";

// 配置路由信息
const routes: RouteRecordRaw[] = [{ path: "/", name: "home", component: Home }];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
