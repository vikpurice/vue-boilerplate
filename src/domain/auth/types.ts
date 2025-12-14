export interface AuthGenericData {
  user_id: string;
  user_name: string;
  email: string;
  roles: string[];
}

export interface AuthState {
  authGenericData: AuthGenericData;
}

export interface LoginResponse {
  success: boolean;
  data?: AuthGenericData;
}

export type AuthMode = "login" | "register" | "forgot-password";
