import { MainLayout } from "@/layout/mainLayout";
import PengetahuanCreateForm from "./form";

export default function CreatePengetahuanPage() {
  return (
    <MainLayout title="Tambah Pengetahuan">
      <div className="flex items-center justify-center">
        <div className="w-full max-x-md px-4 mx-auto">
          <PengetahuanCreateForm />
        </div>
      </div>
    </MainLayout>
  );
}
