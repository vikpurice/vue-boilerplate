<template>
  <header
    class="h-14 border-b border-white/10 flex items-center justify-between px-4"
  >
    <div class="flex items-center gap-2 text-sm">
      <span
        class="bg-blue-500/20 uppercase w-6 h-6 flex items-center text-[12px] leading-[16px] font-semibold justify-center rounded-[8px] text-blue-500/80"
      >
        s
      </span>
      <span class="text-white/50">/</span>
      <button
        class="flex items-center gap-2 hover:bg-white/5 px-2 py-1 rounded-md transition-colors font-medium"
      >
        siky19947's workspace
        <ChevronDown class="w-4 h-4 text-white/50" />
      </button>
    </div>

    <div class="flex items-center gap-3">
      <LanguageSwitcher />
    </div>
  </header>
</template>
<script setup>
import { computed, ref } from "vue";
import { useRootStore } from "@/stores/store";
import { returnRandomHexColor } from "@/domain/system/helper";
import LanguageSwitcher from "@/domain/system/components/LanguageSwitcher.vue";

const store = useRootStore();

const loginStatus = computed(() => store.authStore.getLogin.logged_in);
const randomColor = ref(returnRandomHexColor());
</script>
