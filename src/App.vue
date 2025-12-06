<template>
  <Toaster />
  <main class="bg-black/95 text-white/95">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { createMessagingSubscriber } from "@/domain/system/store/subscribers";
import { Toaster } from "@/components/ui/sonner";

onMounted(() => {
  createMessagingSubscriber();
});
</script>
