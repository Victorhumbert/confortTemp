// configRoutes.ts
import { Router } from "express";
import { createConfig, updateConfig, getConfigById } from "../controllers/configController.ts";
const router = Router();
router.post("/config", createConfig);
router.put("/config/:id", updateConfig);
router.get("/config/:id", getConfigById);
export default router;
