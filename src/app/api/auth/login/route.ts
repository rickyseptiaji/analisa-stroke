import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { comparePasswords } from "../../../../../lib/hash";
import { signJwt } from "../../../../../lib/jwt";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json(
        {
          error: "Username and password required",
        },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      return NextResponse.json(
        {
          error: "Invalid credentials",
        },
        { status: 401 }
      );
    }

    const isValid = await comparePasswords(password, user.password!);
    if (!isValid) {
      return NextResponse.json(
        {
          error: "Invalid credentials",
        },
        { status: 401 }
      );
    }

    const token = signJwt({ id: user.id, username: user.username });

    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json(
      {
        message: "Login Success",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
