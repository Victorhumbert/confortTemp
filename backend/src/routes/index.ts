// src/routes/index.ts
import { Router } from "express";
import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import dispositivoRoutes from "./dispositivoRoutes";
import configRoutes from "./configRoutes";
import climaRoutes from "./climaRoutes";

const router = Router();
router.use(authRoutes);
router.use(userRoutes);
router.use(dispositivoRoutes);
router.use(configRoutes);
router.use(climaRoutes);

export default router;
