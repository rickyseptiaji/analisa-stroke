export const dynamic = 'force-dynamic'
import prisma from "../../../lib/prisma";
import Dashboard from "@/components/features/dashboard/page";

export default async function Page() {
  const [pasien, solusi, gejala, konsultasi] = await Promise.all([
    prisma.pasien.count(),
    prisma.solusi.count(),
    prisma.gejala.count(),
    prisma.hasil.count(),
  ]);

  const data = { pasien, solusi, gejala, konsultasi };

  return <Dashboard data={data} />;
}
