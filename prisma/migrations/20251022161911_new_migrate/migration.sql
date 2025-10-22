/*
  Warnings:

  - The primary key for the `Gejala` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deskripsi` on the `Gejala` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Gejala` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `Gejala` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to drop the `HasilAnalisa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pasien` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RekamGejala` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RiwayatStroke` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kd_gejala` to the `Gejala` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_gejala` to the `Gejala` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."HasilAnalisa" DROP CONSTRAINT "HasilAnalisa_pasienId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RekamGejala" DROP CONSTRAINT "RekamGejala_gejalaId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RekamGejala" DROP CONSTRAINT "RekamGejala_pasienId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RiwayatStroke" DROP CONSTRAINT "RiwayatStroke_pasienId_fkey";

-- DropIndex
DROP INDEX "public"."User_email_key";

-- AlterTable
ALTER TABLE "public"."Gejala" DROP CONSTRAINT "Gejala_pkey",
DROP COLUMN "deskripsi",
DROP COLUMN "id",
DROP COLUMN "nama",
ADD COLUMN     "kd_gejala" CHAR(10) NOT NULL,
ADD COLUMN     "nama_gejala" VARCHAR(50) NOT NULL,
ADD COLUMN     "poin_Gejala" TEXT,
ADD CONSTRAINT "Gejala_pkey" PRIMARY KEY ("kd_gejala");

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "email",
ADD COLUMN     "username" VARCHAR(50) NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(50);

-- DropTable
DROP TABLE "public"."HasilAnalisa";

-- DropTable
DROP TABLE "public"."Pasien";

-- DropTable
DROP TABLE "public"."RekamGejala";

-- DropTable
DROP TABLE "public"."RiwayatStroke";

-- DropEnum
DROP TYPE "public"."JenisStroke";

-- DropEnum
DROP TYPE "public"."Resiko";

-- DropEnum
DROP TYPE "public"."Tingkat";

-- CreateTable
CREATE TABLE "public"."Penyakit" (
    "kd_penyakit" VARCHAR(10) NOT NULL,
    "nama_penyakit" VARCHAR(50) NOT NULL,
    "solusi" TEXT NOT NULL,

    CONSTRAINT "Penyakit_pkey" PRIMARY KEY ("kd_penyakit")
);

-- CreateTable
CREATE TABLE "public"."Pengetahuan" (
    "kd_pengetahuan" VARCHAR(10) NOT NULL,
    "kd_gejala" VARCHAR(10) NOT NULL,
    "kd_penyakit" VARCHAR(10) NOT NULL,
    "pertanyaan" TEXT NOT NULL,

    CONSTRAINT "Pengetahuan_pkey" PRIMARY KEY ("kd_pengetahuan")
);

-- CreateTable
CREATE TABLE "public"."Relasi" (
    "id" SERIAL NOT NULL,
    "kd_gejala" VARCHAR(10) NOT NULL,
    "kd_penyakit" VARCHAR(10) NOT NULL,
    "kd_pengetahuan" VARCHAR(10),

    CONSTRAINT "Relasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Hasil" (
    "id" SERIAL NOT NULL,
    "kd_gejala" VARCHAR(10) NOT NULL,
    "kd_penyakit" VARCHAR(10) NOT NULL,
    "poin_gejala" TEXT NOT NULL,
    "poin_user" TEXT NOT NULL,

    CONSTRAINT "Hasil_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Relasi_kd_gejala_kd_penyakit_key" ON "public"."Relasi"("kd_gejala", "kd_penyakit");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- AddForeignKey
ALTER TABLE "public"."Pengetahuan" ADD CONSTRAINT "Pengetahuan_kd_gejala_fkey" FOREIGN KEY ("kd_gejala") REFERENCES "public"."Gejala"("kd_gejala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pengetahuan" ADD CONSTRAINT "Pengetahuan_kd_penyakit_fkey" FOREIGN KEY ("kd_penyakit") REFERENCES "public"."Penyakit"("kd_penyakit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Relasi" ADD CONSTRAINT "Relasi_kd_gejala_fkey" FOREIGN KEY ("kd_gejala") REFERENCES "public"."Gejala"("kd_gejala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Relasi" ADD CONSTRAINT "Relasi_kd_penyakit_fkey" FOREIGN KEY ("kd_penyakit") REFERENCES "public"."Penyakit"("kd_penyakit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Relasi" ADD CONSTRAINT "Relasi_kd_pengetahuan_fkey" FOREIGN KEY ("kd_pengetahuan") REFERENCES "public"."Pengetahuan"("kd_pengetahuan") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Hasil" ADD CONSTRAINT "Hasil_kd_gejala_fkey" FOREIGN KEY ("kd_gejala") REFERENCES "public"."Gejala"("kd_gejala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Hasil" ADD CONSTRAINT "Hasil_kd_penyakit_fkey" FOREIGN KEY ("kd_penyakit") REFERENCES "public"."Penyakit"("kd_penyakit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Hasil" ADD CONSTRAINT "Hasil_kd_gejala_kd_penyakit_fkey" FOREIGN KEY ("kd_gejala", "kd_penyakit") REFERENCES "public"."Relasi"("kd_gejala", "kd_penyakit") ON DELETE RESTRICT ON UPDATE CASCADE;
