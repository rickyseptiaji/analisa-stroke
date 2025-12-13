import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ kd_penyakit: string }> }
) {
  const { kd_penyakit } = await params;
  try {
    const penyakit = await prisma.penyakit.findUnique({
      where: {
        kd_penyakit: kd_penyakit,
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
  { params }: { params: Promise<{ kd_penyakit: string }> }
) {
  const { kd_penyakit } = await params;
  const body = await req.json();
  try {
    await prisma.penyakit.update({
      where: {
        kd_penyakit: kd_penyakit,
      },
      data: body,
    });

    return NextResponse.json(
      { message: "Penyakit berhasil diubah" },
      { status: 200 }
    );
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
  { params }: { params: Promise<{ kd_penyakit: string }> }
) {
  const { kd_penyakit } = await params;
  try {
    const penyakit = await prisma.penyakit.findUnique({
      where: {
        kd_penyakit: kd_penyakit,
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

    await prisma.solusi.deleteMany({
      where: {
        kd_penyakit,
      },
    });

    await prisma.pengetahuan.deleteMany({
      where: {
        kd_penyakit,
      },
    });

    await prisma.penyakit.delete({
      where: {
        kd_penyakit: kd_penyakit,
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
