"use client";
import { MainLayout } from "@/layout/mainLayout";
import { KonsultasiTable } from "./components/konsultasiTable";
import { useEffect, useState } from "react";

export default function DataKonsultasiPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
   const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/konsultasi");
        if (!response.ok) {
          throw new Error("Failed to fetch penyakit data");
        }
        const data = await response.json();
        console.log('data', data)
        setData(data);
      } catch (error) {
        console.error("Error fetching penyakit data:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData()
    },[])
  return (
    <MainLayout title="Konsultasi">
      <KonsultasiTable data={data} isLoading={isLoading} />
    </MainLayout>
  );
}
