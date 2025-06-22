import { Router } from "express";
import {
  updateClimatizacao,
  disableClimatizacao,
  listUsers,
  getUserById,
  updateUserData,
} from "../controllers/userController";

const router = Router();
router.get("/users", listUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUserData);
router.put("/users/climatizacao/:id", updateClimatizacao);
router.delete("/users/climatizacao/:id", disableClimatizacao);
export default router;
