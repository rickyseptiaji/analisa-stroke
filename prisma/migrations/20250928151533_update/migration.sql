/*
  Warnings:

  - You are about to drop the column `gejala` on the `RiwayatStroke` table. All the data in the column will be lost.
  - You are about to drop the column `hasilAnalisa` on the `RiwayatStroke` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal` on the `RiwayatStroke` table. All the data in the column will be lost.
  - Added the required column `diabetes` to the `RiwayatStroke` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hipertensi` to the `RiwayatStroke` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kolesterol` to the `RiwayatStroke` table without a default value. This is not possible if the table is not empty.
  - Added the required column `merokok` to the `RiwayatStroke` table without a default value. This is not possible if the table is not empty.
  - Added the required column `obese` to the `RiwayatStroke` table without a default value. This is not possible if the table is not empty.
  - Added the required column `riwayatKeluarga` to the `RiwayatStroke` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Tingkat" AS ENUM ('RINGAN', 'SEDANG', 'BERAT');

-- CreateEnum
CREATE TYPE "public"."Resiko" AS ENUM ('RENDAH', 'SEDANG', 'TINGGI');

-- CreateEnum
CREATE TYPE "public"."JenisStroke" AS ENUM ('ISKEMIK', 'HEMORAGIK', 'TRANSIENT', 'BELUM_DIKETAHUI');

-- AlterTable
ALTER TABLE "public"."RiwayatStroke" DROP COLUMN "gejala",
DROP COLUMN "hasilAnalisa",
DROP COLUMN "tanggal",
ADD COLUMN     "diabetes" BOOLEAN NOT NULL,
ADD COLUMN     "hipertensi" BOOLEAN NOT NULL,
ADD COLUMN     "kolesterol" BOOLEAN NOT NULL,
ADD COLUMN     "merokok" BOOLEAN NOT NULL,
ADD COLUMN     "obese" BOOLEAN NOT NULL,
ADD COLUMN     "riwayatKeluarga" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "public"."Gejala" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gejala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RekamGejala" (
    "id" SERIAL NOT NULL,
    "pasienId" INTEGER NOT NULL,
    "gejalaId" INTEGER NOT NULL,
    "nilai" INTEGER NOT NULL,
    "tingkat" "public"."Tingkat" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RekamGejala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HasilAnalisa" (
    "id" SERIAL NOT NULL,
    "pasienId" INTEGER NOT NULL,
    "resiko" "public"."Resiko" NOT NULL,
    "jenisStroke" "public"."JenisStroke" NOT NULL,
    "persentase" DOUBLE PRECISION NOT NULL,
    "saran" TEXT NOT NULL,
    "tanggalAnalisa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HasilAnalisa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RekamGejala_pasienId_idx" ON "public"."RekamGejala"("pasienId");

-- CreateIndex
CREATE INDEX "RekamGejala_gejalaId_idx" ON "public"."RekamGejala"("gejalaId");

-- CreateIndex
CREATE INDEX "HasilAnalisa_pasienId_idx" ON "public"."HasilAnalisa"("pasienId");

-- AddForeignKey
ALTER TABLE "public"."RekamGejala" ADD CONSTRAINT "RekamGejala_pasienId_fkey" FOREIGN KEY ("pasienId") REFERENCES "public"."Pasien"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RekamGejala" ADD CONSTRAINT "RekamGejala_gejalaId_fkey" FOREIGN KEY ("gejalaId") REFERENCES "public"."Gejala"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."HasilAnalisa" ADD CONSTRAINT "HasilAnalisa_pasienId_fkey" FOREIGN KEY ("pasienId") REFERENCES "public"."Pasien"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
