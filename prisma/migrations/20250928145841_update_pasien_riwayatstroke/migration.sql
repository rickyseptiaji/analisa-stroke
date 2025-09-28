-- CreateTable
CREATE TABLE "public"."Pasien" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "umur" INTEGER NOT NULL,
    "jenisKelamin" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "noTelepon" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pasien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RiwayatStroke" (
    "id" SERIAL NOT NULL,
    "pasienId" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gejala" TEXT NOT NULL,
    "hasilAnalisa" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RiwayatStroke_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RiwayatStroke_pasienId_idx" ON "public"."RiwayatStroke"("pasienId");

-- AddForeignKey
ALTER TABLE "public"."RiwayatStroke" ADD CONSTRAINT "RiwayatStroke_pasienId_fkey" FOREIGN KEY ("pasienId") REFERENCES "public"."Pasien"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
