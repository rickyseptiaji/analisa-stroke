"use client"

import EditPagePasien from "@/components/features/pasien/edit/page";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  return <EditPagePasien pasienId={params.id as string} />;
}
