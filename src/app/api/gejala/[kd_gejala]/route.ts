import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ kd_gejala: string }> }
) {
  const { kd_gejala } = await params;
  try {
    const gejala = await prisma.gejala.findUnique({
      where: {
        kd_gejala: kd_gejala,
      },
    });

    if (!gejala) {
      return NextResponse.json(
        {
          message: "Gejala tidak ditemukan",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(gejala, {
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

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ kd_gejala: string }> }
) {
  const { kd_gejala } = await params;
  const body = await req.json();
  try {
    const updated = await prisma.gejala.update({
      where: {
        kd_gejala: kd_gejala,
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
  { params }: { params: Promise<{ kd_gejala: string }> }
) {
  const { kd_gejala } = await params;
  try {
    const gejala = await prisma.gejala.findUnique({
      where: {
        kd_gejala: kd_gejala,
      },
    });

    if (!gejala) {
      return NextResponse.json(
        {
          message: "Gejala tidak ditemukan",
        },
        {
          status: 200,
        }
      );
    }

    await prisma.gejala.delete({
      where: {
        kd_gejala: kd_gejala,
      },
    });

    return NextResponse.json({
      message: "Gejala Berhasil dihapus",
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
