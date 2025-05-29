// src/routes/dispositivoRoutes.ts
import { Router } from "express";
import {
  createDispositivo,
  listDispositivos,
  getDispositivoById,
  updateDispositivo,
  deleteDispositivo,
  listUserDispositivos,
} from "../controllers/dispositivoController";

const router = Router();

router.post("/dispositivos", createDispositivo);
router.get("/dispositivos", listDispositivos);
router.get("/dispositivos/:id", getDispositivoById);
router.put("/dispositivos/:id", updateDispositivo);
router.delete("/dispositivos/:id", deleteDispositivo);
router.get("/user/:id/dispositivos", listUserDispositivos);

export default router;
