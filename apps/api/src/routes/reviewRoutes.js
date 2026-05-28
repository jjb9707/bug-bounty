import { Router } from "express";
import { getReviews, postReview } from "../controllers/reviewController.js";

export const reviewRoutes = Router();

export const reviewRoutes.use(authMiddleware);

import { authMiddleware } from "../middleware/auth.js";

reviewRoutes.get("/", getReviews);
reviewRoutes.post("/", postReview);
