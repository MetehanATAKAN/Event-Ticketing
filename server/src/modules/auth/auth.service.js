import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "./auth.repository.js";

export async function registerUser(payload) {
  const existingUser = await findUserByEmail(payload.email);

  if (existingUser) {
    const error = new Error("Email is already in use");
    error.statusCode = 409;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const user = await createUser({
    ...payload,
    password: hashedPassword,
  });

  return user;
}
