import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const penyakit = await prisma.penyakit.findUnique({
      where: {
        kd_penyakit: id,
      },
    });

    if (!penyakit) {
      return NextResponse.json(
        {
          message: "Penyakit tidak ditemukan",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(penyakit, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();
  try {
    const updated = await prisma.penyakit.update({
      where: {
        kd_penyakit: id,
      },
      data: body,
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const penyakit = await prisma.penyakit.findUnique({
      where: {
        kd_penyakit: id,
      },
    });

    if (!penyakit) {
      return NextResponse.json(
        {
          message: "Penyakit tidak ditemukan",
        },
        {
          status: 404,
        }
      );
    }

    await prisma.penyakit.delete({
      where: {
        kd_penyakit: id,
      },
    });

    return NextResponse.json(
      {
        message: "Penyakit berhasil dihapus",
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
