// src/services/authService.ts
import { prisma } from "../prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

interface AuthDTO {
  username?: string;
  email: string;
  senha: string;
}

export async function registerUser({ username, email, senha }: AuthDTO) {
  if (await prisma.user.findFirst({ where: { email } }))
    throw { status: 409, message: "E-mail já cadastrado" };

  const hash = await bcrypt.hash(senha, 10);
  const user = await prisma.user.create({
    data: { username, email, senha: hash },
  });
  const { senha: _, ...userData } = user;
  return { status: 201, message: "Usuário criado com sucesso", user: userData };
}

export async function loginUser({ email, senha }: AuthDTO) {
  const user = await prisma.user.findFirst({ where: { email } });

  if (!user || !(await bcrypt.compare(senha, user.senha)))
    throw { status: 401, message: "Usuário ou senha inválidos" };

  const token = jwt.sign(
    { id: user.id, email: user.email, username: user.username },
    JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );
  const { senha: _, ...userData } = user;
  return {
    status: 200,
    message: "Login realizado com sucesso",
    user: userData,
    token,
  };
}
