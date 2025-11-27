interface Pasien {
  nama_lengkap: string;
  nik: string;
  alamat: string;
  jenis_kelamin: string;
  phone: string;
}
interface Penyakit {
  kd_penyakit: string;
  nama_penyakit: string;
}
interface Solusi {
  id: number;
  solusi: string;
  penyakit: Penyakit;
}

interface Diagnosa {
  pasien: Pasien;
  kd_penyakit: string;
}

interface Gejala {
  kd_gejala: string;
  nama_gejala: string;
  poin_gejala: string;
}

interface DiagnosaDetail {
  id: number;
  gejala: Gejala;
  nama_gejala: string;
  poin_gejala: string;
  diagnosa: Diagnosa;
  solusi: Solusi[];
}

export default async function PrintHasil({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/diagnosadetail?id=${id}`, {
    cache: "no-store",
  });
  const data: DiagnosaDetail[] = await res.json();

  if (!data.length) return <p className="p-10">Tidak ada data</p>;

  const pasien = data[0].diagnosa.pasien;
  const semuaSolusi = Array.from(
    new Set(data.flatMap((d) => d.solusi.map((s) => s.solusi)))
  );

  return (
    <div className="p-10 print:p-0 bg-gray-50 min-h-screen">
      {" "}
      <div className="max-w-[750px] mx-auto bg-white border p-10 shadow print:shadow-none print:border-0">
        {" "}
        <div className="text-center mb-6">
          {" "}
          <h1 className="text-3xl font-bold">Laporan Hasil Diagnosa</h1>{" "}
          <p className="text-gray-600">
            {" "}
            Sistem Pakar Deteksi Dini Stroke pada Lansia{" "}
          </p>{" "}
          <div className="w-full mt-3 border-b-2 border-gray-300" />{" "}
        </div>{" "}
        <h2 className="text-xl font-semibold mb-3">Data Pasien</h2>{" "}
        <table className="w-full text-sm mb-6">
          {" "}
          <tbody>
            {" "}
            <tr>
              {" "}
              <td className="font-semibold w-40">Nama</td>{" "}
              <td>: {pasien.nama_lengkap}</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td className="font-semibold">NIK</td> <td>: {pasien.nik}</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td className="font-semibold">Alamat</td>{" "}
              <td>: {pasien.alamat}</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td className="font-semibold">Jenis Kelamin</td>{" "}
              <td>: {pasien.jenis_kelamin}</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td className="font-semibold">Telepon</td>{" "}
              <td>: {pasien.phone}</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td className="font-semibold">Penyakit</td>{" "}
              <td>: {data[0]?.solusi?.[0]?.penyakit?.kd_penyakit}</td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
        <div className="w-full border-b mb-6" />{" "}
        <h2 className="text-xl font-semibold mb-3">Hasil Diagnosa</h2>{" "}
        <div className="text-sm mb-6">
          {" "}
          <p>
            {" "}
            <span className="font-semibold">Diagnosa Penyakit:</span>{" "}
            {data[0].solusi[0].penyakit.nama_penyakit}{" "}
          </p>{" "}
          <p className="font-semibold mt-2">Solusi:</p>{" "}
          <div className="pl-4">
            {" "}
            <ul className="list-disc list-inside mt-1 space-y-1">
              {" "}
              {semuaSolusi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-full border-b mb-6" />{" "}
        <h2 className="text-xl font-semibold mb-4">Gejala Yang Dialami</h2>{" "}
        <table className="w-full text-sm border mb-6">
          {" "}
          <thead className="bg-gray-100">
            {" "}
            <tr>
              {" "}
              <th className="border p-2">Kode Gejala</th>{" "}
              <th className="border p-2">Nama Gejala</th>{" "}
              <th className="border p-2">Tingkat</th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {data.map((g, i) => (
              <tr key={i}>
                {" "}
                <td className="border p-2 text-center">
                  {g.gejala.kd_gejala}
                </td>{" "}
                <td className="border p-2">{g.gejala.nama_gejala}</td>{" "}
                <td className="border p-2 text-center">
                  {" "}
                  {g.gejala.poin_gejala}{" "}
                </td>{" "}
              </tr>
            ))}{" "}
          </tbody>{" "}
        </table>{" "}
        <div className="text-center mt-10 text-gray-600 text-sm">
          {" "}
          <p>Sistem Pakar Diagnosa Stroke • {new Date().getFullYear()}</p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
