-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(50),
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255),

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
    "alamat" VARCHAR(255) NOT NULL,

    CONSTRAINT "Pasien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Gejala" (
    "kd_gejala" VARCHAR(10) NOT NULL,
    "nama_gejala" VARCHAR(50) NOT NULL,
    "poin_Gejala" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Penyakit" (
    "kd_penyakit" VARCHAR(10) NOT NULL,
    "nama_penyakit" VARCHAR(50) NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Solusi" (
    "id" SERIAL NOT NULL,
    "solusi" TEXT NOT NULL,
    "kd_penyakit" TEXT NOT NULL,

    CONSTRAINT "Solusi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Pengetahuan" (
    "kd_pengetahuan" VARCHAR(10) NOT NULL,
    "kd_gejala" VARCHAR(10) NOT NULL,
    "kd_penyakit" VARCHAR(10) NOT NULL,
    "pertanyaan" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Relasi" (
    "id" SERIAL NOT NULL,
    "kd_gejala" VARCHAR(10) NOT NULL,
    "kd_penyakit" VARCHAR(10) NOT NULL,

    CONSTRAINT "Relasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Hasil" (
    "id" SERIAL NOT NULL,
    "kd_gejala" VARCHAR(10) NOT NULL,
    "kd_penyakit" VARCHAR(10) NOT NULL,
    "poin_gejala" TEXT NOT NULL,
    "poin_user" TEXT NOT NULL,
    "pasienId" INTEGER NOT NULL,

    CONSTRAINT "Hasil_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "Pengetahuan_kd_pengetahuan_key" ON "public"."Pengetahuan"("kd_pengetahuan");

-- CreateIndex
CREATE UNIQUE INDEX "Relasi_id_key" ON "public"."Relasi"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Relasi_kd_gejala_kd_penyakit_key" ON "public"."Relasi"("kd_gejala", "kd_penyakit");

-- CreateIndex
CREATE UNIQUE INDEX "Hasil_id_key" ON "public"."Hasil"("id");

-- AddForeignKey
ALTER TABLE "public"."Solusi" ADD CONSTRAINT "Solusi_kd_penyakit_fkey" FOREIGN KEY ("kd_penyakit") REFERENCES "public"."Penyakit"("kd_penyakit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pengetahuan" ADD CONSTRAINT "Pengetahuan_kd_gejala_fkey" FOREIGN KEY ("kd_gejala") REFERENCES "public"."Gejala"("kd_gejala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pengetahuan" ADD CONSTRAINT "Pengetahuan_kd_penyakit_fkey" FOREIGN KEY ("kd_penyakit") REFERENCES "public"."Penyakit"("kd_penyakit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Relasi" ADD CONSTRAINT "Relasi_kd_gejala_fkey" FOREIGN KEY ("kd_gejala") REFERENCES "public"."Gejala"("kd_gejala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Relasi" ADD CONSTRAINT "Relasi_kd_penyakit_fkey" FOREIGN KEY ("kd_penyakit") REFERENCES "public"."Penyakit"("kd_penyakit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Hasil" ADD CONSTRAINT "Hasil_pasienId_fkey" FOREIGN KEY ("pasienId") REFERENCES "public"."Pasien"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Hasil" ADD CONSTRAINT "Hasil_kd_gejala_fkey" FOREIGN KEY ("kd_gejala") REFERENCES "public"."Gejala"("kd_gejala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Hasil" ADD CONSTRAINT "Hasil_kd_penyakit_fkey" FOREIGN KEY ("kd_penyakit") REFERENCES "public"."Penyakit"("kd_penyakit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Hasil" ADD CONSTRAINT "Hasil_kd_gejala_kd_penyakit_fkey" FOREIGN KEY ("kd_gejala", "kd_penyakit") REFERENCES "public"."Relasi"("kd_gejala", "kd_penyakit") ON DELETE RESTRICT ON UPDATE CASCADE;
