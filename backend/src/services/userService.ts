import { prisma } from "../prismaClient";
import bcrypt from "bcrypt";
interface UpdateClimatizacaoData {
  climatizacao: number;
}

interface UpdateUserData {
  username?: string;
  email?: string;
  password?: string;
}

export function getAllUsers() {
  return prisma.user.findMany({ include: { dispositivos: true } });
}
export function UpdateClimatizacao(id: number, data: UpdateClimatizacaoData) {
  console.log("Updating climatizacao for user ID:", id, "with data:", data);
  return prisma.user.update({
    where: { id },
    data: {
      climatizacao: data.climatizacao,
    },
  });
}
export async function DisableClimatizacao(id: number) {
  return prisma.user.update({
    where: { id },
    data: {
      climatizacao: 0, // Assuming 0 means disabled
    },
  });
}
export function GetUserById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}
export function UpdateUser(id: number, data: UpdateUserData) {
  return prisma.user.update({
    where: { id },
    data: data,
  });
}
export async function UpdateUserPassword(id: number, data: UpdateUserData) {
  const password = data.password;
  if (!password) {
    throw new Error("Senha não informada");
  }
  const newHash = await bcrypt.hash(password, 10);
  return prisma.user.update({
    where: { id },
    data: {
      senha: newHash,
    },
  });
}
