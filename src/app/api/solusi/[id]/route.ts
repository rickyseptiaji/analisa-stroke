import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  try {
    const solusi = await prisma.solusi.findUnique({
      where: {
        id: id,
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
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const body = await req.json();
  try {
    const updated = await prisma.solusi.update({
      where: {
        id: id,
      },
      data: body,
    });

    return NextResponse.json(updated, {
      status: 200,
    });
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
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  try {
    const solusi = await prisma.solusi.findUnique({
      where: {
        id: id,
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
        id: id,
      },
    });

    return NextResponse.json({
      message: "Solusi berhasil dihapus",
    });
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
