import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numericId = Number(id);
  try {
    const solusi = await prisma.solusi.findUnique({
      where: {
        id: numericId,
      },
    });
    if (!solusi) {
      return NextResponse.json(
        { message: "Solusi tidak ditemukan" },
        { status: 404 }
      );
    }
    return NextResponse.json(solusi, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numericId = Number(id);
  const body = await req.json();
  const kd_penyakit = body.kd_penyakit.trim().toUpperCase();
  const solusi = body.solusi.trim();

  try {
    await prisma.solusi.update({
      where: {
        id: numericId,
      },
      data: {
        kd_penyakit,
        solusi,
      },
    });

    return NextResponse.json(
      { message: "Solusi berhasil diubah" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numericId = Number(id);
  try {
    const solusi = await prisma.solusi.findUnique({
      where: {
        id: numericId,
      },
    });

    if (!solusi) {
      return NextResponse.json(
        {
          message: "Solusi tidak ditemukan",
        },
        {
          status: 404,
        }
      );
    }
    await prisma.solusi.delete({
      where: {
        id: numericId,
      },
    });

    return NextResponse.json(
      {
        message: "Solusi berhasil dihapus",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
