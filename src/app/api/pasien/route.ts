import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { nik, nama_lengkap, umur, alamat, jenis_kelamin, tanggal_lahir } = await req.json();

    if (!nik || !nama_lengkap || !umur || !alamat || !jenis_kelamin || !tanggal_lahir) {
      return NextResponse.json({ error: "Semua field wajib diisi!" }, { status: 400 });
    }

    const existingPasien = await prisma.pasien.findUnique({
      where: { nik },
    });

    if (existingPasien) {
      return NextResponse.json({ error: "NIK sudah terdaftar!" }, { status: 409 });
    }

    const pasien = await prisma.pasien.create({
      data: {
        nik,
        nama_lengkap,
        umur: Number(umur),
        alamat,
        jenis_kelamin,
        tanggal_lahir: new Date(tanggal_lahir),
      },
    });

    return NextResponse.json(pasien, { status: 201 });
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan pasien:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan di server." },
      { status: 500 }
    );
  }
}
