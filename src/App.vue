<template>
  <Toaster />
  <main class="bg-black/95 text-white/95">
    <component :is="layout">
      <RouterView />
    </component>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute, RouterView } from "vue-router";
import { createMessagingSubscriber } from "@/domain/system/store/subscribers";
import { Toaster } from "@/components/ui/sonner";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const route = useRoute();

const layout = computed(() => {
  const layoutName = route.meta.layout;
  if (layoutName === "DashboardLayout") return DashboardLayout;
  if (layoutName === "AuthLayout") return AuthLayout;
  return DefaultLayout;
});

onMounted(() => {
  createMessagingSubscriber();
});
</script>
