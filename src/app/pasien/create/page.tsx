import PasienCreateForm from "@/components/features/pasien/create/form";
import { MainLayout } from "@/layout/mainLayout";
import React from "react";

export default function CreatePasienPage() {
  return (
    <>
      <MainLayout title="Tambah Pasien">
        <div className="flex items-center justify-center">
          <div className="w-full max-x-md px-4 mx-auto">
            <PasienCreateForm />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
