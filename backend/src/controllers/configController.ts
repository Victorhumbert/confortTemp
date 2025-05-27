// configController.ts
import { Request, Response } from "express";
import * as configService from "../services/configService.ts";
export async function createConfig(req: Request, res: Response) {
  /*…*/
}
export async function updateConfig(req: Request, res: Response) {
  /*…*/
}
export async function getConfigById(req: Request, res: Response) {
  try {
    const config = configService.getById(Number(req.params.id));
    if (!config) {
      res.status(404).json({ error: "Configuração não encontrada" });
    }
    res.status(200).json(config);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
