import { TableActions } from "@/components/TableActions";
import { ColumnDef } from "@tanstack/react-table";

export const rulePenyakitColumns: ColumnDef<any>[] = [
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
    accessorKey: "nama_penyakit",
    header: "Nama Penyakit",
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
