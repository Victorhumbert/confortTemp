import { Router } from "express";
import { getClima } from "../controllers/climaController.ts";
const router = Router();
router.get("/clima/:lat/:long", getClima);
export default router;
