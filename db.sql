CREATE TABLE pelanggan (
    id_pelanggan SERIAL PRIMARY KEY,
    nama_pelanggan VARCHAR(100) NOT NULL,
    no_hp VARCHAR(20),
    alamat TEXT
);

-- CREATE TABLE hewan (
--     id_hewan SERIAL PRIMARY KEY,
--     id_pelanggan INT NOT NULL,
--     nama_hewan VARCHAR(100) NOT NULL,
--     jenis_hewan VARCHAR(50),
--     umur INT,
--     FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id_pelanggan)
-- );

-- CREATE TABLE dokter (
--     id_dokter SERIAL PRIMARY KEY,
--     nama_dokter VARCHAR(100) NOT NULL,
--     spesialisasi VARCHAR(100)
-- );

-- CREATE TABLE layanan (
--     id_layanan SERIAL PRIMARY KEY,
--     nama_layanan VARCHAR(100) NOT NULL,
--     harga DECIMAL NOT NULL
-- );

-- CREATE TABLE reservasi (
--     id_reservasi SERIAL PRIMARY KEY,
--     id_hewan INT NOT NULL,
--     id_dokter INT NOT NULL,
--     tanggal_reservasi DATE NOT NULL,
--     keluhan TEXT,
--     FOREIGN KEY (id_hewan) REFERENCES hewan(id_hewan),
--     FOREIGN KEY (id_dokter) REFERENCES dokter(id_dokter)
-- );

-- CREATE TABLE detail_layanan (
--     id_detail SERIAL PRIMARY KEY,
--     id_reservasi INT NOT NULL,
--     id_layanan INT NOT NULL,
--     qty INT NOT NULL,
--     subtotal DECIMAL NOT NULL,
--     FOREIGN KEY (id_reservasi) REFERENCES reservasi(id_reservasi),
--     FOREIGN KEY (id_layanan) REFERENCES layanan(id_layanan)
-- );

-- CREATE TABLE transaksi (
--     id_transaksi SERIAL PRIMARY KEY,
--     id_reservasi INT NOT NULL UNIQUE,
--     total_bayar DECIMAL NOT NULL,
--     status_pembayaran VARCHAR(50) NOT NULL,
--     FOREIGN KEY (id_reservasi) REFERENCES reservasi(id_reservasi)
-- );