import express from "express";
import {
  getPricelist,
  createItem,
} from "../controllers/pricelistController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getPricelist);
router.post("/", authMiddleware, createItem);

export default router;
