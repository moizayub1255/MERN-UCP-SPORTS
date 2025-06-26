import Points from "../models/Points.js";

// Sab teams ke points fetch karne ka function
export const getPoints = async (req, res) => {
  try {
    const points = await Points.find();
    res.json(points);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Admin ke liye points update karne ka function
export const updatePoints = async (req, res) => {
  const { points } = req.body;
  try {
    const team = await Points.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    team.points = points || team.points;
    await team.save();
    res.json({ message: "Points updated successfully", team });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
