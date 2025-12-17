"use client";

import { MainLayout } from "@/layout/mainLayout";
import { RulePenyakitTable } from "./components/table";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function RulePenyakitPage() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/penyakit");

      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message);
      }
      setTableData(data);
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
    <MainLayout title="Aturan">
      <RulePenyakitTable data={tableData} isLoading={isLoading} />
    </MainLayout>
  );
}
