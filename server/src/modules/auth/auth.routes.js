import { Router } from "express";
import { register } from "./auth.controller.js";
import { validateRegister } from "./auth.validation.js";

const authRouter = Router();

authRouter.post("/register", validateRegister, register);

export default authRouter;
