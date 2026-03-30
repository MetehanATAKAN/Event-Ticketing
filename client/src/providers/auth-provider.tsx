"use client";

import type { ReactNode } from "react";
import { createContext, useState } from "react";

type AuthContextValue = {
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
});

function getInitialAuthState() {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(window.localStorage.getItem("token"));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated] = useState(getInitialAuthState);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
