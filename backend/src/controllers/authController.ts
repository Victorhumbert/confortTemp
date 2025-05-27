// src/controllers/authController.ts
import { Request, Response } from "express";
import * as authService from "../services/authService";

export async function register(req: Request, res: Response) {
  try {
    const result = await authService.registerUser(req.body);
    res.status(201).json(result);
  } catch (err: any) {
    res.status(err.status || 400).json({ error: err.message });
  }
}

export async function login(req: Request, res: Response) {
  console.log("Login request received:", req.body);
  try {
    const result = await authService.loginUser(req.body);
    res.status(200).json(result);
  } catch (err: any) {
    res.status(err.status || 401).json({ error: err.message });
  }
}
