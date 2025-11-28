import { MainLayout } from "@/layout/mainLayout";
import PengetahuanEditForm from "./form";

export default function EditPagePengetahuan({
  pengetahuanId,
}: {
  pengetahuanId: string;
}) {
  return (
    <MainLayout title="Edit Pengetahuan">
      <div className="flex items-center justify-center">
        <div className="w-full max-x-md px-4 mx-auto">
          <PengetahuanEditForm pengetahuanId={pengetahuanId} />
        </div>
      </div>
    </MainLayout>
  );
}
