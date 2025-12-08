<template>
  <div class="rounded-[2rem] backdrop-blur-[2.5rem] bg-neutral-900">
    <div
      class="border border-white/[0.55] rounded-[2rem] w-full p-[2rem] flex flex-col items-center text-center max-w-md"
    >
      <div
        class="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10"
      >
        <FileQuestion class="w-10 h-10 text-white/80" />
      </div>

      <h1 class="!text-[2rem] font-bold !mb-2">
        {{ $t("system.notFound.title") }}
      </h1>
      <p class="!text-[1rem] text-white/[0.35] font-medium !mb-6">
        {{ $t("system.notFound.message") }}
      </p>

      <Button
        @click="goHome"
        class="w-full h-[2.5rem] bg-white text-neutral-800 hover:bg-[#ffffffcc] font-semibold rounded-[1rem] transition-colors"
      >
        {{ $t("system.notFound.goHomeButton") }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-vue-next";

const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>
