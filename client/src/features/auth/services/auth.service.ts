import { apiClient, ApiError } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import type { LoginPayload, RegisterPayload } from "@/features/auth/types";

export async function registerUser(payload: RegisterPayload) {
  return apiClient.post(API_ENDPOINTS.auth.register, payload);
}

export async function loginUser(payload: LoginPayload) {
  if (!payload.email || !payload.password) {
    throw new ApiError("E-posta ve sifre gerekli.", 400);
  }

  const response = await apiClient.post<{
    message?: string;
    token?: string;
    data?: {
      token?: string;
      user?: {
        id?: number;
        name?: string;
        email?: string;
      };
      email?: string;
      role?: string;
    };
    user?: {
      id?: number;
      name?: string;
      email?: string;
      role?: string;
    };
  }>(API_ENDPOINTS.auth.login, payload);

  const token = response.data?.token ?? response.token;

  if (!token) {
    throw new ApiError("Login yanitinda token bulunamadi.", 500);
  }

  if (typeof window !== "undefined") {
    window.localStorage.setItem("token", token);

    const user = response.data?.user ?? response.user;
    if (user) {
      window.localStorage.setItem("auth_user", JSON.stringify(user));
    }
  }

  if (typeof document !== "undefined") {
    document.cookie = "pp_auth=1; path=/";
  }

  return {
    user: response.data?.user ?? response.user ?? response.data ?? { email: payload.email },
  };
}

export function logoutUser() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("auth_user");
  }

  if (typeof document !== "undefined") {
    document.cookie = "pp_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
