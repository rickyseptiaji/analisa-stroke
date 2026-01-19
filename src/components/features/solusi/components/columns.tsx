import { TableActions } from "@/components/TableActions";
import { ColumnDef } from "@tanstack/react-table";

export const solusiColumns: ColumnDef<any>[] = [
  {
    id: "no",
    header: "No",
    cell: ({ row, table }) => {
      const { pageIndex, pageSize } = table.getState().pagination;

      const pageRows = table.getPaginationRowModel().rows;
      const indexInPage = pageRows.findIndex((r) => r.id === row.id);

      return pageIndex * pageSize + indexInPage + 1;
    },
  },

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
        editPath="/solusi/edit"
        deletePath="solusi"
      />
    ),
  },
];
