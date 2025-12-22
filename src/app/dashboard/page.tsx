import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";
import { MainLayout } from "@/layout/mainLayout";
import prisma from "../../../lib/prisma";

export default async function Page() {
  const [
    pasien,
    solusi,
    gejala,
    konsultasi,
  ] = await Promise.all([
    prisma.pasien.count(),
    prisma.solusi.count(),
    prisma.gejala.count(),
    prisma.hasil.count(),
  ])

  const data = { pasien, solusi, gejala, konsultasi }
  
  return (
    <MainLayout title="Dashboard">
      <SectionCards data={data} />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
    </MainLayout>
  );
}
