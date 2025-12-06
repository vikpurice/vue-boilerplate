import { useRootStore } from "@/stores/store";
import { toast } from "vue-sonner";
import type { SystemState } from "../types";

const createMessagingSubscriber = () => {
  useRootStore().systemStore.$subscribe((mutation, state: SystemState) => {
    if (state.toastMessage) {
      const { type, payload } = state.toastMessage;

      switch (type) {
        case "ERROR":
          toast.error(payload);
          break;

        case "SUCCESS":
          toast.success(payload);
          break;

        case "WARNING":
          toast.warning(payload);
          break;

        case "INFO":
          toast.info(payload);
          break;
      }
    }
  });
};

export { createMessagingSubscriber };
