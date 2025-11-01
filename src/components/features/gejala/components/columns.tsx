import { TableActions } from "@/components/TableActions";
import { ColumnDef } from "@tanstack/react-table";

export const gejalaColumns: ColumnDef<any>[] = [
  {
    id: "no",
    header: "No",
    cell: ({ row, table }) =>
      table.getState().pagination.pageIndex *
        table.getState().pagination.pageSize +
      row.index +
      1,
  },
  // {
  //   accessorKey: "id",
  //   header: "ID",
  // },
  {
    accessorKey: "kd_gejala",
    header: "Kode Penyakit",
  },
  {
    accessorKey: "nama_gejala",
    header: "Solusi",
  },
    {
    accessorKey: "poin_Gejala",
    header: "Poin Gejala",
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <TableActions
        id={row.original.id}
        editPath="/employee/edit"
        deletePath="employee"
      />
    ),
  },
];
