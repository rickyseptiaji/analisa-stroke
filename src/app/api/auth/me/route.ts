import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyJwt } from "../../../../../lib/jwt";
import prisma from "../../../../../lib/prisma";

export async function GET() {
  try {
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
    }

    const payload = verifyJwt(token);
    if (!payload) {
      return NextResponse.json( 
        { message: "Invalid or expired token" },
        { status: 401 }
      );
    }
    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: { id: true, username: true },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid or expired token" },
      { status: 401 }
    );
  }
}
