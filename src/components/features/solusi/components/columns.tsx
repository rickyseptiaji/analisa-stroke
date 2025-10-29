import { TableActions } from "@/components/TableActions";
import { ColumnDef } from "@tanstack/react-table";

export const solusiColumns: ColumnDef<any>[] = [
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
    accessorKey: "kd_penyakit",
    header: "Kode Penyakit",
  },
  {
    accessorKey: "solusi",
    header: "Solusi",
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
