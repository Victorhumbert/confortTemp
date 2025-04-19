/*
  Warnings:

  - A unique constraint covering the columns `[dispositivosId]` on the table `Config` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Config_dispositivosId_key" ON "Config"("dispositivosId");
