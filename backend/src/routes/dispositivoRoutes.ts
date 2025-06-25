// src/routes/dispositivoRoutes.ts
import { Router } from "express";
import {
  createDispositivo,
  listDispositivos,
  getDispositivoById,
  updateDispositivo,
  deleteDispositivo,
  listUserDispositivos,
  getDispositivoByHardwareId,
  updateDadosDispositivo,
} from "../controllers/dispositivoController";

const router = Router();

router.post("/dispositivos", createDispositivo);
router.get("/dispositivos", listDispositivos);
router.get("/dispositivos/:id", getDispositivoById);
router.put("/dispositivos/:id", updateDispositivo);
router.delete("/dispositivos/:id", deleteDispositivo);
router.get("/user/:id/dispositivos", listUserDispositivos);
router.get("/hardware/:id", getDispositivoByHardwareId);
router.put("/hardware/:id", updateDadosDispositivo);

export default router;
