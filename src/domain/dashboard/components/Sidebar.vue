<template>
  <aside
    class="w-[60px] flex flex-col items-center py-4 border-r  border-white/10"
  >
    <div
      class="w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer"
      @click="navigateTo('DashboardHome')"
    >
    <img src="@/assets/images/logo.png" style="width: 100%; height: 100%; object-fit: cover;"></img>
    </div>

    <div class="flex flex-col h-full justify-start mt-6 gap-6">
      <div class="flex flex-col gap-3 mt-2">
        <button
          @click="navigateTo('DashboardHome')"
          :class="[
            'p-2 rounded-lg cursor-pointer transition-colors',
            isActive('DashboardHome')
              ? 'bg-white/10 text-white'
              : 'text-white/50 hover:text-white hover:bg-white/5'
          ]"
        >
          <Home class="w-5 h-5" />
        </button>
        <button
          @click="navigateTo('Projects')"
          :class="[
            'p-2 rounded-lg cursor-pointer transition-colors',
            isActive('Projects')
              ? 'bg-white/10 text-white'
              : 'text-white/50 hover:text-white hover:bg-white/5'
          ]"
        >
          <Layers2 class="w-5 h-5" />
        </button>
        <button
          @click="navigateTo('Navigation')"
          :class="[
            'p-2 rounded-lg cursor-pointer transition-colors',
            isActive('Navigation')
              ? 'bg-white/10 text-white'
              : 'text-white/50 hover:text-white hover:bg-white/5'
          ]"
        >
          <Navigation class="w-5 h-5" />
        </button>
        <button
          @click="navigateTo('Settings')"
          :class="[
            'p-2 rounded-lg cursor-pointer transition-colors',
            isActive('Settings')
              ? 'bg-white/10 text-white'
              : 'text-white/50 hover:text-white hover:bg-white/5'
          ]"
        >
          <Settings class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Bottom Icons -->
    <div class="mt-auto flex flex-col gap-4 items-center">
      <button
        class="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
      >
        <Bell class="w-5 h-5" />
      </button>
      <button
        class="w-8 h-8 rounded-full bg-blue-500 overflow-hidden cursor-pointer"
      >
        <!-- Placeholder for user avatar -->
        <img src="https://github.com/shadcn.png" alt="User" />
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { Home, Navigation, Settings, Bell, Layers2 } from "lucide-vue-next";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const navigateTo = (name: string) => {
  router.push({ name });
};

const isActive = (name: string) => {
  return route.name === name;
};
</script>
