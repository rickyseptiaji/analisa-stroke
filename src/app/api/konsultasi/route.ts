import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { pasienId, jawaban } = body;

    if (!pasienId) {
      return NextResponse.json(
        { message: "pasienId wajib diisi" },
        { status: 400 }
      );
    }

    if (!jawaban || !Array.isArray(jawaban)) {
      return NextResponse.json(
        { message: "jawaban harus berupa array kd_gejala" },
        { status: 400 }
      );
    }

    const normalizedJawaban: string[] = jawaban.map((g: string) =>
      g.trim().toUpperCase()
    );

    const pengetahuan = await prisma.pengetahuan.findMany();

    if (pengetahuan.length === 0) {
      return NextResponse.json(
        { message: "Data pengetahuan kosong" },
        { status: 400 }
      );
    }

    const ruleMap = new Map<string, string[]>();

    for (const p of pengetahuan) {
      const kdPenyakit = p.kd_penyakit.trim().toUpperCase();
      const kdGejala = p.kd_gejala.trim().toUpperCase();

      if (!ruleMap.has(kdPenyakit)) {
        ruleMap.set(kdPenyakit, []);
      }

      ruleMap.get(kdPenyakit)!.push(kdGejala);
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

    const detailData = normalizedJawaban.map((kd_gejala) => ({
      hasilId: diagnosa.id,
      kd_gejala,
    }));

    await prisma.diagnosaDetail.createMany({
      data: detailData,
    });

    return NextResponse.json(
      {
        message: "Diagnosa berhasil",
        kd_penyakit: hasil,
        hasil: diagnosa,
        detail: detailData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: String(error),
      },
      { status: 500 }
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
