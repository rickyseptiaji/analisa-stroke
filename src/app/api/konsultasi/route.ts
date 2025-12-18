import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { pasienId, jawaban } = await req.json();
    const pengetahuan = await prisma.pengetahuan.findMany();
    if (!jawaban || !Array.isArray(jawaban)) {
      return NextResponse.json(
        { message: "jawaban harus berupa array" },
        { status: 400 }
      );
    }
    const normalizedJawaban = jawaban.map((g: string) =>
      g.trim().toUpperCase()
    );
    const ruleMap = new Map<string, string[]>();
    for (const p of pengetahuan) {
      if (!ruleMap.has(p.kd_penyakit)) {
        ruleMap.set(p.kd_penyakit, []);
      }
      ruleMap.get(p.kd_penyakit)!.push(p.kd_gejala);
    }

    let hasil: string | null = null;
    for (const [kd_penyakit, gejalaList] of ruleMap.entries()) {
      const terpenuhi = gejalaList.every((g) => normalizedJawaban.includes(g));

      if (terpenuhi) {
        hasil = kd_penyakit;
        break;
      }
    }
    if (!hasil) {
      return NextResponse.json(
        { message: "Tidak ada aturan yang terpenuhi" },
        { status: 400 }
      );
    }
    const diagnosa = await prisma.hasil.create({
      data: {
        pasienId: Number(pasienId),
        kd_penyakit: hasil,
      },
    });

    const detailData = jawaban.map((kd_gejala) => ({
      hasilId: diagnosa.id,
      kd_gejala,
    }));

    await prisma.diagnosaDetail.createMany({
      data: detailData,
    });
    return NextResponse.json(
      { message: "Data diterima", hasil: diagnosa, detail: detailData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error", error: String(error) },
      {
        status: 500,
      }
    );
  }
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
