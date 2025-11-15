/*
  Warnings:

  - You are about to drop the column `diagnosaId` on the `DiagnosaDetail` table. All the data in the column will be lost.
  - You are about to drop the column `tingkat_gejala` on the `Hasil` table. All the data in the column will be lost.
  - You are about to drop the column `tingkat_penyakit` on the `Hasil` table. All the data in the column will be lost.
  - Added the required column `hasilId` to the `DiagnosaDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."DiagnosaDetail" DROP CONSTRAINT "DiagnosaDetail_diagnosaId_fkey";

-- AlterTable
ALTER TABLE "public"."DiagnosaDetail" DROP COLUMN "diagnosaId",
ADD COLUMN     "hasilId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Hasil" DROP COLUMN "tingkat_gejala",
DROP COLUMN "tingkat_penyakit";

-- AddForeignKey
ALTER TABLE "public"."DiagnosaDetail" ADD CONSTRAINT "DiagnosaDetail_hasilId_fkey" FOREIGN KEY ("hasilId") REFERENCES "public"."Hasil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
