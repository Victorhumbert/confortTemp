import { Router } from "express";
import { getClima } from "../controllers/climaController";
import { verifyToken } from "../../infra/middleware/authMiddleware";
const router = Router();
router.get("/dados", verifyToken, getClima);
router.get("/clima/:lat/:long", getClima);
export default router;
