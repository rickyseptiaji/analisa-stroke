import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { hashPassword } from "../../../../../lib/hash";

export async function POST(req: NextRequest) {
  try {
    const { nama, username, password } = await req.json();

    if (!nama || !username || !password) {
      return NextResponse.json({ error: "Field Required!" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists!" },
        { status: 400 }
      );
    }
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        nama,
        username,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      user: {
        id: user.id,
        username: user.username,
        nama: user.nama,
      },
    });
  } catch (error) {
      console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
