<template>
  <div class="flex items-center justify-center w-full h-screen px-8">
    <div class="rounded-[2rem] backdrop-blur-[2.5rem] bg-neutral-900">
      <div class="border border-white/[0.55] rounded-[2rem] w-full p-[1.25rem]">
        <div class="w-[20rem] text-center mx-auto">
          <p class="text-[1.25rem] font-semibold">{{ title }}</p>
          <p
            class="text-[0.875rem] text-white/[0.35] font-medium !mt-[0.25rem]"
          >
            {{ subtitle }}
          </p>
        </div>

        <div
          v-if="mode !== 'forgot-password'"
          class="relative bg-white/5 flex h-[2.5rem] rounded-[1rem] text-[0.875rem] font-semibold mt-[1rem]"
        >
          <!-- transition -->
          <div
            class="flex bg-white text-neutral-800 items-center justify-center absolute top-[1px] h-[2.375rem] w-[calc(50%-2px)] rounded-[1rem] transition-all z-50"
            :class="mode === 'register' ? 'right-[2px]' : 'right-1/2'"
          >
            {{
              mode === "register"
                ? $t("auth.register.registerButton")
                : $t("auth.login.loginButton")
            }}
          </div>

          <!-- click areas -->
          <button
            type="button"
            class="w-full relative px-[0.75rem] transition-all z-10 bg-transparent border-none"
            @click="switchMode('login')"
          >
            {{ $t("auth.login.loginButton") }}
          </button>
          <button
            type="button"
            class="w-full relative px-[0.75rem] transition-all z-10 bg-transparent border-none"
            @click="switchMode('register')"
          >
            {{ $t("auth.register.registerButton") }}
          </button>
        </div>

        <div class="mt-[1.5rem]">
          <component :is="currentComponent" @switch-mode="switchMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, markRaw } from "vue";
import { useI18n } from "vue-i18n";
import type { AuthMode } from "@/domain/auth/types";
import Login from "@/domain/auth/components/Login.vue";
import Register from "@/domain/auth/components/Register.vue";
import ForgotPassword from "@/domain/auth/components/ForgotPassword.vue";

const { t } = useI18n();

const mode = ref<AuthMode>("login");

const title = computed(() => {
  if (mode.value === "register") return t("auth.register.title");
  if (mode.value === "login") return t("auth.login.title");
  return t("auth.forgotPassword.title");
});

const subtitle = computed(() => {
  if (mode.value === "register") return t("auth.register.subtitle");
  if (mode.value === "login") return t("auth.login.subtitle");
  return t("auth.forgotPassword.subtitle");
});

const currentComponent = computed(() => {
  if (mode.value === "register") return markRaw(Register);
  if (mode.value === "login") return markRaw(Login);
  return markRaw(ForgotPassword);
});

const switchMode = (newMode: AuthMode) => {
  mode.value = newMode;
};
</script>
