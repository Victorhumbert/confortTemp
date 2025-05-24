// src/services/dispositivoService.ts
import { prisma } from "../prismaClient.ts";

interface DispDTO { nome: string; userId: number; }

export function createWithConfig({ nome, userId }: DispDTO) {
  return prisma.dispositivo.create({
    data: {
      nome,
      userId,
      config: {
        create: { temperatura: 0, umidade: 0, sensor: false },
      },
    },
    include: { config: true },
  });
}

export function getAllDispositivos() {
  return prisma.dispositivo.findMany({
    include: { user: true, config: true, historico: true },
  });
}

export function getDispositivo(id: number) {
  return prisma.dispositivo.findUnique({
    where: { id },
    include: { user: true, config: true, historico: true },
  });
}

export function updateConfig(dispositivoId: number, data: { temperatura: number }) {
  return prisma.config.update({
    where: { dispositivosId: dispositivoId },
    data: { temperatura: data.temperatura, updatedAt: new Date() },
  });
}

export function removeDispositivo(id: number) {
  return prisma.dispositivo.delete({ where: { id } });
}

export function getByUserId(userId: number) {
  return prisma.dispositivo.findMany({
    where: { userId },
    include: { user: true, config: true, historico: true },
  });
}
