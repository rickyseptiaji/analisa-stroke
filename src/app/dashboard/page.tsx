import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";
import { MainLayout } from "@/layout/mainLayout";

export default function Page() {
  return (
    <MainLayout title="Dashboard">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
    </MainLayout>
  );
}
