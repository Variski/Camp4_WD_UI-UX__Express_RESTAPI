import { db } from "../../config/db.config.js";

export const createPelanggan = async (data) => {
  const { nama_pelanggan, no_hp, alamat } = data;
  const { rows } = await db.query(
    `INSERT INTO pelanggan (nama_pelanggan, no_hp, alamat)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [nama_pelanggan, no_hp, alamat]
  );
  return rows[0];
};

export const getAllPelanggan = async () => {
  const { rows } = await db.query(
    `SELECT * FROM pelanggan ORDER BY id_pelanggan ASC`
  );
  return rows;
};

export const getPelangganById = async (id) => {
  const { rows } = await db.query(
    `SELECT * FROM pelanggan WHERE id_pelanggan = $1`,
    [id]
  );
  return rows[0];
};

export const updatePelanggan = async (id, data) => {
  const { nama_pelanggan, no_hp, alamat } = data;
  const { rows } = await db.query(
    `UPDATE pelanggan
     SET nama_pelanggan = $1, no_hp = $2, alamat = $3
     WHERE id_pelanggan = $4
     RETURNING *`,
    [nama_pelanggan, no_hp, alamat, id]
  );
  return rows[0];
};

export const deletePelanggan = async (id) => {
  const { rows } = await db.query(
    `DELETE FROM pelanggan
     WHERE id_pelanggan = $1
     RETURNING *`,
    [id]
  );
  return rows[0];
};