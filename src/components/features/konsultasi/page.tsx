"use client";
import { MainLayout } from "@/layout/mainLayout";
import { KonsultasiTable } from "./components/konsultasiTable";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function DataKonsultasiPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/konsultasi");

      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message || "Gagal mengambil data penyakit");
        return;
      }
      setData(data);
    } catch (error) {
      console.error("Error fetching penyakit data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <MainLayout title="Konsultasi">
      <KonsultasiTable data={data} isLoading={isLoading} />
    </MainLayout>
  );
}
