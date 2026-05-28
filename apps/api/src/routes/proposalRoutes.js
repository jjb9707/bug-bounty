import { Router } from "express";
import { getProposals, postProposal } from "../controllers/proposalController.js";

export const proposalRoutes = Router();

export const proposalRoutes.use(authMiddleware);

import { authMiddleware } from "../middleware/auth.js";

proposalRoutes.get("/", getProposals);
proposalRoutes.post("/", postProposal);
