<template>
  <form @submit.prevent="onSubmit(!v$.$invalid)" class="w-full">
    <!-- Username Field -->
    <div class="flex flex-col gap-[0.5rem] mb-[1.25rem]">
      <label for="username" class="font-medium text-[0.875rem] pl-[0.5rem]">
        {{ $t("auth.register.username") }}
      </label>
      <Input
        id="username"
        :placeholder="$t('auth.register.usernamePlaceholder')"
        name="username"
        v-model="v$.username.$model"
        class="w-full h-[2.2rem] bg-white/5 border border-gray-50/10 rounded-[1rem] px-[1rem]"
      />
      <small
        v-if="v$.username.required.$invalid && submitted"
        class="text-danger text-[0.75rem] pl-[0.5rem]"
      >
        {{ $t("auth.register.usernameRequired") }}
      </small>
    </div>

    <!-- Email Field -->
    <div class="flex flex-col gap-[0.5rem] mb-[1.25rem]">
      <label for="email" class="font-medium text-[0.875rem] pl-[0.5rem]">{{
        $t("auth.login.email")
      }}</label>
      <Input
        id="email"
        :placeholder="$t('auth.login.emailPlaceholder')"
        name="email"
        v-model="v$.email.$model"
        class="w-full h-[2.2rem] bg-white/5 border border-gray-50/10 rounded-[1rem] px-[1rem]"
      />
      <small
        v-if="v$.email.required.$invalid && submitted"
        class="text-danger text-[0.75rem] pl-[0.5rem]"
      >
        {{ $t("auth.login.emailRequired") }}
      </small>
    </div>

    <!-- Password Field -->
    <div class="flex flex-col gap-[0.5rem] mb-[1.5rem]">
      <label for="password" class="font-medium text-[0.875rem] pl-[0.5rem]">{{
        $t("auth.login.password")
      }}</label>
      <Input
        id="password"
        type="password"
        :placeholder="$t('auth.login.passwordPlaceholder')"
        name="password"
        v-model="v$.password.$model"
        class="w-full h-[2.2rem] bg-white/5 border border-gray-50/10 rounded-[1rem] px-[1rem]"
      />
      <small
        v-if="v$.password.required.$invalid && submitted"
        class="text-danger text-[0.75rem] pl-[0.5rem]"
      >
        {{ $t("auth.login.passwordRequired") }}
      </small>
    </div>

    <!-- Submit Button -->
    <div class="flex justify-center">
      <Button
        type="submit"
        :disabled="isLoading"
        class="w-full h-[2.2rem] bg-white text-neutral-800 hover:bg-[#ffffffcc] font-semibold rounded-[1rem] transition-colors"
      >
        {{ $t("auth.register.registerButton") }}
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useRootStore } from "@/stores/store";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";
import { useI18n } from "vue-i18n";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const { t } = useI18n();
const store = useRootStore();
const router = useRouter();
const isLoading = computed(() => store.systemStore.getLoading);

defineEmits(["switch-mode"]);

const submitted = ref(false);

const formFields = ref({
  username: "",
  email: "admin@mail.com",
  password: "1234",
});
const formRules = {
  username: {
    required: helpers.withMessage(
      t("auth.register.usernameRequired"),
      required
    ),
  },
  email: {
    required: helpers.withMessage(t("auth.login.emailRequired"), required),
    email,
  },
  password: {
    required: helpers.withMessage(t("auth.login.passwordRequired"), required),
  },
};

const v$ = useVuelidate(formRules, formFields);
const onSubmit = async (isFormValid: boolean) => {
  submitted.value = true;
  if (!isFormValid) {
    return;
  }

  if (
    formFields.value.email === "admin@mail.com" &&
    formFields.value.password === "1234"
  ) {
    await store.authStore.login();
    router.push("/dashboard");
  } else {
    alert(t("auth.login.invalidCredentials"));
  }
};
</script>
