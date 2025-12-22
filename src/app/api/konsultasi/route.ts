import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { hitungDiagnosa } from "@/lib/hitungDiagnosa";
import { simpanDiagnosa } from "@/lib/simpanDiagnosa";

export async function POST(req: NextRequest) {
  const { pasienId, jawaban } = await req.json();

  const pengetahuan = await prisma.pengetahuan.findMany();
  const hasilHitung = hitungDiagnosa(jawaban, pengetahuan);

  if (!hasilHitung.kd_penyakit) {
    return NextResponse.json(
      { message: "Tidak ada diagnosa yang cocok" },
      { status: 400 }
    );
  }

  await simpanDiagnosa({
    pasienId: Number(pasienId),
    kd_penyakit: hasilHitung.kd_penyakit,
    jawaban: hasilHitung.jawaban,
  });

  return NextResponse.json({ message: "Diagnosa berhasil" }, { status: 200 });
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


