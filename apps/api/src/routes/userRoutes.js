import { Router } from "express";
import { getUsers, postUser } from "../controllers/userController.js";

export const userRoutes = Router();

export const userRoutes.use(authMiddleware);

import { authMiddleware } from "../middleware/auth.js";

userRoutes.get("/", getUsers);
userRoutes.post("/", postUser);
