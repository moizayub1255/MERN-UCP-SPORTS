import express from "express";
import { updatePoints , getPointsTable } from "../controllers/pointsTableController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Routes
router.get("/", getPointsTable);
router.put("/update-points",protect,admin, updatePoints);

export default router;
