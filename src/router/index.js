/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/pages/index.vue"),
      },
    ],
  },
  {
    path: "/concept",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "concept",
        component: () => import("@/pages/concept.vue"),
      },
    ],
  },
  {
    path: "/site",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "site",
        component: () => import("@/layouts/site.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),routes,
  extendRoutes: setupLayouts,
})

export default router
