"use client";

import { MainLayout } from "@/layout/mainLayout";
import  { PenyakitTable } from "./components/penyakitTable";
import { useEffect, useState } from "react";
export default function DataPenyakit() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/penyakit");
      if (!response.ok) {
        throw new Error("Failed to fetch penyakit data");
      }
      const data = await response.json();
      setTableData(data);
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
    <>
      <MainLayout title="Penyakit">
        <PenyakitTable data={tableData} isLoading={isLoading} />
      </MainLayout>
    </>
  );
}
