import { Router } from "express";
import { getJobs, postJob } from "../controllers/jobController.js";

export const jobRoutes = Router();

export const jobRoutes.use(authMiddleware);

import { authMiddleware } from "../middleware/auth.js";

jobRoutes.get("/", getJobs);
jobRoutes.post("/", postJob);
