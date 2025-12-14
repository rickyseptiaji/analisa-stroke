import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { hashPassword } from "../../../../../lib/hash";

export async function POST(req: NextRequest) {
  try {
    const { nama, username, password } = await req.json();

    if (!nama || !username || !password) {
      return NextResponse.json(
        { message: "Field Required!" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists!" },
        { status: 400 }
      );
    }
    const hashedPassword = await hashPassword(password);
    await prisma.user.create({
      data: {
        nama,
        username,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "Register Success",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
