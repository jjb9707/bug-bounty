import { Router } from "express";
import { createPayment } from "../controllers/paymentController.js";

export const paymentRoutes = Router();

export const paymentRoutes.use(authMiddleware);

import { authMiddleware } from "../middleware/auth.js";

paymentRoutes.post("/", createPayment);
