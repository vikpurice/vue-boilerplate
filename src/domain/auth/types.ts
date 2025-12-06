export interface AuthGenericData {
  logged_in: boolean;
  is_admin: boolean;
  user_name: string;
}

export interface AuthState {
  authGenericData: AuthGenericData;
}

export interface LoginResponse {
  success: boolean;
  data?: AuthGenericData;
}

export type AuthMode = "login" | "register" | "forgot-password";
