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
      error: "internal server error",
      status: 500,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { kd_pengetahuan, kd_penyakit, kd_gejala } = await req.json();
    const res = await prisma.pengetahuan.create({
      data: {
        kd_pengetahuan,
        kd_penyakit,
        kd_gejala,
      },
    });
    return NextResponse.json(res, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Internal server error",
      status: 500,
    });
  }
}
