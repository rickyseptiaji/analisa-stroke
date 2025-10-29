import { TableActions } from "@/components/TableActions";
import { ColumnDef } from "@tanstack/react-table";

export const visitorColumns: ColumnDef<any>[] = [
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
    accessorKey: "nik",
    header: "NIK",
  },
  {
    accessorKey: "nama_lengkap",
    header: "Nama Lengkap",
  },
  {
    accessorKey: "tanggal_lahir",
    header: "Tanggal Lahir",
  },
  {
    accessorKey: "jenis_kelamin",
    header: "Jenis Kelamin",
  },
  {
    accessorKey: "phone",
    header: "No HP",
  },
  {
    accessorKey: "alamat",
    header: "Alamat",
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
