import { DataTable } from "@/components/data-table";
import data from "./data.json";
export default function DataPasien() {
  return (
    <>
      <DataTable data={data} />
    </>
  );
}
