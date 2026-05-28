import { Router } from "express";
import { getNotifications, postNotification } from "../controllers/notificationController.js";

export const notificationRoutes = Router();

export const notificationRoutes.use(authMiddleware);

import { authMiddleware } from "../middleware/auth.js";

notificationRoutes.get("/", getNotifications);
notificationRoutes.post("/", postNotification);
