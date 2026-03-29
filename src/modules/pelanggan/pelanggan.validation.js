import * as z from "zod";

export const createPelangganSchema = z.object({
  nama_pelanggan: z.string().min(3, "Nama pelanggan minimal 3 karakter"),
  no_hp: z.string().max(20).optional(),
  alamat: z.string().optional(),
});

export const updatePelangganSchema = z.object({
  nama_pelanggan: z.string().min(3, "Nama pelanggan minimal 3 karakter"),
  no_hp: z.string().max(20).optional(),
  alamat: z.string().optional(),
});