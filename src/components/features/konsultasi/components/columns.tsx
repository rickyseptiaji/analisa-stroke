import { TableActions } from "@/components/TableActions";
import { ColumnDef } from "@tanstack/react-table";

export const konsultasiColumns: ColumnDef<any>[] = [
  {
    id: "no",
    header: "No",
    cell: ({ row, table }) =>
      table.getState().pagination.pageIndex *
        table.getState().pagination.pageSize +
      row.index +
      1,
  },
  {
    id: "nik",
    header: "NIK",
    accessorFn: (row) => row.pasien?.nik ?? "-",
  },
  {
    id: "nama",
    header: "Nama Lengkap",
    accessorFn: (row) => row.pasien?.nama_lengkap ?? "-",
  },
  {
    id: "tanggal_lahir",
    header: "Tanggal Lahir",
    accessorFn: (row) => row.pasien?.tanggal_lahir ?? null,
    cell: ({ row }) => {
      const tgl = row.original.pasien?.tanggal_lahir;
      return tgl ? new Date(tgl).toLocaleDateString("id-ID") : "-";
    },
  },
  {
    id: "jenis_kelamin",
    header: "Jenis Kelamin",
    accessorFn: (row) =>
      row.pasien?.jenis_kelamin === "L"
        ? "Laki-laki"
        : row.pasien?.jenis_kelamin === "P"
        ? "Perempuan"
        : "-",
  },
  {
    id: "phone",
    header: "No Telp",
    accessorFn: (row) => row.pasien?.phone ?? "-",
  },
  {
    id: "alamat",
    header: "Alamat",
    accessorFn: (row) => row.pasien?.alamat ?? "-",
  },
  {
    id: "kd_penyakit",
    header: "Kode Penyakit",
    accessorFn: (row) => row.kd_penyakit ?? "-",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <TableActions
        id={row.original.id}
        editPath="/konsultasi/edit"
        deletePath="konsultasi"
        printPath="/konsultasi/print"
      />
    ),
  },
];
