import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { kd_penyakit, nama_penyakit, solusi } = await req.json();

    if (!kd_penyakit || !nama_penyakit || !solusi) {
      return NextResponse.json(
        { error: "Semua field wajib diisi!" },
        { status: 400 }
      );
    }
    const existingPenyakit = await prisma.penyakit.findUnique({
      where: { kd_penyakit },
    });
    if (existingPenyakit) {
      return NextResponse.json(
        { error: "Kd_penyakit sudah terdaftar!" },
        { status: 409 }
      );
    }
    const penyakit = await prisma.penyakit.create({
      data: {
        kd_penyakit,
        nama_penyakit,
        solusi,
      },
    });
    return NextResponse.json(penyakit, { status: 201 });
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan penyakit:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan di server." },
      { status: 500 }
    );
  }
}
