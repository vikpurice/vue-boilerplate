import { computed } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { useRootStore } from "@/stores/store";
import Auth from "@/domain/auth/components/Auth.vue";
import NotFound from "@/domain/system/components/NotFound.vue";

const requiresAuthRoutes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "DashboardHome",
    component: () => import("@/domain/dashboard/components/Content.vue"),
    meta: { requiresAuth: true, layout: "DashboardLayout" },
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/domain/dashboard/components/Projects.vue"),
    meta: { requiresAuth: true, layout: "DashboardLayout" },
  },
  {
    path: "/navigation",
    name: "Navigation",
    component: () => import("@/domain/dashboard/components/Navigation.vue"),
    meta: { requiresAuth: true, layout: "DashboardLayout" },
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/domain/dashboard/components/Settings.vue"),
    meta: { requiresAuth: true, layout: "DashboardLayout" },
  },
];
const guestRoutes = [
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    meta: { layout: "AuthLayout" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: { requiresAuth: true, layout: "ErrorLayout" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active-link",
  routes: [...requiresAuthRoutes, ...guestRoutes],
});

// auth guard
router.beforeEach(async (to, from, next) => {
  const loginStatus = localStorage.getItem("logged_in");

  if (to.name === "Auth" && loginStatus) {
    next({ name: "DashboardHome" });
    return;
  }

  if (to.matched.some((item) => item.meta.requiresAuth)) {
    if (loginStatus) {
      next();
      return;
    }
    next({ name: "Auth" });
  } else {
    next();
  }
});

export default router;
