// src/routes/index.ts
import { Router } from "express";
import authRoutes from "./authRoutes.ts";
import userRoutes from "./userRoutes.ts";
import dispositivoRoutes from "./dispositivoRoutes.ts";
import configRoutes from "./configRoutes.ts";
import climaRoutes from "./climaRoutes.ts";

const router = Router();
router.use(authRoutes);
router.use(userRoutes);
router.use(dispositivoRoutes);
router.use(configRoutes);
router.use(climaRoutes);

export default router;
