-- AlterTable
ALTER TABLE "Config" ALTER COLUMN "temperaturaMax" SET DEFAULT 30.00,
ALTER COLUMN "temperaturaMax" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "temperaturaMin" SET DEFAULT 18.00,
ALTER COLUMN "temperaturaMin" SET DATA TYPE DOUBLE PRECISION;
