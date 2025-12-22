import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const to = searchParams.get("to")
    ? new Date(searchParams.get("to")!)
    : new Date()

  const from = searchParams.get("from")
    ? new Date(searchParams.get("from")!)
    : new Date(new Date().setDate(to.getDate() - 90))

  const rows = await prisma.hasil.findMany({
    where: {
      createdAt: { gte: from, lte: to },
    },
    select: {
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  })

  // GROUP MANUAL PER HARI
  const map = new Map<string, number>()

  rows.forEach(row => {
    const date = row.createdAt.toISOString().slice(0, 10)
    map.set(date, (map.get(date) ?? 0) + 1)
  })

  const result = Array.from(map.entries()).map(([date, total]) => ({
    createdAt: date,
    total,
  }))

  return NextResponse.json(result)
}


