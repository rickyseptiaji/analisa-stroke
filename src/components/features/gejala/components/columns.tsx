import { TableActions } from "@/components/TableActions";
import { ColumnDef } from "@tanstack/react-table";

export const gejalaColumns: ColumnDef<any>[] = [
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
  // {
  //   accessorKey: "id",
  //   header: "ID",
  // },
  {
    accessorKey: "kd_gejala",
    header: "Kode Gejala",
  },
  {
    accessorKey: "nama_gejala",
    header: "Nama Gejala",
  },
  {
    accessorKey: "poin_gejala",
    header: "Poin Gejala",
    cell: ({ getValue }) => {
      const value = getValue<string>();
      if (!value) return "-";
      const kapital = value.charAt(0).toUpperCase() + value.slice(1);
      return kapital;
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <TableActions
        id={row.original.kd_gejala}
        editPath="/gejala/edit"
        deletePath="gejala"
      />
    ),
  },
];
