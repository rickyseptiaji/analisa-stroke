import { TableActions } from "@/components/TableActions";
import { ColumnDef } from "@tanstack/react-table";

export const pengetahuanColumns: ColumnDef<any>[] = [
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
    accessorKey: "kd_pengetahuan",
    header: "Kode Pengetahuan",
  },
  {
    accessorKey: "kd_penyakit",
    header: "Kode Penyakit",
  },
  {
    accessorKey: "kd_gejala",
    header: "Kode Gejala",
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <TableActions
        id={row.original.id}
        editPath="/pengetahuan/edit"
        deletePath="pengetahuan"
      />
    ),
  },
];
