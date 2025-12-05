import express from "express";
import {
  getPricelist,
} from "../controllers/pricelistController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getPricelist);

export default router;
