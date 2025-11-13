/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Pengetahuan` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Pengetahuan_kd_pengetahuan_key";

-- AlterTable
ALTER TABLE "public"."Pengetahuan" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Pengetahuan_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pengetahuan_id_key" ON "public"."Pengetahuan"("id");
