import { Request, Response } from "express";
import { fetchClima } from "../services/climaService.ts";

export async function getClima(req: Request, res: Response) {
  try {
    const data = await fetchClima(req.params.lat, req.params.long);
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
