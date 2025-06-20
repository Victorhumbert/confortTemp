import { Router } from "express";
import {
  updateClimatizacao,
  disableClimatizacao,
  listUsers,
} from "../controllers/userController";

const router = Router();
router.get("/users", listUsers);
router.put("/users/climatizacao/:id", updateClimatizacao);
router.delete("/users/climatizacao/:id", disableClimatizacao);
export default router;
