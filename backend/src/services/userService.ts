import { prisma } from "../prismaClient.ts";
export function getAllUsers() {
  return prisma.user.findMany({ include: { dispositivos: true } });
}
