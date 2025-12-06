<template>
  <form @submit.prevent="onSubmit(!v$.$invalid)" class="w-full">
    <!-- Email Field -->
    <div class="flex flex-col gap-[0.5rem] mb-[1.5rem]">
      <label for="email" class="font-medium text-[0.875rem] pl-[0.5rem]">{{
        $t("auth.forgotPassword.email")
      }}</label>
      <Input
        id="email"
        :placeholder="$t('auth.forgotPassword.emailPlaceholder')"
        name="email"
        v-model="v$.email.$model"
        class="w-full h-[2.2rem] bg-white/5 border border-gray-50/10 rounded-[1rem] px-[1rem]"
      />
      <small
        v-if="(v$.email.required.$invalid && submitted) || v$.email.$pending"
        class="text-danger text-[0.75rem] pl-[0.5rem]"
      >
        {{ $t("auth.forgotPassword.emailRequired") }}
      </small>
    </div>

    <!-- Submit Button -->
    <div class="flex justify-center">
      <Button
        type="submit"
        :disabled="isLoading"
        class="w-full h-[2.2rem] bg-white text-neutral-800 hover:bg-[#ffffffcc] font-semibold rounded-[1rem] transition-colors"
      >
        {{ $t("auth.forgotPassword.submitButton") }}
      </Button>
    </div>

    <div class="mt-[1rem] text-[0.875rem] text-center">
      <span
        class="text-white/[0.35] font-medium hover:text-white transition-colors cursor-pointer"
        @click="$emit('switch-mode', 'login')"
      >
        {{ $t("auth.forgotPassword.rememberedPasswordLink") }}
      </span>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRootStore } from "@/stores/store";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";
import { useI18n } from "vue-i18n";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const { t } = useI18n();
const store = useRootStore();
const isLoading = computed(() => store.systemStore.getLoading);

defineEmits(["switch-mode"]);

const submitted = ref(false);
const formFields = ref({
  email: "",
});
const formRules = {
  email: {
    required: helpers.withMessage(
      t("auth.forgotPassword.emailRequired"),
      required
    ),
    email,
  },
};
const v$ = useVuelidate(formRules, formFields);
const onSubmit = async (isFormValid: boolean) => {
  submitted.value = true;
  if (!isFormValid) {
    return;
  }
};
</script>
