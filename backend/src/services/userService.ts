import { prisma } from "../prismaClient";
export function getAllUsers() {
  return prisma.user.findMany({ include: { dispositivos: true } });
}
