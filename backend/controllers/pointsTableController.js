import PointsTable from "../models/PointsTable.js";
import Points from "../models/Points.js";

// Helper: Recompute overall points across all games/categories and update Points collection
const recomputeOverallPoints = async () => {
  try {
    const teamKeys = ["Jaguars", "Warriors", "Hawks", "Gladiators", "Falcons"];
    const totals = {};
    teamKeys.forEach((k) => (totals[k] = 0));

    const tables = await PointsTable.find();
    for (const tbl of tables) {
      if (!tbl.points) continue;
      teamKeys.forEach((k) => {
        const v = typeof tbl.points[k] === "number" ? tbl.points[k] : 0;
        totals[k] += v;
      });
    }

    for (const teamName of teamKeys) {
      const existing = await Points.findOne({ teamName });
      if (existing) {
        existing.points = totals[teamName];
        await existing.save();
      } else {
        await Points.create({ teamName, points: totals[teamName] });
      }
    }
  } catch (err) {
    console.error("Error recomputing overall points:", err);
  }
};

// ➤ Points update karne ka function (updates per-game points and then overall points)
export const updatePoints = async (req, res) => {
  try {
    const { gameId, category, points } = req.body;
    const cat = category ? String(category).toLowerCase() : undefined;

    // Build update object to set only the provided points, leaving others unchanged
    const updateObj = {};
    for (const [team, pts] of Object.entries(points)) {
      updateObj[`points.${team}`] = pts;
    }

    let updatedTable = await PointsTable.findOneAndUpdate(
      { game: gameId, category: cat },
      { $set: updateObj },
      { new: true, upsert: true }
    );

    // If not found (possible case mismatch), try updating by gameId only
    if (!updatedTable) {
      updatedTable = await PointsTable.findOneAndUpdate(
        { game: gameId },
        { $set: updateObj },
        { new: true, upsert: true }
      );
    }

    if (!updatedTable) {
      return res.status(404).json({ message: "Game not found in points table" });
    }

    // After updating the per-game table, recompute overall points so they stay in sync
    await recomputeOverallPoints();

    console.log("Updated per-game table:", updatedTable);

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

    console.log("Points Table Response:", pointsTable); // Debugging
    res.json(pointsTable);
  } catch (error) {
    res.status(500).json({ message: "Error fetching points table", error });
  }
};

