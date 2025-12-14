import type { AuthState } from "../types";

export const state = (): AuthState => ({
  authGenericData: {
    user_id: "",
    user_name: "",
    email: "",
    roles: [],
  },
});
