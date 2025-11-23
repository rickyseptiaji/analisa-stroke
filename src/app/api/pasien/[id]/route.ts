import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);
  try {
    const query = await prisma.pasien.findUnique({
      where: {
        id: id,
      },
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
    const updated = await prisma.pasien.update({
      where: {
        id: id,
      },
      data: body,
    });

    return NextResponse.json(updated, { status: 200 });
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
    const pasien = await prisma.pasien.findUnique({
      where: {
        id: id,
      },
    });

    if (!pasien) {
      return NextResponse.json(
        {
          message: "Pasien tidak ditemukan",
        },
        {
          status: 404,
        }
      );
    }

    await prisma.pasien.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        message: "Data pasien berhasil dihapus",
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
