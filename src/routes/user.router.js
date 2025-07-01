import { Router } from "express"

export const userRouter = Router();
import { regsiter,login } from "../controllers/user.controller.js";

userRouter.post('/register',regsiter)
.post('/login',login);
