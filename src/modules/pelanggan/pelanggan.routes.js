import { Router } from "express";
import * as pelangganController from "./pelanggan.controller.js";

const router = Router();

router.get("/", pelangganController.getAllPelanggan);
router.get("/:id", pelangganController.getPelangganById);
router.post("/", pelangganController.createPelanggan);
router.put("/:id", pelangganController.updatePelanggan);
router.delete("/:id", pelangganController.deletePelanggan);

export default router;