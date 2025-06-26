import express from "express";
import { getPoints, updatePoints } from "../controllers/pointsController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getPoints); // Sab teams ke points dekhne ke liye
router.put("/:id", protect, admin, updatePoints); // Sirf admin update kar sake

export default router;
