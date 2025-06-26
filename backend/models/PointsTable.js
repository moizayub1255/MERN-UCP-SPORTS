import mongoose from "mongoose";

const pointsTableSchema = new mongoose.Schema({
  game: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true }, // Game ka reference
  category: { type: String, enum: ["boys", "girls"], required: true }, // Boys ya Girls category
  points: {
    Jaguars: { type: Number, default: 0 },
    Warriors: { type: Number, default: 0 },
    Hawks: { type: Number, default: 0 },
    Gladiators: { type: Number, default: 0 },
    Falcons: { type: Number, default: 0 },
  },
});

const PointsTable = mongoose.model("PointsTable", pointsTableSchema);
export default PointsTable;
