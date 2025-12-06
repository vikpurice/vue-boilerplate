<template>
  <header
    class="flex justify-end items-center py-[1rem] pr-[1.5rem] gap-2"
    :style="{ backgroundColor: randomColor }"
  >
    <nav class="flex justify-end">
      <ul class="flex gap-3">
        <li v-show="loginStatus">{{ $t("system.header.dashboard") }}</li>
      </ul>
    </nav>
    <LanguageSwitcher />
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
