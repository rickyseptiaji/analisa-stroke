import { MainLayout } from "@/layout/mainLayout";
import PenyakitCreateForm from "./form";

export default function PenyakitPage() {
  return (
    <>
      <MainLayout title="Tambah Penyakit">
        <div className="flex items-center justify-center">
          <div className="w-full max-x-md px-4 mx-auto">
            <PenyakitCreateForm/>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
