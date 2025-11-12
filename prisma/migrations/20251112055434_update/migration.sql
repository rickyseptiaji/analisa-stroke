/*
  Warnings:

  - You are about to drop the `Relasi` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Hasil" DROP CONSTRAINT "Hasil_kd_gejala_kd_penyakit_fkey";

-- DropForeignKey
ALTER TABLE "public"."Relasi" DROP CONSTRAINT "Relasi_kd_gejala_fkey";

-- DropForeignKey
ALTER TABLE "public"."Relasi" DROP CONSTRAINT "Relasi_kd_penyakit_fkey";

-- DropTable
DROP TABLE "public"."Relasi";
