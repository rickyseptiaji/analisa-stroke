"use client";

import EditPageGejala from "@/components/features/gejala/edit/page";
import { useParams } from "next/navigation";

export default function Page() {
 const {kd_gejala} = useParams<{kd_gejala: string}>()
  return <EditPageGejala gejalaId={kd_gejala} />;
}
