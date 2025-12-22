import prisma from "../../lib/prisma";

export async function simpanDiagnosa({
  hasilId,
  pasienId,
  kd_penyakit,
  jawaban,
}: {
  hasilId?: number;
  pasienId: number;
  kd_penyakit: string;
  jawaban: string[];
}) {
  return prisma.$transaction(async (tx) => {
    let hasil;

    if (hasilId) {
      // UPDATE
      hasil = await tx.hasil.update({
        where: { id: hasilId },
        data: { pasienId, kd_penyakit },
      });

      await tx.diagnosaDetail.deleteMany({
        where: { hasilId },
      });
    } else {
      // CREATE
      hasil = await tx.hasil.create({
        data: { pasienId, kd_penyakit },
      });
    }

    await tx.diagnosaDetail.createMany({
      data: jawaban.map((kd_gejala) => ({
        hasilId: hasil.id,
        kd_gejala,
      })),
    });

    return hasil;
  });
}
