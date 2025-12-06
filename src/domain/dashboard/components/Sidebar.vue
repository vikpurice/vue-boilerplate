<template>
  <aside
    class="w-[60px] flex flex-col items-center py-4 border-r  border-white/10"
  >
    <div
      class="w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
    >
    <img src="@/assets/images/logo.png" style="width: 100%; height: 100%; object-fit: cover;"></img>
    </div>

    <div class="flex flex-col h-full  justify-center gap-6">
      <div class="flex flex-col gap-4 mt-2">
        <div class="p-2 rounded-lg bg-white/10 text-white cursor-pointer">
          <Home class="w-5 h-5" />
        </div>
        <div
          class="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
        >
          <Clock class="w-5 h-5" />
        </div>
        <div
          class="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
        >
          <Settings class="w-5 h-5" />
        </div>
      </div>
    </div>

    <!-- Bottom Icons -->
    <div class="mt-auto flex flex-col gap-4 items-center">
      <div
        class="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
      >
        <Bell class="w-5 h-5" />
      </div>
      <div
        class="w-8 h-8 rounded-full bg-blue-500 overflow-hidden cursor-pointer"
      >
        <!-- Placeholder for user avatar -->
        <img src="https://github.com/shadcn.png" alt="User" />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import {  Home, Clock, Settings, Bell } from "lucide-vue-next";
import { Input } from "@/components/ui/input";

</script>
