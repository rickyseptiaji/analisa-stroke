import { MainLayout } from "@/layout/mainLayout";
import KonsultasiEditForm from "./form";

export default function EditPageKonsultasi({konsultasiId}: {konsultasiId: string}) {
  return (
    <>
      <MainLayout title="Edit Konsultasi">
        <div className="flex items-center justify-center">
          <div className="w-full max-x-md px-4 mx-auto">
            <KonsultasiEditForm konsultasiId={konsultasiId} />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
