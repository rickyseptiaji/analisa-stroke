import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(req: Request, context: any) {
  const id = Number(context.params.id);

  try {
    const pengetahuan = await prisma.pengetahuan.findUnique({
      where: { id },
    });

    if (!pengetahuan) {
      return NextResponse.json(
        { message: "Pengetahuan tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(pengetahuan);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, context: any) {
  const id = Number(context.params.id);
  const body = await req.json();
  const kd_pengetahuan = body.kd_pengetahuan.toUpperCase();
  const kd_penyakit = body.kd_penyakit.trim();
  const kd_gejala = body.kd_gejala.trim();

  try {
    await prisma.pengetahuan.update({
      where: { id },
      data: {
        kd_pengetahuan,
        kd_penyakit,
        kd_gejala,
      },
    });

    return NextResponse.json(
      {
        message: "Berhasil mengubah pengetahuan",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, context: any) {
  const id = Number(context.params.id);

  try {
    const pengetahuan = await prisma.pengetahuan.findUnique({
      where: { id },
    });

    if (!pengetahuan) {
      return NextResponse.json(
        { message: "Pengetahuan tidak ditemukan" },
        { status: 404 }
      );
    }

    await prisma.pengetahuan.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Data berhasil dihapus" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
