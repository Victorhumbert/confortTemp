import { prisma } from "../prismaClient";

interface UpdateClimatizacaoData {
  climatizacao: number;
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
