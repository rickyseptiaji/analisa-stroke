"use client";
import EditPageKonsultasi from "@/components/features/konsultasi/edit/page";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  return <EditPageKonsultasi konsultasiId={params.id as string} />;
}
