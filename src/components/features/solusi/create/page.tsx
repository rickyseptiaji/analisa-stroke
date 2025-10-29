import { MainLayout } from "@/layout/mainLayout";
import SolusiCreateForm from "./form";

export default function CreatePageSolusi() {
    return <>
        <MainLayout title="Tambah Solusi">
            <div className="flex items-center justify-center">
              <div className="w-full max-x-md px-4 mx-auto">
                <SolusiCreateForm/>
              </div>
            </div>
          </MainLayout>
    </>
}