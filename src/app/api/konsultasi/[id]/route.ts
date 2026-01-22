import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { hitungDiagnosa } from "@/lib/hitungDiagnosa";
import { simpanDiagnosa } from "@/lib/simpanDiagnosa";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const numericId = Number(id);

    const hasil = await prisma.hasil.findUnique({
      where: {
        id: numericId,
      },
      include: {
        details: true,
      },
    });

    if (!hasil) {
      return NextResponse.json(
        { message: "Data tidak ditemukan" },
        { status: 404 },
      );
    }

    return NextResponse.json(hasil, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const hasilId = Number(id);
  // const { pasienId, jawaban } = await req.json();

  // const pengetahuan = await prisma.pengetahuan.findMany();
  // const hasilHitung = hitungDiagnosa(jawaban, pengetahuan);

  // if (!hasilHitung.kd_penyakit) {
  //   return NextResponse.json(
  //     { message: "Tidak ada diagnosa yang cocok" },
  //     { status: 400 }
  //   );
  // }

  // await simpanDiagnosa({
  //   hasilId,
  //   pasienId: Number(pasienId),
  //   kd_penyakit: hasilHitung.kd_penyakit,
  //   jawaban: hasilHitung.jawaban,
  // });
  const body = await req.json();
  const pasienId: number = body.pasienId;
  const jawaban: string[] = body.jawaban;

  const gejala = await prisma.gejala.findMany({
    where: {
      kd_gejala: { in: jawaban },
    },

    select: {
      kd_gejala: true,
      poin_gejala: true,
    },
  });

  const bobot = {
    ringan: 1,
    sedang: 2,
    berat: 3,
  };

  let tingkatTertinggi: "ringan" | "sedang" | "berat" = "ringan";
  let nilaiTertinggi = 0;

  for (const g of gejala) {
    const nilai = bobot[g.poin_gejala as keyof typeof bobot];
    if (nilai > nilaiTertinggi) {
      nilaiTertinggi = nilai;
      tingkatTertinggi = g.poin_gejala as typeof tingkatTertinggi;
    }
  }

  const penyakit = await prisma.penyakit.findFirst({
    where: {
      nama_penyakit: tingkatTertinggi,
    },
    select: {
      kd_penyakit: true,
      nama_penyakit: true,
    },
  });

  if (!penyakit) {
    return NextResponse.json(
      { message: "Tidak ada diagnosa yang cocok" },
      { status: 400 },
    );
  }
  await prisma.hasil.update({
    where: { id: hasilId },
    data: {
      pasienId: Number(pasienId),
      kd_penyakit: penyakit.kd_penyakit,
    },
  });
  await prisma.diagnosaDetail.deleteMany({
    where: { hasilId },
  });
  await prisma.diagnosaDetail.createMany({
    data: jawaban.map((kd_gejala: string) => ({
      hasilId,
      kd_gejala,
    })),
  });
  return NextResponse.json(
    { message: "Diagnosa berhasil diperbarui" },
    { status: 200 },
  );
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const numericId = Number(id);

  if (isNaN(numericId)) {
    return NextResponse.json({ message: "ID tidak valid" }, { status: 400 });
  }

  try {
    await prisma.$transaction(async (tx) => {
      const hasil = await tx.hasil.findUnique({
        where: { id: numericId },
      });

      if (!hasil) {
        throw new Error("NOT_FOUND");
      }
      await tx.diagnosaDetail.deleteMany({
        where: {
          hasilId: numericId,
        },
      });

      await tx.hasil.delete({
        where: {
          id: numericId,
        },
      });
    });

    return NextResponse.json(
      { message: "Data berhasil dihapus" },
      { status: 200 },
    );
  } catch (error: any) {
    if (error.message === "NOT_FOUND") {
      return NextResponse.json(
        { message: "Data tidak ditemukan" },
        { status: 404 },
      );
    }

    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
