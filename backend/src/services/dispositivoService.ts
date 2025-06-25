// src/services/dispositivoService.ts
import { prisma } from "../prismaClient";

interface DispDTO {
  nome: string;
  local: string;
  userId: number;
}

interface IDadosHardware {
  umidade: number;
  temperatura: number;
  sensor: boolean;
}

export async function createWithConfig({ nome, local, userId }: DispDTO) {
  const dispositivo = await prisma.dispositivo
    .create({
      data: {
        nome,
        local,
        userId,
        ativo: 1, // Assuming 'ativo' is a boolean field indicating if the device is active
      },
      include: { config: true },
    })
    .then(async (dispositivo: any) => {
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

export async function updateConfig(
  dispositivoId: number,
  data: {
    temperaturaMin: number;
    temperaturaMax: number;
    motionMax: number;
    nome: string;
  }
) {
  if (data.nome) {
    const nomeAtualizado = await prisma.dispositivo.update({
      where: { id: dispositivoId },
      data: { ...data },
    });
    return nomeAtualizado;
  }
  if (data.temperaturaMax || data.temperaturaMin || data.motionMax) {
    const configAtualizada = await prisma.config.update({
      where: { dispositivosId: dispositivoId },
      data: { ...data, updatedAt: new Date() },
    });
    return configAtualizada;
  }
}

export function removeDispositivo(id: number) {
  return prisma.dispositivo.update({ where: { id }, data: { ativo: 0 } });
}

export function getByUserId(userId: number) {
  return prisma.dispositivo.findMany({
    where: { userId, ativo: 1 },
    include: { user: true, config: true, historico: true },
  });
}

export function getDispositivoByHardwareId(idHardware: number) {
  const response = prisma.config.findFirst({
    where: { dispositivosId: idHardware },
  });
  return response;
}

export function updateDadosDispositivo(idHardware: number, dados: IDadosHardware) {
  if (dados.sensor === undefined && !dados.temperatura && !dados.umidade) {
    throw new Error("Dados são obrigatórios.");
  }

  const response = prisma.config.update({
    where: { dispositivosId: idHardware },
    data: dados,
  }).then(async (config) => {
    console.log("Configuração atualizada:", config);
    if (!config) {
      throw new Error("Configuração não encontrada para o ID de hardware fornecido.");
    }
    console.log("Dados do dispositivo:", dados);
    const historico = await prisma.historico.create({
      data: {
        dispositivoId: idHardware,
      }
    })
    console.log("Dados do dispositivo:", historico);

    if (dados.sensor) {
      await prisma.historico_mov.create({
        data: {
          motion: dados.sensor ? 1 : 0,
          historicoId: historico.id,
        }
      })
    }
    
    if (dados.temperatura) {
      console.log("Temperatura recebida:", dados.temperatura);
      await prisma.historico_temp.create({
        data: {
          temperatura: dados.temperatura,
          historicoId: historico.id,
        }
      })
    }
    return {
      ...config,
      historicoId: historico.id,
    }
  });
  return response;
}
