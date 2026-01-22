-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(50),
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Pasien" (
    "id" SERIAL NOT NULL,
    "nik" VARCHAR(50) NOT NULL,
    "nama_lengkap" VARCHAR(50) NOT NULL,
    "tanggal_lahir" TIMESTAMP(3) NOT NULL,
    "umur" INTEGER NOT NULL,
    "jenis_kelamin" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "alamat" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pasien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Gejala" (
    "kd_gejala" VARCHAR(10) NOT NULL,
    "nama_gejala" TEXT NOT NULL,
    "poin_gejala" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Penyakit" (
    "kd_penyakit" VARCHAR(10) NOT NULL,
    "nama_penyakit" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Solusi" (
    "id" SERIAL NOT NULL,
    "solusi" TEXT NOT NULL,
    "kd_penyakit" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Solusi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Pengetahuan" (
    "id" SERIAL NOT NULL,
    "kd_pengetahuan" VARCHAR(10) NOT NULL,
    "kd_gejala" VARCHAR(10) NOT NULL,
    "kd_penyakit" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pengetahuan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Hasil" (
    "id" SERIAL NOT NULL,
    "pasienId" INTEGER NOT NULL,
    "kd_penyakit" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hasil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DiagnosaDetail" (
    "id" SERIAL NOT NULL,
    "hasilId" INTEGER NOT NULL,
    "kd_gejala" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiagnosaDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Pasien_nik_key" ON "public"."Pasien"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "Gejala_kd_gejala_key" ON "public"."Gejala"("kd_gejala");

-- CreateIndex
CREATE UNIQUE INDEX "Penyakit_kd_penyakit_key" ON "public"."Penyakit"("kd_penyakit");

-- CreateIndex
CREATE UNIQUE INDEX "Solusi_id_key" ON "public"."Solusi"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pengetahuan_id_key" ON "public"."Pengetahuan"("id");

-- AddForeignKey
ALTER TABLE "public"."Solusi" ADD CONSTRAINT "Solusi_kd_penyakit_fkey" FOREIGN KEY ("kd_penyakit") REFERENCES "public"."Penyakit"("kd_penyakit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pengetahuan" ADD CONSTRAINT "Pengetahuan_kd_gejala_fkey" FOREIGN KEY ("kd_gejala") REFERENCES "public"."Gejala"("kd_gejala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pengetahuan" ADD CONSTRAINT "Pengetahuan_kd_penyakit_fkey" FOREIGN KEY ("kd_penyakit") REFERENCES "public"."Penyakit"("kd_penyakit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Hasil" ADD CONSTRAINT "Hasil_pasienId_fkey" FOREIGN KEY ("pasienId") REFERENCES "public"."Pasien"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DiagnosaDetail" ADD CONSTRAINT "DiagnosaDetail_hasilId_fkey" FOREIGN KEY ("hasilId") REFERENCES "public"."Hasil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
