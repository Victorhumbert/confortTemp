/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Config` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Historico` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Historico_mov` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Historico_temp` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Config_id_key" ON "Config"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Historico_id_key" ON "Historico"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Historico_mov_id_key" ON "Historico_mov"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Historico_temp_id_key" ON "Historico_temp"("id");
