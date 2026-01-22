import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { hitungDiagnosa } from "@/lib/hitungDiagnosa";
import { simpanDiagnosa } from "@/lib/simpanDiagnosa";

export async function POST(req: NextRequest) {
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
  const hasil = await prisma.hasil.create({
    data: {
      pasienId: Number(pasienId),
      kd_penyakit: penyakit.kd_penyakit,
    },
  });

  await prisma.diagnosaDetail.createMany({
    data: jawaban.map((kd_gejala) => ({
      hasilId: hasil.id,
      kd_gejala,
    })),
  });
  return NextResponse.json({ message: "Diagnosa berhasil" }, { status: 200 });
  // const pengetahuan = await prisma.pengetahuan.findMany();
  // const hasilHitung = hitungDiagnosa(jawaban, pengetahuan);

  // if (!hasilHitung.kd_penyakit) {
  //   return NextResponse.json(
  //     { message: "Tidak ada diagnosa yang cocok" },
  //     { status: 400 }
  //   );
  // }

  // await simpanDiagnosa({
  //   pasienId: Number(pasienId),
  //   kd_penyakit: hasilHitung.kd_penyakit,
  //   jawaban: hasilHitung.jawaban,
  // });

  // return NextResponse.json({ message: "Diagnosa berhasil" }, { status: 200 });
}

export async function GET() {
  try {
    const res = await prisma.hasil.findMany({
      include: {
        pasien: true,
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(error);
  }
}
