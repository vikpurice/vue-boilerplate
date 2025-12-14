import type { AuthGenericData, AuthState } from "@/domain/auth/types";
import { loginService } from "@/domain/auth/service";
import { useRootStore } from "@/stores/store";

export const actions = {
  async login(
    this: AuthState & { setAccountLogin: (data: AuthGenericData) => void }
  ) {
    const store = useRootStore();

    try {
      store.systemStore.setLoading(true);
      const response = await loginService();

      if (response.success && response.data) {
        this.setAccountLogin(response.data);
        // temp solution (not recommended to save the authorization info in ls)
        localStorage.setItem("logged_in", this.authGenericData.user_id);
      } else {
        store.systemStore.addToastMessage(
          "Service failed, please try again",
          "ERROR"
        );
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      store.systemStore.setLoading(false);
    }
  },
  setAccountLogin(this: AuthState, data: AuthGenericData) {
    this.authGenericData = data;
  },
};
