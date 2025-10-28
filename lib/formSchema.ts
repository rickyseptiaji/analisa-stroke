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
