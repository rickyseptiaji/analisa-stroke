"use client";

import { useEffect, useState } from "react";
import { PengetahuanTable } from "./components/table";
import { MainLayout } from "@/layout/mainLayout";

export default function DataPengetahuan() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/pengetahuan");
      if (!response.ok) {
        throw new Error("Failed to fetch pengetahuan data");
      }
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error("Error fetching pengetahuan data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <MainLayout title="Pengetahuan">
      <PengetahuanTable data={tableData} isLoading={isLoading} />
    </MainLayout>
  );
}
