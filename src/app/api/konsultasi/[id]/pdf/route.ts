import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import puppeteerCore from "puppeteer-core";
import chromium from "@sparticuz/chromium";

import prisma from "../../../../../../lib/prisma";
function capitalizeWords(text: string) {
  return text.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {

  try {
      const { id } = await params;
          const hasilId = Number(id);
    const detail = await prisma.diagnosaDetail.findMany({
      where: {
        hasilId: hasilId,
      },
      include: {
        diagnosa: {
          include: {
            pasien: true,
          },
        },
      },
    });
    if (detail.length === 0) {
  return new NextResponse("Data tidak ditemukan", { status: 404 });
}
const pasien = detail[0].diagnosa.pasien;
const kdPenyakit = detail[0].diagnosa.kd_penyakit;
const penyakit = await prisma.penyakit.findUnique({
  where: { kd_penyakit: kdPenyakit },
});
        const hasilDenganSolusi = await Promise.all(
      detail.map(async (d) => {
        const solusi = await prisma.solusi.findMany({
          where: {
            kd_penyakit: d.diagnosa.kd_penyakit,
          },
          include: {
            penyakit: true,
          },
        });
        const gejala = await prisma.gejala.findUnique({
          where: { kd_gejala: d.kd_gejala },
        });

        return {
          ...d,
          solusi,
          gejala,
        };
      }),
    );
    const semuaSolusi = hasilDenganSolusi
      .flatMap((d) => d.solusi.map((s) => s.solusi))
      .filter((v, i, a) => a.indexOf(v) === i);
  // const baseUrl = process.env.DATABASE_URL!;
  // const res = await fetch(`${baseUrl}/api/diagnosadetail?id=${id}`, {
  //   cache: "no-store",
  // });

  // const data: any[] = await res.json();

  // if (!data.length) {
  //   return NextResponse.json({ message: "Data kosong" }, { status: 404 });
  // }

  // const pasien = data[0].diagnosa.pasien;
  // const kdPenyakit = data[0].diagnosa.kd_penyakit;
  // const penyakit = await prisma.penyakit.findUnique({
  //   where: { kd_penyakit: kdPenyakit },
  // });
  // const semuaSolusi: string[] = Array.from(
  //   new Set(data.flatMap((d) => d.solusi.map((s: any) => String(s.solusi)))),
  // );
  function formatTanggal(tanggal: string | Date) {
    if (!tanggal) return "-";

    return new Date(tanggal).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Laporan Diagnosa</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white p-10">
  <div class="max-w-[750px] mx-auto border p-10">
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold">Laporan Hasil Diagnosa</h1>
      <p class="text-gray-600">
        Sistem Pakar Deteksi Dini Stroke pada Lansia
      </p>
      <div class="border-b-2 mt-3"></div>
    </div>

    <h2 class="text-xl font-semibold mb-3">Data Pasien</h2>
    <table class="w-full text-sm mb-6">
      <tr><td class="font-semibold w-40">Nama</td><td>: ${
        pasien.nama_lengkap
      }</td></tr>
      <tr><td class="font-semibold">NIK</td><td>: ${pasien.nik}</td></tr>

            <tr><td class="font-semibold">Tanggal Lahir</td><td>: ${formatTanggal(
              pasien.tanggal_lahir,
            )}</td></tr>
      <tr><td class="font-semibold">Umur</td><td>: ${pasien.umur}</td></tr>
      <tr><td class="font-semibold">Jenis Kelamin</td><td>: ${
        pasien.jenis_kelamin
      }</td></tr>
            <tr><td class="font-semibold">Alamat</td><td>: ${
              pasien.alamat
            }</td></tr>
      <tr><td class="font-semibold">Telepon</td><td>: ${pasien.phone}</td></tr>
      <tr>
<td class="font-semibold">Penyakit</td>
<td>: Stroke ${capitalizeWords(penyakit?.nama_penyakit ?? "-")} (${
    penyakit?.kd_penyakit ?? "-"
  })</td>
      </tr>
    </table>

    <div class="border-b mb-6"></div>

    <h2 class="text-xl font-semibold mb-3">Hasil Diagnosa</h2>
    <p class="text-sm">
      <span class="font-semibold">Diagnosa Penyakit:</span>
      ${capitalizeWords(penyakit?.nama_penyakit ?? "-")}
    </p>

    <p class="font-semibold mt-2">Solusi:</p>
    <ul class="list-disc list-inside text-sm mt-1">
      ${semuaSolusi.map((s) => `<li>${s}</li>`).join("")}
    </ul>

    <div class="border-b my-6"></div>

    <h2 class="text-xl font-semibold mb-4">Gejala Yang Dialami</h2>
    <table class="w-full text-sm border">
      <thead class="bg-gray-100">
        <tr>
          <th class="border p-2">Kode</th>
          <th class="border p-2">Gejala</th>
          <th class="border p-2">Tingkat</th>
        </tr>
      </thead>
      <tbody>
        ${hasilDenganSolusi
          .map(
            (g) =>
              g.gejala
                ? `
          <tr>
            <td class="border p-2 text-center">${g.gejala.kd_gejala}</td>
            <td class="border p-2">${g.gejala.nama_gejala}</td>
            <td class="border p-2 text-center">${capitalizeWords(
              g.gejala.poin_gejala ?? "",
            )}</td>
          </tr>
        `
                : "",
          )
          .join("")}
      </tbody>
    </table>

    <p class="text-center text-sm text-gray-600 mt-10">
      Sistem Pakar Diagnosa Stroke • ${new Date().getFullYear()}
    </p>
  </div>
</body>
</html>
`;

const isProd = process.env.NODE_ENV === "production";

const browser = isProd
  ? await puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    })
  : await puppeteer.launch({
      headless: true,
    });

  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  const pdfBuffer = Buffer.from(pdf);
  const filename = `diagnosa-${pasien.nama_lengkap.replace(/\s+/g, "_")}.pdf`;
  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
  } catch (error) {
      console.error(error);
  return new NextResponse("Gagal membuat PDF", { status: 500 });
  }

}
