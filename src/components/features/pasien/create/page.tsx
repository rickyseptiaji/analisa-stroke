import { MainLayout } from "@/layout/mainLayout";
import PasienCreateForm from "./form";

export default function CreatePagePasien() {
  return (
    <>
      <MainLayout title="Tambah Pasien">
        <div className="flex items-center justify-center">
          <div className="w-full max-x-md px-4 mx-auto">
            <PasienCreateForm/>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
