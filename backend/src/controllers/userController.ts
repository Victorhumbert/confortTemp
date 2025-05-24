import { Request, Response } from "express";
import * as userService from "../services/userService.ts";

export async function listUsers(_req: Request, res: Response) {
  const users = await userService.getAllUsers();
  res.json(users);
}
