export function hitungDiagnosa(
  jawaban: string[],
  pengetahuan: {
    kd_penyakit: string;
    kd_gejala: string;
  }[]
) {
  const normalizedJawaban = jawaban.map((g) =>
    g.trim().toUpperCase()
  );

  const penyakitMap = new Map<
    string,
    { total: number; cocok: number }
  >();

  for (const p of pengetahuan) {
    const kdPenyakit = p.kd_penyakit.trim().toUpperCase();
    const kdGejala = p.kd_gejala.trim().toUpperCase();

    if (!penyakitMap.has(kdPenyakit)) {
      penyakitMap.set(kdPenyakit, { total: 0, cocok: 0 });
    }

    penyakitMap.get(kdPenyakit)!.total += 1;

    if (normalizedJawaban.includes(kdGejala)) {
      penyakitMap.get(kdPenyakit)!.cocok += 1;
    }
  }

  const priority: Record<string, number> = {
    H03: 3,
    H02: 2,
    H01: 1,
  };

  let hasil: string | null = null;
  let skorTerbaik = 0;

  for (const [kd, data] of penyakitMap.entries()) {
    if (data.cocok === 0) continue;

    const skor = data.cocok / data.total;

    if (
      skor > skorTerbaik ||
      (skor === skorTerbaik && priority[kd] > priority[hasil ?? ""])
    ) {
      skorTerbaik = skor;
      hasil = kd;
    }
  }

  return {
    kd_penyakit: hasil,
    jawaban: normalizedJawaban,
  };
}
