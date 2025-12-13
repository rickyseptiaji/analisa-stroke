import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET() {
  try {
    const res = await prisma.penyakit.findMany({
      orderBy: {
        kd_penyakit: "desc",
      },
    });
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengambil data" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { kd_penyakit, nama_penyakit } = await req.json();

    if (!kd_penyakit || !nama_penyakit) {
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
    await prisma.penyakit.create({
      data: {
        kd_penyakit,
        nama_penyakit,
      },
    });
    return NextResponse.json(
      { message: "Penyakit berhasil ditambahkan" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan di server." },
      { status: 500 }
    );
  }
}
