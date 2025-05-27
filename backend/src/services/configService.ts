// configService.ts
import { prisma } from "../prismaClient";
export function create(data: any) {
  return prisma.config.create({ data });
}
export function update(id: number, data: any) {
  return prisma.config.update({ where: { id }, data });
}
export function getById(id: number) {
  return prisma.config.findUnique({ where: { id } });
}
