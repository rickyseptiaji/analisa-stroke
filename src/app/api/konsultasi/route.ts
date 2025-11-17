import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
const rules = [
  { if: ["G01", "G02"], then: "H02" },
  { if: ["G03", "G04", "G05"], then: "H03" },
  { if: ["G06", "G07"], then: "H01" },
  { if: ["G08", "G09"], then: "H02" },
  { if: ["G10", "G11", "G12"], then: "H01" },
  { if: ["G13", "G14", "G15"], then: "H03" },
  { if: ["G16", "G17"], then: "H02" },
  { if: ["G18", "G09", "G19"], then: "H01" },
  { if: ["G20", "G21", "G22"], then: "H03" },
];
export async function POST(req: NextRequest) {
  try {
    const { pasienId, jawaban } = await req.json();
    if (!jawaban || !Array.isArray(jawaban)) {
      return NextResponse.json(
        { message: "jawaban harus berupa array" },
        { status: 400 }
      );
    }
    const hasil = rules.find((rule) =>
      rule.if.every((g) => jawaban.includes(g))
    )?.then;
    if (!hasil) {
      return NextResponse.json(
        { message: "Tidak ada aturan yang cocok" },
        { status: 200 }
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
        pasien: true
      }
    })
    return NextResponse.json(res)
  } catch (error) {
    return NextResponse.json(error)
  }
}
