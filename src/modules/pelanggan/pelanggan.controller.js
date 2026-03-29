import * as pelangganService from "./pelanggan.service.js";
import {
  createPelangganSchema,
  updatePelangganSchema,
} from "./pelanggan.validation.js";

export const createPelanggan = async (req, res) => {
  try {
    const data = createPelangganSchema.parse(req.body);
    const result = await pelangganService.createPelanggan(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllPelanggan = async (req, res) => {
  try {
    const result = await pelangganService.getAllPelanggan();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPelangganById = async (req, res) => {
  try {
    const result = await pelangganService.getPelangganById(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePelanggan = async (req, res) => {
  try {
    const data = updatePelangganSchema.parse(req.body);
    const result = await pelangganService.updatePelanggan(req.params.id, data);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePelanggan = async (req, res) => {
  try {
    const result = await pelangganService.deletePelanggan(req.params.id);
    res.json({
      message: "Pelanggan berhasil dihapus",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};