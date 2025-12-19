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

    if (!Array.isArray(jawaban) || jawaban.length === 0) {
      return NextResponse.json(
        { message: "jawaban harus berupa array kd_gejala" },
        { status: 400 }
      );
    }

    const normalizedJawaban = jawaban.map((g: string) =>
      g.trim().toUpperCase()
    );

    const pengetahuan = await prisma.pengetahuan.findMany();

    if (pengetahuan.length === 0) {
      return NextResponse.json(
        { message: "Data pengetahuan kosong" },
        { status: 400 }
      );
    }

    const penyakitMap = new Map<string, { total: number; cocok: number }>();

    for (const p of pengetahuan) {
      const kdPenyakit = p.kd_penyakit.trim().toUpperCase();
      const kdGejala = p.kd_gejala.trim().toUpperCase();

      if (!penyakitMap.has(kdPenyakit)) {
        penyakitMap.set(kdPenyakit, {
          total: 0,
          cocok: 0,
        });
      }

      penyakitMap.get(kdPenyakit)!.total += 1;

      if (normalizedJawaban.includes(kdGejala)) {
        penyakitMap.get(kdPenyakit)!.cocok += 1;
      }
    }

    const priority: Record<string, number> = {
      H03: 3,
      H02: 2,
      H01: 1,
    };

    let hasil: string | null = null;
    let skorTerbaik = 0;

    for (const [kd, data] of penyakitMap.entries()) {
      if (data.cocok === 0) continue;

      const skor = data.cocok / data.total;

      if (
        skor > skorTerbaik ||
        (skor === skorTerbaik && priority[kd] > priority[hasil ?? ""])
      ) {
        skorTerbaik = skor;
        hasil = kd;
      }
    }

    if (!hasil) {
      return NextResponse.json(
        { message: "Tidak ada diagnosa yang cocok" },
        { status: 400 }
      );
    }

    const diagnosa = await prisma.hasil.create({
      data: {
        pasienId: Number(pasienId),
        kd_penyakit: hasil,
      },
    });

    const detailData = normalizedJawaban.map((kd_gejala: string) => ({
      hasilId: diagnosa.id,
      kd_gejala,
    }));

    await prisma.diagnosaDetail.createMany({
      data: detailData,
    });

    return NextResponse.json(
      {
        message: "Diagnosa berhasil",
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
