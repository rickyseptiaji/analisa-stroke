import { TableActions } from "@/components/TableActions";
import { ColumnDef } from "@tanstack/react-table";

export const penyakitColumns: ColumnDef<any>[] = [
  {
    id: "no",
    header: "No",
    cell: ({ row, table }) =>{
      const { pageIndex, pageSize } = table.getState().pagination;

      const pageRows = table.getPaginationRowModel().rows;
      const indexInPage = pageRows.findIndex((r) => r.id === row.id);

      return pageIndex * pageSize + indexInPage + 1;
    },
  },
  // {
  //   accessorKey: "id",
  //   header: "ID",
  // },
  {
    accessorKey: "kd_penyakit",
    header: "Kode Penyakit",
  },
  {
    accessorKey: "nama_penyakit",
    header: "Nama Penyakit",
      cell: ({ getValue }) => {
    const value = getValue<string>();
    if (!value) return "-";

    const kapital =
      value.charAt(0).toUpperCase() + value.slice(1);

    return `Stroke ${kapital}`;
  },
  },


  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <TableActions
        id={row.original.kd_penyakit}
        editPath="/penyakit/edit"
        deletePath="penyakit"
      />
    ),
  },
];
