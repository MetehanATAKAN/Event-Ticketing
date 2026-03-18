import { registerUser } from "./auth.service.js";

export async function register(req, res) {
  try {
    const user = await registerUser(req.body);

    return res.status(201).json({
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;

    return res.status(statusCode).json({
      message: error.message || "Something went wrong",
    });
  }
}
