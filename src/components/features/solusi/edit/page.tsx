import { MainLayout } from "@/layout/mainLayout";
import SolusiEditForm from "./form";

export default function EditPageSolusi({solusiId}: {solusiId: string}) {
  return (
    <MainLayout title="Edit Solusi">
      <div className="flex items-center justify-center">
        <div className="w-full max-x-md px-4 mx-auto">
          <SolusiEditForm solusiId={solusiId} />
        </div>
      </div>
    </MainLayout>
  );
}
