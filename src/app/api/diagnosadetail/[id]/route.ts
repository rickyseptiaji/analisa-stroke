import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const hasilId = Number(id);
    const detail = await prisma.diagnosaDetail.findMany({
      where: {
        hasilId: hasilId,
      },
      include: {
        diagnosa: {
          include: {
            pasien: true,
          },
        },
      },
    });

    const hasilDenganSolusi = await Promise.all(
      detail.map(async (d) => {
        const solusi = await prisma.solusi.findMany({
          where: {
            kd_penyakit: d.diagnosa.kd_penyakit,
          },
          include: {
            penyakit: true,
          },
        });
        const gejala = await prisma.gejala.findUnique({
          where: { kd_gejala: d.kd_gejala },
        });

        return {
          ...d,
          solusi,
          gejala,
        };
      }),
    );
    return NextResponse.json(hasilDenganSolusi, {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching diagnosa detail:', error);
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
