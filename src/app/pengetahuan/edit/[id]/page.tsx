"use client";

import EditPagePengetahuan from "@/components/features/pengetahuan/edit/page";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  return <EditPagePengetahuan pengetahuanId={params.id as string} />;
}
