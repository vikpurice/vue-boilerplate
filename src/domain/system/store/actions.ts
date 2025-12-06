import type { SystemState, ToastMessageType } from "../types";

export const actions = {
  setLoading(this: SystemState, isLoading: boolean): void {
    this.loading = isLoading;
  },

  addToastMessage(
    this: SystemState,
    message: string,
    type: ToastMessageType = "SUCCESS"
  ): void {
    this.$patch({
      toastMessage: {
        payload: message,
        type: type,
      },
    });
  },
};
