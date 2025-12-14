import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { kd_penyakit, solusi } = await req.json();

    if (!kd_penyakit || !solusi) {
      return NextResponse.json(
        { message: "Semua field wajib diisi!" },
        { status: 400 }
      );
    }
    await prisma.solusi.create({
      data: {
        kd_penyakit,
        solusi,
      },
    });
    return NextResponse.json(
      { message: "Solusi berhasil ditambahkan" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan penyakit:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan di server." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const data = await prisma.solusi.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengambil data" },
      { status: 500 }
    );
  }
}
