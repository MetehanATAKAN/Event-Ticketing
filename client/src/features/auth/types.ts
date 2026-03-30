export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthFormErrors = Partial<
  Record<keyof RegisterPayload | "confirmPassword" | "acceptedTerms", string>
>;
