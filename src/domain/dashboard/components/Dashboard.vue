<template>
  <div class="flex h-screen w-full text-white font-sans overflow-hidden">
    <Sidebar />
    <main class="flex-1 flex flex-col min-w-0">
      <Header />
      <Content />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/domain/dashboard/components/Sidebar.vue";
import Header from "@/domain/dashboard/components/Header.vue";
import Content from "@/domain/dashboard/components/Content.vue";
</script>
