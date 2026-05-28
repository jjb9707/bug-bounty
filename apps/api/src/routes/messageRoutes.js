import { Router } from "express";
import { getMessages, postMessage } from "../controllers/messageController.js";

export const messageRoutes = Router();

export const messageRoutes.use(authMiddleware);

import { authMiddleware } from "../middleware/auth.js";

messageRoutes.get("/", getMessages);
messageRoutes.post("/", postMessage);
