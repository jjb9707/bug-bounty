import { Router } from "express";
import { search } from "../controllers/searchController.js";

export const searchRoutes = Router();

export const searchRoutes.use(authMiddleware);

import { authMiddleware } from "../middleware/auth.js";

searchRoutes.get("/", search);
