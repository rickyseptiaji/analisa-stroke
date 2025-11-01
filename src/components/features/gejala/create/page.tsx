import { MainLayout } from "@/layout/mainLayout";
import GejalaCreateForm from "./form";

export default function CreatePageGejala() {
    return <>
        <MainLayout title="Tambah Gejala">
            <div className="flex items-center justify-center">
              <div className="w-full max-x-md px-4 mx-auto">
                <GejalaCreateForm/>
              </div>
            </div>
          </MainLayout>
    </>
}