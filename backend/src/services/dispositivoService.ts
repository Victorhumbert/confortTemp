// src/services/dispositivoService.ts
import { prisma } from "../prismaClient";

interface DispDTO {
  nome: string;
  userId: number;
}

export async function createWithConfig({ nome, userId }: DispDTO) {
  const dispositivo = await prisma.dispositivo
    .create({
      data: {
        nome,
        userId,
      },
      include: { config: true },
    })
    .then(async (dispositivo) => {
      console.log("Dispositivo criado:", dispositivo);
      const teste = await prisma.config.create({
        data: {
          dispositivosId: dispositivo.id,
        },
      });

      console.log("Configuração criada:", teste);
    });

  return dispositivo;
}

export function getAllDispositivos() {
  return prisma.dispositivo.findMany({
    where: {
      ativo: 1,
    },
    include: { user: true, config: true, historico: true },
  });
}

export function getDispositivo(id: number) {
  return prisma.dispositivo.findUnique({
    where: { id },
    include: { user: true, config: true, historico: true },
  });
}

export function updateConfig(
  dispositivoId: number,
  data: { temperaturaMin: number,temperaturaMax: number, motionMax: number   }
) {
  return prisma.config.update({
    where: { dispositivosId: dispositivoId },
    data: { ...data, updatedAt: new Date() },
  });
}

export function removeDispositivo(id: number) {
  return prisma.dispositivo.delete({ where: { id } });
}

export function getByUserId(userId: number) {
  return prisma.dispositivo.findMany({
    where: { userId, ativo: 1 },
    include: { user: true, config: true, historico: true },
  });
}
