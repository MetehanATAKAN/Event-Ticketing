import { Router } from "express";
import { register, login } from "./auth.controller.js";
import { validateLogin, validateRegister } from "./auth.validation.js";

const authRouter = Router();

authRouter.post("/register", validateRegister, register);
authRouter.post("/login", validateLogin, login);

export default authRouter;
