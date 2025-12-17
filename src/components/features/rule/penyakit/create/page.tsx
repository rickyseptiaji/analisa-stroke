import { MainLayout } from "@/layout/mainLayout";
import RulePenyakitCreateForm from "./form";

export default function CreatePenyakitRulePage() {
  return (
    <MainLayout title="Tambah Penyakit">
      <div className="flex items-center justify-center">
        <div className="w-full max-x-md px-4 mx-auto">
          <RulePenyakitCreateForm />
        </div>
      </div>
    </MainLayout>
  );
}
