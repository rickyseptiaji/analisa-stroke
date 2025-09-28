/*
  Warnings:

  - A unique constraint covering the columns `[nik]` on the table `Pasien` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nik` to the `Pasien` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggalLahir` to the `Pasien` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Pasien" ADD COLUMN     "nik" TEXT NOT NULL,
ADD COLUMN     "tanggalLahir" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pasien_nik_key" ON "public"."Pasien"("nik");
