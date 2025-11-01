import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET() {
  try {
    const res = await prisma.gejala.findMany({
      orderBy: {
        kd_gejala: "desc",
      },
    });
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan di server." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { kd_gejala, nama_gejala, poin_gejala } = await req.json();
    if (!kd_gejala || !nama_gejala || !poin_gejala) {
      return NextResponse.json(
        { error: "Semua field wajib diisi!" },
        { status: 400 }
      );
    }

    const existingGejala = await prisma.gejala.findUnique({
      where: { kd_gejala },
    });
    if (existingGejala) {
      return NextResponse.json(
        { error: "Gejala sudah terdaftar!" },
        { status: 409 }
      );
    }
    const data = await prisma.gejala.create({
      data: {
        kd_gejala,
        nama_gejala,
        poin_Gejala: poin_gejala,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan gejala:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan di server." },
      { status: 500 }
    );
  }
}
