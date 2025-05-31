import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";
export const verifyToken: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "Token não fornecido" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const secret = process.env.JWT_SECRET as string;
    jwt.verify(token, secret);
  } catch (err) {
    res.status(403).json({ message: "Token inválido" });
    return;
  }
}
