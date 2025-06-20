// configRoutes.ts
import { Router } from "express";
import { createConfig, getConfigById } from "../controllers/configController";
const router = Router();
router.post("/config", createConfig);
router.get("/config/:id", getConfigById);
export default router;
