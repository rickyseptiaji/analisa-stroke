import { MainLayout } from "@/layout/mainLayout";
import PenyakitEditForm from "./form";

export default function EditPagePenyakit({
  penyakitId,
}: {
  penyakitId: string;
}) {
  return (
    <MainLayout title="Edit Penyakit">
      <div className="flex items-center justify-center">
        <div className="w-full max-x-md px-4 mx-auto">
          <PenyakitEditForm penyakitId={penyakitId} />
        </div>
      </div>
    </MainLayout>
  );
}
