// src/controllers/dispositivoController.ts
import { Request, Response } from "express";
import * as svc from "../services/dispositivoService";

export async function createDispositivo(req: Request, res: Response) {
  try {
    const dto = req.body; // { nome, userId }
    const disp = await svc.createWithConfig(dto);
    res.status(201).json(disp);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function listDispositivos(_req: Request, res: Response) {
  const list = await svc.getAllDispositivos();
  res.json(list);
}

export async function getDispositivoById(req: Request, res: Response) {
  const disp = await svc.getDispositivo(+req.params.id);
  if (!disp) res.status(404).json({ error: "Dispositivo não encontrado" });
  res.json(disp);
}

export async function updateDispositivo(req: Request, res: Response) {
  try {
    const updated = await svc.updateConfig(+req.params.id, req.body);
    res.json({ data: updated, message: "Dados atualizados com sucesso!" });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function deleteDispositivo(req: Request, res: Response) {
  try {
    await svc.removeDispositivo(+req.params.id);
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function listUserDispositivos(req: Request, res: Response) {
  const list = await svc.getByUserId(+req.params.id);
  res.json(list);
}
