import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET() {
  try {
    const data = await prisma.pasien.findMany({
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

export async function POST(req: NextRequest) {
  try {
    const {
      nik,
      nama_lengkap,
      umur,
      alamat,
      jenis_kelamin,
      phone,
      tanggal_lahir,
    } = await req.json();

    if (
      !nik ||
      !nama_lengkap ||
      !umur ||
      !alamat ||
      !jenis_kelamin ||
      !phone ||
      !tanggal_lahir
    ) {
      return NextResponse.json(
        { error: "Semua field wajib diisi!" },
        { status: 400 }
      );
    }

    const existingPasien = await prisma.pasien.findUnique({
      where: { nik },
    });

    if (existingPasien) {
      return NextResponse.json(
        { error: "NIK sudah terdaftar!" },
        { status: 409 }
      );
    }

    await prisma.pasien.create({
      data: {
        nik,
        nama_lengkap,
        umur: Number(umur),
        alamat,
        jenis_kelamin,
        phone,
        tanggal_lahir: new Date(tanggal_lahir),
      },
    });
    return NextResponse.json(
      {
        message: "Berhasil Mendaftarkan pasien",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan pasien:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan di server." },
      { status: 500 }
    );
  }
}
