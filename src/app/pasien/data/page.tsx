import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { MainLayout } from "@/layout/mainLayout";
import data from "./data.json";

export default function Page() {
  return (
    <>
      <MainLayout title="Data Pasien">
                <DataTable data={data} />
      </MainLayout>
    </>
  );
}
