import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function listUsers(_req: Request, res: Response) {
  const users = await userService.getAllUsers();
  res.json(users);
}
export async function getUserById(req: Request, res: Response) {
  const users = await userService.GetUserById(Number(req.params.id));
  res.json(users);
}
export async function updateClimatizacao(req: Request, res: Response) {
  const userId = Number(req.params.id);
  const climatizacao = Number(req.body.climatizacao);
  const users = await userService.UpdateClimatizacao(userId, { climatizacao });
  res.json(users);
}
export async function disableClimatizacao(req: Request, res: Response) {
  const userId = Number(req.params.id);
  const users = await userService.DisableClimatizacao(userId);
  res.json(users);
}
export async function updateUserData(req: Request, res: Response) {
  const userId = Number(req.params.id);
  if (req.body.password) {
    const users = await userService.UpdateUserPassword(userId, req.body);
    res.json(users);
    return;
  }
  const users = await userService.UpdateUser(userId, req.body);
  res.json(users);
}
