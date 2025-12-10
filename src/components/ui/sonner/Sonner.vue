<script lang="ts" setup>
import type { ToasterProps } from "vue-sonner";
import { reactiveOmit } from "@vueuse/core";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-vue-next";
import { Toaster as Sonner } from "vue-sonner";

const props = defineProps<ToasterProps>();
const delegatedProps = reactiveOmit(props, "toastOptions");
</script>

<template>
  <Sonner
    class="toaster group"
    :toast-options="{
      classes: {
        toast:
          'group toast !bg-[#1a1a1a] !text-white !border !border-[#ffffff1a] !shadow-lg !rounded-full !w-auto mx-auto !py-2 !px-4',
        description: 'group-[.toast]:text-[#ffffff99]',
        actionButton:
          'group-[.toast]:bg-white group-[.toast]:text-black group-[.toast]:rounded-[0.5rem] group-[.toast]:font-semibold group-[.toast]:hover:bg-[#ffffffcc]',
        cancelButton:
          'group-[.toast]:bg-[#ffffff0d] group-[.toast]:text-white group-[.toast]:rounded-[0.5rem] group-[.toast]:hover:bg-[#ffffff1a]',
      },
    }"
    v-bind="delegatedProps"
  >
    <template #success-icon>
      <CircleCheckIcon class="size-4" />
    </template>
    <template #info-icon>
      <InfoIcon class="size-4" />
    </template>
    <template #warning-icon>
      <TriangleAlertIcon class="size-4" />
    </template>
    <template #error-icon>
      <OctagonXIcon class="size-4" />
    </template>
    <template #loading-icon>
      <div>
        <Loader2Icon class="size-4 animate-spin" />
      </div>
    </template>
    <template #close-icon>
      <XIcon class="size-4" />
    </template>
  </Sonner>
</template>
