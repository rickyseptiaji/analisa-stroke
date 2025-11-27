import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

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

    return NextResponse.json(pengetahuan, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const body = await req.json();

  try {
    const updated = await prisma.pengetahuan.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

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
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
