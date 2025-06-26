import Game from "../models/Game.js";
import PointsTable from "../models/PointsTable.js";

// ➤ New game add karne ka function
export const addGame = async (req, res) => {
  try {
    const { name, category } = req.body;

    // ✅ Sirf same category mai duplicate check hoga
    const existingGame = await Game.findOne({ name, category });
    if (existingGame) {
      return res.status(400).json({ message: `Game already exists in ${category} category!` });
    }

    const game = new Game({ name, category });
    await game.save();

    // Jab game add ho, to points table bhi create ho
    const newPointsTable = new PointsTable({
      game: game._id,
      category,
      points: { Jaguars: 0, Warriors: 0, Hawks: 0, Gladiators: 0 },
    });
    await newPointsTable.save();

    res.status(201).json({ message: "Game added successfully", game });
  } catch (error) {
    res.status(500).json({ message: "Error adding game", error });
  }
};


// ➤ Game delete karne ka function
export const deleteGame = async (req, res) => {
  try {
    const { gameId } = req.params;
    await Game.findByIdAndDelete(gameId);
    await PointsTable.deleteMany({ game: gameId });

    res.json({ message: "Game deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting game", error });
  }
};

export const getGames = async (req, res) => {
    try {
      const { category } = req.query;
      const games = await Game.find({ category });
      res.json(games);
    } catch (error) {
      res.status(500).json({ message: "Error fetching games", error });
    }
  };
