"use client";

import EditPagePenyakit from "@/components/features/penyakit/edit/page";
import { useParams } from "next/navigation";

export default function Page() {
 const {kd_penyakit} = useParams<{kd_penyakit: string}>()
  return <EditPagePenyakit penyakitId={kd_penyakit} />;
}
