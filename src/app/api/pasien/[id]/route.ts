import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const numericId = Number(id);

  try {
    const query = await prisma.pasien.findUnique({
      where: { id: numericId },
    });

    if (!query) {
      return NextResponse.json(
        { message: "pasien tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(query, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const numericId = Number(id);

  const body = await req.json();

  try {
    await prisma.pasien.update({
      where: { id: numericId },
      data: body,
    });

    return NextResponse.json(
      { message: "Berhasil Mengubah data pasien" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const numericId = Number(id);

  try {
    const pasien = await prisma.pasien.findUnique({
      where: { id: numericId },
    });

    if (!pasien) {
      return NextResponse.json(
        { message: "Pasien tidak ditemukan" },
        { status: 404 }
      );
    }

    const hasilList = await prisma.hasil.findMany({
      where: { pasienId: numericId },
      select: { id: true },
    });

    const hasilIds = hasilList.map((h) => h.id);

    if (hasilIds.length > 0) {
      await prisma.diagnosaDetail.deleteMany({
        where: { hasilId: { in: hasilIds } },
      });

      await prisma.hasil.deleteMany({
        where: { id: { in: hasilIds } },
      });
    }

    await prisma.pasien.delete({
      where: { id: numericId },
    });

    return NextResponse.json(
      { message: "Data pasien berhasil dihapus" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
