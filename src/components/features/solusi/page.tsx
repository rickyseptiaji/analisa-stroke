"use client";
import { MainLayout } from "@/layout/mainLayout";
import { SolusiTable } from "./components/solusiTable";
import { useEffect, useState } from "react";

export default function DataSolusiPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
   const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/solusi");
        if (!response.ok) {
          throw new Error("Failed to fetch penyakit data");
        }
        const data = await response.json();
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
    <MainLayout title="Solusi">
      <SolusiTable data={data} isLoading={isLoading} />
    </MainLayout>
  );
}
