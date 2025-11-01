"use client";
import { MainLayout } from "@/layout/mainLayout";
import { GejalaTable } from "./components/gejalaTable";
import { useEffect, useState } from "react";

export default function DataGejalaPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
   const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/gejala");
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
    <MainLayout title="Gejala">
      <GejalaTable data={data} isLoading={isLoading} />
    </MainLayout>
  );
}
