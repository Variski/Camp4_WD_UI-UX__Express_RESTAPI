import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import { xss } from "express-xss-sanitizer";

import logger from "./middleware/logger.middleware.js";
import { testConnection } from "./config/db.config.js";

import pelangganRoutes from "./modules/pelanggan/pelanggan.routes.js";
// import hewanRoutes from "./modules/hewan/hewan.routes.js";
// import dokterRoutes from "./modules/dokter/dokter.routes.js";
// import layananRoutes from "./modules/layanan/layanan.routes.js";
// import reservasiRoutes from "./modules/reservasi/reservasi.routes.js";
// import detailLayananRoutes from "./modules/detailLayanan/detailLayanan.routes.js";
// import transaksiRoutes from "./modules/transaksi/transaksi.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(logger);

app.get("/", (req, res) => {
  res.send("API Klinik Hewan aktif");
});

app.use("/api/pelanggan", pelangganRoutes);
// app.use("/api/hewan", hewanRoutes);
// app.use("/api/dokter", dokterRoutes);
// app.use("/api/layanan", layananRoutes);
// app.use("/api/reservasi", reservasiRoutes);
// app.use("/api/detail-layanan", detailLayananRoutes);
// app.use("/api/transaksi", transaksiRoutes);

app.listen(port, async () => {
  console.log(`Server berjalan di port ${port}`);
  await testConnection();
});