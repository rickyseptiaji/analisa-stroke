import { MainLayout } from "@/layout/mainLayout";
import DataPasien from "@/components/features/pasien/data/data";

export default function Page() {
  return (
    <>
      <MainLayout title="Data Pasien">
        <DataPasien />
      </MainLayout>
    </>
  );
}
