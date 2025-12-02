import express from "express";
import { loginUser, getTranslations } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", loginUser);
router.get("/translations", getTranslations);

export default router;
