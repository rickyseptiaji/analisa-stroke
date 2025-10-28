"use client";

import { MainLayout } from "@/layout/mainLayout";
import { PasienTable } from "./components/pasienTable";
import { useEffect, useState } from "react";
export default function DataPasien() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/pasien");
      if (!response.ok) {
        throw new Error("Failed to fetch pasien data");
      }
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error("Error fetching pasien data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  },[])
  return (
    <>
      <MainLayout title="Pasien">
        <PasienTable data={tableData} isLoading={isLoading} />
      </MainLayout>
    </>
  );
}
