import { Router } from "express";
import { listUsers } from "../controllers/userController.ts";
const router = Router();
router.get("/users", listUsers);
export default router;
