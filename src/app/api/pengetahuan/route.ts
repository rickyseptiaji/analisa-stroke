import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET() {
  try {
    const res = await prisma.pengetahuan.findMany();
    return NextResponse.json(res, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "internal server error",
      status: 500,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const kd_pengetahuan = body.kd_pengetahuan.toUpperCase();
    const kd_penyakit = body.kd_penyakit.trim();
    const kd_gejala = body.kd_gejala.trim();
    await prisma.pengetahuan.create({
      data: {
        kd_pengetahuan,
        kd_penyakit,
        kd_gejala,
      },
    });
    return NextResponse.json(
      { message: "Berhasil menambahkan pengetahuan" },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Internal server error",
      status: 500,
    });
  }
}
