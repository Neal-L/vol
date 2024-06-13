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
  {
    path: "/ws",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "ws",
        component: () => import("@/layouts/site/ws.vue"),
      },
    ],
  },
  {
    path: "/st",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "st",
        component: () => import("@/layouts/site/st.vue"),
      },
    ],
  },
  {
    path: "/mb",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "mb",
        component: () => import("@/layouts/site/mb.vue"),
      },
    ],
  },
  {
    path: "/op",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "op",
        component: () => import("@/layouts/site/op.vue"),
      },
    ],
  },
  {
    path: "/lb",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "lb",
        component: () => import("@/layouts/site/lb.vue"),
      },
    ],
  },
  {
    path: "/fitness",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "fitness",
        component: () => import("@/pages/fitness.vue"),
      },
    ],
  },
  {
    path: "/back",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "back",
        component: () => import("@/layouts/fitness/back.vue"),
      },
    ],
  },
  {
    path: "/chest",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "chest",
        component: () => import("@/layouts/fitness/chest.vue"),
      },
    ],
  },
  {
    path: "/leg",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "leg",
        component: () => import("@/layouts/fitness/leg.vue"),
      },
    ],
  },
  {
    path: "/shoulder",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "shoulder",
        component: () => import("@/layouts/fitness/shoulder.vue"),
      },
    ],
  },
  {
    path: "/reserve",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "reserve",
        component: () => import("@/layouts/concept/reserve.vue"),
      },
    ],
  },
  {
    path: "/sign",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "reserve",
        component: () => import("@/layouts/concept/sign.vue"),
      },
    ],
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),routes,
  extendRoutes: setupLayouts,
})

export default router
