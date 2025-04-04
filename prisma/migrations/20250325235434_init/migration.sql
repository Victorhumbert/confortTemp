-- CreateTable
CREATE TABLE "Historico" (
    "id" SERIAL NOT NULL,
    "dispositivoId" INTEGER,

    CONSTRAINT "Historico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Historico_temp" (
    "id" SERIAL NOT NULL,
    "temperatura" INTEGER NOT NULL DEFAULT 24,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "historicoId" INTEGER,

    CONSTRAINT "Historico_temp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Historico_mov" (
    "id" SERIAL NOT NULL,
    "motion" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "historicoId" INTEGER,

    CONSTRAINT "Historico_mov_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Historico" ADD CONSTRAINT "Historico_dispositivoId_fkey" FOREIGN KEY ("dispositivoId") REFERENCES "Dispositivo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico_temp" ADD CONSTRAINT "Historico_temp_historicoId_fkey" FOREIGN KEY ("historicoId") REFERENCES "Historico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico_mov" ADD CONSTRAINT "Historico_mov_historicoId_fkey" FOREIGN KEY ("historicoId") REFERENCES "Historico"("id") ON DELETE SET NULL ON UPDATE CASCADE;
