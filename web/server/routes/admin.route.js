import express from "express";
import { createAdmin, loginAdmin } from "../controllers/admin.controller.js";

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/create', createAdmin);

export default router;