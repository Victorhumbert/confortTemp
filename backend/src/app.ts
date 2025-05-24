// src/app.ts
import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import routes from "./routes/index.ts";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response): void => { res.send("Servidor rodando!"); });
app.use("/api", routes);

export default app;
