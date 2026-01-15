import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { hitungDiagnosa } from "@/lib/hitungDiagnosa";
import { simpanDiagnosa } from "@/lib/simpanDiagnosa";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
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
        { status: 404 }
      );
    }

    return NextResponse.json(hasil, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const hasilId = Number(id);
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
    hasilId,
    pasienId: Number(pasienId),
    kd_penyakit: hasilHitung.kd_penyakit,
    jawaban: hasilHitung.jawaban,
  });

  return NextResponse.json(
    { message: "Diagnosa berhasil diperbarui" },
    { status: 200 }
  );
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const {id} = await params;
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
      { status: 200 }
    );
  } catch (error: any) {
    if (error.message === "NOT_FOUND") {
      return NextResponse.json(
        { message: "Data tidak ditemukan" },
        { status: 404 }
      );
    }

    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
