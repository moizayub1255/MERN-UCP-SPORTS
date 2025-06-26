import express from "express";
import { addGame, deleteGame } from "../controllers/gameController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import { getGames } from "../controllers/gameController.js";

const router = express.Router();

// Routes
router.get("/games", getGames);
router.post("/add-game", protect,admin,addGame);
router.delete("/delete-game/:gameId",protect,admin, deleteGame);

export default router;
