<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen text-center"
  >
    <div class="text-5xl font-bold">{{ $t("system.notFound.title") }}</div>
    <div class="text-2xl mt-[1rem]">{{ $t("system.notFound.subtitle") }}</div>
    <p class="mt-[1rem]">{{ $t("system.notFound.message") }}</p>
    <Button class="mt-[1rem]" @click="goHome">
      {{ $t("system.notFound.goHomeButton") }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";

const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>
