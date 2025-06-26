import PointsTable from "../models/PointsTable.js";

// ➤ Points update karne ka function
export const updatePoints = async (req, res) => {
  try {
    const { gameId, category, points } = req.body;

    const updatedTable = await PointsTable.findOneAndUpdate(
      { game: gameId, category },
      { points },
      { new: true }
    );

    if (!updatedTable) {
      return res.status(404).json({ message: "Game not found in points table" });
    }

    res.json({ message: "Points updated successfully", updatedTable });
  } catch (error) {
    res.status(500).json({ message: "Error updating points", error });
  }
};

// ➤ Boys aur Girls ka points table fetch karne ka function
export const getPointsTable = async (req, res) => {
  try {
    const { category } = req.query;
    const pointsTable = await PointsTable.find({ category }).populate("game");

    console.log("Points Table Response:", pointsTable);  // Debugging
    res.json(pointsTable);
  } catch (error) {
    res.status(500).json({ message: "Error fetching points table", error });
  }
};

