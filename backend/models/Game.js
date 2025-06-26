import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Game ka naam (Cricket, Football, etc.)
  category: { type: String, enum: ["boys", "girls"], required: true }, // Boys ya Girls category
});

const Game = mongoose.model("Game", gameSchema);
export default Game;
