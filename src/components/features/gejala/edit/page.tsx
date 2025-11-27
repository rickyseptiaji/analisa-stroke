import { MainLayout } from "@/layout/mainLayout";
import GejalaEditForm from "./form";

export default function EditPageGejala({gejalaId}: {gejalaId: string}) {
    return (
                <MainLayout title="Edit Gejala">
                    <div className="flex items-center justify-center">
                      <div className="w-full max-x-md px-4 mx-auto">
                        <GejalaEditForm gejalaId={gejalaId}/>
                      </div>
                    </div>
                  </MainLayout>
    )
}