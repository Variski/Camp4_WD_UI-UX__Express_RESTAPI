import * as pelangganRepository from "./pelanggan.repository.js";

export const createPelanggan = async (data) => {
  return await pelangganRepository.createPelanggan(data);
};

export const getAllPelanggan = async () => {
  return await pelangganRepository.getAllPelanggan();
};

export const getPelangganById = async (id) => {
  const pelanggan = await pelangganRepository.getPelangganById(id);
  if (!pelanggan) {
    throw new Error("Pelanggan tidak ditemukan");
  }
  return pelanggan;
};

export const updatePelanggan = async (id, data) => {
  const existing = await pelangganRepository.getPelangganById(id);
  if (!existing) {
    throw new Error("Pelanggan tidak ditemukan");
  }
  return await pelangganRepository.updatePelanggan(id, data);
};

export const deletePelanggan = async (id) => {
  const existing = await pelangganRepository.getPelangganById(id);
  if (!existing) {
    throw new Error("Pelanggan tidak ditemukan");
  }
  return await pelangganRepository.deletePelanggan(id);
};