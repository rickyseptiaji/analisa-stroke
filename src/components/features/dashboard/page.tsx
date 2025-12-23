"use client";

import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";
import { MainLayout } from "@/layout/mainLayout";

export default function Dashboard({ data }: { data: any }) {
  return (
    <MainLayout title="Dashboard">
      <SectionCards data={data} />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
    </MainLayout>
  );
}
