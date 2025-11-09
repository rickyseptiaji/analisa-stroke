import { MainLayout } from "@/layout/mainLayout";
import KonsultasiCreateForm from "./form";

export default function CreatePageKonsultasi() {
    return <>
        <MainLayout title="Tambah Konsultasi">
            <div className="flex items-center justify-center">
              <div className="w-full max-x-md px-4 mx-auto">
                <KonsultasiCreateForm/>
              </div>
            </div>
          </MainLayout>
    </>
}