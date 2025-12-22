import { z } from "zod";

export const registerSchema = z.object({
  nama: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  username: z.string().min(2, { message: "Username must be at least 2 characters long" }).trim(),
  password: z
    .string()
    .min(3, { message: "Be at least 3 characters long" })
    .trim(),
});

export const loginSchema = z.object({
  username: z.string().min(2, {message: "Username must be at least 2 characters long"}).trim(),
  password: z
    .string()
    .min(3, { message: "Be at least 3 characters long" })
    .trim(),
});
export const konsultasiSchema = z.object({
  pasienId: z.string().min(1, "Pilih pasien terlebih dahulu"),
  jawaban: z.array(z.string()).optional(),
});

export const pasienSchema = z.object({
  nik: z
    .string()
    .regex(/^\d+$/, { message: "NIK hanya boleh berisi angka." })
    .length(16, { message: "NIK harus terdiri dari 16 digit." }),
  nama_lengkap: z.string().min(2, {
    message: "Nama must be at least 2 characters.",
  }),
  umur: z.coerce.number().min(1, { message: "Umur must be at least 1 digit." }),
  alamat: z.string().min(5, {
    message: "Alamat must be at least 5 characters.",
  }),
  jenis_kelamin: z.string(),
  phone: z.string().min(10, {
    message: "Phone must be at least 10 characters.",
  }),
  tanggal_lahir: z.date({
    errorMap: () => ({ message: "Tanggal Lahir is required." }),
  }),
});

export const penyakitSchema = z.object({
  kd_penyakit: z.string().min(3, {
    message: "kode penyakit must be at least 3 characters.",
  }),
  nama_penyakit: z.string().min(5, {
    message: "nama penyakit must be at least 5 characters.",
  }),
});
export const solusiSchema = z.object({
  kd_penyakit: z.string().min(3, {
    message: "kode penyakit must be at least 3 characters.",
  }),
  solusi: z.string().min(5, {
    message: "solusi must be at least 5 characters.",
  }),
});

export const gejalaSchema = z.object({
  kd_gejala: z.string().min(3, {
    message: "kode penyakit must be at least 3 characters.",
  }),
  nama_gejala: z.string().min(3, {
    message: "kode penyakit must be at least 3 characters.",
  }),
  poin_gejala: z.string(),
});


export const pengetahuanSchema = z.object({
  kd_pengetahuan: z.string().min(3, {
    message: "kode pengetahuan must be at leat 3 characters.",
  }),
  kd_gejala: z.string().min(3, {
    message: "kode gejala must be at least 3 characters.",
  }),
  kd_penyakit: z.string().min(3, {
    message: "kode penyakit must be at least 3 characters.",
  }),
});